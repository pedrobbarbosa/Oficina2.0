import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  public handle(request: Request, response: Response): Response {
    const { name, cpf } = request.body;

    const createUserUseCase = container.resolve(CreateUserUseCase)

    createUserUseCase.execute({ name, cpf });

    return response.status(201).send({});
  }
}

export { CreateUserController };
