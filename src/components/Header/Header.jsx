// src/components/Header.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { FaChevronDown } from "react-icons/fa";

const HamburgerIcon = ({ open }) => (
  <span className={`hamburger-icon${open ? " open" : ""}`} aria-hidden="true">
    <span></span>
    <span></span>
    <span></span>
  </span>
);

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="header-container">
      <div className="header-content">
        <Link to="/" className="logo-container">
          <img
            src="/assets/Main_images/logo_site_img_005.png"
            alt="Trilha Federal Logo"
            className="logo-img"
          />
          <span>Trilha Federal</span>
        </Link>
        <nav className="nav-links">
          <Link to="/">Início</Link>
          <a href="#sobre">Sobre</a>

          <div className="dropdown-container">
            <button
              className="dropdown-trigger"
              onClick={toggleDropdown}
              onMouseEnter={() => setIsDropdownOpen(true)}
            >
              Recursos{" "}
              <FaChevronDown
                className={`dropdown-icon ${isDropdownOpen ? "rotated" : ""}`}
              />
            </button>
            <div
              className={`dropdown-menu ${isDropdownOpen ? "open" : ""}`}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <a href="#vestibulares">Vestibulares</a>
              <Link to="/internacional">Trilha Internacional</Link>
              <a href="#recursos">Ferramentas</a>
            </div>
          </div>
          <Link to="/quem-somos">Quem Somos</Link>
          <Link to="/contato">Contato</Link>
        </nav>
        <Link to="/contato" className="header-cta">
          <span>Entrar</span>
        </Link>
        {/* Botão menu mobile */}
        <button
          className="mobile-menu-toggle"
          aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => setIsMobileMenuOpen((open) => !open)}
        >
          <HamburgerIcon open={isMobileMenuOpen} />
        </button>
        {/* Menu mobile */}
        {isMobileMenuOpen && (
          <div className="mobile-menu-overlay" onClick={closeMobileMenu}>
            <nav
              className="mobile-menu"
              onClick={(e) => e.stopPropagation()}
              aria-label="Menu principal mobile"
            >
              <Link to="/" onClick={closeMobileMenu}>
                Início
              </Link>
              <a href="#sobre" onClick={closeMobileMenu}>
                Sobre
              </a>
              <div className="mobile-dropdown">
                <span>Recursos</span>
                <div className="mobile-dropdown-menu">
                  <a href="#vestibulares" onClick={closeMobileMenu}>
                    Vestibulares
                  </a>
                  <Link to="/internacional" onClick={closeMobileMenu}>
                    Trilha Internacional
                  </Link>
                  <a href="#recursos" onClick={closeMobileMenu}>
                    Ferramentas
                  </a>
                </div>
              </div>
              <Link to="/quem-somos" onClick={closeMobileMenu}>
                Quem Somos
              </Link>
              <Link to="/contato" onClick={closeMobileMenu}>
                Contato
              </Link>
              <Link
                to="/contato"
                className="header-cta mobile"
                onClick={closeMobileMenu}
              >
                <span>Entrar</span>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
