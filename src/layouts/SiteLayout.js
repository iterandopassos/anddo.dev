// src/layouts/SiteLayout.js

import React from "react"

export default function SiteLayout({ children }) {
  return (
    <div className="siteContainer">
      <header className="siteHeader">
        anddo.dev 🚀
      </header>

      <main>
        {children}
      </main>
    </div>
  )
}