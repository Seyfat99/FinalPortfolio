import React from "react";

const Skills = () => {
  return (
    <section className="skills-wrap">
      <h2 className="skills-wrap__header">Skills</h2>
      <div className="skills-wrap__skill-container">
        <h2 className="skills-wrap__skill-header">Front-End</h2>
        <ul className="skills-wrap__frontend">
          <li>
            <i className="devicon-html5-plain colored" />
            <span>HTML5</span>
          </li>
          <li>
            <i className="devicon-css3-plain colored" />
            <span>CSS3</span>
          </li>
          <li>
            <i className="devicon-sass-original colored" />
            <span>SCSS</span>
          </li>
          <li>
            <i className="devicon-javascript-plain colored" />
            <span>JS</span>
          </li>
          <li>
            <i className="devicon-react-original colored" />
            <span>React</span>
          </li>
        </ul>
      </div>

      <div className="skills-wrap__skill-container">
        <h2 className="skills-wrap__skill-header">Back-End</h2>
        <ul className="skills-wrap__backend">
          <li>
            <i className="devicon-mongodb-plain colored" />
            <span>MongoDB</span>
          </li>
          <li>
            <i className="devicon-mysql-plain colored" />
            <span>MySQL</span>
          </li>
          <li>
            <i className="devicon-nodejs-plain colored" />
            <span>Node</span>
          </li>
        </ul>
      </div>

      <div className="skills-wrap__skill-container">
        <h2 className="skills-wrap__skill-header">Tools</h2>
        <ul className="skills-wrap__tools">
          <li>
            <i className="devicon-git-plain colored" />
            <span>Git</span>
          </li>
          <li>
            <i className="devicon-github-plain colored" />
            <span>GitHub</span>
          </li>
          <li>
            <i className="devicon-visualstudio-plain colored" />
            <span>VS Code</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;
