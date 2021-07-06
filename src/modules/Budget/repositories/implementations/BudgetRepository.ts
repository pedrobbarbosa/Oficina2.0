import { getRepository, Repository } from "typeorm";

import { Budget } from "../../entities/Budget";

import {
  IBudgetRepository,
  ICreateBudgetDTO,
} from "../interfaces/IBudgetRepository";

class BudgetsRepository implements IBudgetRepository {
  private repository: Repository<Budget>;

  constructor() {
    this.repository = getRepository(Budget);
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }

  async update(id: string, description: string, value: number): Promise<Budget> {
    const budget_updated = this.repository.save({ id, description, value });

    return budget_updated;
  }

  async create({ value, description, user_id, seller_id }: ICreateBudgetDTO): Promise<Budget> {
    const budget = this.repository.create({ value, description, user_id, seller_id });
    await this.repository.save(budget);
    return budget;
  }
  findByCpfClient(cpf: string): Budget {
    throw new Error("Method not implemented.");
  }
  findByCpfSeller(cpf: string): Budget {
    throw new Error("Method not implemented.");
  }
  async findById(id: string): Promise<Budget> {
    const budget = await this.repository.findOne(id);
    return budget;
  }
  findByDate(date: Date): any {
    const budget = this.repository.find({ created_at: date })
    return budget;
  }
  async findByValue(value: number): Promise<Budget[]> {
    const budget = await this.repository.find({ value });

    return budget;
  }
  async all(): Promise<Budget[]> {
    return await this.repository.find({ order: { 'created_at': 'DESC' } });
  }
}

export { BudgetsRepository };
