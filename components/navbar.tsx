// import { UserButton, auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

// import StoreSwitcher from '@/components/store-switcher';
// import { MainNav } from '@/components/main-nav';
// import { ThemeToggle } from '@/components/theme-toggle';
import prismadb from '@/lib/prismadb';
import { auth } from '@clerk/nextjs/server';
import StoreSwitcher from './store-switcher';
import { MainNav } from './main-nav';
import { ThemeToggle } from './theme-toggle';
import { UserButton } from '@clerk/nextjs';

const Navbar = async () => {
  const { userId } = await auth();

  if (!userId) {
    redirect('/sign-in');
  }

  const stores = await prismadb.store.findMany({
    where: {
      userId,
    },
  });

  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <StoreSwitcher items={stores} />
        <MainNav className="mx-6" />
        <div className="ml-auto flex items-center space-x-4">
          <ThemeToggle />
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
