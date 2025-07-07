import { Router } from "express";
import { productsRoutes } from "./products-routes";
import { tablesRoutes } from "./table-routes";
import { tablesSessionsRoutes } from "./table-sessions-routes";

const routes = Router()
routes.use('/products', productsRoutes)
routes.use('/tables', tablesRoutes)
routes.use('/tables-sessions', tablesSessionsRoutes)

export {routes}