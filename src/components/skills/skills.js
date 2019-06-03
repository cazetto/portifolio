const li = value => `<li>${value}</li>`;
const Skills = () => ({
  render: props => `
    <div class="columns">
      <div class="column is-full has-text-centered">
        <H1 class="title has-text-dark">${props.skillsLabel}</H1>
        <p class="subtitle has-text-grey">
          <ul>
            ${props.skills.map(skill => li(skill.label)).join([])}
          </ul>
        </p>
      </div>
    </div>
  `,
    afterRender: () => {
    },
  }
);

export default Skills;
