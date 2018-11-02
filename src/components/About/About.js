import React from "react";
import Resume from "../../Resume/Seyfat_Resume.pdf"
const About = () => {
  return (
    <section className="about-wrap" id="About">
      <h2>About Me</h2>
      <div className="about-wrap__img-text-wrap">
        <div className="about-wrap__img-wrap" />
        <div className="about-wrap__text-wrap">
          <p>
            Hello! My name is Seyfat Khamidov and I am a software
            developer. I come from a Turkish background but was born in Russia. My
            family and I moved to the United States in 2005 to better our lives through
            various oppurtunities. I'm 19 years old and want to pursue a
            career in the technology field.
          </p>
          <p>
            Other than coding, I like to spend my free time outside like going
            to the mountains, lake or playing soccer with some friends. I also
            like to binge watch shows on netflix.
          </p>
        </div>
      </div>
      <a href={Resume} download>My Resume</a>
    </section>
  );
};

export default About;
