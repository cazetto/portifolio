import './resume.scss';

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

export default Resume;
