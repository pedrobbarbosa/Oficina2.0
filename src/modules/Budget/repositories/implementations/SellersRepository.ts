import { getRepository, Repository } from "typeorm";
import { Seller } from "../../entities/Seller";
import {
  ICreateSellerDTO,
  ISellersRepository,
} from "../interfaces/ISellersRepository";

class SellersRepository implements ISellersRepository {

  private repository: Repository<Seller>;

  // private static INSTANCE: SellersRepository;

  constructor() {
    this.repository = getRepository(Seller);
  }

  // public static getInstance(): SellersRepository {
  //   if (!SellersRepository.INSTANCE) {
  //     SellersRepository.INSTANCE = new SellersRepository();
  //   }
  //   return SellersRepository.INSTANCE;
  // }

  public async create({ name, cpf }: ICreateSellerDTO): Promise<void> {
    const seller: Seller = this.repository.create({ name, cpf });
    await this.repository.save(seller);
  }

  public async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }

  public async update(id: string, name: string, cpf: string): Promise<Seller> {
    return await this.repository.save({ id, name, cpf })
  }

  public async list(): Promise<Seller[]> {
    return await this.repository.find();
  }

  public async findByCpf(cpf: string): Promise<Seller> {
    const seller = await this.repository.findOne({ cpf });
    return seller;
  }
}

export { SellersRepository };
