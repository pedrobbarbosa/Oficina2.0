import { IBudgetRepository } from "../../../repositories/interfaces/IBudgetRepository";

import { inject, injectable } from "tsyringe";

@injectable()
class DeleteBudgetUseCase {
    constructor(
        @inject("BudgetsRepository")
        private budgetsRepository: IBudgetRepository
    ) { }

    public async execute(id: string): Promise<void> {
        await this.budgetsRepository.delete(id);
    }
}

export { DeleteBudgetUseCase }