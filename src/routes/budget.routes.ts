import { Router } from "express";

import { CreateBudgetController } from "../modules/Budget/useCases/Budget/createBudget/implementations/CreateBudgetController";
import { ListBudgetsController } from "../modules/Budget/useCases/Budget/listBudgets/ListBudgetsController";
import { UpdateBudgetController } from "../modules/Budget/useCases/Budget/updateBudget/UpdateBudgetController";
import { DeleteBudgetController } from "../modules/Budget/useCases/Budget/deleteBudget/DeleteBudgetController";

const budgetsRoutes = Router();

const createBudgetController = new CreateBudgetController();
const listBudgetsController = new ListBudgetsController();
const updateBudgetsController = new UpdateBudgetController();
const deleteBudgetController = new DeleteBudgetController();

budgetsRoutes.post("/", createBudgetController.handle);
budgetsRoutes.get("/", listBudgetsController.handle);
budgetsRoutes.put("/:id", updateBudgetsController.handle);
budgetsRoutes.delete("/:id", deleteBudgetController.handle);

export { budgetsRoutes };
