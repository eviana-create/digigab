import { useState } from "react";
import "./Header.css";

function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  function fecharMenu() {
    setMenuAberto(false);
  }

  return (
    <header className="site-header">
      <div className="header-container">
        <a
          href="#inicio"
          className="digigab-logo"
          aria-label="DIGIGAB - Início"
          onClick={fecharMenu}
        >
          <span className="logo-main">DIGIGAB</span>
          <span className="logo-dot">.</span>
        </a>

        {/* MENU DESKTOP */}
        <nav className="main-nav" aria-label="Navegação principal">
          <a href="#inicio">Início</a>
          <a href="#solucoes">Soluções</a>
          <a href="#diferenciais">Diferenciais</a>
          <a href="#processo">Como funciona</a>
          <a href="#portfolio">Portfólio</a>
        </nav>

        {/* BOTÃO DESKTOP */}
        <a href="#contato" className="header-button">
          Solicitar orçamento
          <span>↗</span>
        </a>

        {/* BOTÃO HAMBÚRGUER */}
        <button
          type="button"
          className={`menu-toggle ${menuAberto ? "active" : ""}`}
          onClick={() => setMenuAberto(!menuAberto)}
          aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuAberto}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* MENU MOBILE */}
      <div className={`mobile-menu ${menuAberto ? "open" : ""}`}>
        <nav aria-label="Navegação mobile">
          <a href="#inicio" onClick={fecharMenu}>
            Início
          </a>

          <a href="#solucoes" onClick={fecharMenu}>
            Soluções
          </a>

          <a href="#diferenciais" onClick={fecharMenu}>
            Diferenciais
          </a>

          <a href="#processo" onClick={fecharMenu}>
            Como funciona
          </a>

          <a href="#portfolio" onClick={fecharMenu}>
            Portfólio
          </a>

          <a
            href="#contato"
            className="mobile-menu-button"
            onClick={fecharMenu}
          >
            Solicitar orçamento
            <span>↗</span>
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;