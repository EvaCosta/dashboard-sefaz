export function agruparPorAuditor(listaDeLogs) {
    const relatorio = {};
    listaDeLogs.forEach((item)=>{
        const nome = item.auditor
        const tipoAcao = item.acao;

        if(!relatorio[nome]){
            relatorio[nome] = {ERRO: 0, LOGIN: 0, EDICAO: 0}
        }

        if(relatorio[nome][tipoAcao] !== undefined){
            relatorio[nome][tipoAcao]++
        }

    });

    return relatorio
}