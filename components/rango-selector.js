// Componente para ingresar el rango numérico

class RangoSelector extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        div {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        input, button {
          padding: 6px;
          font-size: 14px;
        }
        button {
          background-color: #2980b9;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
        button:hover {
          background-color: #21618c;
        }
      </style>
      <div>
        <label>Inicio:</label>
        <input type="number" id="inicio" min="0">
        <label>Fin:</label>
        <input type="number" id="fin" min="0">
        <button id="enviar">Verificar</button>
      </div>
    `;

    this.shadowRoot.querySelector("#enviar")
      .addEventListener("click", () => this.enviarValores());
  }

  enviarValores() {
    const inicio = parseInt(this.shadowRoot.querySelector("#inicio").value);
    const fin = parseInt(this.shadowRoot.querySelector("#fin").value);

    if (isNaN(inicio) || isNaN(fin)) {
      alert("Ingrese valores válidos.");
      return;
    }

    if (inicio > fin) {
      alert("Inicio no puede ser mayor que Fin.");
      return;
    }

    const evento = new CustomEvent("rango-confirmado", {
      detail: { inicio, fin },
      bubbles: true,
      composed: true
    });

    this.dispatchEvent(evento);
  }
}

customElements.define("rango-selector", RangoSelector);
