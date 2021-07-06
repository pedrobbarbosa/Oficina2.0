import { inject, injectable } from "tsyringe"
import { Seller } from "../../../entities/Seller";
import { ISellersRepository } from "../../../repositories/interfaces/ISellersRepository";


@injectable()
class UpdateSellerUseCase {
    constructor(
        @inject("SellersRepository")
        private sellersRepository: ISellersRepository) { }

    public async execute(id: string, name: string, cpf: string): Promise<Seller> {
        const seller: Seller = await this.sellersRepository.update(id, name, cpf);

        return seller;
    }
}
export { UpdateSellerUseCase };
