interface IRequest {
  description: string;
  value: number;
  seller_id: string;
  user_id: string;
}

interface ICreateBudgetUseCase {
  execute({ description, value, seller_id, user_id }: IRequest): Promise<Budget>;;
}

export { ICreateBudgetUseCase, IRequest };
