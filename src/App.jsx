import Header from "./components/Header";
import Hero from "./components/Hero";
import "./App.css";

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />

        <section id="solucoes" className="placeholder-section">
          <span>Próxima seção</span>
          <h2>Soluções DIGIGAB</h2>
        </section>

        <section id="diferenciais" className="placeholder-section">
          <span>Próxima seção</span>
          <h2>Diferenciais</h2>
        </section>

        <section id="processo" className="placeholder-section">
          <span>Próxima seção</span>
          <h2>Como funciona</h2>
        </section>

        <section id="portfolio" className="placeholder-section">
          <span>Próxima seção</span>
          <h2>Portfólio</h2>
        </section>

        <section id="contato" className="placeholder-section">
          <span>Próxima seção</span>
          <h2>Contato</h2>
        </section>
      </main>
    </>
  );
}

export default App;