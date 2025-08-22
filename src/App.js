import Header from "./Header";
import Section from "./Section";
import ProjectCard from "./ProjectCard";
import Skills from "./Skills";

function App() {
  const projects = [
    {
      id: 1,
      title: "Nitendo switch",
      description: "O Nintendo Switch é um console híbrido da Nintendo que pode ser usado na TV ou como portátil. Seu diferencial são os controles Joy-Con destacáveis, que permitem jogar sozinho ou com amigos. Com uma biblioteca variada de jogos e design versátil, é ideal para diversão em casa ou em movimento.",
      image: "img/images.png",
      tech: ["React", "CSS"],
    },
    {
      id: 2,
      title: "Playstation",
      description: "O PlayStation é um dos consoles mais populares do mundo, criado pela Sony. Ele oferece gráficos de alta qualidade, desempenho potente e uma vasta biblioteca de jogos exclusivos, como God of War, The Last of Us e Spider-Man. Com foco em imersão e entretenimento, é ideal para quem busca experiências de jogo envolventes, seja sozinho ou online com amigos.",
      image: "/img/playstation-4-2-ps2-sony-100-milhoes.png",
      tech: ["React", "PWA"],
    },
    {
      id: 3,
      title: "Xbox",
      description: "O Xbox, da Microsoft, é um console potente que combina desempenho de alto nível com uma vasta biblioteca de jogos, incluindo títulos exclusivos como Halo e Forza Horizon. Ele também se destaca pelos serviços online, como o Xbox Game Pass, que dá acesso a centenas de jogos. Versátil e imersivo, é ideal para quem busca diversão, gráficos de qualidade e jogabilidade online com amigos.",
      image: "/img/Xbox_cover.png",
      tech: ["Storybook", "CSS"],
    },
  ];

  return (
    <div>
      <Header />
      <main>
        <Section id="sobre" title="Sobre">
          <p>
            Olá! Eu sou um desenvolvedor apaixonado por jogos e este é o meu
            portfólio criado em React.
          </p>
        </Section>

        <Section id="projetos" title="Projetos">
          <div className="projects-grid">
            {projects.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </Section>

        <Skills />
      </main>
    </div>
  );
}

export default App;
