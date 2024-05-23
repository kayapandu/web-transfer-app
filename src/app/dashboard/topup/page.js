import Form from '@/app/ui/dashboard/topupForm';
import Breadcrumbs from '@/app/ui/common/breadcrumbs';

export default async function Page() {

 
  return (
    <main className='bg-white p-10 rounded-md'>
      <Breadcrumbs
        breadcrumbs={[
          {
            label: 'Top Up',
            href: '/dashboard/topup',
            active: true,
          },
        ]}
      />
      <Form />
    </main>
  );
}