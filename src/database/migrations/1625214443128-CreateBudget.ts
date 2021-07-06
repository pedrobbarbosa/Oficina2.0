import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateBudget1625214443128 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "budgets",
                columns: [
                    { name: "id", type: "uuid", isPrimary: true },
                    { name: "description", type: "varchar" },
                    { name: "value", type: "int" },
                    { name: "created_at", type: "timestamp", default: "now()" },
                    { name: "user_id", type: "uuid", isNullable: true },
                    { name: "seller_id", type: "uuid", isNullable: true },
                ],
                foreignKeys: [
                    {
                        name: "FKUser",
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        columnNames: ["user_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    },
                    {
                        name: "FKSeller",
                        referencedTableName: "sellers",
                        referencedColumnNames: ["id"],
                        columnNames: ["seller_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    },
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("budgets");
    }

}
