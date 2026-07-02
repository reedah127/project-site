import ProjectCard from './ProjectCard';

export default function Projects() {
  const myProjects = [
    {
      title: "Graphic for PacWest",
      desc: "A digital advertisment for Pacific Western Bank.",
      image: "./pacWest.png",
      tags: ["Adobe InDesign"]
    },
    {
      title: "PirateFest T-Shirt",
      desc: "A shirt designed for PirateFest.",
      image: "./illustrationImg.png",
      tags: ["Adobe Photoshop"]
    },
    {
      title: "Web Design",
      desc: "A first design for a Resturant called Luigi's. This design was during Wake Tech.",
      image: "./webDesign.png",
      tags: ["HTML", "CSS Grid"]
    }
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {myProjects.map((p, idx) => (
          <ProjectCard 
            key={idx}
            title={p.title}
            desc={p.desc}
            image={p.image}
            tags={p.tags}
          />
        ))}
      </div>
    </section>
  );
}
