import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { api } from "~/trpc/server";

export default async function Groups() {
  const data = await api.group.getAll.query();

  return (
    <main className="flex h-screen justify-center">
      <div className="h-full w-full border-x md:max-w-2xl">
        <Typography variant="h4" component="h1" gutterBottom>
          研究会一覧
        </Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>名前</TableCell>
              <TableCell>説明</TableCell>
              <TableCell>作成日</TableCell>
              <TableCell>最終更新日</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.name}</TableCell>
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
