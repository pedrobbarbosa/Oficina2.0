import { Router } from "express";

import { budgetsRoutes } from "./budget.routes";
import { usersRoutes } from "./users.routes";
import { sellersRoutes } from "./sellers.routes";

const router = Router();

router.use("/sellers", sellersRoutes);
router.use("/users", usersRoutes);
router.use("/budgets", budgetsRoutes);

export { router };
