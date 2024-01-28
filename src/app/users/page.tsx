import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { api } from "~/trpc/server";

export default async function Users() {
  const users = await api.user.getAll.query();

  return (
    <main className="flex h-screen justify-center">
      <div className="h-full w-full border-x md:max-w-2xl">
        <Typography variant="h4" component="h1" gutterBottom>
          ユーザ一覧
        </Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>名前</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((item) => (
              <TableRow key={item.id}>
                <TableCell>
                  <div className="flex">
                    <Image
                      src={item.image ?? ""}
                      alt={""}
                      className="h-14 w-14 rounded-full"
                      width={180}
                      height={180}
                    />
                  </div>
                </TableCell>
                <TableCell>
                  <Link href={`/user/${item.id}`}>{item.name}</Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </main>
  );
}
