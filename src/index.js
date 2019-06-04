"use strict";

import fetch from 'fetch';

import Home from './pages/home/home.js';
import Work from './pages/work/work.js';
import Code from './pages/code.js';
import Error404 from './pages/404.js'

import Header from './components/header.js';
import Footer from './components/footer.js';

import URLUtils from './utils/URLUtils.js';

import './index.scss';

const Site = {
  config: null,
  render: async (component, target, variables) => {
    target.innerHTML = await component.render(variables);
    await component.afterRender();
  }
}

const routes = {
  '/': Home,
  '/work': Work,
  '/code': Code,
};

const router = async () => {
  const headerContainer = null || document.getElementById('header');
  const contentContainer = null || document.getElementById('content');
  const footerContainer = null || document.getElementById('footer');

  const request = URLUtils.getRequest();
  const parsedURL = (request.resource ? '/' + request.resource : '/') + (request.id ? '/:id' : '') + (request.verb ? '/' + request.verb : '');
  const Content = routes[parsedURL] ? routes[parsedURL] : Error404;
  const config = Site.config;

  // Render Header
  Site.render(
    Header(),
    headerContainer,
    config
  );

  // Render Content
  Site.render(
    Content(),
    contentContainer,
    config
  );

  // Render Footer
  Site.render(
    Footer(),
    footerContainer,
    config
  );
};

const useConfig = async () => {
  const response = await fetch('site.config.json');
  const config = await response.json();
  return config;
}

const initialize = async () => {
  Site.config = await useConfig();
  router();
}

window.addEventListener('hashchange', router);
window.addEventListener('load', initialize);
