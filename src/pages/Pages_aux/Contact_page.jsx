import React, { useState } from "react";
import { FaEnvelope, FaInstagram, FaMapMarkerAlt } from "react-icons/fa";
import "./Contact_page.css";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mdkzbvjy";

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(form),
      });
      if (response.ok) {
        setSubmitted(true);
        setForm({ name: "", email: "", message: "" });
      } else {
        setError("Ocorreu um erro ao enviar. Tente novamente mais tarde.");
      }
    } catch (err) {
      setError("Ocorreu um erro ao enviar. Tente novamente mais tarde.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-page-wrapper">
      <div className="contact-header">
        <h1>Contato</h1>
        <p>
          Tem dúvidas, sugestões ou quer falar com a equipe do Trilha Federal?
          Preencha o formulário ou utilize nossos canais de contato abaixo.
        </p>
        <div className="contact-content">
          <form className="contact-form" onSubmit={handleSubmit}>
            <label>
              Nome
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Seu nome"
                disabled={loading}
              />
            </label>
            <label>
              Email
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="seu@email.com"
                disabled={loading}
              />
            </label>
            <label>
              Mensagem
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                placeholder="Digite sua mensagem..."
                rows={5}
                style={{ resize: "none" }}
                disabled={loading}
              />
            </label>
            <button
              type="submit"
              className="contact-submit-btn"
              disabled={loading}
            >
              {loading ? "Enviando..." : "Enviar"}
            </button>
            {submitted && (
              <div className="contact-success">
                Mensagem enviada! Obrigado pelo contato.
              </div>
            )}
            {error && <div className="contact-error">{error}</div>}
          </form>
          <div className="contact-info">
            <h2>Outros canais</h2>
            <div className="contact-info-item">
              <FaEnvelope className="contact-info-icon" />
              <span>atrilhafederal@gmail.com</span>
            </div>
            <div className="contact-info-item">
              <FaInstagram className="contact-info-icon" />
              <a
                href="https://www.instagram.com/atrilhafederal/"
                target="_blank"
                rel="noopener noreferrer"
              >
                @atrilhafederal
              </a>
            </div>
            <div className="contact-info-item">
              <FaMapMarkerAlt className="contact-info-icon" />
              <span>Belo Horizonte, MG</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
