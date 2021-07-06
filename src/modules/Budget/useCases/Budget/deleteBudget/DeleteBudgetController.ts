import { Request, Response } from "express";

import { container } from "tsyringe";


import { DeleteBudgetUseCase } from "./DeleteBudgetUseCase"


class DeleteBudgetController {
    public async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const deleteBudgetUseCase = container.resolve(DeleteBudgetUseCase);

        await deleteBudgetUseCase.execute(id);

        return response.status(201).json();
    }
}
export { DeleteBudgetController }