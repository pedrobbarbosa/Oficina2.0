import { Request, Response } from "express";
import { container } from "tsyringe";
import { Budget } from "../../../entities/Budget";
import { UpdateBudgetUseCase } from "./UpdateBudgetUseCase";


class UpdateBudgetController {
    public async handle(request: Request, response: Response): Promise<Budget> {
        const { id } = request.params;
        const { description, value } = request.body;

        const updateBudgetUseCase = container.resolve(UpdateBudgetUseCase);

        const budget = await updateBudgetUseCase.execute(id, description, value);

        return budget;
    }
}

export { UpdateBudgetController }