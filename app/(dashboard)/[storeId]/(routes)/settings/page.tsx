import { redirect } from 'next/navigation';
import prismadb from '@/lib/prismadb';
import { auth } from '@clerk/nextjs/server';
import { SettingsForm } from './components/settings-form';

// const SettingsPage = async ({ params }: { params: { storeId: string } }) => {
//   const { userId } = await auth();

//   if (!userId) {
//     redirect('/sign-in');
//   }

//   const store = await prismadb.store.findFirst({
//     where: {
//       id: params.storeId,
//       userId,
//     },
//   });

//   if (!store) {
//     redirect('/');
//   }

//   return (
//     <div className="flex-col">
//       <div className="flex-1 space-y-4 p-8 pt-6">
//         <SettingsForm initialData={store} />
//       </div>
//     </div>
//   );
// };

// export default SettingsPage;

interface SettingsPageProps {
  params: {
    storeId: string;
  };
}

const SettingsPage = async ({ params }: SettingsPageProps) => {
  //   const { userId } = await auth();

  const authResult = await auth();
  console.log('auth:', authResult);

  const { userId } = authResult;

  // ! 💀💀 Caused Issue - Sign In Screen
  if (!userId) {
    console.log('userId:', userId);
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
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <SettingsForm initialData={store} />
      </div>
    </div>
  );
};

export default SettingsPage;
