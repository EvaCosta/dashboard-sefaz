import { useState, useEffect } from 'react'
import { buscarAuditoria } from './services/api'
import './App.css'

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

  return (
    <>
      <h1>Painel de Auditoria</h1>
      <p>Total de registros encontrados: {logs.length}</p>
    </>
  )
}

export default App
