import './canIHelp.scss';

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

export default CanIHelp;


// <div class="can-i-help columns">
//   <div class="column is-full has-text-centered item">
//     <H1 class="title has-text-dark">${props.howCanIHelpLabel}</H1>
//     <p class="subtitle has-text-grey">
//       ${props.howCanIHelpContent}
//     </p>
//   </div>
// </div>
