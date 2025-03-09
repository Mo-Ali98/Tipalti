import axios from "axios";
import { Transaction } from "../models/transaction";

const axiosInstance = axios.create({
  baseURL: "https://tip-transactions.vercel.app/api/transactions", // Replace with your API URL
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

export const fetchExpenses = async (): Promise<Transaction[]> => {
  try {
    const response = await axiosInstance.get("", {
      params: { page: 1 },
    });

    const { data } = response;

    const { transactions } = data;

    return transactions as Transaction[];
  } catch (error) {
    throw error;
  }
};
