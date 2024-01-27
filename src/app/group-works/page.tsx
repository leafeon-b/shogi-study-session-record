import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { unstable_noStore as noStore } from "next/cache";
import { api } from "~/trpc/server";

export default function Home() {
  noStore();

  return <HomePage />;
}

async function HomePage() {
  const data = await api.groupWork.getAll.query();

  return (
    <main className="flex h-screen justify-center">
      <div className="h-full w-full border-x md:max-w-2xl">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>研究会名</TableCell>
              <TableCell>回次</TableCell>
              <TableCell>説明</TableCell>
              <TableCell>作成日</TableCell>
              <TableCell>最終更新日</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map(async (item) => (
              <TableRow key={item.id}>
                <TableCell>
                  {(await api.group.getById.query({ id: item.groupId }))?.name}
                </TableCell>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.description}</TableCell>
                <TableCell>{item.createdAt.toLocaleDateString()}</TableCell>
                <TableCell>{item.updatedAt.toLocaleDateString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </main>
  );
}
