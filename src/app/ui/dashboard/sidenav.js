'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/navLinks';
import HeaderLogo from '@/app/ui/headerLogo';
import { PowerIcon } from '@heroicons/react/24/outline';
import { useAuth } from '@/app/lib/context/AuthProvider';
import { useTransaction } from '@/app/lib/hooks/useTransaction';

export default function SideNav() {
  const { logOut } = useAuth();
  const { handleBalance, balance } = useTransaction();

  console.log('bal', balance);

  useEffect(() => {
    handleBalance();
  }, [balance]);

  return (
    <div className="flex h-full bg-white flex-col px-3 py-4 md:px-2">
      <Link
        className="mb-2 flex h-20 items-end justify-start rounded-md p-4 md:h-40"
        href="/dashboard"
      >
        <div className="w-32 flex items-center text-white md:w-40">
          <HeaderLogo />
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <div className='flex flex-col w-full p-5 rounded-sm border-lime-950'>
          <p className='text-sm'>Balance</p>
          <p className='text-lg font-semibold'>Rp {balance}</p>
        </div>
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
          <button onClick={logOut} className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
      </div>
    </div>
  );
}
