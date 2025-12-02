import { useState, useEffect } from 'react'
import { buscarAuditoria } from './services/api'
import './App.css'
import { agruparPorAuditor } from './utils/agrupamento';

function App() {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(()=>{
    async function carregarDados(){
      setLoading(true);
      const resposta = await buscarAuditoria();

      setLogs(resposta);
      setLoading(false);
    }

    carregarDados();
  },[]);

  if (loading) return <p>Carregando dados da auditoria...</p>;  
 
  // Transformando o objeto em array de chaves para poder fazer o map
  // Explicar: O Object.keys pega ["Tulio", "Rafaela", "Gerson"]
  const nomesDosAuditores = Object.keys(agruparPorAuditor(logs));
  const dadosAgrupados = agruparPorAuditor(logs);

  return (
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
  )
}

export default App
