import {createConnection} from 'typeorm';

createConnection()
    .then(()=> console.log("Successfully connected with database!"))//ele busca o ormconfig.json na raiz para pegar os dados da conexão
    .catch(error => console.log(error));