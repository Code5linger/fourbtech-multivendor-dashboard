import { redirect } from 'next/navigation';
import Navbar from '@/components/navbar';
import prismadb from '@/lib/prismadb';
import { auth } from '@clerk/nextjs/server';

export default async function DashboardLayout(props: {
  children: React.ReactNode;
  // params: { storeId: string };
  params: Promise<{ storeId: string }> | { storeId: string };
}) {
  const { children } = props;
  const params = await props.params;
  const { userId } = await auth();

  if (!userId) {
    redirect('/sign-in');
  }

  const store = await prismadb.store.findFirst({
    where: {
      id: params.storeId,
      userId,
    },
  });

  if (!store) {
    redirect('/');
  }

  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
