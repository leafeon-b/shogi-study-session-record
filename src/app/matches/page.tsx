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

  const matchesWithUsers = await Promise.all(
    matches.map(async (match) => {
      const users = await api.userMatch.getUsersByMatchId.query({
        id: match.id,
      });
      return { ...match, users };
    }),
  );

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
            {matchesWithUsers.map((item) => (
              <TableRow key={item.id}>
                <TableCell>研究会の名前が入るよ</TableCell>
                <TableCell>{item.users[0]?.name}</TableCell>
                <TableCell>{item.users[1]?.name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </main>
  );
}
