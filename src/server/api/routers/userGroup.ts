import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const userGroupRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.userGroup.findMany();
  }),
  getUsersByGroupId: publicProcedure
    .input(
      z.object({
        id: z.string(),
      }),
    )
    .query(async ({ ctx, input }) => {
      const userGroups = await ctx.db.userGroup.findMany({
        where: { groupId: input.id },
      });
      return Promise.all(
        userGroups.map(async (userGroup) => {
          return await ctx.db.user.findUnique({
            where: { id: userGroup.userId },
          });
        }),
      );
    }),
  getGroupsByUserId: publicProcedure
    .input(
      z.object({
        id: z.string(),
      }),
    )
    .query(async ({ ctx, input }) => {
      const userGroups = await ctx.db.userGroup.findMany({
        where: { userId: input.id },
      });
      return Promise.all(
        userGroups.map(async (userGroup) => {
          return await ctx.db.group.findUnique({
            where: { id: userGroup.groupId },
          });
        }),
      );
    }),
});
