import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateBudgetUseCase } from "./CreateBudgetUseCase";

class CreateBudgetController {
  public handle(request: Request, response: Response): Response {
    const { value, description, user_id, seller_id } = request.body;

    console.log(description, value, user_id, seller_id);

    const createBudgetUserCase = container.resolve(CreateBudgetUseCase);

    const budget = createBudgetUserCase.execute({ description, value, user_id, seller_id });

    return response.status(201).json(budget);
  }
}

export { CreateBudgetController };
