import { User } from "../../entities/User";

interface IUserDTO {
  name: string;
  cpf: string;
}
interface IUsersRepository {
  create({ name, cpf }: IUserDTO): void;
  delete(id: string): Promise<void>;
  update(id: string, name: string, cpf: string): Promise<User>;
  findByCpf(cpf: string): Promise<User>;
  findById(id: string): Promise<User>;
  findByName(name: string): Promise<User[]>;
  findByDate(date: Date): Promise<User[]>;
  all(): Promise<User[]>;
}

export { IUsersRepository, IUserDTO };
