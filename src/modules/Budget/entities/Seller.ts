import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";


@Entity("sellers")
class Seller {

  @PrimaryColumn()
  id?: string;

  @Column()
  name: string;

  @Column()
  cpf: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Seller };
