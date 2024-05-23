import { lusitana } from '@/app/ui/fonts';
import Image from "next/image";

export default function HeaderLogo() {
  return (
    <div
      className={`${lusitana.className} w-full flex gap-2 self-center content-center items-center  text-black`}
    >
      <Image
        src="/flip.svg"
        alt="Flip Logo"
        className='flex self-center content-center'
        width={100}
        height={24}
      />
      <p className="text-[34px]">Wallet</p>
      <p></p>
    </div>
  );
}
