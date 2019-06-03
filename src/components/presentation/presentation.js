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

export default Presentation;
