import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { unstable_noStore as noStore } from "next/cache";
import Image from "next/image";
import { api } from "~/trpc/server";

export default function Home() {
  noStore();

  return <HomePage />;
}

async function HomePage() {
  const data = await api.match.getAll.query();

  return (
    <main className="flex h-screen justify-center">
      <div className="h-full w-full border-x md:max-w-2xl">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>名前</TableCell>
              <TableCell>対局者1</TableCell>
              <TableCell>対局者2</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item) => (
              <TableRow key={item.id}>
                <TableCell>研究会の名前が入るよ</TableCell>
                <TableCell>対局者1の名前が入るよ</TableCell>
                <TableCell>対局者2の名前が入るよ</TableCell>
                {/* <TableCell>{item.}</TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </main>
  );
}
