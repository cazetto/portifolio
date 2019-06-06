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
              <figure class="image">
                <img src="assets/images/back4app.png" alt="">
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
              <figure class="image">
                <img src="assets/images/back4app-docs.png" alt="">
              </figure>
            </div>
          </div>

          <div class="custom-card">
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="title is-size-4">Welight App</p>
                  <p class="subtitle">React Native</p>
                  <p class="">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                </div>
              </div>
            </div>
            <div class="card-image">
              <figure class="image">
                <img src="assets/images/welight-app.png" alt="SejaBene">
              </figure>
            </div>
          </div>

          <div class="custom-card">
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="title is-size-4">Encontra Fluxo</p>
                  <p class="subtitle ">A React Native App at Welight Hackathon</p>
                  <p class="">During the first Virada Sustentável do Rio de Janeiro, Welight realized, in partnership with the Observatory of Slums, a hackathon with young people of all the regions of the city. The goal? Create an app that generates more mobility and collaboration among Rio residents.</p>
                </div>
              </div>
            </div>
            <div class="columns">
              <div class="column is-half">
                <div class="card-image">
                  <figure class="image">
                    <img src="assets/images/encontra-fluxo-3.jpg" alt="Encontra Fluxo">
                  </figure>
                </div>
              </div>
              <div class="column is-half">
                <div class="card-image">
                  <figure class="image">
                    <img src="assets/images/encontra-fluxo-2.jpg" alt="Encontra Fluxo">
                  </figure>
                </div>
              </div>
            </div>
            <div class="columns">
              <div class="column is-half">
                <div class="card-image">
                  <figure class="image">
                    <img src="assets/images/encontra-fluxo-1.jpg" alt="Encontra Fluxo">
                  </figure>
                </div>
              </div>
              <div class="column is-half">
                <div class="card-image">
                  <figure class="image">
                    <img src="assets/images/encontra-fluxo.png" alt="Encontra Fluxo">
                  </figure>
                </div>
              </div>
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
              <figure class="image">
                <img src="assets/images/alaya-1.png" alt="Alaya App">
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
              <figure class="image">
                <img src="assets/images/sejabene.png" alt="SejaBene">
              </figure>
            </div>
          </div>

          <div class="custom-card">
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="title is-size-4">Clube Pharmaton</p>
                  <p class="subtitle">Lorem ipsum dolor sit amet</p>
                  <p class="">Pharmaton Club was a simple, functional and refined way to make people feel better. As well as does Pharmaton itself, it helped users to keep your vitality and reduce daily stress. With an incredible interactive infographic, it asked everyone how they were, compared the result with the avarage and finally gave illustred suggestions for them to get a better life</p>
                </div>
              </div>
            </div>
            <div class="card-image">
              <figure class="image">
                <img src="assets/images/pharmaton.png" alt="SejaBene">
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


// <div class="custom-card">
//   <div class="card-content">
//     <div class="media">
//       <div class="media-content">
//         <p class="title is-size-4">Lens PWA</p>
//         <p class="subtitle">React, GraphQL, React Hooks / React Context state management</p>
//         <p class="">A Progressive Web App to share, vote and filter, points of view.</p>
//       </div>
//     </div>
//   </div>
//   <div class="card-image">
//
//     <figure class="image">
//       <img src="assets/images/lens-1.png" alt="Lens PWA">
//     </figure>
//
//     <figure class="image">
//       <img src="assets/images/lens-2.png" alt="Lens PWA">
//     </figure>
//
//     <figure class="image">
//       <img src="assets/images/lens-3.png" alt="Lens PWA">
//     </figure>
//   </div>
// </div>
