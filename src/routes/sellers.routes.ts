import { Router } from "express";

import { CreateSellersController } from "../modules/Budget/useCases/Seller/createSeller/implementations/CreateSellersController";
import { ListSellersController } from "../modules/Budget/useCases/Seller/listSellers/ListSellersController";
import { UpdateSellerController } from "../modules/Budget/useCases/Seller/updateSeller/UpdateSellerController";
import { DeleteSellerController } from "../modules/Budget/useCases/Seller/deleteSeller/DeleteSellerController";

const sellersRoutes = Router();

const createSellerController = new CreateSellersController();
const listSellersController = new ListSellersController();
const updateSellerController = new UpdateSellerController();
const deleteSellerController = new DeleteSellerController();

sellersRoutes.post("/", createSellerController.handle);
sellersRoutes.get("/", listSellersController.handle);
sellersRoutes.put("/:id", updateSellerController.handle);
sellersRoutes.delete("/:id", deleteSellerController.handle);


export { sellersRoutes };
