import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeleteSellerUseCase } from "./DeleteSellerUseCase";

class DeleteSellerController {
    public async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const updateSellerUseCase = container.resolve(DeleteSellerUseCase);

        await updateSellerUseCase.execute(id);

        return response.status(200).json();
    }
}

export { DeleteSellerController }