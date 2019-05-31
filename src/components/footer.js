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

export default Footer;
