import apple from "@/assets/carousel/apple.svg";
import meta from "@/assets/carousel/meta.svg"
import google from "@/assets/carousel/google.svg"
import tesla from "@/assets/carousel/tesla.svg"
import microsoft from "@/assets/carousel/microsoft.svg"
import amazon from "@/assets/carousel/amazon.svg"

import apple_icon from "@/assets/brands/apple.svg"
import amazon_icon from "@/assets/brands/amazon.svg"
import microsoft_icon from "@/assets/brands/microsoft.svg"
import tesla_icon from "@/assets/brands/tesla.svg"
import google_icon from "@/assets/brands/google.svg"
import meta_icon from "@/assets/brands/meta.svg"
import netflix_icon from "@/assets/brands/netflix.svg"

export interface Entity {
  name: string;
  icon: string;
  graph?: string;
  share: number;
  share_usd: number;
  return: number;
  daily_increase: number;
  tx_amount: number;
};

export interface Transaction {
  asset: string;
  is_buy: boolean;
  interest_rate: number;
  value: number;
  tx_date: Date;
}

export const stock_data: Array<Entity> = [
  {
    name: "apple",
    graph: apple,
    icon: apple_icon,
    share: 16,
    share_usd: 410.5,
    return: 0.1,
    daily_increase: -0.02,
    tx_amount: 1_000
  },
  {
    name: "meta",
    graph: meta,
    icon: meta_icon,
    share: 32,
    share_usd: 167.36,
    return: 0.2,
    daily_increase: -0.01,
    tx_amount: 100_000
  },
  {
    name: "google",
    graph: google,
    icon: google_icon,
    share: 100,
    share_usd: 743.76,
    return: 0.95,
    daily_increase: 0.075,
    tx_amount: 10_000
  },
  {
    name: "tesla",
    graph: tesla,
    icon: tesla_icon,
    share: 10,
    share_usd: 234.09,
    return: 0.15,
    daily_increase: -0.19,
    tx_amount: 10_000_000
  },
  {
    name: "microsoft",
    graph: microsoft,
    icon: microsoft_icon,
    share: 16,
    share_usd: 410.5,
    return: 1,
    daily_increase: -0.14,
    tx_amount: 1_000_000
  },
  {
    name: "amazon",
    graph: amazon,
    icon: amazon_icon,
    share: 24,
    share_usd: 743.76,
    return: 2,
    daily_increase: 0.09,
    tx_amount: 1_000_000
  },
  {
    name: "netflix",
    icon: netflix_icon,
    share: 0,
    share_usd: 1000.76,
    return: 0.1,
    daily_increase: -0.15,
    tx_amount: 100_000_000
  },
];

export const transaction_data: Array<Transaction> = [
  { asset: "microsoft", is_buy: false, interest_rate: 1.5, value: 2500, tx_date: new Date("2024-01-02") },
  { asset: "meta", is_buy: true, interest_rate: 1.1, value: 2000, tx_date: new Date("2024-01-03") },
  { asset: "amazon", is_buy: false, interest_rate: 1.3, value: 2500, tx_date: new Date("2024-01-04") },
  { asset: "google", is_buy: true, interest_rate: 1.4, value: 3000, tx_date: new Date("2024-01-05") },
  { asset: "tesla", is_buy: false, interest_rate: 1.6, value: 3500, tx_date: new Date("2024-01-06") },
  { asset: "apple", is_buy: true, interest_rate: 1.2, value: 4000, tx_date: new Date("2024-01-07") },
  { asset: "microsoft", is_buy: false, interest_rate: 1.5, value: 4500, tx_date: new Date("2024-01-08") },
  { asset: "meta", is_buy: true, interest_rate: 1.1, value: 5000, tx_date: new Date("2024-01-09") },
  { asset: "amazon", is_buy: false, interest_rate: 1.3, value: 5500, tx_date: new Date("2024-01-10") },
  { asset: "google", is_buy: true, interest_rate: 1.4, value: 6000, tx_date: new Date("2024-01-11") },
  { asset: "tesla", is_buy: false, interest_rate: 1.6, value: 6500, tx_date: new Date("2024-01-12") },
  { asset: "apple", is_buy: true, interest_rate: 1.2, value: 7000, tx_date: new Date("2024-01-13") },
  { asset: "microsoft", is_buy: false, interest_rate: 1.5, value: 7500, tx_date: new Date("2024-01-14") },
  { asset: "meta", is_buy: true, interest_rate: 1.1, value: 8000, tx_date: new Date("2024-01-15") },
  { asset: "amazon", is_buy: false, interest_rate: 1.3, value: 8500, tx_date: new Date("2024-01-16") },
  { asset: "google", is_buy: true, interest_rate: 1.4, value: 9000, tx_date: new Date("2024-01-17") },
  { asset: "tesla", is_buy: false, interest_rate: 1.6, value: 9500, tx_date: new Date("2024-01-18") },
  { asset: "apple", is_buy: true, interest_rate: 1.2, value: 10000, tx_date: new Date("2024-01-19") },
  { asset: "microsoft", is_buy: false, interest_rate: 1.5, value: 10500, tx_date: new Date("2024-01-20") },
  { asset: "meta", is_buy: true, interest_rate: 1.1, value: 11000, tx_date: new Date("2024-01-21") },
  { asset: "amazon", is_buy: false, interest_rate: 1.3, value: 11500, tx_date: new Date("2024-01-22") },
  { asset: "google", is_buy: true, interest_rate: 1.4, value: 12000, tx_date: new Date("2024-01-23") },
  { asset: "tesla", is_buy: false, interest_rate: 1.6, value: 12500, tx_date: new Date("2024-01-24") },
  { asset: "apple", is_buy: true, interest_rate: 1.2, value: 13000, tx_date: new Date("2024-01-25") },
  { asset: "microsoft", is_buy: false, interest_rate: 1.5, value: 13500, tx_date: new Date("2024-01-26") },
  { asset: "meta", is_buy: true, interest_rate: 1.1, value: 14000, tx_date: new Date("2024-01-27") },
  { asset: "amazon", is_buy: false, interest_rate: 1.3, value: 14500, tx_date: new Date("2024-01-28") },
  { asset: "google", is_buy: true, interest_rate: 1.4, value: 15000, tx_date: new Date("2024-01-29") },
  { asset: "tesla", is_buy: false, interest_rate: 1.6, value: 15500, tx_date: new Date("2024-01-30") },
  { asset: "apple", is_buy: true, interest_rate: 1.2, value: 16000, tx_date: new Date("2024-02-01") },
  { asset: "microsoft", is_buy: false, interest_rate: 1.5, value: 16500, tx_date: new Date("2024-02-02") },
  { asset: "meta", is_buy: true, interest_rate: 1.1, value: 17000, tx_date: new Date("2024-02-03") },
  { asset: "amazon", is_buy: false, interest_rate: 1.3, value: 17500, tx_date: new Date("2024-02-04") },
  { asset: "google", is_buy: true, interest_rate: 1.4, value: 18000, tx_date: new Date("2024-02-05") },
  { asset: "tesla", is_buy: false, interest_rate: 1.6, value: 18500, tx_date: new Date("2024-02-06") },
  { asset: "apple", is_buy: true, interest_rate: 1.2, value: 19000, tx_date: new Date("2024-02-07") },
  { asset: "microsoft", is_buy: false, interest_rate: 1.5, value: 19500, tx_date: new Date("2024-02-08") },
  { asset: "meta", is_buy: true, interest_rate: 1.1, value: 20000, tx_date: new Date("2024-02-09") },
  { asset: "amazon", is_buy: false, interest_rate: 1.3, value: 20500, tx_date: new Date("2024-02-10") },
  { asset: "google", is_buy: true, interest_rate: 1.4, value: 21000, tx_date: new Date("2024-02-11") },
  { asset: "tesla", is_buy: false, interest_rate: 1.6, value: 21500, tx_date: new Date("2024-02-12") },
  { asset: "apple", is_buy: true, interest_rate: 1.2, value: 22000, tx_date: new Date("2024-02-13") },
  { asset: "microsoft", is_buy: false, interest_rate: 1.5, value: 22500, tx_date: new Date("2024-02-14") },
  { asset: "meta", is_buy: true, interest_rate: 1.1, value: 23000, tx_date: new Date("2024-02-15") },
  { asset: "amazon", is_buy: false, interest_rate: 1.3, value: 23500, tx_date: new Date("2024-02-16") },
  { asset: "google", is_buy: true, interest_rate: 1.4, value: 24000, tx_date: new Date("2024-02-17") },
  { asset: "tesla", is_buy: false, interest_rate: 1.6, value: 24500, tx_date: new Date("2024-02-18") },
  { asset: "apple", is_buy: true, interest_rate: 1.2, value: 25000, tx_date: new Date("2024-02-19") },
  { asset: "microsoft", is_buy: false, interest_rate: 1.5, value: 25500, tx_date: new Date("2024-02-20") },
  { asset: "meta", is_buy: true, interest_rate: 1.1, value: 26000, tx_date: new Date("2024-02-21") },
  { asset: "amazon", is_buy: false, interest_rate: 1.3, value: 26500, tx_date: new Date("2024-02-22") },
  { asset: "google", is_buy: true, interest_rate: 1.4, value: 27000, tx_date: new Date("2024-02-23") },
  { asset: "tesla", is_buy: false, interest_rate: 1.6, value: 27500, tx_date: new Date("2024-02-24") },
  { asset: "apple", is_buy: true, interest_rate: 1.2, value: 28000, tx_date: new Date("2024-02-25") },
  { asset: "microsoft", is_buy: false, interest_rate: 1.5, value: 28500, tx_date: new Date("2024-02-26") },
  { asset: "meta", is_buy: true, interest_rate: 1.1, value: 29000, tx_date: new Date("2024-02-27") },
  { asset: "amazon", is_buy: false, interest_rate: 1.3, value: 29500, tx_date: new Date("2024-02-28") },
  { asset: "google", is_buy: true, interest_rate: 1.4, value: 30000, tx_date: new Date("2024-03-01") },
  { asset: "tesla", is_buy: false, interest_rate: 1.6, value: 30500, tx_date: new Date("2024-03-02") },
  { asset: "apple", is_buy: true, interest_rate: 1.2, value: 31000, tx_date: new Date("2024-03-03") },
  { asset: "microsoft", is_buy: false, interest_rate: 1.5, value: 31500, tx_date: new Date("2024-03-04") },
  { asset: "meta", is_buy: true, interest_rate: 1.1, value: 32000, tx_date: new Date("2024-03-05") },
  { asset: "amazon", is_buy: false, interest_rate: 1.3, value: 32500, tx_date: new Date("2024-03-06") },
  { asset: "google", is_buy: true, interest_rate: 1.4, value: 33000, tx_date: new Date("2024-03-07") },
  { asset: "tesla", is_buy: false, interest_rate: 1.6, value: 33500, tx_date: new Date("2024-03-08") },
  { asset: "apple", is_buy: true, interest_rate: 1.2, value: 34000, tx_date: new Date("2024-03-09") },
  { asset: "microsoft", is_buy: false, interest_rate: 1.5, value: 34500, tx_date: new Date("2024-03-10") },
  { asset: "meta", is_buy: true, interest_rate: 1.1, value: 35000, tx_date: new Date("2024-03-11") },
  { asset: "amazon", is_buy: false, interest_rate: 1.3, value: 35500, tx_date: new Date("2024-03-12") },
  { asset: "google", is_buy: true, interest_rate: 1.4, value: 36000, tx_date: new Date("2024-03-13") },
  { asset: "tesla", is_buy: false, interest_rate: 1.6, value: 36500, tx_date: new Date("2024-03-14") },
  { asset: "apple", is_buy: true, interest_rate: 1.2, value: 37000, tx_date: new Date("2024-03-15") },
  { asset: "microsoft", is_buy: false, interest_rate: 1.5, value: 37500, tx_date: new Date("2024-03-16") },
  { asset: "meta", is_buy: true, interest_rate: 1.1, value: 38000, tx_date: new Date("2024-03-17") },
  { asset: "amazon", is_buy: false, interest_rate: 1.3, value: 38500, tx_date: new Date("2024-03-18") },
  { asset: "google", is_buy: true, interest_rate: 1.4, value: 39000, tx_date: new Date("2024-03-19") },
  { asset: "tesla", is_buy: false, interest_rate: 1.6, value: 39500, tx_date: new Date("2024-03-20") },
  { asset: "apple", is_buy: true, interest_rate: 1.2, value: 40000, tx_date: new Date("2024-03-21") },
  { asset: "microsoft", is_buy: false, interest_rate: 1.5, value: 40500, tx_date: new Date("2024-03-22") },
  { asset: "meta", is_buy: true, interest_rate: 1.1, value: 41000, tx_date: new Date("2024-03-23") },
  { asset: "amazon", is_buy: false, interest_rate: 1.3, value: 41500, tx_date: new Date("2024-03-24") },
  { asset: "google", is_buy: true, interest_rate: 1.4, value: 42000, tx_date: new Date("2024-03-25") },
  { asset: "tesla", is_buy: false, interest_rate: 1.6, value: 42500, tx_date: new Date("2024-03-26") },
  { asset: "apple", is_buy: true, interest_rate: 1.2, value: 43000, tx_date: new Date("2024-03-27") },
  { asset: "microsoft", is_buy: false, interest_rate: 1.5, value: 43500, tx_date: new Date("2024-03-28") },
  { asset: "meta", is_buy: true, interest_rate: 1.1, value: 44000, tx_date: new Date("2024-03-29") },
  { asset: "amazon", is_buy: false, interest_rate: 1.3, value: 44500, tx_date: new Date("2024-03-30") },
  { asset: "google", is_buy: true, interest_rate: 1.4, value: 45000, tx_date: new Date("2024-03-31") },
];