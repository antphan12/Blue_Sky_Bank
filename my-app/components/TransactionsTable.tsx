import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { getTransactionStatus, formatAmount, removeSpecialCharacters } from '@/lib/utils';

interface Transaction {
  id: string;
  name: string;
  amount: string;
  date: string;
  type: string;
  channel: string;
  category: string;
}

interface TransactionsTableProps {
  transactions: Transaction[];
}

const TransactionsTable: React.FC<TransactionsTableProps> = ({ transactions }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="px-2">Name</TableHead>
          <TableHead className="px-2">Amount</TableHead>
          <TableHead className="px-2">Status</TableHead>
          <TableHead className="px-2">Date</TableHead>
          <TableHead className="px-2 max-md:hidden">Channel</TableHead>
          <TableHead className="px-2 max-md:hidden">Category</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {transactions && transactions.length > 0 ? (
          transactions.map((t: Transaction) => {
            const status = getTransactionStatus(new Date(t.date));
            const amount = formatAmount(parseFloat(t.amount));

            const isDebit = t.type === 'debit';
            const isCredit = t.type === 'credit';

            return (
              <TableRow key={t.id} className={`${isDebit || amount[0] === '-' ? 'bg-[#FFFBFA]' : 'bg-[#F6FEF9]'} !over:bg-none !border-b-DEFAULT`}>
                <TableCell className="max-w-[250px] pl-2 pr-10">
                  <div className="flex items-center gap-3">
                    <h1 className="text-14 truncate font-semibold text-[#344054]">
                      {removeSpecialCharacters(t.name)}
                    </h1>
                  </div>
                </TableCell>

                <TableCell className={`pl-2 pr-10 font-semibold ${
                  isDebit || amount[0] === '-' ?
                    'text-[#f04438]'
                    : 'text-[#039855]'
                }`}>
                  {isDebit ? `-${amount}` : isCredit ? amount : amount}
                </TableCell>

                <TableCell className="pl-2 pr-10">
                  {status}
                </TableCell>

                <TableCell className="pl-2 pr-10">
                  {new Date(t.date).toLocaleDateString()}
                </TableCell>

                <TableCell className="pl-2 pr-10 max-md:hidden">
                  {t.channel}
                </TableCell>

                <TableCell className="pl-2 pr-10 max-md:hidden">
                  {t.category}
                </TableCell>
              </TableRow>
            );
          })
        ) : (
          <tr>
            <td colSpan={6}>No transactions available</td>
          </tr>
        )}
      </TableBody>
    </Table>
  );
};

export default TransactionsTable;