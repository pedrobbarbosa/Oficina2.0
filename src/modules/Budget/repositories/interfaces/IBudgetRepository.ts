import { Budget } from "../../entities/Budget";

interface ICreateBudgetDTO {
  value: number;
  description: string;
  user_id: string;
  seller_id: string;
}

interface IBudgetRepository {
  create({ value, description, user_id, seller_id }: ICreateBudgetDTO): Promise<Budget>;
  findByCpfClient(cpf: string): Budget;
  findByCpfSeller(cpf: string): Budget;
  findById(id: string): Promise<Budget>;
  findByDate(date: Date): Budget;
  findByValue(value: number): Promise<Budget[]>;
  all(): Promise<Budget[]>;
  delete(id: string): Promise<void>;
  update(id: string, description: string, value: number): Promise<Budget>
}

export { ICreateBudgetDTO, IBudgetRepository };
