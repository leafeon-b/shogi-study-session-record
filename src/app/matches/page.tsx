import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { api } from "~/trpc/server";

export default async function Matches() {
  const matches = await api.match.getAll.query();

  return (
    <main className="flex h-screen justify-center">
      <div className="h-full w-full border-x md:max-w-2xl">
        <Typography variant="h4" component="h1" gutterBottom>
          対局結果一覧
        </Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>名前</TableCell>
              <TableCell>対局者1</TableCell>
              <TableCell>対局者2</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {matches.map((item) => (
              <TableRow key={item.id}>
                <TableCell>研究会の名前が入るよ</TableCell>
                <TableCell>対局者1の名前が入るよ</TableCell>
                <TableCell>対局者2の名前が入るよ</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </main>
  );
}
