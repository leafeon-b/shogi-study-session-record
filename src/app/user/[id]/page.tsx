import { Divider, List, ListItem, Typography } from "@mui/material";
import Image from "next/image";
import { api } from "~/trpc/server";

export default async function User({ params }: { params: { id: string } }) {
  const user = await api.user.getById.query({ id: params.id });
  const groups = await api.userGroup.getGroupsByUserId.query({ id: params.id });

  return (
    <main className="flex h-screen justify-center">
      <div className="h-full w-full border-x md:max-w-2xl">
        <Typography variant="h4" component="h1" gutterBottom>
          ユーザプロフィール
        </Typography>
        <div className="flex">
          <Image
            src={user?.image ?? ""}
            alt={""}
            className="h-14 w-14 rounded-full"
            width={180}
            height={180}
          />
        </div>
        <Typography>{user?.name}</Typography>
        <Divider />
        <Typography variant="h5" component="h1" gutterBottom>
          所属一覧
        </Typography>
        <List>
          {groups.map((group) => (
            <ListItem key={group?.id}>
              <Typography>{group?.name}</Typography>
            </ListItem>
          ))}
        </List>
      </div>
    </main>
  );
}
