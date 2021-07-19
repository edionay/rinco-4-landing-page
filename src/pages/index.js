import * as React from "react"
import playStoreBadge from '../images/google-play-pt-badge.png'
import arrow from '../images/arrow.png'

import './index.css'

// styles
const pageStyles = {
  color: "#232129",
  fontFamily: "Montserrat, Roboto, sans-serif, serif",
}

const IndexPage = () => {
  return (
    <main style={pageStyles} className="container">
      <title>Rinco 4 - Home Page</title>

      <nav>
        <div className="logo">Rinco 4</div>
        <div className="play-store-section">
          <div className="download-title">
            Baixe agora:
          </div>
          <div>
            <img width={150} src={playStoreBadge}></img>
          </div>
        </div>
      </nav>
      <section className="title-section">
        <div className="title">
          Rinco 4
        </div>
        <div className="subtitle">
          Converta links do Spotify e Deezer <br />
          para o YouTube!
        </div>
      </section>

      <section className="desktop-tutorial">
        <div>
          <div className="simple-title">Simples assim:</div>
        </div>
          <div className="cards">
            <img className="desktop-arrow" width={150} src={arrow}></img>
            <div className="card">Compartilhe um link no Rinco 4</div>
            <div className="card">Ouça no YouTube</div>
          </div>

      </section>
      <section className="mobile-tutorial">
        <ol>
          <li>
            Compartilhe um link com o Rinco 4
          </li>
          <li>
            Abra no Youtube
          </li>
        </ol>
      </section>
      <div className="mobile-simple-title">Simples assim!</div>
      <section className="play-store-mobile">
        <img width={150} src={playStoreBadge}></img>
      </section>
    </main>
  )
}

export default IndexPage
