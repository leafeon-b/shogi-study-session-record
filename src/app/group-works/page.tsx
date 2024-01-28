import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { api } from "~/trpc/server";

export default async function GroupWorks() {
  const groupWorks = await api.groupWork.getAll.query();

  // 各groupWorkについて、関連するgroupの情報を取得
  const groupWorksWithGroupName = await Promise.all(
    groupWorks.map(async (groupWork) => {
      const group = await api.group.getById.query({ id: groupWork.groupId });
      return { ...groupWork, groupName: group?.name ?? "Unknown" };
    }),
  );

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
            {groupWorksWithGroupName.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.groupName}</TableCell>
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
