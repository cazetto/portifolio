"use strict";

import fetch from 'fetch';

import Home from './pages/home/home.js';
import Work from './pages/work/work.js';
import Projects from './pages/projects/projects.js';
import Error404 from './pages/404.js'

import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';

import URLUtils from './utils/URLUtils.js';
import HTTPUtils from './utils/HTTPUtils.js';

import './index.scss';

const Site = {
  config: null,
  render: async (component, target, variables) => {
    target.innerHTML = await component.render(variables);
    await component.afterRender();
  }
};

const initialize = async () => {
  Site.config = await HTTPUtils.asyncFetch('site.config.json');
  router();
};

const routes = {
  '/': Home,
  '/work': Work,
  '/projects': Projects,
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

window.addEventListener('hashchange', router);
window.addEventListener('load', initialize);
