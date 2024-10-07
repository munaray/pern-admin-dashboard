import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";
import ErrorHandler from "../utils/error-handler";

const prisma = new PrismaClient();

export const getDashboardMetrics = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const popularProducts = await prisma.products.findMany({
      take: 15,
      orderBy: {
        stockQuantity: "desc",
      },
    });
    const salesSummary = await prisma.salesSummary.findMany({
      take: 5,
      orderBy: {
        date: "desc",
      },
    });
    const purchaseSummary = await prisma.purchaseSummary.findMany({
      take: 5,
      orderBy: {
        date: "desc",
      },
    });
    const expenseSummary = await prisma.expenseSummary.findMany({
      take: 5,
      orderBy: {
        date: "desc",
      },
    });
    const expenseByCategorySummaryRaw = await prisma.expenseByCategory.findMany(
      {
        take: 5,
        orderBy: {
          date: "desc",
        },
      }
    );
    const expenseByCategorySummary = expenseByCategorySummaryRaw.map(
      (item) => ({
        ...item,
        amount: item.amount.toString(),
      })
    );

    response.send({
      popularProducts,
      salesSummary,
      purchaseSummary,
      expenseSummary,
      expenseByCategorySummary,
    });
  } catch (error: any) {
    return next(new ErrorHandler(error.message, 500));
  }
};
