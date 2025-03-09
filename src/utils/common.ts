import moment from "moment";

export const formatAmount = (amount: number): string => {
  return `£${amount.toFixed(2)}`;
};

export const formatTimestamp = (timestamp: string): string => {
  return moment(timestamp).format("h:mm - DD/MM/YYYY");
};
