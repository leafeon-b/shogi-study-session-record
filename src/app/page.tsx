import { unstable_noStore as noStore } from "next/cache";

export default async function Home() {
  noStore();

  return (
    <div>
      <div>Main</div>
    </div>
  );
}
