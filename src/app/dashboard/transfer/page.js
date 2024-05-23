import Form from '@/app/ui/dashboard/transferForm';
import Breadcrumbs from '@/app/ui/common/breadcrumbs';
 
export default async function Page() {
 
  return (
    <main className='bg-white p-10 rounded-md'>
      <Breadcrumbs
        breadcrumbs={[
          {
            label: 'Transfer',
            href: '/dashboard/transfer',
            active: true,
          },
        ]}
      />
      <Form />
    </main>
  );
}