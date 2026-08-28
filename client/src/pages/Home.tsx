/*
 * Direção visual: Caderno de Ideias — editorial escolar contemporâneo, pessoal e luminoso.
 * Este arquivo usa composição assimétrica, azul Ideia #2457D6, rosa coral e microinterações curtas.
 */
import { ArrowUpRight, Check, Clock3, Code2, Heart, Lightbulb, Menu, MessageCircle, Sparkles, Users, X } from "lucide-react";
import { useState } from "react";

const WHATSAPP = "https://wa.me/5561991987725";
const IMAGE_BASE = "/programando-futuros-assets/images";
const whatsappMessage = (context = "Oi, Jhenifer! Vi o site do Programando Futuros e quero saber mais sobre as aulas ao vivo.") => `${WHATSAPP}?text=${encodeURIComponent(context)}`;

const levels = [
  { age: "9–11", title: "Primeiros passos", text: "Lógica, criatividade e os primeiros projetos para descobrir que programar também pode ser divertido.", color: "blue" },
  { age: "12–15", title: "Ideias em construção", text: "Programação, desenvolvimento e IA aplicada para transformar curiosidade em coisas que funcionam.", color: "pink" },
  { age: "16–19", title: "Projetos com propósito", text: "Uma base mais estratégica para criar, resolver problemas e enxergar caminhos no mundo da tecnologia.", color: "navy" },
];

const subjects = [
  { icon: Code2, label: "Aplicativos e sites" },
  { icon: Sparkles, label: "Jogos e experiências digitais" },
  { icon: Lightbulb, label: "IA aplicada e lógica" },
  { icon: Heart, label: "Startups e empreendedorismo" },
];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <main className="site-shell">
      <div className="top-note"><span>Programando Futuros</span><span>aulas ao vivo • todo o Brasil • preço acessível</span></div>
      <header className="site-header">
        <a href="#inicio" className="brand" aria-label="Programando Futuros, início">
          <img className="rocket-logo" src={`${IMAGE_BASE}/foguete-logo.png`} alt="" />
          <span className="brand-wordmark"><strong>programando</strong><em>futuros</em></span>
        </a>
        <nav className={`main-nav ${menuOpen ? "is-open" : ""}`} aria-label="Navegação principal">
          <a href="#aulas" onClick={() => setMenuOpen(false)}>Aulas</a>
          <a href="#faixas" onClick={() => setMenuOpen(false)}>Para quem é</a>
          <a href="#jhenifer" onClick={() => setMenuOpen(false)}>Sobre mim</a>
          <a href={whatsappMessage()} target="_blank" rel="noreferrer" className="nav-cta" onClick={() => setMenuOpen(false)}>Falar comigo <ArrowUpRight size={16} /></a>
        </nav>
        <button className="menu-toggle" aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      </header>

      <section id="inicio" className="hero-section">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-dot" /> aulas ao vivo para todo o Brasil</div>
          <h1>Crie aplicativos,<br />sites, jogos e soluções<br /><span>com IA aplicada.</span></h1>
          <p className="hero-lede">Aulas ao vivo de programação e IA aplicada, para alunos de todo o Brasil, transformarem ideias em aplicativos, sites e jogos — com orientação próxima e preço acessível.</p>
          <div className="hero-actions">
            <a className="button button-primary pulse-cta" href={whatsappMessage("Oi, Jhenifer! Vi o site do Programando Futuros e quero conhecer as aulas ao vivo.")} target="_blank" rel="noreferrer"><MessageCircle size={18} /> Conhecer as aulas <ArrowUpRight size={18} /></a>
            <button className="text-link" onClick={() => scrollTo("faixas")}>Ver faixas etárias <span>↓</span></button>
          </div>
          <div className="hero-details"><span><Clock3 size={17} /> 1h30 por encontro</span><span><Users size={17} /> turmas pequenas</span><span><MessageCircle size={17} /> ao vivo com a Jhenifer</span></div><div className="jhenifer-note"><span>anotação da Jhenifer</span><strong>“Pode perguntar.<br />É assim que começa.”</strong><i>J.</i></div>
        </div>
        <div className="hero-visual">
          <div className="visual-paper"><img src={`${IMAGE_BASE}/hero-professora.png`} alt="Professora de pele branca e cabelo castanho-claro trabalhando em um projeto de programação" /></div>
          <div className="visual-label label-live"><span className="pulse" /> ao vivo</div>
          <div className="visual-label label-note">ideias que<br /><strong>ganham forma</strong></div>
          <div className="scribble scribble-one">↗</div><div className="scribble scribble-two">✦</div>
        </div>
      </section>

      <section className="parent-promise section-pad"><div className="promise-label"><span className="eyebrow-dot" /> para famílias</div><div className="promise-copy"><h2>Transforme o tempo de tela do seu filho em <span>futuro e criatividade.</span></h2><p>Em vez de apenas consumir tecnologia, cada aluno aprende a criar, experimentar e desenvolver ideias próprias com acompanhamento ao vivo. Tudo isso com preço acessível para tornar a tecnologia mais próxima de famílias de todo o Brasil.</p></div><div className="promise-arrow">↗</div></section>

      <section className="girls-section section-pad"><div className="girls-copy"><span className="section-kicker">um incentivo para meninas</span><h2>Mais meninas criando o futuro com <span>tecnologia.</span></h2><p>Meninas têm desconto nas aulas para que possam experimentar, criar e ocupar seu espaço na programação, na IA aplicada e no empreendedorismo.</p><div className="girls-badge"><Heart size={18} /> desconto para meninas</div></div><div className="girls-mark"><span>programar também é</span><strong>se imaginar<br /><em>criadora.</em></strong><small>programação · IA aplicada · projetos</small></div></section>

      <section id="aulas" className="subjects-section section-pad">
        <div className="section-intro"><span className="section-kicker">o que você pode criar</span><h2>Mais do que código: ideias que ganham <span>forma.</span></h2><div className="margin-note">não é sobre decorar.<br /><strong>é sobre entender.</strong></div></div>
        <div className="subject-list">{subjects.map(({ icon: Icon, label }, i) => <div className="subject-item" key={label}><span className="subject-number">0{i + 1}</span><Icon size={23} strokeWidth={1.8} /><strong>{label}</strong><ArrowUpRight size={16} className="subject-arrow" /></div>)}</div>
      </section>

      <section className="students-section section-pad"><div className="students-photo"><img src={`${IMAGE_BASE}/aula-online-criancas.png`} alt="Crianças felizes participando de uma aula online de programação com a professora e colegas na chamada de vídeo" /><span className="photo-caption">ideias compartilhadas<br /><strong>viram projetos</strong></span></div><div className="students-copy"><span className="section-kicker">aprender também pode ser leve</span><h2>Quando a curiosidade encontra a <span>tecnologia.</span></h2><p>Nas aulas ao vivo, crianças e adolescentes aprendem programação e IA aplicada criando juntos, testando ideias e desenvolvendo projetos que dão orgulho de mostrar.</p><div className="students-points"><span>criatividade</span><span>colaboração</span><span>autonomia</span></div></div></section>

      <section id="faixas" className="levels-section section-pad">
        <div className="levels-heading"><div><span className="section-kicker">cada fase tem seu ritmo</span><h2>Uma turma para<br /><span>cada momento.</span></h2><div className="blue-pencil">escolha seu ponto de partida ↗</div></div><p>As aulas são pensadas para que cada pessoa transforme curiosidade em projeto, desenvolva autonomia e descubra que também pode criar soluções e empreender.</p></div>
        <div className="level-grid">{levels.map((level, i) => <article className={`level-card ${level.color}`} key={level.age}><div className="level-top"><span className="level-index">turma 0{i + 1}</span></div><div className="level-age-large">{level.age}<small> anos</small></div><h3>{level.title}</h3><p>{level.text}</p><a href={whatsappMessage(`Oi, Jhenifer! Tenho interesse na turma de ${level.age} anos.`)} target="_blank" rel="noreferrer">Tenho interesse <ArrowUpRight size={17} /></a></article>)}</div>
      </section>

      <section id="jhenifer" className="about-section section-pad">
        <div className="about-stamp"><span>com carinho,</span><strong>J.</strong><small>Jhenifer</small></div>
        <div className="about-copy"><span className="section-kicker">por trás das aulas</span><h2>Oi, eu sou a <span>Jhenifer.</span></h2><p>Eu acredito que tecnologia não precisa ser distante, complicada ou feita para poucas pessoas. Nas minhas aulas, a gente parte da curiosidade e constrói junto: aplicativos, sites, jogos e ideias que podem virar oportunidades.</p><p>O <strong>Programando Futuros</strong> nasceu pequeno de propósito: para eu conseguir acompanhar de verdade, celebrar cada descoberta e deixar espaço para perguntas.</p><p>Eu já atuo como professora e já dei aulas online para alunos do Brasil e também do exterior — uma experiência que me ensinou a olhar para cada pessoa e adaptar o caminho de aprendizagem.</p><a className="text-link text-link-blue" href={whatsappMessage("Oi, Jhenifer! Quero conhecer melhor o seu trabalho e as turmas.")} target="_blank" rel="noreferrer">Vamos trocar uma ideia <ArrowUpRight size={17} /></a></div>
        <div className="about-notes"><div><Check size={17} /> encontros ao vivo</div><div><Check size={17} /> alunos do Brasil e do exterior</div><div><Check size={17} /> desconto para meninas</div></div>
      </section>

      <section className="final-cta"><div className="cta-decoration">✦</div><span className="section-kicker">uma conversa é o primeiro passo</span><h2>Vamos encontrar a turma<br /><em>certa para você?</em></h2><p>Aulas ao vivo para alunos de todo o Brasil, com orientação próxima e preço acessível. Me chama no WhatsApp para conhecer horários e próximos grupos.</p><a className="button button-light" href={whatsappMessage("Oi, Jhenifer! Quero saber sobre horários e próximos grupos.")} target="_blank" rel="noreferrer"><MessageCircle size={19} /> Chamar no WhatsApp</a><small>Não há aula experimental. A conversa inicial é para tirar dúvidas com tranquilidade.</small></section>

      <footer className="site-footer"><a href="#inicio" className="brand footer-brand"><img className="rocket-logo" src={`${IMAGE_BASE}/foguete-logo.png`} alt="" /><span className="brand-wordmark"><strong>programando</strong><em>futuros</em></span></a><span>por Jhenifer Meneses</span><span>© 2026</span></footer>
      <a className="floating-whatsapp" href={whatsappMessage()} target="_blank" rel="noreferrer" aria-label="Falar com Jhenifer pelo WhatsApp"><MessageCircle size={24} /></a>
    </main>
  );
}
