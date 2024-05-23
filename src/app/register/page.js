import HeaderLogo from '@/app/ui/headerLogo';
import RegisterForm from '@/app/ui/register/registerForm';
 
export default function RegisterPage() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="flex h-20 w-full items-center content-center rounded-lg bg-yellow-100 p-3 md:h-36">
          <div className="flex self-center content-center items-center justify-center text-white md:w-36">
            <HeaderLogo />
          </div>
        </div>
        <RegisterForm />
      </div>
    </main>
  );
}