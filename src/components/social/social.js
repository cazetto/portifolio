import './social.scss';

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

export default Social;
