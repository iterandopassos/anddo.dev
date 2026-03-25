import "./App.css";

function App() {
  return (
    <div className="container">

      <header className="hero">
        <h1>André Ricardo</h1>
        <p className="subtitle">
          Web Developer — Landing Pages, Fixes & Integrations
        </p>

        <a className="cta" href="mailto:seuemail@email.com">
          Fale comigo
        </a>
      </header>

      <section className="section">
        <h2>Como posso ajudar</h2>

        <div className="cards">
          <div className="card">Criação de landing pages</div>
          <div className="card">Ajustes em WordPress</div>
          <div className="card">Integração de APIs</div>
          <div className="card">Correção de bugs</div>
        </div>
      </section>

      <section className="section">
        <h2>Sobre</h2>

        <p>
          Desenvolvedor com mais de 20 anos de experiência em tecnologia.
          Ajudo empresas e profissionais a criar sites, resolver problemas técnicos
          e integrar sistemas de forma simples e eficiente.
        </p>
      </section>

      <footer className="footer">
        <p>© anddo.dev</p>
      </footer>

    </div>
  );
}

export default App;