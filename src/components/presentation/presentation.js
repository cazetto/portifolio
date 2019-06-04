import style from './presentation.scss';

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

export default Presentation;
