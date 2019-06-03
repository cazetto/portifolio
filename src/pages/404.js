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

export default Error404;
