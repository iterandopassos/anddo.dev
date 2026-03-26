// src/pages/Home.js

import React from "react"
import SiteLayout from "../layouts/SiteLayout"
import ChatWhatsapp from "../components/ChatWhatsapp"

export default function Home() {
  return (
    <SiteLayout>

      <section className="hero">
        <h1>anddo.dev - solução de atendimento automático</h1>
        <p>
          Atendemos clientes com mensagens instantâneas via WhatsApp, reduzindo tempo de resposta e aumentando conversões.
          Nossa plataforma conectará futuro webhook real com seu fluxo de vendas.
        </p>

        <div className="hero-links">
          <a className="cta" href="mailto:contato@anddo.dev">Fale conosco</a>
          <a className="cta outline" href="tel:+551199999999">Ligar agora</a>
        </div>
      </section>

      <section className="info-grid">
        <article>
          <h2>Sobre a anddo.dev</h2>
          <p>
            Empresa focada em automação de atendimentos via WhatsApp e chatbots, com foco em
            pequenas e médias empresas. Deixe o bot responder perguntas frequentes enquanto você foca nas vendas.
          </p>
        </article>
        <article>
          <h2>Contato</h2>
          <p>Email: contato@anddo.dev</p>
          <p>Telefone: +55 (11) 99999-9999</p>
          <p>Localização: São Paulo, SP</p>
        </article>
      </section>

      <section className="demo">
        <h2>Chat de demonstração (estilo WhatsApp)</h2>
        <ChatWhatsapp />
      </section>

      <section className="contact-form">
        <h2>Fale com a equipe</h2>
        <form onSubmit={(e) => { e.preventDefault(); alert('Enviado! (demo)'); }}>
          <input type="text" name="name" placeholder="Seu nome" required />
          <input type="email" name="email" placeholder="Seu email" required />
          <textarea name="message" placeholder="Sua mensagem" rows="4" required></textarea>
          <button type="submit" className="cta">Enviar mensagem</button>
        </form>
      </section>

    </SiteLayout>
  )
}