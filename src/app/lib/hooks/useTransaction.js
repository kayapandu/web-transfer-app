import { useState } from 'react';
import { useRouter } from 'next/navigation';
import transactionService from "../services/transactionService";

export const useTransaction = () => {
  const router = useRouter();

  const [transactionHistory, setTransactionHistory] = useState([{
    description: '',
    type: '',
    amount: 0,
    date: ''
  }]);
  const [balance, setBalance] = useState(0);

  const handleTopUp = async (formData) => {
    const data = {
      amount: formData.get('amount'),
    }

    try {
      transactionService.topup(data)
        .then(res => {
          router.push('/dashboard');
          return Promise.resolve(res);
        })
    } catch (err) {
      console.error(err);
      throw new Error(err);
    }

  }

  const handleTransfer = async (formData) => {
    const data = {
      to_username: formData.get('username'),
      amount: formData.get('amount')
    }

    try {
      transactionService.transfer(data)
        .then(res => {
          router.push('/dashboard');
          return Promise.resolve(res);
        })
    } catch (err) {
      console.error(err);
      throw new Error(err);
    }
  }

  const handleInquiry = async (formData) => {
    const data = {
      to_username: formData.get('username'),
    }

    try {
      transactionService.inquiry(data)
        .then(res => {
          return Promise.resolve(res);
        })
    } catch (err) {
      console.error(err);
      throw new Error(err);
    }
  }

  const handleTransactionHistory = async () => {
    try {
      transactionService.transactionHistory()
        .then(res => {
          setTransactionHistory(res.data);
          return Promise.resolve(res);
        })
    } catch (err) {
      console.error(err);
      throw new Error(err);
    }
  }

  const handleBalance = async () => {
    try {
      transactionService.balance()
        .then(res => {
          setBalance(res.data.total_balance);
          return Promise.resolve(res);
        })
    } catch (err) {
      console.error(err);
      throw new Error(err);
    }
  }

  return { handleTopUp, handleTransfer, handleBalance, handleInquiry, handleTransactionHistory, transactionHistory, balance };
};
