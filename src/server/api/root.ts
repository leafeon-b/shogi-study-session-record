import { postRouter } from "~/server/api/routers/post";
import { createTRPCRouter } from "~/server/api/trpc";
import { groupRouter } from "./routers/group";
import { userRouter } from "./routers/user";
import { matchRouter } from "./routers/match";
import { groupWorkRouter } from "./routers/groupWork";
import { userMatchRouter } from "./routers/userMatch";
import { userGroupRouter } from "./routers/userGroup";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  post: postRouter,
  group: groupRouter,
  user: userRouter,
  match: matchRouter,
  groupWork: groupWorkRouter,
  userMatch: userMatchRouter,
  userGroup: userGroupRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
