import { v4 as uuidV4 } from "uuid";

import createConnection from "../index";


async function create() {
    const connection = await createConnection("localhost");

    await connection.query(
        `INSERT INTO USERS(id, name, cpf, created_at )
          values('${uuidV4()}', 'Pedro Barbosa', '147.252.265-09', 'now()')
    `);
    await connection.query(
        `INSERT INTO USERS(id, name, cpf, created_at )
            values('${uuidV4()}', 'Alexandre Barroso', '132.121.171-02', 'now()')
    `);
    await connection.query(
        `INSERT INTO USERS(id, name, cpf, created_at )
            values('${uuidV4()}', 'Carlos Eduardo', '257.752.995-08', 'now()')
    `);
    await connection.query(
        `INSERT INTO USERS(id, name, cpf, created_at )
            values('${uuidV4()}', 'Neymar Jr', '787.414.252-02', 'now()')
    `);


    await connection.close();

}

create().then(() => console.log("Usuário 01 criado"));
