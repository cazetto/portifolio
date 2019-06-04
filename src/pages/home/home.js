import generateHTML from './home-html.js';
import HTTPUtils from '../../utils/HTTPUtils';
import fetch from 'fetch';
import style from './home.scss';

const Home = () => ({
  render: async props => {
    return generateHTML(props);
  },
  afterRender: async () => {}
});

export default Home;
