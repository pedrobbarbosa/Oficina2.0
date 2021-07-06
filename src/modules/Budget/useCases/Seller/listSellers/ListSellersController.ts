import { Request, Response } from "express";
import { container } from "tsyringe"
import { ListSellersUseCase } from "./ListSellersUseCase";

class ListSellersController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const listSellersUseCase = container.resolve(ListSellersUseCase);

    const all = await listSellersUseCase.execute();

    return response.status(200).json(all);
  }
}
export { ListSellersController };
