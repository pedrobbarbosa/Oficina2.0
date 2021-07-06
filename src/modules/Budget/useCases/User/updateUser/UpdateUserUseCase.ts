import { inject, injectable } from "tsyringe"
import { User } from "../../../entities/User";
import { IUsersRepository } from "../../../repositories/interfaces/IUsersRepository";


@injectable()
class UpdateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) { }

    public async execute(id: string, name: string, cpf: string): Promise<User> {
        const user = this.usersRepository.update(id, name, cpf);

        return user;
    }

}
export { UpdateUserUseCase }