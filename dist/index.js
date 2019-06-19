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
      <div class="cols">
        <div class="col has-text-right">
          <span class="has-text-white">${props.label}</span>
        </div>
        <div class="col has-text-left">
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
          <ul class=" has-text-white-ter has-text-centered">
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

  const Resume = () => ({
    render: props => `
    <div class="hero has-text-centered skills">
      <div class="hero-body">
        <div class="container">
          <h1 class="title has-text-grey-darker p-b-md">
            Download My Resume
          <h1>
          <a href="https://drive.google.com/file/d/1DGVKcHge1GuIng1RSmLFraHpnTVrgEEi/view?usp=sharing" target="_blank" class="icon is-large has-text-black m-l-md" m-r-md>
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
                <p class="subtitle ">React, AngularJS, RESTful, SASS, Webpack</p>
                <p class="">Implementation of new functionalities and improving the product using React, the site and dashboard made in AngularJS.</p>
              </div>
            </div>
            </div>
            <div class="card-image">
              <figure class="image">
                <img src="assets/images/back4app.png" alt="">
              </figure>
            </div>
          </div>

          <div class="custom-card">
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="title is-size-4">Back4App Docs</p>
                  <p class="subtitle">Jekyll, Liquid, Bootstrap, SASS</p>
                  <p class="">Documentation of Back4App made with Jekyll.</p>
                </div>
              </div>
            </div>
            <div class="card-image">
              <figure class="image">
                <img src="assets/images/back4app-docs.png" alt="">
              </figure>
            </div>
          </div>

          <div class="custom-card">
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="title is-size-4">Welight App</p>
                  <p class="subtitle">React Native</p>
                  <p class="">Online shopping application that facilitates donation to NGOs and social and environmental projects. Part of the value of purchases made in more than 1,000 stores and airlines is directed to the Welight partner institutions without changing the value of the product.</p>
                </div>
              </div>
            </div>
            <div class="card-image">
              <figure class="image">
                <img src="assets/images/welight-app.png" alt="SejaBene">
              </figure>
            </div>
          </div>

          <div class="custom-card">
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="title is-size-4">Encontra Fluxo</p>
                  <p class="subtitle ">React Native</p>
                  <p class="">During the first <i>Virada Sustentável do Rio de Janeiro</i>, Welight realized, in partnership with the Observatory of Slums, a hackathon with young people of all the regions of the city. The goal? Create an app that generates more mobility and collaboration among Rio residents.</p>
                </div>
              </div>
            </div>
            <div class="columns">
              <div class="column is-half">
                <div class="card-image">
                  <figure class="image">
                    <img src="assets/images/encontra-fluxo-3.png" alt="Encontra Fluxo">
                  </figure>
                </div>
              </div>
              <div class="column is-half">
                <div class="card-image">
                  <figure class="image">
                    <img src="assets/images/encontra-fluxo-2.jpg" alt="Encontra Fluxo">
                  </figure>
                </div>
              </div>
            </div>
            <div class="columns">
              <div class="column is-half">
                <div class="card-image">
                  <figure class="image">
                    <img src="assets/images/encontra-fluxo-fb.png" alt="Encontra Fluxo">
                  </figure>
                </div>
              </div>
              <div class="column is-half">
                <div class="card-image">
                  <figure class="image">
                    <img src="assets/images/encontra-fluxo-1.jpg" alt="Encontra Fluxo">
                  </figure>
                </div>
              </div>
            </div>
          </div>

          <div class="custom-card">
            <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-size-4">Alaya Web APP</p>
                <p class="subtitle ">AngularJS Web App</p>
                <p class="">A complete ERP to manage the company Alaya Ecoturismo, made using AngularJS, SASS accessing data through a REST service.</p>
              </div>
            </div>
            </div>
            <div class="card-image">
              <figure class="image">
                <img src="assets/images/alaya.png" alt="Alaya App">
              </figure>
            </div>
          </div>

          <div class="custom-card">
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="title is-size-4">Seja Bene Site</p>
                  <p class="subtitle">HTML + CSS + JS</p>
                  <p class="">Site made using HTML CSS and Java-Script</p>
                </div>
              </div>
            </div>
            <div class="card-image">
              <figure class="image">
                <img src="assets/images/sejabene.png" alt="SejaBene">
              </figure>
            </div>
          </div>

          <div class="custom-card">
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="title is-size-4">Relatório de Sustentabilidade Copersucar</p>
                  <p class="subtitle">AngularJS + SCSS</p>
                  <p class="">A static site made with AngularJS and SCSS</p>
                </div>
              </div>
            </div>
            <div class="card-image">
              <figure class="image">
                <img src="assets/images/copersucar.png" alt="SejaBene">
              </figure>
            </div>
          </div>

          <div class="custom-card">
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="title is-size-4">Clube Pharmaton</p>
                  <p class="subtitle">Flash, ActionScript 3</p>
                  <p class="">Pharmaton Club was a simple, functional and refined way to make people feel better. As well as does Pharmaton itself, it helped users to keep your vitality and reduce daily stress. With an incredible interactive infographic, it asked everyone how they were, compared the result with the avarage and finally gave illustred suggestions for them to get a better life</p>
                </div>
              </div>
            </div>
            <div class="card-image">
              <figure class="image">
                <img src="assets/images/pharmaton.png" alt="SejaBene">
              </figure>
            </div>
          </div>

      </div>
    `;
    },
    afterRender: async () => {
    }

  });

  const Projects = () => ({
    render: async props => {
      return `
      <div class="work">
        <div class="container has-text-right">

          <div class="custom-card">
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="title is-size-4">Lens PWA</p>
                  <p class="subtitle">React, GraphQL, React Hooks / React Context state management</p>
                  <p class="">Made for opinion leaders, Lens is a Progressive Web App to share, debate, vote and filter, points of view by reactions.</p>
                </div>
              </div>
            </div>
            <div class="card-image">

              <figure class="image">
                <img src="assets/images/lens-1.png" alt="Lens PWA">
              </figure>

            </div>
          </div>

        </div>
      </div>
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
                  <i class="fas fa-laptop" data-fa-transform="rotate-8"></i>
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
        let burger = document.querySelector('.burger');
        let burgerHandleClick = () => {
          navbarMenu.style.display = (navbarMenu.style.display === 'block') ? 'none' : 'block';
        };
        burger.addEventListener('click', burgerHandleClick);
        let navbarMenu = document.querySelector('.navbar-menu');
        let navBarMenuDisplayStyle = navbarMenu.style.display;
        let setDisplayStyle = () => {
          console.log('', window.innerWidth);
          navbarMenu.style.display = window.innerWidth < 1024 ? 'none' : navBarMenuDisplayStyle;
        };
        setDisplayStyle();
        window.onresize = () => setDisplayStyle();
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
    '/projects': Projects,
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
