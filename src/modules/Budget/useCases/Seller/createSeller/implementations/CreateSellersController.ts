import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateSellersUseCase } from "./CreateSellersUseCase";

class CreateSellersController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { name, cpf } = request.body;

    const createSellersUseCase = container.resolve(CreateSellersUseCase);

    await createSellersUseCase.execute({ name, cpf });

    return response.status(201).json();
  }
}

export { CreateSellersController };
