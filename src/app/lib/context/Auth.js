'use client';
import { useRouter, usePathname } from "next/navigation";
import { useAuth } from "./AuthProvider";

const whiteListRoute = ['login', 'register'];

export const ProtectRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const router = useRouter();
  const pathName = usePathname().replace("/", "");
  
  if (!!pathName && !isAuthenticated && !whiteListRoute.includes(pathName)) {
    router.push('/'); 
  }

  return children;
};