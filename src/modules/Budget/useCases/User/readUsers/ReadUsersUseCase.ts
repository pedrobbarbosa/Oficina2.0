import { inject, injectable } from "tsyringe";
import { User } from "../../../entities/User";

import { IUsersRepository } from "../../../repositories/interfaces/IUsersRepository";

@injectable()
class ReadUsersUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) { }

    public async execute(): Promise<User[]> {
        const all = await this.usersRepository.all();
        return all;
    }

}
export { ReadUsersUseCase }