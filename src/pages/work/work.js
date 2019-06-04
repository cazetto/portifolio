import './work.scss';

const Work = () => ({
  render: async props => {
    return `
      <div class="work">
        <div class="container has-text-right">

        <div class="custom-card">
          <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-size-4">Back4App</p>
              <p class="subtitle ">React Web App</p>
              <p class="">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
            </div>
          </div>
          </div>
          <div class="card-image">
            <figure class="image is-2by1">
              <img src="assets/images/back4app.png" alt="Encontra Fluxo">
            </figure>
          </div>
        </div>

        <div class="custom-card">
          <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-size-4">Alaya Web APP</p>
              <p class="subtitle ">AngularJS Web App</p>
              <p class="">A complete ERP.</p>
            </div>
          </div>
          </div>
          <div class="card-image">
            <figure class="image is-2by1">
              <img src="assets/images/alaya-1.png" alt="Alaya App">
            </figure>
          </div>
        </div>

        <div class="custom-card">
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-size-4">Back4App Docs</p>
                <p class="subtitle">React Project bla bla</p>
                <p class="">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
              </div>
            </div>
          </div>
          <div class="card-image">
            <figure class="image is-2by1">
              <img src="assets/images/back4app-docs.png" alt="Encontra Fluxo">
            </figure>
          </div>
        </div>

        <div class="custom-card">
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-size-4">Lens PWA</p>
                <p class="subtitle">React, GraphQL, React Hooks / React Context state management</p>
                <p class="">A Progressive Web App to share, vote and filter, points of view.</p>
              </div>
            </div>
          </div>
          <div class="card-image">

            <figure class="image is-2by1">
              <img src="assets/images/lens-1.png" alt="Lens PWA">
            </figure>

            <figure class="image is-2by1">
              <img src="assets/images/lens-2.png" alt="Lens PWA">
            </figure>

            <figure class="image is-2by1">
              <img src="assets/images/lens-3.png" alt="Lens PWA">
            </figure>
          </div>
        </div>

        <div class="custom-card">
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-size-4">Encontra Fluxo</p>
                <p class="subtitle">React Native Project bla bla</p>
                <p class="">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
              </div>
            </div>
          </div>
          <div class="card-image">
            <figure class="image is-2by1">
              <img src="assets/images/encontrafluxo-2.jpg" alt="Encontra Fluxo">
            </figure>
          </div>
          <div class="card-image">
            <figure class="image is-2by1">
              <img src="assets/images/encontrafluxo-1.jpg" alt="Encontra Fluxo">
            </figure>
          </div>
          <div class="card-image">
            <figure class="image is-2by1">
              <img src="assets/images/encontrafluxo-3.jpg" alt="Encontra Fluxo">
            </figure>
          </div>
        </div>

        <div class="custom-card">
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-size-4">Seja Bene Site</p>
                <p class="subtitle">HTML + CSS + JS</p>
                <p class="">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
              </div>
            </div>
          </div>
          <div class="card-image">
            <figure class="image is-2by1">
              <img src="assets/images/sejabene-1.png" alt="SejaBene">
            </figure>

            <figure class="image is-2by1">
              <img src="assets/images/sejabene-2.png" alt="SejaBene">
            </figure>

            <figure class="image is-2by1">
              <img src="assets/images/sejabene-3.png" alt="SejaBene">
            </figure>

            <figure class="image is-2by1">
              <img src="assets/images/sejabene-4.png" alt="SejaBene">
            </figure>
          </div>
        </div>

      </div>
    `;
  },
  afterRender: async () => {
  }

});

export default Work;
