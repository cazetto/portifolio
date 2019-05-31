import html from './home-html.js';
import './home.scss';

const Home = props => ({
  render: async () => html,
  afterRender: async () => {}
});

export default Home;
