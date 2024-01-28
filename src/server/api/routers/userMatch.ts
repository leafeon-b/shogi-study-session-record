import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const userMatchRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.userMatch.findMany();
  }),
  getUsersByMatchId: publicProcedure
    .input(
      z.object({
        id: z.string(),
      }),
    )
    .query(async ({ ctx, input }) => {
      const userMatches = await ctx.db.userMatch.findMany({
        where: { matchId: input.id },
      });
      return Promise.all(
        userMatches.map(async (userMatch) => {
          return await ctx.db.user.findUnique({
            where: { id: userMatch.userId },
          });
        }),
      );
    }),
});
