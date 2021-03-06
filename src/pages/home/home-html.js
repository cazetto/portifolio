import Presentation from '../../components/presentation/presentation.js';
import CanIHelp from '../../components/canIHelp/canIHelp.js';
import Skills from '../../components/skills/skills.js';
import Resume from '../../components/resume/resume.js';

const generateHTML = props => (`
<section class="home container">
  ${Presentation().render(props)}
  ${CanIHelp().render(props)}
  ${Skills().render(props)}
  ${Resume().render(props)}
</section>
`);

export default generateHTML;
