import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import Image from "next/image";
import { api } from "~/trpc/server";

export default async function Users() {
  const users = await api.user.getAll.query();

  return (
    <main className="flex h-screen justify-center">
      <div className="h-full w-full border-x md:max-w-2xl">
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
                <TableCell>{item.name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </main>
  );
}
