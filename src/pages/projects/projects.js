import '../work/work.scss';

const Projects = () => ({
  render: async props => {
    return `
      <div class="work">
        <div class="container has-text-right">

          <div class="custom-card">
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="title is-size-4">Lens PWA</p>
                  <p class="subtitle">React, GraphQL, React Hooks / React Context state management</p>
                  <p class="">Made for opinion leaders, Lens is a Progressive Web App to share, debate, vote and filter, points of view by reactions.</p>
                </div>
              </div>
            </div>
            <div class="card-image">

              <figure class="image">
                <img src="assets/images/lens-1.png" alt="Lens PWA">
              </figure>

            </div>
          </div>

        </div>
      </div>
    `;
  },
  afterRender: async () => {
  }

});

export default Projects;
