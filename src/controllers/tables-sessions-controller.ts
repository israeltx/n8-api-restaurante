import { NextFunction, Request, Response } from "express";
import { AppError } from "@/utils/AppError";
import { z } from "zod";
import { knex } from "@/database/knex";

class TablesSessionsController {
  async create(request: Request, response:Response, next:NextFunction) {
    try {
      const bodySchema = z.object({
        table_id: z.number()
      })

      const {table_id} = bodySchema.parse(request.body)

      const session = await knex<TablesSessionsRepository>('tables_sessions')
      .where({table_id})
      .orderBy('opened_at', 'desc')
      .first()

      if (session && !session.closed_at) {
        throw new AppError('Table in use')
      }

      await knex<TablesSessionsRepository>('tables_sessions')
      .insert({
        table_id,
        opened_at: knex.fn.now()
      })

      return response.status(201).json()

    } catch (error) {
      next(error)
    }
  }

  async index(request: Request, response:Response, next:NextFunction) {
    try {
      const sessions = await knex<TablesSessionsRepository>('tables_sessions')
      .orderBy('closed_at')

      return response.json(sessions)

    } catch (error) {
      next(error)
    }
  }  

  async update(request: Request, response:Response, next:NextFunction) {
    try {
      const id = z.string()
      .transform((value) => Number(value))
      .refine((value) => !isNaN(value), {message: 'ID must be a number'})
      .parse(request.params.id)
      
      // const bodySchema = z.object({
      //   name: z.string().trim().min(6),
      //   price: z.number().gt(0)
      // })      

      // const product = await knex<ProductRepostiory>('products')
      // .select()
      // .where({id})
      // .first()

      // if (!product) {
      //   throw new AppError('Produto não encontrado')
      // }

      // const {name, price} = bodySchema.parse(request.body)

      // await knex<ProductRepostiory>('products')
      // .update({name, price, updated_at: knex.fn.now()})
      // .where({id})

      return response.status(201).json()

    } catch (error) {
      next(error)
    }
  }  
}

export {TablesSessionsController}