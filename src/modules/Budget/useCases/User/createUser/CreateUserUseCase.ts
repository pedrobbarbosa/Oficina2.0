import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../../errors/AppError";

import { IUsersRepository } from "../../../repositories/interfaces/IUsersRepository";

interface IRequest {
  name: string;
  cpf: string;
}

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository) { }

  public async execute({ name, cpf }: IRequest): Promise<void> {
    const userAlreadyExists = await this.usersRepository.findByCpf(cpf);

    if (userAlreadyExists) {
      throw new AppError("user already exists", 400);
    }
    this.usersRepository.create({ name, cpf });
  }
}
export { CreateUserUseCase };
