import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";
import { Seller } from "./Seller";
import { User } from "./User";


@Entity("budgets")
class Budget {
  @PrimaryColumn()
  id?: string;

  @Column()
  description: string;

  @Column()
  value: number;

  @CreateDateColumn()
  created_at: Date;

  @ManyToOne(() => Seller)
  @JoinColumn({ name: "seller_id" })
  seller_id: Seller;

  @ManyToOne(() => User)
  @JoinColumn({ name: "user_id" })
  user_id: User;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Budget };
