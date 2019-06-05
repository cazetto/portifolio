import './footer.scss';
import Social from '../social/social.js';

const Footer = () => ({
  render: async props => {
    return `
      <footer class="footer">
        <div class="content has-text-centered">
          <strong>${props.ownerName} - ${props.appName}</strong>
          ${Social().render(props)}
        </div>
      </footer>
    `;
    },
    afterRender: () => {
    },
  }
);

export default Footer;
