import { Seller } from "../../entities/Seller";

interface ICreateSellerDTO {
  name: string;
  cpf: string;
}

interface ISellersRepository {
  findByCpf(cpf: string): Promise<Seller>;
  list(): Promise<Seller[]>;
  update(id: string, name: string, cpf: string): Promise<Seller>;
  create({ name, cpf }: ICreateSellerDTO): Promise<void>;
  delete(id: string): Promise<void>;
}
export { ISellersRepository, ICreateSellerDTO };
