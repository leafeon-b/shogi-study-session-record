import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const groupRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.group.findMany();
  }),
  getById: publicProcedure
    .input(
      z.object({
        id: z.string(),
      }),
    )
    .query(({ ctx, input }) => {
      return ctx.db.group.findUnique({
        where: { id: input.id },
      });
    }),
});
