import generateHTML from './home-html.js';
import './home.scss';
import HTTPUtils from '../../utils/HTTPUtils';
import fetch from 'fetch';

const Home = props => ({
  render: async () => {
    const response = await fetch('site.config.json');
    const props = await response.json();
    return generateHTML(props);
  },
  afterRender: async () => {}
});

export default Home;
