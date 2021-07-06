import { getRepository, Repository } from "typeorm";
import { User } from "../../entities/User";
import {
  IUsersRepository, IUserDTO
} from "../interfaces/IUsersRepository";

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  public async create({ name, cpf }: IUserDTO): Promise<void> {
    const user: User = this.repository.create({ name, cpf });
    await this.repository.save(user);
  }

  public async update(id: string, name: string, cpf: string) {
    return await this.repository.save({ id, name, cpf })
  }

  public async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }

  async findById(id: string): Promise<User> {
    const user = await this.repository.findOne({ id });
    return user;
  }

  async findByName(name: string): Promise<User[]> {
    const user = await this.repository.find({ name });
    return user;
  }

  async findByDate(date: Date): Promise<User[]> {
    const user = await this.repository.find({ date });
    return user;
  }

  async findByCpf(cpf: string): Promise<User> {
    const user = await this.repository.findOne({ cpf });
    return user;
  }

  public async all(): Promise<User[]> {
    const all = await this.repository.find();
    return all;
  }
}

export { UsersRepository };
