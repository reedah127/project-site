export default function Experience() {
  const history = [
    {
      title: "Web Development",
      place: "Wake Tech",
      desc: "Gained core fundamentals in semantic HTML architecture, client styling layouts, and object-oriented scripts."
    },
    {
      title: "Graphic Designer",
      place: "Pacific Western Bank",
      desc: "Practiced branching workflows, code reviews, and basic package build scripts alongside team contributors."
    },
    {
      title: "Web Designer",
      place: "simple.biz",
      desc: "Practiced branching workflows, code reviews, and basic package build scripts alongside team contributors."
    }
  ];

  return (
    <section id="experience">
      <h2>Experience</h2>
      <div>
        {history.map((item, idx) => (
          <div key={idx} className="exp-item">
            <h3>{item.title}</h3>
            <h4>{item.place}</h4>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
