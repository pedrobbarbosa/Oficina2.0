import { v4 as uuidV4 } from "uuid";

import createConnection from "../index";

async function create() {
    const connection = await createConnection("localhost");

    await connection.query(
        `INSERT INTO SELLERS(id, name, cpf, created_at )
          values('${uuidV4()}', 'Augustinho Carrara', '365.125.123-05', 'now()')
    `);
    await connection.query(
        `INSERT INTO SELLERS(id, name, cpf, created_at )
            values('${uuidV4()}', 'Thiago Siqueira', '52.500.656-02', 'now()')
    `);
    await connection.query(
        `INSERT INTO SELLERS(id, name, cpf, created_at )
            values('${uuidV4()}', 'Ramon Andrade', '145.858.69-04', 'now()')
    `);
    await connection.query(
        `INSERT INTO SELLERS(id, name, cpf, created_at )
            values('${uuidV4()}', 'Robson do Pneu', '124.854.856-05', 'now()')
    `);
    await connection.query(
        `INSERT INTO SELLERS(id, name, cpf, created_at )
            values('${uuidV4()}', 'Rafael Bruno	', '014.1578.62.08', 'now()')
    `);

    await connection.close();

}

create().then(() => console.log("Vendedores criados"));
