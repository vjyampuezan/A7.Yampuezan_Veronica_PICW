// Componente que muestra si los números son pares o impares

class ResultadoParImpar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        p {
          padding: 4px;
          margin: 2px;
          background-color: #f4f6f6;
          border-left: 4px solid #58d68d;
          font-family: monospace;
        }
      </style>
      <div id="resultado"></div>
    `;

    window.addEventListener("rango-confirmado", (e) => {
      const { inicio, fin } = e.detail;
      this.mostrar(inicio, fin);
    });
  }

  mostrar(inicio, fin) {
    const contenedor = this.shadowRoot.querySelector("#resultado");
    contenedor.innerHTML = "";

    for (let i = inicio; i <= fin; i++) {
      const p = document.createElement("p");
      const tipo = i % 2 === 0 ? "Par" : "Impar";
      p.textContent = `${i} - ${tipo}`;
      contenedor.appendChild(p);
    }
  }
}

customElements.define("resultado-par-impar", ResultadoParImpar);
