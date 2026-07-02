export default function Skills() {
  const coreSkills = ["HTML", "CSS", "JavaScript", "React", "Git & GitHub", "Adobe InDesign", "Adobe Illustrator", "Adobe Photoshop"];

  return (
    <section id="skills">
      <h2>Skills</h2>
      <ul className="skills-list">
        {coreSkills.map((skill, idx) => (
          <li key={idx} className="skill-tag">{skill}</li>
        ))}
      </ul>
    </section>
  );
}
