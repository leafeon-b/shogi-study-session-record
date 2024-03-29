import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
} from "@mui/material";
import Link from "next/link";
import { getServerAuthSession } from "~/server/auth";

const drawerWidth = 240;

// ナビゲーション
const Navigation = async () => {
  const session = await getServerAuthSession();
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar className="container mx-auto flex max-w-screen-md items-center justify-between px-2 py-3">
          <Link href="/" className="cursor-pointer text-xl font-bold">
            将棋研究会記録帳
          </Link>
          <Link
            href={session ? "/api/auth/signout" : "/api/auth/signin"}
            className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
          >
            {session ? "Sign out" : "Sign in"}
          </Link>
          <div>{session && <span>Logged in as {session.user?.name}</span>}</div>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          <ListItem disablePadding>
            <ListItemButton LinkComponent="a" href="/groups">
              <ListItemText
                className="flex justify-center"
                primary="研究会一覧"
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton LinkComponent="a" href="/group-works">
              <ListItemText
                className="flex justify-center"
                primary="開催一覧"
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton LinkComponent="a" href="/matches">
              <ListItemText
                className="flex justify-center"
                primary="対局結果一覧"
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton LinkComponent="a" href="/users">
              <ListItemText
                className="flex justify-center"
                primary="ユーザ一覧"
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar />
      </Box>
    </Box>
  );
};

export default Navigation;
