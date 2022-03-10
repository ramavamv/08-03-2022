/*DOTENV
trás conceitos de como deveria escrever código
arquivo de configuração com todas as variáveis de ambiente
Módulo que carreca varávies de ambiente de um arquivo .env p dentro do process.env
npm install dotenv --save
npm i dotenv

na raiz do projeto vamos criar um arquivo /.env
formato
API_KEY=12345
CLIENT_ID=lets-code-id
require('dotenv').config();
se exciste variável de ambiente na máquina usa da máuina
caso não tenha, usa a do dotenv

require('dotenv').config({ override: true });//sobreescrevendo

process.env = {
  API_KEY: '12345',
  CLIENT_ID: 'lets-code-id',
}

//https://github.com/menezee/818-linx/blob/main/classes/extra.mdx

LUXON
Biblioteca partiu através das pesoas estarem com MOMENT
MOMENTJS = biblioteca

versão reduzida com API parecida do moment
d = new Date(2010, 04, 15);

d = new Date();
d.toUTCString(); -- data é 3h a frente

npm i luxon

const { DateTime } = require('luxon');
const dt = DateTime.now();

const dt = DateTime.local();//mesma coisa do de cima

const dt = DateTime.local(2017, 5, 15, 8, 30);
//May 15, 2017 at 8:30

const dt = DateTime.fromISO('2017-05-15');
//May 15, 2017 à meia noite

//https://moment.github.io/luxon/#/tour

const dt = DateTime.now();
//coloca um formato para a data
dt.toLocaleString(
  DateTime.DATETIME_MED_WITH_WEEKDAY
)

DATETIME_FULL
DATETIME_FULL_WITH_SECONDS
DATE_HUGE
...

const dt = DateTime.now();
dt
  .toLocasleString({
    weekday: 'long',
    era: 'loing',
    day: '2-digit',
  });

dt
  .setLocale('pt-BR')
  .toLocasleString({
    weekday: 'long',
    era: 'loing',
    day: '2-digit',
  });
//depois de Cristo terça-feira, 08

const natalNoBrasil = ( DateTime.fromObject(
    config,
    timezone,
  )
);

const natalNoBrasil = ( DateTime.fromObject(
    {day: 24, nmoth: 12},
    {zone: 'America/Sao Paulo'},
  )
);

const reveillon = natalNoBrasil.plus();
const reveillon = (
  natanNobrasil
    .plus({
        days: 7,
        hours: 23,
        minutes: 59,
      })
);

//https://tc39.es/ecma402/#datetimeformat-objects



CRYPTO = biblioteca do code
serve para incriptar coisas
recebe msg, criptografa ela e usa

consegue fazedr com chave, tipo ssh.

diferença de http e https é muito grande

*/