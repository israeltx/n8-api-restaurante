import { NextFunction, Request, Response } from "express";
import { AppError } from "@/utils/AppError";
import { z } from "zod";
import { knex } from "@/database/knex";

class TablesSessionsController {
  async create(request: Request, response:Response, next:NextFunction) {
    try {
      // const bodySchema = z.object({
      //   name: z.string().trim().min(6),
      //   price: z.number().gt(0)
      // })

      // const {name, price} = bodySchema.parse(request.body)

      // await knex<ProductRepostiory>('products').insert({name, price})

      return response.status(201).json()

    } catch (error) {
      next(error)
    }
  }

  // async update(request: Request, response:Response, next:NextFunction) {
  //   try {
  //     const id = z.string()
  //     .transform((value) => Number(value))
  //     .refine((value) => !isNaN(value), {message: 'ID must be a number'})
  //     .parse(request.params.id)
      
  //     const bodySchema = z.object({
  //       name: z.string().trim().min(6),
  //       price: z.number().gt(0)
  //     })      

  //     const product = await knex<ProductRepostiory>('products')
  //     .select()
  //     .where({id})
  //     .first()

  //     if (!product) {
  //       throw new AppError('Produto não encontrado')
  //     }

  //     const {name, price} = bodySchema.parse(request.body)

  //     await knex<ProductRepostiory>('products')
  //     .update({name, price, updated_at: knex.fn.now()})
  //     .where({id})

  //     return response.status(201).json()

  //   } catch (error) {
  //     next(error)
  //   }
  // }  

  // async remove(request: Request, response:Response, next:NextFunction) {
  //   try {
  //     const id = z.string()
  //     .transform((value) => Number(value))
  //     .refine((value) => !isNaN(value), {message: 'ID must be a number'})
  //     .parse(request.params.id)

  //     const product = await knex<ProductRepostiory>('products')
  //     .select()
  //     .where({id})
  //     .first()

  //     if (!product) {
  //       throw new AppError('Produto não encontrado')
  //     }

  //     await knex<ProductRepostiory>('products')
  //     .delete()
  //     .where({id})

  //     return response.json()

  //   } catch (error) {
  //     next(error)
  //   }
  // }  
  
}

export {TablesSessionsController}