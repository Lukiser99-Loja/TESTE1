
  // === MÁSCARAS ===
document.getElementById("cpf").addEventListener("input", function(e) {
  let v = e.target.value.replace(/\D/g, "");
  if (v.length > 11) v = v.slice(0, 11); // trava no CPF
  v = v.replace(/(\d{3})(\d)/, "$1.$2");
  v = v.replace(/(\d{3})(\d)/, "$1.$2");
  v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  e.target.value = v;
});

document.getElementById("telefone").addEventListener("input", function(e) {
  let v = e.target.value.replace(/\D/g, "");
  if (v.length > 11) v = v.slice(0, 11); // trava no telefone (11 dígitos)
  v = v.replace(/^(\d{2})(\d)/g, "($1) $2");
  v = v.replace(/(\d{5})(\d)/, "$1-$2");
  e.target.value = v;
});
document.getElementById("valor-final").addEventListener("input", function(e) {
  let v = e.target.value.replace(/\D/g, ""); // só números
  if (v === "") v = "0";
  v = (parseInt(v, 10) / 100).toFixed(2); // divide por 100 p/ virar centavos
  v = v.replace(".", ","); // vírgula no lugar do ponto
  v = "R$ " + v.replace(/\B(?=(\d{3})+(?!\d))/g, "."); // adiciona pontos de milhar
  e.target.value = v;
});


document.getElementById("form").addEventListener("submit", function(e){
  e.preventDefault();

  const atendimento = {
    nome: document.getElementById("nome").value,
    cpf: document.getElementById("cpf").value,
    carro: document.getElementById("carro").value,
    placa: document.getElementById("placa").value,
    telefone: document.getElementById("telefone").value,

    // Serviços
    filtroOleo: document.getElementById("filtro-oleo").value,
    filtroAr: document.getElementById("filtro-ar").value,
    filtroCombustivel: document.getElementById("filtro-combustivel").value,
    filtroArCond: document.getElementById("filtro-ar-cond").value,
    higienizacao: document.getElementById("higienizacao").value,
    liquidoArrefecimento: document.getElementById("liquido-arredecimento").value,
    limpezaRadiador: document.getElementById("limpeza-radiador").value,
    limpezaTbi: document.getElementById("limpeza-tbi").value,
    limpezaDirecao: document.getElementById("limpeza-direcao").value,
    fluidoFreio: document.getElementById("fluido-freio").value,
    oleoCambio: document.getElementById("oleo-cambio").value,
    oleoDirecao: document.getElementById("oleo-direcao").value,
    velas: document.getElementById("velas").value,
    pastilhas: document.getElementById("pastilhas").value,
    palhetas: document.getElementById("palhetas").value,
    cabosVelas: document.getElementById("cabos-velas").value,
    descarbonizacao: document.getElementById("descabonizacao").value,

    // Outros
    data: new Date().toLocaleString("pt-BR"),
    valorFinal: document.getElementById("valor-final").value
  };

  // Adicionar na tabela
  const tabela = document.getElementById("tabela");
  const row = tabela.insertRow();

  row.innerHTML = `
    <td class="border px-2 py-1">${atendimento.nome}</td>
    <td class="border px-2 py-1">${atendimento.cpf}</td>
    <td class="border px-2 py-1">${atendimento.carro}</td>
    <td class="border px-2 py-1">${atendimento.placa}</td>
    <td class="border px-2 py-1">${atendimento.telefone}</td>

    <td class="border px-2 py-1">${atendimento.filtroOleo}</td>
    <td class="border px-2 py-1">${atendimento.filtroAr}</td>
    <td class="border px-2 py-1">${atendimento.filtroCombustivel}</td>
    <td class="border px-2 py-1">${atendimento.filtroArCond}</td>
    <td class="border px-2 py-1">${atendimento.higienizacao}</td>
    <td class="border px-2 py-1">${atendimento.liquidoArrefecimento}</td>
    <td class="border px-2 py-1">${atendimento.limpezaRadiador}</td>
    <td class="border px-2 py-1">${atendimento.limpezaTbi}</td>
    <td class="border px-2 py-1">${atendimento.limpezaDirecao}</td>
    <td class="border px-2 py-1">${atendimento.fluidoFreio}</td>
    <td class="border px-2 py-1">${atendimento.oleoCambio}</td>
    <td class="border px-2 py-1">${atendimento.oleoDirecao}</td>
    <td class="border px-2 py-1">${atendimento.velas}</td>
    <td class="border px-2 py-1">${atendimento.pastilhas}</td>
    <td class="border px-2 py-1">${atendimento.palhetas}</td>
    <td class="border px-2 py-1">${atendimento.cabosVelas}</td>
    <td class="border px-2 py-1">${atendimento.descarbonizacao}</td>

    <td class="border px-2 py-1">${atendimento.data}</td>
    <td class="border px-2 py-1">${atendimento.valorFinal}</td>
  `;

  e.target.reset();
});
