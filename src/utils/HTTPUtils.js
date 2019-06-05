import fetch from 'fetch';

const HTTPUtils = {
  asyncFetch: async url => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
};

export default HTTPUtils;
