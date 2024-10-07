import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";

import ErrorHandler from "../utils/error-handler";

const prisma = new PrismaClient();

export const getProducts = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const search = request.query.search?.toString();
    const products = await prisma.products.findMany({
      where: {
        name: {
          contains: search,
        },
      },
    });
    response.send(products);
  } catch (error: any) {
    return next(new ErrorHandler(error.message, 500));
  }
};

export const createProduct = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { productId, name, price, rating, stockQuantity } = request.body;
    const product = await prisma.products.create({
      data: {
        productId,
        name,
        price,
        rating,
        stockQuantity,
      },
    });
    response.status(201).send(product);
  } catch (error: any) {
    return next(new ErrorHandler(error.message, 500));
  }
};
