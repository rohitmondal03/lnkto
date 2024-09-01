import { db } from "@/server/db";


type TRequestBody = {
  redirectPath: string;
}


export async function POST(req: Request) {
  const { redirectPath }: TRequestBody = await req.json() as TRequestBody;

  await db.link.delete({
    where: {
      redirectPath: redirectPath,
    }
  })
}