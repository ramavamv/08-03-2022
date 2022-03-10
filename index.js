//require('dotenv').config({ override: true });//desta forma ele pega a variável de ambiente que esta no arquivo .env
require('dotenv').config();

/*
const axios = require('axios').default;

axios
  .get(
    URL,
    {
      'Authorization': process.env.API_KEY
    }
  );
  */

  function vazarSegredos() {
    console.log(
      'Minha API_KEY é',
      process.env.API_KEY,
      process.env.sobrenome,
    );
  }
vazarSegredos();
