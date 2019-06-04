const Contact = () => ({
  render: props => `
    <div class="hero custom-hero has-text-centered">
      <div class="hero-body">
        <div class="container">
          <h1 class="title p-b-sm">
            ${props.contactMeLabel}
          </h1>
          <spam class="subtitle">
            <a class="has-text-info" href="mailto:${props.email}">${props.email}</a>
          </spam>
        </div>
      </div>
    </div>
  `,
    afterRender: () => {
    },
  }
);

export default Contact;

// <div class="columns">
//   <div class="column has-text-centered">
//     <H1 class="title has-text-dark">${props.contactMeLabel}</H1>
//     <p class="subtitle has-text-grey">
//       <a href="mailto:${props.email}">${props.email}</a>
//     </p>
//   </div>
// </div>
