import { inject, injectable } from "tsyringe"
import { Seller } from "../../../entities/Seller";
import { ISellersRepository } from "../../../repositories/interfaces/ISellersRepository";


@injectable()
class DeleteSellerUseCase {
    constructor(
        @inject("SellersRepository")
        private sellersRepository: ISellersRepository) { }

    public async execute(id: string): Promise<void> {
        await this.sellersRepository.delete(id);
    }
}
export { DeleteSellerUseCase };
