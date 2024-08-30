import { getServerAuthSession } from '@/server/auth';
import { LinksContainer } from './_components/links-container';


export default async function ManageLinkPage() {
  const session = await getServerAuthSession();
  const userId = session?.user.id;

  return (
    <div className="flex min-h-full w-full flex-col space-y-8 py-6">
      <h1 className="text-3xl font-bold text-center">
        Manage Links
      </h1>
      <LinksContainer userId={userId ?? ""} />
    </div>
  )
}
