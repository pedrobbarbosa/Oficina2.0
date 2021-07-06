import { container } from "tsyringe";

import { UsersRepository } from "../../modules/Budget/repositories/implementations/UsersRepository";
import { IUsersRepository, IUserDTO } from "../../modules/Budget/repositories/interfaces/IUsersRepository";

import { SellersRepository } from "../../modules/Budget/repositories/implementations/SellersRepository";
import { ISellersRepository } from "../../modules/Budget/repositories/interfaces/ISellersRepository";

import { BudgetsRepository } from "../../modules/Budget/repositories/implementations/BudgetRepository";
import { IBudgetRepository } from "../../modules/Budget/repositories/interfaces/IBudgetRepository";

container.registerSingleton<IBudgetRepository>(
    'BudgetsRepository',
    BudgetsRepository
);

container.registerSingleton<ISellersRepository>(
    'SellersRepository',
    SellersRepository
);

container.registerSingleton<IUsersRepository>(
    'UsersRepository',
    UsersRepository
);
