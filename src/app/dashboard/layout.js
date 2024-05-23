import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

import SideNav from "@/app/ui/dashboard/sidenav";

export default function Layout({ children }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className={`${inter.className} flex-grow p-6 md:overflow-y-auto md:p-12`}>{children}</div>
    </div>
  );
}
