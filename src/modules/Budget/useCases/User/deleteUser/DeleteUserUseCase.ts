import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../../errors/AppError";
import { IUsersRepository } from "../../../repositories/interfaces/IUsersRepository";



@injectable()
class DeleteUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) { }
    public async execute(id: string) {
        const userExists = await this.usersRepository.findById(id);

        if (!userExists) {
            throw new AppError("user not found", 404)
        }

        await this.usersRepository.delete(userExists.id);
    }
}

export { DeleteUserUseCase }