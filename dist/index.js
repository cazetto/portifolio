(function (fetch) {
  'use strict';

  fetch = fetch && fetch.hasOwnProperty('default') ? fetch['default'] : fetch;

  const Presentation = () => ({
    render: props => `
    <div class="columns">
      <div class="column is-two-fifths has-text-centered col col-blue">
        <H1 class="title has-text-white-ter">${props.ownerName}</H1>
        <H2 class="subtitle has-text-grey-lighter">${props.role}</H2>
      </div>
      <div class="column col has-text-centered col-pink">
        <H1 class="title has-text-white-ter">${props.whoAmILabel}</H1>
        <p class="subtitle has-text-grey-lighter">
          ${props.whoAmIContent}
        </p>
      </div>
    </div>
  `,
      afterRender: () => {
      },
    }
  );

  const CanIHelp = () => ({
    render: props => `
    <div class="columns">
      <div class="column is-full has-text-centered">
        <H1 class="title has-text-dark">${props.howCanIHelpLabel}</H1>
        <p class="subtitle has-text-grey">
          ${props.howCanIHelpContent}
        </p>
      </div>
    </div>
  `,
      afterRender: () => {
      },
    }
  );

  const li = value => `<li>${value}</li>`;
  const Skills = () => ({
    render: props => `
    <div class="columns">
      <div class="column is-full has-text-centered">
        <H1 class="title has-text-dark">${props.skillsLabel}</H1>
        <p class="subtitle has-text-grey">
          <ul>
            ${props.skills.map(skill => li(skill.label)).join([])}
          </ul>
        </p>
      </div>
    </div>
  `,
      afterRender: () => {
      },
    }
  );

  const Contact = () => ({
    render: props => `
    <div class="columns">
      <div class="column has-text-centered">
        <H1 class="title has-text-dark">${props.contactMeLabel}</H1>
        <p class="subtitle has-text-grey">
          <a href="mailto:${props.email}">${props.email}</a>
        </p>
      </div>
    </div>
  `,
      afterRender: () => {
      },
    }
  );

  const generateHTML = props => (`
<section class="home container">
  ${Presentation().render(props)}
  ${CanIHelp().render(props)}
  ${Skills().render(props)}
  ${Contact().render(props)}
</section>
`);

  const Home = props => ({
    render: async () => {
      const response = await fetch('site.config.json');
      const props = await response.json();
      return generateHTML(props);
    },
    afterRender: async () => {}
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

  const Error404 = props => ({
    render: async () => {
      return `
      <div>
        404 NOT FOUND!!!
      </div>
    `;
    },
    afterRender: async () => {

    }
  });

  const Header = variables => {
    return {
      render: async () => {
        const view =  `
      <div class="container">
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
              <a class="navbar-item" href="/#/">
                KzT.to
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

        </nav>
      </div>
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

}(fetch));
