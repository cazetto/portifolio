(function () {
  'use strict';

  const html = `
<section class="home container">
  <div class="columns">
    <div class="column is-two-fifths has-text-centered col col-blue">
      <H1 class="title has-text-white-ter">André Pesci Cazetto</H1>
      <H2 class="subtitle has-text-grey-lighter">Front End Developer</H2>
    </div>
    <div class="column col has-text-centered col-pink">
      <H1 class="title has-text-white-ter">Who I am?</H1>
      <p class="subtitle has-text-grey-lighter">
        Ooops, I am a Full Stack Developer...
        I have developed for about 12 years, with a strong background in Front End but since JavaScript is in Node.js too, I can see it more fun.
      </p>
    </div>
  </div>

  <div class="columns">
    <div class="column is-full has-text-centered">
      <br><br>
      <H1 class="title has-text-dark">How Can I Help?</H1>
      <p class="subtitle has-text-grey">
        <br>
        <br>
        Extensive knowledge in web development, especially for SPAs, PWAs and Mobile Hybrid Applications using modern JavaScript technologies like React and React Native, GraphQL, Node.js on server-side.
Knowledge in functional programming, prototype-based programming and object-oriented programming in JavaScript, SOLID principles and best practices.
The ability of design, develop, test, deploy, operate and improve applications based in Javascript.
        <br><br><br><br>
      </p>
    </div>
  </div>

  <div class="columns">

    <div class="column is-full has-text-centered col-yellow">
      <br><br>
      <H1 class="title has-text-dark">My Skills?</H1>
      <p class="subtitle has-text-grey">
        <br>
        <br>
        <ul>
          <li>HTML (JSX)</li>
          <li>CSS (Pre-Processors and Post-Processors, JSS, Styled Components)</li>
          <li>JavaScript (ES6+)</li>
          <li>React</li>
          <li>Node.js</li>
          <li>GraphQL / Apollo / Prisma</li>
          <li>RESTful APIs</li>
          <li>BDD/TDD</li>
          <li>DevOps (Unix, GIT, Nginx, Docker, CI)</li>
          <li>Tooling (NPM/Yarn, Webpack, Babel)</li>
        </ul>
        <br><br><br><br><br>
      </p>
    </div>

  </div>

  <div class="columns">
    <div class="column has-text-centered">
      <br><br>
      <H1 class="title has-text-dark">Contact Me</H1>
      <p class="subtitle has-text-grey">
        <br>
        <br>
        <a href="mailto:cazetto.andre@gmail.com">cazetto.andre@gmail.com</a>
        <br><br><br><br><br>
      </p>
    </div>
  </div>
</section>
`;

  const Home = props => ({
    render: async () => html,
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

  const Header = variables => {
    return {
      render: async () => {
        const view =  `
      <div class="container">
        <nav class="navbar" role="navigation" aria-label="main navigation">

            <div class="navbar-brand">
              <a class="navbar-item" href="/#/">
                CSzTTo
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

}());
