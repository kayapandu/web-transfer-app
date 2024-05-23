import Breadcrumbs from '@/app/ui/common/breadcrumbs';
import Table from '../ui/dashboard/table';
 
export default async function Page() {

  return (
    <main className='bg-white p-10 rounded-md'>
      <Breadcrumbs
        breadcrumbs={[
          {
            label: 'Transaction History',
            href: '/dashboard',
            active: true,
          },
        ]}
      />
      <div>
        <Table />
      </div>
    </main>
  );
}