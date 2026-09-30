function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-grid"></div>

      <div className="hero-glow hero-glow-one"></div>
      <div className="hero-glow hero-glow-two"></div>

      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-dot"></span>
            Soluções digitais sob medida
          </div>

          <h1>
            Tecnologia que
            <span> transforma ideias </span>
            em soluções.
          </h1>

          <p className="hero-description">
            Desenvolvemos sites, lojas virtuais, sistemas, PWAs,
            aplicativos, automações e soluções inteligentes para
            transformar projetos em experiências digitais.
          </p>

          <div className="hero-actions">
            <a href="#contato" className="hero-button-primary">
              Quero minha solução
              <span>↗</span>
            </a>

            <a href="#solucoes" className="hero-button-secondary">
              Conhecer soluções
            </a>
          </div>

          <div className="hero-trust">
            <div className="trust-line"></div>

            <span>
              Tecnologia • Inovação • Estratégia
            </span>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="visual-orbit orbit-one"></div>
          <div className="visual-orbit orbit-two"></div>

          <div className="visual-center">
            <div className="visual-logo">D</div>
            <div className="visual-pulse"></div>
          </div>

          <div className="visual-card card-top">
            <span className="visual-card-icon">{"</>"}</span>
            <div>
              <strong>Desenvolvimento</strong>
              <small>Soluções personalizadas</small>
            </div>
          </div>

          <div className="visual-card card-bottom">
            <span className="visual-card-icon">✦</span>
            <div>
              <strong>Inovação</strong>
              <small>Tecnologia para crescer</small>
            </div>
          </div>

          <div className="visual-node node-one"></div>
          <div className="visual-node node-two"></div>
          <div className="visual-node node-three"></div>
        </div>
      </div>

      <div className="hero-scroll">
        <span>Explore</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
}

export default Hero;