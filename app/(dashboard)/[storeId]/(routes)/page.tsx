import prismadb from '@/lib/prismadb';

// interface DashboardPageProps {
//   params: { storeId: string };
// }

// const DashboardPage: React.FC<DashboardPageProps> = async ({ params }) => {
//   const store = await prismadb.store.findFirst({
//     where: {
//       id: params.storeId,
//     },
//   });
//   return <div>Active Store: {store?.name}</div>;
// };

// export default DashboardPage;

interface DashboardPageProps {
  params: Promise<{ storeId: string }> | { storeId: string };
}

const DashboardPage = async ({ params }: DashboardPageProps) => {
  const { storeId } = await params;

  const store = await prismadb.store.findFirst({
    where: {
      id: storeId,
    },
  });

  return <div>Active Store: {store?.name}</div>;
};

export default DashboardPage;
