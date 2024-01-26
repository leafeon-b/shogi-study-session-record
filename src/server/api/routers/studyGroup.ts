import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const studyGroupRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.studyGroup.findMany();
  }),
});
