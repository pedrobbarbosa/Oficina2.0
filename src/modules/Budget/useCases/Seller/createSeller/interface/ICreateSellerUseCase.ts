interface IRequest {
  name: string;
  cpf: string;
}

interface ICreateSellerUserCase {
  execute({ name, cpf }: IRequest);
}

export { ICreateSellerUserCase, IRequest };
