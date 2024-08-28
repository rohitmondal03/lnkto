import { getServerAuthSession } from '@/server/auth';
import { db } from '@/server/db'
import { Input } from '@/components/ui/input';


export default async function ManageLinkPage() {
  const session = await getServerAuthSession();
  const userId = session?.user.id;

  const linkData = await db.link.findMany({
    where:{
      userId: userId ?? "",
    },
  })

  return (
    <div>
      <h1 className='text-2xl'>
        Manage Links
      </h1>
      <div>
        {linkData.map((data) => (
          <Input
            key={data.id}
            value={data.linkTitle}
            name={data.linkTitle}
          />
        ))}
      </div>
    </div>
  )
}
