import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Fila 1: Título */}
      <div className="row title-row">
        <h2>SIMULADOR DE FUNCIONES DE MICROPROCESADOR</h2>
      </div>

      {/* Fila 2: Botones */}
      <div className="row button-row">
        <div className="button-container">
          <button>LIMPIAR</button>
          <button>EJECUTAR</button>
        </div>
      </div>

      {/* Fila 3: Memoria RAM */}
      <div className="row ram-row">
        <div className="memory-ram">
          <h3>MEMORIA RAM</h3>
          <table>
            <thead>
              <tr>
                <th>Nº Instr</th>
                <th>Instrucción</th>
                <th>Parametro1</th>
                <th>Parametro2</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>0</td><td>Mover</td><td>Entrada0</td><td>Registro1</td></tr>
              <tr><td>1</td><td>Mover</td><td>Entrada1</td><td>Registro2</td></tr>
              <tr><td>2</td><td>Sumar</td><td></td><td></td></tr>
              <tr><td>3</td><td>Mover</td><td>Acumulador</td><td>Salida0</td></tr>
              <tr><td colSpan="4" style={{ textAlign: "center" }}>...</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Fila 4: Componentes centrados (Entrada, CPU, Salida) */}
      <div className="row components-row">
        <div className="entrada">
          <h4>ENTRADA</h4>
          <table>
            <tbody>
              <tr><td>0</td><td>7</td></tr>
              <tr><td>1</td><td>6</td></tr>
              <tr><td>2</td><td>0</td></tr>
              <tr><td>3</td><td>0</td></tr>
            </tbody>
          </table>
        </div>

        <div className="cpu">
          <h3>UNIDAD CENTRAL DE PROCESO (C.P.U)</h3>
                      <div>Registro1: <input type="text" value="0" readOnly /></div>
            <div>Registro2: <input type="text" value="0" readOnly /></div>
        
          <div className="block alu">A.L.U.<br />UNIDAD ARITMÉTICO LÓGICA</div>
          <div className="registers">
          
            <div>Acumulador: <input type="text" value="0" readOnly /></div>
      

          </div>
        </div>

        <div className="salida">
          <h4>SALIDA</h4>
          <table>
            <tbody>
              <tr><td>0</td><td>0</td></tr>
              <tr><td>1</td><td>0</td></tr>
              <tr><td>2</td><td>0</td></tr>
              <tr><td>3</td><td>0</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;