import { NextFunction, Request, Response } from "express";
import { AppError } from "@/utils/AppError";
import { z } from "zod";
import { knex } from "@/database/knex";

class ProductController {
  async index(request: Request, response:Response, next:NextFunction) {
    try {
      const {name} = request.query

      const products = await knex<ProductRepostiory>('products')
      .select()
      .whereLike('name', `%${name ?? ''}%`)
      .orderBy('name')

      return response.json(products)
    } catch (error) {
      next(error)
    }
  }

  async create(request: Request, response:Response, next:NextFunction) {
    try {
      const bodySchema = z.object({
        name: z.string().trim().min(6),
        price: z.number().gt(0)
      })

      const {name, price} = bodySchema.parse(request.body)

      await knex<ProductRepostiory>('products').insert({name, price})

      return response.status(201).json()

    } catch (error) {
      next(error)
    }
  }
}

export {ProductController}