import { inject, injectable } from "tsyringe"
import { AppError } from "../../../../../../errors/AppError";
import { ISellersRepository } from "../../../../repositories/interfaces/ISellersRepository";

import {
  ICreateSellerUserCase,
  IRequest,
} from "../interface/ICreateSellerUseCase";


@injectable()
class CreateSellersUseCase implements ICreateSellerUserCase {
  constructor(
    @inject("SellersRepository")
    private sellersRepository: ISellersRepository) { }

  public async execute({ name, cpf }: IRequest): Promise<void> {
    const cpfAlreadyExists = await this.sellersRepository.findByCpf(cpf);

    if (cpfAlreadyExists) {
      throw new AppError("Cpf already exists", 400);
    }

    await this.sellersRepository.create({ name, cpf });
  }
}
export { CreateSellersUseCase };
