import './skills.scss';

const li = value => `<li>${value}</li>`;

const Skills = () => ({
  render: props => `
    <div class="hero has-text-centered is-danger skills">
      <div class="hero-body">
        <div class="container">
          <h1 class="title has-text-black-bis">
            ${props.skillsLabel}
          </h1>
          <ul class=" has-text-white-ter">
            ${props.skills.map(skill => li(skill.label)).join([])}
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


// <div class="columns skills">
//   <div class="column is-full has-text-centered item">
//     <H1 class="title has-text-dark">${props.skillsLabel}</H1>
//     <ul class="has-text-grey">
//       ${props.skills.map(skill => li(skill.label)).join([])}
//     </ul>
//   </div>
// </div>
