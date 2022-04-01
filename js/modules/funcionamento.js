export default function initiFuncionamento() {
  const funcionamento = document.querySelector('[data-semana]');
  const diasSemana = funcionamento.dataset.semana.split(',').map(Number);
  const horarioSemana = funcionamento.dataset.horario.split(',').map(Number);

  const dataAgora = new Date();
  const diaAgora = dataAgora.getDay();
  const horarioAgora = dataAgora.getHours();

  const semanaAberto = diasSemana.indexOf(diaAgora) !== -1;

  const horarioAberto = horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1];

  if (semanaAberto && horarioAberto) {
    funcionamento.classList.add('aberto');
  }
}

// const agora = new Date()
// const promocao = new Date('December 24 2022 23:59')

// function converterEmDias(time){
//   return time / (24*60*60*1000) // dias
//           // time / (60*60*1000) // horas
//           // time / (60*1000) // segundos
//           // time / (1000) // milissigundos
// }

// const diasAgora = converterEmDias(agora)
// const diasPromocao = converterEmDias(promocao)

// const faltam = diasPromocao - diasAgora;

// console.log(faltam)
