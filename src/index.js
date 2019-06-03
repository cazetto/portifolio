"use strict";

import Home from './pages/home/home.js';
import Work from './pages/work.js';
import Code from './pages/code.js';
import Error404 from './pages/404.js'

import Header from './components/header.js';
import Footer from './components/footer.js';

import URLUtils from './utils/URLUtils.js';

const Site = {
  render: async (component, target, variables) => {
    target.innerHTML = await component.render();
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
  const Content = routes[parsedURL] ? routes[parsedURL] : Error404

  // Render Header
  Site.render(
    Header({value: 'variable'}),
    headerContainer
  );

  // Render Content
  Site.render(
    Content(),
    contentContainer
  );

  // Render Footer
  Site.render(
    Footer(),
    footerContainer
  );
};


window.addEventListener('hashchange', router);
window.addEventListener('load', router);
