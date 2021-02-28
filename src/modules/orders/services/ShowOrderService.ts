import CustomersRepository from "@modules/customers/typeorm/repositories/CustomersRepository";
import { ProductRepository } from "@modules/products/typeorm/repositories/ProductsRepository";
import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Order from "../typeorm/entities/Order";
import { OrderstRepository } from "../typeorm/repositories/OrdersRepository";

interface IRequest {
  id: string
}

class ShowOrderService {
  public async execute({ id }: IRequest) : Promise<Order> {
    const ordersRepository = getCustomRepository(OrderstRepository)

    const order = await ordersRepository.findById(id)

    if(!order) {
      throw new AppError('Order not found')
    }

    return order

  }
}

export default ShowOrderService
