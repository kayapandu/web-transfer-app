'use client';
import { useEffect } from 'react';
import { useTransaction } from '@/app/lib/hooks/useTransaction';
import clsx from 'clsx';

export default function Table() {
  const { handleTransactionHistory, handleBalance, transactionHistory } = useTransaction();

  useEffect(() => {
    handleTransactionHistory();
    handleBalance();
  }, []);

  const renderTableContent = () =>               
    (transactionHistory?.map((item, i) => (
      <tr className="bg-white border-b" key={`transaction-history-${i+1}`}>
        <th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">
            {i+1}
        </th>
        <td className={clsx(`px-6 py-4 font-medium text-black whitespace-nowrap`,
          {
            'text-green-600': item.mutation === 'in',
            'text-red-600': item.mutation === 'out',
          }
        )}>
            {item.description}
        </td>
        <td className={clsx(`px-6 py-4 font-medium text-black whitespace-nowrap`,
          {
            'text-green-600': item.mutation === 'in',
            'text-red-600': item.mutation === 'out',
          }
        )}>
            {item.type}
        </td>
        <td className={clsx(`px-6 py-4 font-semibold text-black whitespace-nowrap`,
          {
            'text-green-600': item.mutation === 'in',
            'text-red-600': item.mutation === 'out',
          }
        )}>
            {item.mutation === 'out' ? `- ${item.amount}` : item.amount}
        </td>
        <td className="px-6 py-4 font-medium text-black whitespace-nowrap">
            {item.created_date}
        </td>
      </tr>
    ))
  );

  return (
    <div className="relative overflow-x-auto lg:max-h-screen">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-orange-500 uppercase bg-gray-50">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        No
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Description
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Type
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Amount
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Date
                    </th>
                </tr>
            </thead>
            <tbody>
              {renderTableContent()}
            </tbody>
        </table>
    </div>
  )
}