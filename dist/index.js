(function (fetch) {
  'use strict';

  fetch = fetch && fetch.hasOwnProperty('default') ? fetch['default'] : fetch;

  const Presentation = () => ({
    render: props => `
    <div class="container presentation">
      <div class="columns has-text-centered">
        <div class="column left-column is-two-fifths">
          <div class="hero custom-hero is-info">
            <div class="hero-body">
              <div class="container">
                <h1 class="title p-b-sm">
                  ${props.ownerName}
                </h1>
                <h2 class="subtitle">
                  ${props.role}
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div class="column right-column">
          <div class="hero custom-hero has-background-white-ter">
            <div class="hero-body">
              <div class="container">
                <h1 class="title has-text-grey-darker p-b-sm">
                  ${props.whoAmILabel}
                </h1>
                <h2 class="subtitle has-text-grey">
                  ${props.whoAmIContent}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
      afterRender: () => {
      },
    }
  );

  const CanIHelp = () => ({
    render: props => `
    <div class="hero-body can-i-help">
      <div class="container has-text-centered">
        <h1 class="title has-text-grey-darker p-b-md">
          ${props.howCanIHelpLabel}
        </h1>
        <h2 class="subtitle has-text-grey">
          ${props.howCanIHelpContent}
        </h2>
      </div>
    </div>
  `,
      afterRender: () => {
      },
    }
  );


  // <div class="can-i-help columns">
  //   <div class="column is-full has-text-centered item">
  //     <H1 class="title has-text-dark">${props.howCanIHelpLabel}</H1>
  //     <p class="subtitle has-text-grey">
  //       ${props.howCanIHelpContent}
  //     </p>
  //   </div>
  // </div>

  const levelBar = () => `<span class="level-bar"></span>`;

  const listBars = n => [...Array(n).keys()]
    .map(item => levelBar())
    .join([]);

  const LevelDisplay = () => ({
    render: props => `
    <div class="level-display">
      <div class="columns">
        <div class="column is-half has-text-right">
          <span class="has-text-white">${props.label}</span>
        </div>
        <div class="column is-half has-text-left">


        <p class="subtitle">
           ${listBars(+props.level)}<span class="off">${listBars((props.max) - (+props.level))}</span>
        </p>


        </div>
      </div>

    </div>
  `,
      afterRender: () => {
      },
    }
  );

  const skillItem = ({ label, level }) => `<li>
  ${LevelDisplay().render({ label, level, max: 10 })}
</li>`;

  const Skills = () => ({
    render: props => `
    <div class="hero has-text-centered is-danger skills">
      <div class="hero-body">
        <div class="container">
          <h1 class="title has-text-black-bis">
            ${props.skillsLabel}
          </h1>
          <ul class=" has-text-white-ter">
            ${props.skills.map(skill => skillItem(skill)).join([], props)}
          </ul>
        </div>
      </div>
    </div>
  `,
      afterRender: () => {
      },
    }
  );


  // <div class="columns skills">
  //   <div class="column is-full has-text-centered item">
  //     <H1 class="title has-text-dark">${props.skillsLabel}</H1>
  //     <ul class="has-text-grey">
  //       ${props.skills.map(skill => li(skill.label)).join([])}
  //     </ul>
  //   </div>
  // </div>

  const Resume = () => ({
    render: props => `
    <div class="hero has-text-centered skills">
      <div class="hero-body">
        <div class="container">
          <h1 class="title has-text-grey-darker p-b-md">
            Download My Resume
          <h1>
          <a href="assets/pdf/Resume-AndréPesciCazetto.pdf" target="_blank" class="icon is-large has-text-black m-l-md" m-r-md>
            <i class="fas fa-file-alt fa-3x"></i>
          </a>
        </div>
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
  ${Resume().render(props)}
</section>
`);

  const HTTPUtils = {
    asyncFetch: async url => {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    }
  };

  const Home = () => ({
    render: async props => {
      return generateHTML(props);
    },
    afterRender: async () => {}
  });

  const Work = () => ({
    render: async props => {
      return `
      <div class="work">
        <div class="container has-text-right">

        <div class="custom-card">
          <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-size-4">Back4App</p>
              <p class="subtitle ">React Web App</p>
              <p class="">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
            </div>
          </div>
          </div>
          <div class="card-image">
            <figure class="image is-2by1">
              <img src="assets/images/back4app.png" alt="Encontra Fluxo">
            </figure>
          </div>
        </div>

        <div class="custom-card">
          <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-size-4">Alaya Web APP</p>
              <p class="subtitle ">AngularJS Web App</p>
              <p class="">A complete ERP.</p>
            </div>
          </div>
          </div>
          <div class="card-image">
            <figure class="image is-2by1">
              <img src="assets/images/alaya-1.png" alt="Alaya App">
            </figure>
          </div>
        </div>

        <div class="custom-card">
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-size-4">Back4App Docs</p>
                <p class="subtitle">React Project bla bla</p>
                <p class="">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
              </div>
            </div>
          </div>
          <div class="card-image">
            <figure class="image is-2by1">
              <img src="assets/images/back4app-docs.png" alt="Encontra Fluxo">
            </figure>
          </div>
        </div>

        <div class="custom-card">
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-size-4">Lens PWA</p>
                <p class="subtitle">React, GraphQL, React Hooks / React Context state management</p>
                <p class="">A Progressive Web App to share, vote and filter, points of view.</p>
              </div>
            </div>
          </div>
          <div class="card-image">

            <figure class="image is-2by1">
              <img src="assets/images/lens-1.png" alt="Lens PWA">
            </figure>

            <figure class="image is-2by1">
              <img src="assets/images/lens-2.png" alt="Lens PWA">
            </figure>

            <figure class="image is-2by1">
              <img src="assets/images/lens-3.png" alt="Lens PWA">
            </figure>
          </div>
        </div>

        <div class="custom-card">
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-size-4">Encontra Fluxo</p>
                <p class="subtitle">React Native Project bla bla</p>
                <p class="">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
              </div>
            </div>
          </div>
          <div class="card-image">
            <figure class="image is-2by1">
              <img src="assets/images/encontrafluxo-2.jpg" alt="Encontra Fluxo">
            </figure>
          </div>
          <div class="card-image">
            <figure class="image is-2by1">
              <img src="assets/images/encontrafluxo-1.jpg" alt="Encontra Fluxo">
            </figure>
          </div>
          <div class="card-image">
            <figure class="image is-2by1">
              <img src="assets/images/encontrafluxo-3.jpg" alt="Encontra Fluxo">
            </figure>
          </div>
        </div>

        <div class="custom-card">
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-size-4">Seja Bene Site</p>
                <p class="subtitle">HTML + CSS + JS</p>
                <p class="">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
              </div>
            </div>
          </div>
          <div class="card-image">
            <figure class="image is-2by1">
              <img src="assets/images/sejabene-1.png" alt="SejaBene">
            </figure>

            <figure class="image is-2by1">
              <img src="assets/images/sejabene-2.png" alt="SejaBene">
            </figure>

            <figure class="image is-2by1">
              <img src="assets/images/sejabene-3.png" alt="SejaBene">
            </figure>

            <figure class="image is-2by1">
              <img src="assets/images/sejabene-4.png" alt="SejaBene">
            </figure>
          </div>
        </div>

      </div>
    `;
    },
    afterRender: async () => {
    }

  });

  const Code = () => ({
    render: async props => {
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
      render: async props => {
        const view =  `
      <div class="container header">
        <nav class="navbar" role="navigation" aria-label="main navigation">
          <div class="navbar-brand">
            <a class="navbar-item" href="${props.siteUrl}">
              <span class="icon">
                <i class="fas fa-copyright"></i>
              </span>&nbsp;${props.brandName || props.ownerName}
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
                <span class="icon p-r-sm p-l-sm">
                  <i class="fas fa-coffee" data-fa-transform="rotate-352"></i>
                </span>&nbsp;
                Home
              </a>
              <a class="navbar-item" href="/#/work">
                <span class="icon p-r-sm p-l-sm">
                  <i class="fas fa-puzzle-piece" data-fa-transform="rotate-8"></i>
                </span>&nbsp;
                Work
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

  const Social = () => ({
    render: props => `
    <div class="social hero ">
      <div class="hero-body">
        <div class="container">
          <a href="mailto:${props.email}" target="_self" class="icon is-large has-text-black m-l-md" m-r-md>
            <i class="fas fa-at fa-3x"></i>
          </a>
          <a href="https://www.linkedin.com/in/andrepescicazetto/" target="_blank" class="icon is-large has-text-black m-l-md" m-r-md>
            <i class="fab fa-linkedin fa-3x"></i>
          </a>
          <a href="https://github.com/cazetto" target="_blank" class="icon is-large has-text-black m-l-md" m-r-md>
            <i class="fab fa-github-alt fa-3x"></i>
          </a>
        </div>
      </div>
    </div>
  `,
      afterRender: () => {
      },
    }
  );

  const Footer = () => ({
    render: async props => {
      return `
      <footer class="footer">
        <div class="content has-text-centered">
          <strong>${props.ownerName} - ${props.appName}</strong>
          ${Social().render(props)}
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
    '/code': Code,
  };

  const router = async () => {
    const headerContainer = document.getElementById('header');
    const contentContainer = document.getElementById('content');
    const footerContainer = document.getElementById('footer');

    const request = UrlUtils.getRequest();
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

}(fetch));
