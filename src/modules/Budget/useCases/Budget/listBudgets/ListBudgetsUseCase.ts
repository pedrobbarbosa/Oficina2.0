import { IBudgetRepository } from "../../../repositories/interfaces/IBudgetRepository";

import { inject, injectable } from "tsyringe";
import { Budget } from "../../../entities/Budget";

@injectable()
class ListBudgetsUseCase {
    constructor(
        @inject("BudgetsRepository")
        private budgetsRepository: IBudgetRepository
    ) { }

    public async execute(): Promise<Budget[]> {
        const budgets = await this.budgetsRepository.all();

        return budgets;
    }

}

export { ListBudgetsUseCase }