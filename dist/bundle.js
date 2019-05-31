'use strict';

const Home = props => ({
  render: async () => {
    return `
      HOME PAGE!!!
    `;
  },
  afterRender: async () => {

  }
});

const Work = props => ({
  render: async () => {
    return `
      WORK PAGE!!!
    `;
  },
  afterRender: async () => {

  }
});

const Code = props => ({
  render: async () => {
    return `
      CODE PAGE!!!
    `;
  },
  afterRender: async () => {

  }
});

const Header = variables => {
  return {
    render: async () => {
      const view =  `
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="container">
          <div class="navbar-brand">
            <a class="navbar-item" href="/#/">
              André Pesci Cazetto ${variables.value}
            </a>
            <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div id="navbarBasicExample" class="navbar-menu is-active" aria-expanded="false">
            <div class="navbar-end">
              <a class="navbar-item" href="/#/">
                Home
              </a>
              <a class="navbar-item" href="/#/work">
                Work
              </a>
              <a class="navbar-item" href="/#/code">
                Code
              </a>
            </div>
          </div>
        </div>
      </nav>
      `;
      return view;
    },
    afterRender: async () => {
    },
  };
};

const Footer = props => ({
  render: async () => {
    return `
      <footer class="footer">
        <div class="content has-text-centered">
          <strong>André Pesci Cazetto - Portifolio</strong>
        </div>
      </footer>
    `;
    },
    afterRender: () => {
    },
  }
);

const UrlUtils = {
  getRequest: () => {
    let url = location.hash.slice(1).toLowerCase() || '/';
    let r = url.split("/");
    let request = {
      resource    : null,
      id          : null,
      verb        : null,
    };

    request.resource = r[1];
    request.id = r[2];
    request.verb = r[3];

    return request;
  }
};

const Site = {
  render: async (component, target, variables) => {
    target.innerHTML = await component.render();
    await component.afterRender();
  }
};

const routes = {
  '/': Home,
  '/work': Work,
  '/code': Code,
};

const router = async () => {
  const headerContainer = document.getElementById('header');
  const contentContainer = document.getElementById('content');
  const footerContainer = document.getElementById('footer');

  const request = UrlUtils.getRequest();
  const parsedURL = (request.resource ? '/' + request.resource : '/') + (request.id ? '/:id' : '') + (request.verb ? '/' + request.verb : '');
  const Content = routes[parsedURL] ? routes[parsedURL] : Error404;

  // Render Header
  Site.render(
    Header({value: 'variable value'}),
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
