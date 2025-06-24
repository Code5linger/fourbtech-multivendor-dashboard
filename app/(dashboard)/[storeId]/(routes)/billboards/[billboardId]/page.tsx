import prismadb from '@/lib/prismadb';
import { BillboardForm } from './components/billboard-form';

const BillboardPage = async ({
  params,
}: {
  params: Promise<{ billboardId: string }> | { billboardId: string };
}) => {
  const { billboardId } = await params; // Await params here

  // const BillboardPage = async ({
  //   params,
  // }: {
  //   params: { billboardId: string };
  // }) => {
  //   const { billboardId } = params;

  const billboard = await prismadb.billboard.findUnique({
    where: {
      id: billboardId,
    },
  });

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <BillboardForm initialData={billboard} />
        <h1>O_O</h1>
      </div>
    </div>
  );
};

export default BillboardPage;

// import prismadb from '@/lib/prismadb';
// import { BillboardForm } from './components/billboard-form';

// const BillboardPage = async ({
//   params,
// }: {
//   params: Promise<{ billboardId: string }> | { billboardId: string };
// }) => {
//   const { billboardId } = await params; // Await params here

//   const billboard = await prismadb.billboard.findUnique({
//     where: {
//       id: billboardId,
//     },
//   });

//   return (
//     <div className="flex-col">
//       <div className="flex-1 space-y-4 p-8 pt-6">
//         <BillboardForm initialData={billboard} />
//         <h1>O_O</h1>
//       </div>
//     </div>
//   );
// };

// export default BillboardPage;
