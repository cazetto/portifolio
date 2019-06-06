import './level-display.scss';


const levelBar = () => `<span class="level-bar"></span>`;

const listBars = n => [...Array(n).keys()]
  .map(item => levelBar())
  .join([]);

const LevelDisplay = () => ({
  render: props => `
    <div class="level-display">
      <div class="columns">
        <div class="column is-half has-text-right">
          <span class="has-text-white">${props.label}</span>
        </div>
        <div class="column is-half has-text-left">
          <p class="subtitle">
             ${listBars(+props.level)}<span class="off">${listBars((props.max) - (+props.level))}</span>
          </p>
        </div>
      </div>

    </div>
  `,
    afterRender: () => {
    },
  }
);

export default LevelDisplay;
