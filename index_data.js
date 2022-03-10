const { DateTime } = require('luxon');

//const dt = DateTime.now();

//coloca um formato para a data
//console.log(dt.toLocaleString(
//  DateTime.DATETIME_HUGE_WITH_SECONDS
//));

//DATETIME_MED_WITH_WEEKDAY

/*
criar e imprimir o dia de ontem
criar o dia de hoje e reduzir uma data
imprimir toString
ou toLocaleString
*/
/*
const hoje = DateTime.now();
const ontem = (hoje
  .plus(
    {days: -1,}
  )
);

console.log(`Hoje ${hoje.toString()}`);
console.log(`Ontem foi ${ontem.toString()}`);
*/
/*
dia 5 do mês de julho desse ano às 15h usando o método fromObject
*/
/*
const dataJulho = (
  DateTime
    .fromObject(
      { day: 5, month: 7, year: 2022, hours: 15},
      { zone: 'America/Sao_Paulo' },
    )
);

console.log(`Data de Julho ${dataJulho.toString()}`);
*/
/*
imprimir em Alemão, o dia da semana(weekday) da data 15 dias antes da véspera de natal de 1980(criar natal 1980 e reduzir 15 dias)
*/
const vesperaDeNatal = (
  DateTime
    .fromObject(
      { day: 24, month: 12, year: 1980 },
      { zone: 'Europe/Berlin' },
    )
);

const vesperaDeNatal15DiasAntes = (
  vesperaDeNatal
    .plus({
      days: -15,
    })
);

const diaDaSemana = (
  vesperaDeNatal15DiasAntes
    .toLocaleString(
    DateTime.DATETIME_FULL)
);



console.log(`Véspera de natal 1980 ${vesperaDeNatal.toString()}`);
console.log(`15 dias antes da Véspera de natal de 1980 ${vesperaDeNatal15DiasAntes.toString()}`);
console.log(`Dia da semana ${diaDaSemana.toString()}`);

//const hoje = DateTime.now();
/*console.log(hoje.toLocaleString(
  DateTime.DATETIME_MED_WITH_WEEKDAY
));*/

/*const dt = DateTime.now();
dt
  .setLocale('pt-BR')
  .toLocaleString({
    weekday: 'long',
    era: 'long',
    day: '2-digit',
  });

console.log(dt);
*/

/*
const natalNoBrasil = (
  DateTime
    .fromObject(
      { day: 24, month: 12 },
      { zone: 'America/Sao_Paulo' },
    )
);
console.log("Natal No Brasil" + natalNoBrasil.toString());

const reveillon = (
  natalNoBrasil
    .plus({
      days: 7,
      hours: 23,
      minutes: 59,
    })
);
console.log("Reveillon " + reveillon.toString());
*/