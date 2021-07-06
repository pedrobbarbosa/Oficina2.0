import { container } from "tsyringe";
import { Request, Response } from "express";


import { ListBudgetsUseCase } from "./ListBudgetsUseCase";

class ListBudgetsController {
    public async handle(request: Request, response: Response): Promise<Response> {
        const listBudgetsUseCase = container.resolve(ListBudgetsUseCase);

        const budgets = await listBudgetsUseCase.execute();

        return response.status(200).json(budgets);
    }
}

export { ListBudgetsController }