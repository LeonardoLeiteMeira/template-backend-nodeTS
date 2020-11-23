import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUserTable1606011267450 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(new Table({
            name: 'User',
            columns: [
                {
                    name:'Id',
                    type:'binary(16)',
                    isPrimary:true
                },
                {
                    name:"Name",
                    type: "varchar",
                    isNullable:false,
                },
                {
                    name:"LastName",
                    type: "varchar",
                    isNullable:false,
                },
                {
                    name:"CPF",
                    type:"varchar",
                    isUnique:true
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("User");
    }

}
