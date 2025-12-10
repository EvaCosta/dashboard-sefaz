import { useState, useEffect } from 'react'
import { buscarAuditoria } from './services/api'
import { agruparPorAuditor } from './utils/agrupamento';

import { playlist } from './services/api'
import { agruparmentoMusicas } from './utils/agrupamentoMusicas'

import './App.css'


function App() {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    async function carregarDados() {
      setLoading(true);
      const resposta = await buscarAuditoria()

      const respostaSongs = await playlist();

      setLogs(resposta);

      setLoading(false);


      setLogs(respostaSongs);

    }

    carregarDados();
  }, []);

  if (loading) return <p>Carregando dados da auditoria e playlist...</p>;

  // Transformando o objeto em array de chaves para poder fazer o map
  // Explicar: O Object.keys pega ["Tulio", "Rafaela", "Gerson"]
  const nomesDosAuditores = Object.keys(agruparPorAuditor(logs));
  const dadosAgrupados = agruparPorAuditor(logs);

  const nomesMusicas = Object.keys(agruparmentoMusicas(logs))
  const dadosMusicas = agruparmentoMusicas(logs)

  return (
    <div>
      <div>
        <h1>Painel de Auditoria</h1>

        <table border="1">
          <thead>
            <tr>
              <th>Auditor</th>
              <th>Logins</th>
              <th>Edições</th>
              <th>Erros</th>
            </tr>
          </thead>
          <tbody>
            {nomesDosAuditores.map((nome) => (
              <tr key={nome}>
                <td>{nome}</td>
                <td>{dadosAgrupados[nome].LOGIN}</td>
                <td>{dadosAgrupados[nome].EDICAO}</td>
                <td style={{ color: 'red' }}>{dadosAgrupados[nome].ERRO}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div>
        <h1>Painel de Músicas</h1>

        <table border="1">
          <thead>
            <tr>
              <th>titulo</th>
              <th>artista</th>
              <th>duracao</th>
            </tr>
          </thead>
          <tbody>
            {nomesMusicas.map((id) => (
              <tr key={id}>
                <td>{titulo}</td>
                <td>{dadosMusicas[id].titulo}</td>
                <td>{dadosMusicas[id].artista}</td>
                <td style={{ color: 'red' }}>{dadosMusicas[id].duracao}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>


  )
}

export default App
