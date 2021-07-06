import { container } from "tsyringe"
import { Request, Response } from "express";

import { ReadUsersUseCase } from "./ReadUsersUseCase"
class ReadUsersController {
    public async handle(request: Request, response: Response): Promise<Response> {
        const readUsersUseCase = container.resolve(ReadUsersUseCase);

        const all = await readUsersUseCase.execute();

        return response.status(200).json(all);
    }
}
export { ReadUsersController }