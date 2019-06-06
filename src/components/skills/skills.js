import './skills.scss';

import LevelDisplay from '../level-display/level-display.js';

const skillItem = ({ label, level }) => `<li>
  ${LevelDisplay().render({ label, level, max: 10 })}
</li>`;

const Skills = () => ({
  render: props => `
    <div class="hero has-text-centered is-danger skills">
      <div class="hero-body">
        <div class="container">
          <h1 class="title has-text-black-bis">
            ${props.skillsLabel}
          </h1>
          <ul class=" has-text-white-ter">
            ${props.skills.map(skill => skillItem(skill)).join([], props)}
          </ul>
        </div>
      </div>
    </div>
  `,
    afterRender: () => {
    },
  }
);

export default Skills;
