import { getCustomRepository } from "typeorm";
import Customer from "../typeorm/entities/Customer";
import CustomersRepository from "../typeorm/repositories/CustomersRepository";


class ListCustomerService {
  public async execute(): Promise<Customer[]> {
    const usersRepository = getCustomRepository(CustomersRepository)

    const customers = await usersRepository.find()

    return customers

  }
}

export default ListCustomerService
