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
                <p class="subtitle ">React, AngularJS, RESTful, SASS, Webpack</p>
                <p class="">Implementation of new functionalities and improving the product using React, the site and dashboard made in AngularJS.</p>
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
                  <p class="subtitle">Jekyll, Liquid, Bootstrap, SASS</p>
                  <p class="">Documentation of Back4App made with Jekyll.</p>
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
                  <p class="">Online shopping application that facilitates donation to NGOs and social and environmental projects. Part of the value of purchases made in more than 1,000 stores and airlines is directed to the Welight partner institutions without changing the value of the product.</p>
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
                  <p class="subtitle ">React Native</p>
                  <p class="">During the first <i>Virada Sustentável do Rio de Janeiro</i>, Welight realized, in partnership with the Observatory of Slums, a hackathon with young people of all the regions of the city. The goal? Create an app that generates more mobility and collaboration among Rio residents.</p>
                </div>
              </div>
            </div>
            <div class="columns">
              <div class="column is-half">
                <div class="card-image">
                  <figure class="image">
                    <img src="assets/images/encontra-fluxo-3.png" alt="Encontra Fluxo">
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
                    <img src="assets/images/encontra-fluxo-fb.png" alt="Encontra Fluxo">
                  </figure>
                </div>
              </div>
              <div class="column is-half">
                <div class="card-image">
                  <figure class="image">
                    <img src="assets/images/encontra-fluxo-1.jpg" alt="Encontra Fluxo">
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
                <p class="">A complete ERP to manage the company Alaya Ecoturismo, made using AngularJS, SASS accessing data through a REST service.</p>
              </div>
            </div>
            </div>
            <div class="card-image">
              <figure class="image">
                <img src="assets/images/alaya.png" alt="Alaya App">
              </figure>
            </div>
          </div>

          <div class="custom-card">
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="title is-size-4">Seja Bene Site</p>
                  <p class="subtitle">HTML + CSS + JS</p>
                  <p class="">Site made using HTML CSS and Java-Script</p>
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
                  <p class="subtitle">Flash, ActionScript 3</p>
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
