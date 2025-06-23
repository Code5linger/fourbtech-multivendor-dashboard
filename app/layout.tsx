import { type Metadata } from 'next';
// import { ClerkProvider, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { ClerkProvider } from '@clerk/nextjs';
// import SignInButtonComponent from './(auth)/sign-in/page';
// import SignUpButtonComponent from './(auth)/sign-up/page';

import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ModalProvider } from '@/providers/modal-provider';
import { ToastProvider } from '@/providers/toast-provider';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'FourbTech',
  description: 'A Multivendor E-commerce Site',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className="h-full">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased h-full`}
        >
          {/* <header className="flex justify-end items-center p-4 gap-4 h-16">
            <SignedOut>
              <SignInButtonComponent />
              <SignUpButtonComponent />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </header> */}
          <ToastProvider />
          <ModalProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
