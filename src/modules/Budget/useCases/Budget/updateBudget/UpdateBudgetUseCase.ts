import { inject, injectable } from "tsyringe"
import { Budget } from "../../../entities/Budget";

import { IBudgetRepository } from "../../../repositories/interfaces/IBudgetRepository";


@injectable()
class UpdateBudgetUseCase {
    constructor(
        @inject("BudgetsRepository")
        private budgetsRepository: IBudgetRepository) { }

    public async execute(id: string, description: string, value: number): Promise<Budget> {
        const budget: Budget = await this.budgetsRepository.update(id, description, value);

        return budget;
    }
}
export { UpdateBudgetUseCase };
