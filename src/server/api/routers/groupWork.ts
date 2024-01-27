import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const groupWorkRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.groupWork.findMany();
  }),
});
