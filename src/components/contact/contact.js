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

export default Contact;
