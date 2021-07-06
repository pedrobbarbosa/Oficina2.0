import { inject, injectable } from "tsyringe";
import { Budget } from "../../../../entities/Budget";

import { IBudgetRepository } from "../../../../repositories/interfaces/IBudgetRepository";
import {
  ICreateBudgetUseCase,
  IRequest,
} from "../interfaces/ICreateBudgetUseCase";

@injectable()
class CreateBudgetUseCase implements ICreateBudgetUseCase {
  constructor(
    @inject("BudgetsRepository")
    private budgetsRepository: IBudgetRepository) { }

  public async execute({ description, value, user_id, seller_id }: IRequest): Promise<Budget> {
    const budget = await this.budgetsRepository.create({ description, value: Number(value), user_id, seller_id });

    return budget;
  }
}

export { CreateBudgetUseCase };
