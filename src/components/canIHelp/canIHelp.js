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

export default CanIHelp;
