import { postRouter } from "~/server/api/routers/post";
import { createTRPCRouter } from "~/server/api/trpc";
import { studyGroupRouter } from "./routers/studyGroup";
import { userRouter } from "./routers/user";
import { matchRouter } from "./routers/match";
import { groupWorkRouter } from "./routers/groupWork";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  post: postRouter,
  studyGroup: studyGroupRouter,
  user: userRouter,
  match: matchRouter,
  groupWork: groupWorkRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
