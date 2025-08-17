import './index.scss'

const SkillsBar = ({ skills }) => 
  
(  <div className="skills-section">
    <div className="skills- label" >
    TECHNOLOGIES I WORK WITH:
   
    </div>
    <div className="skills-bar" >
      {skills.map((tech) => (
        <span key={tech} className="skill-pill" >{tech}</span>
      ))}
    </div>
  </div>);

export default SkillsBar;