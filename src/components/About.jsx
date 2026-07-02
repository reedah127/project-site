import { useState } from 'react';

export default function About() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="about">
      <h2>About Me</h2>
      <div className="about-box">
        <img 
          src="./about.png" 
          alt="Profile Avatar" 
          className="about-img"
        />
        <div>
          <p>
            I am a web development student at Wake Tech University. I have a bachelors degree in Illustration and have worked
            as a Graphic Designer. 
          </p>
          {showMore && (
            <p style={{ marginTop: '10px' }}>
              My current goal is to master front end web development as well as UI and UX design. 
            </p>
          )}
          <button className="btn-toggle" onClick={() => setShowMore(!showMore)}>
            {showMore ? 'Show Less' : 'Read Work Goals'}
          </button>
        </div>
      </div>
    </section>
  );
}
