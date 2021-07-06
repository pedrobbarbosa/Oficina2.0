import { inject, injectable } from "tsyringe"

import { Seller } from "../../../entities/Seller";
import { ISellersRepository } from "../../../repositories/interfaces/ISellersRepository";

@injectable()
class ListSellersUseCase {
  constructor(
    @inject("SellersRepository")
    private sellersRepository: ISellersRepository) { }

  public async execute(): Promise<Seller[]> {
    const sellers = await this.sellersRepository.list();

    return sellers;
  }
}
export { ListSellersUseCase };
