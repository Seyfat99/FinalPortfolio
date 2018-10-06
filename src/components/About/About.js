import React from "react";

const About = () => {
  return (
    <section className="about-wrap" id="About">
      <h2>About Me</h2>
      <div className="about-wrap__img-text-wrap">
        <div className="about-wrap__img-wrap" />
        <div className="about-wrap__text-wrap">
          <p>
            Hello World! My name is Seyfat Khamidov and I am a junior web
            developer. I was born in Russia but my ethnicity is Turkish. My
            family and I moved to the USA in 2005 to better our lives through
            the various oppurtunities. I'm 19 years old and want to pursue a
            career in the technology field.
          </p>
          <p>
            Other than coding, I like to spend my free time outside like going
            to the mountains, lake or playing soccer with some friends. I also
            like to binge watch shows on netflix which is very fun.
          </p>
        </div>
      </div>

      <button>My Resume</button>
    </section>
  );
};

export default About;
