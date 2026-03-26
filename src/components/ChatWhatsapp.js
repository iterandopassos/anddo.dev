// src/components/ChatWhatsapp.js

import React, { useState } from "react"

function decidirResposta(msg) {
  msg = msg.toLowerCase()

  if (msg.includes("oi") || msg.includes("olá"))
    return "Olá! Eu sou o bot da anddo.dev. Como posso ajudar?"

  if (msg.includes("cardapio"))
    return "🍕 Calabresa R$39  Mussarela R$35  Portuguesa R$42"

  if (msg.includes("horario"))
    return "Funcionamos das 18h às 23h"

  return "Ainda estou aprendendo. Pergunte pelo cardápio ou horário."
}

export default function ChatWhatsapp() {
  const [mensagens, setMensagens] = useState([
    { autor: "bot", texto: "Olá 👋 Bem-vindo ao chat da anddo.dev!" }
  ])
  const [input, setInput] = useState("")

  function enviar() {
    if (!input.trim()) return

    const userMsg = { autor: "user", texto: input }
    const botMsg = { autor: "bot", texto: decidirResposta(input) }

    setMensagens([...mensagens, userMsg, botMsg])
    setInput("")
  }

  return (
    <div className="chatWrapper">
      <div className="chatBox">

        <div className="chatHeader">
          <span>anddo.dev</span>
          <small>Atendimento automatizado</small>
        </div>

        <div className="chatBody">
          {mensagens.map((m, i) => (
            <div key={i} className={m.autor === "user" ? "msg user" : "msg bot"}>
              {m.texto}
            </div>
          ))}
        </div>

        <div className="chatInput">
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Digite uma mensagem..."
          />
          <button onClick={enviar}>Enviar</button>
        </div>

      </div>
    </div>
  )
}