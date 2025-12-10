const dadosBrutos = [
  { id: 1, auditor: "Tulio", acao: "ERRO", data: "2023-10-01" },
  { id: 2, auditor: "Rafaela", acao: "LOGIN", data: "2023-10-01" },
  { id: 3, auditor: "Tulio", acao: "ERRO", data: "2023-10-02" },
  { id: 4, auditor: "Gerson", acao: "EDICAO", data: "2023-10-02" },
  { id: 5, auditor: "Rafaela", acao: "LOGIN", data: "2023-10-03" },
  { id: 6, auditor: "Rafaela", acao: "EDICAO", data: "2023-10-03" },
];

export const buscarAuditoria = () => {
  return new Promise((resolve) => {
    // Simulando 1.5 segundos de delay da SEFAZ
    setTimeout(() => {
      resolve(dadosBrutos);
    }, 1500);
  });
};
// teste
