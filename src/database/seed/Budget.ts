import { v4 as uuidV4 } from "uuid";

import createConnection from "../index";

async function create() {
    const connection = await createConnection("localhost");

    const user_id = uuidV4();
    const user_id_2 = uuidV4();
    const seller_id = uuidV4();

    await connection.query(
        `INSERT INTO SELLERS(id, name, cpf, created_at )
          values('${user_id}', 'Siqueira Campos', '365.125.123-05', 'now()')
    `);

    await connection.query(
        `INSERT INTO USERS(id, name, cpf, created_at )
            values('${seller_id}', 'Thiago Siqueira', '52.500.656-02', 'now()')
    `);

    await connection.query(
        `INSERT INTO USERS(id, name, cpf, created_at )
            values('${user_id_2}', 'Rodrigo Fabricio', '143.257.885-08', 'now()')
    `);

    await connection.query(
        `INSERT INTO BUDGETS(id, description, value, created_at, user_id, seller_id )
            values('${uuidV4()}', 'Troca de amortecedor', '1200', 'now()', '${user_id}', '${seller_id}')
    `);

    await connection.query(
        `INSERT INTO BUDGETS(id, description, value, created_at, user_id, seller_id )
            values('${uuidV4()}', 'Troca de amortecedor', '1200', 'now()', '${user_id_2}', '${seller_id}')
    `);

    await connection.close();

}

create().then(() => console.log("Orçamentos criados"));
