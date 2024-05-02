import express from "express";

import prisma from "../lib/prisma";

export const test = async (req: express.Request, res: express.Response) => {
  const data = await prisma.bENEFIT_PLANS.findMany();

  return res.json({
    data,
    message: "Hello, World!",
  });
};
