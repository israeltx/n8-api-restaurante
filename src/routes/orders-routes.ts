import { Router } from "express";
import { OrdersController } from "@/controllers/orders-controller";

const ordersRoutes = Router()
const orderController = new OrdersController()

// orderRoutes.get('/', orderController.index)
ordersRoutes.post('/', orderController.create)
// orderRoutes.put('/:id', orderController.update)
// orderRoutes.delete('/:id', orderController.remove)

export {ordersRoutes}