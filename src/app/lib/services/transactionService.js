import ApiService from "./api";

const token = localStorage.getItem('userToken');

console.log('xxx', token);

const HEADERS = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Access-Control-Allow-Origin':  '*',
  "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  'Authorization' : `Bearer ${token}`,
};

const client = new ApiService({ baseURL: 'http://localhost:9001', headers: HEADERS });
const transactionService = {};


transactionService.topup = (payload) => client.post('./topup', payload);
transactionService.transfer = (payload) => client.post('./transfer', payload);
transactionService.inquiry = (payload) => client.post('./inquiry', payload);
transactionService.transactionHistory = () => client.get('./transaction-history');
transactionService.balance = () => client.get('./balance');


export default transactionService;