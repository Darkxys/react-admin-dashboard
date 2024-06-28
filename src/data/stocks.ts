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

export const initial_portfolio_value = 7_000;
export const transaction_data: Array<Transaction> = [
  { asset: "microsoft", is_buy: true, interest_rate: 1.5, value: 3289, tx_date: new Date("2024-01-02") },
  { asset: "meta", is_buy: false, interest_rate: 1.1, value: 1874, tx_date: new Date("2024-01-03") },
  { asset: "amazon", is_buy: true, interest_rate: 1.3, value: 4912, tx_date: new Date("2024-01-04") },
  { asset: "google", is_buy: false, interest_rate: 1.4, value: 2591, tx_date: new Date("2024-01-05") },
  { asset: "tesla", is_buy: true, interest_rate: 1.6, value: 3027, tx_date: new Date("2024-01-06") },
  { asset: "apple", is_buy: false, interest_rate: 1.2, value: 4156, tx_date: new Date("2024-01-07") },
  { asset: "microsoft", is_buy: true, interest_rate: 1.5, value: 2384, tx_date: new Date("2024-01-08") },
  { asset: "meta", is_buy: false, interest_rate: 1.1, value: 4792, tx_date: new Date("2024-01-09") },
  { asset: "amazon", is_buy: true, interest_rate: 1.3, value: 1553, tx_date: new Date("2024-01-10") },
  { asset: "google", is_buy: false, interest_rate: 1.4, value: 3987, tx_date: new Date("2024-01-11") },
  { asset: "tesla", is_buy: true, interest_rate: 1.6, value: 1214, tx_date: new Date("2024-01-12") },
  { asset: "apple", is_buy: false, interest_rate: 1.2, value: 4821, tx_date: new Date("2024-01-13") },
  { asset: "microsoft", is_buy: true, interest_rate: 1.5, value: 1098, tx_date: new Date("2024-01-14") },
  { asset: "meta", is_buy: false, interest_rate: 1.1, value: 3547, tx_date: new Date("2024-01-15") },
  { asset: "amazon", is_buy: true, interest_rate: 1.3, value: 2685, tx_date: new Date("2024-01-16") },
  { asset: "google", is_buy: false, interest_rate: 1.4, value: 4023, tx_date: new Date("2024-01-17") },
  { asset: "tesla", is_buy: true, interest_rate: 1.6, value: 1256, tx_date: new Date("2024-01-18") },
  { asset: "apple", is_buy: false, interest_rate: 1.2, value: 2918, tx_date: new Date("2024-01-19") },
  { asset: "microsoft", is_buy: true, interest_rate: 1.5, value: 4713, tx_date: new Date("2024-01-20") },
  { asset: "meta", is_buy: false, interest_rate: 1.1, value: 2354, tx_date: new Date("2024-01-21") },
  { asset: "amazon", is_buy: true, interest_rate: 1.3, value: 1429, tx_date: new Date("2024-01-22") },
  { asset: "google", is_buy: false, interest_rate: 1.4, value: 1973, tx_date: new Date("2024-01-23") },
  { asset: "tesla", is_buy: true, interest_rate: 1.6, value: 3286, tx_date: new Date("2024-01-24") },
  { asset: "apple", is_buy: false, interest_rate: 1.2, value: 4829, tx_date: new Date("2024-01-25") },
  { asset: "microsoft", is_buy: true, interest_rate: 1.5, value: 1892, tx_date: new Date("2024-01-26") },
  { asset: "meta", is_buy: false, interest_rate: 1.1, value: 3214, tx_date: new Date("2024-01-27") },
  { asset: "amazon", is_buy: true, interest_rate: 1.3, value: 1093, tx_date: new Date("2024-01-28") },
  { asset: "google", is_buy: false, interest_rate: 1.4, value: 4976, tx_date: new Date("2024-01-29") },
  { asset: "tesla", is_buy: true, interest_rate: 1.6, value: 3641, tx_date: new Date("2024-01-30") },
  { asset: "apple", is_buy: false, interest_rate: 1.2, value: 2037, tx_date: new Date("2024-02-01") },
  { asset: "microsoft", is_buy: true, interest_rate: 1.5, value: 4819, tx_date: new Date("2024-02-02") },
  { asset: "meta", is_buy: false, interest_rate: 1.1, value: 2947, tx_date: new Date("2024-02-03") },
  { asset: "amazon", is_buy: true, interest_rate: 1.3, value: 1983, tx_date: new Date("2024-02-04") },
  { asset: "google", is_buy: false, interest_rate: 1.4, value: 2417, tx_date: new Date("2024-02-05") },
  { asset: "tesla", is_buy: true, interest_rate: 1.6, value: 3702, tx_date: new Date("2024-02-06") },
  { asset: "apple", is_buy: false, interest_rate: 1.2, value: 4108, tx_date: new Date("2024-02-07") },
  { asset: "microsoft", is_buy: true, interest_rate: 1.5, value: 1719, tx_date: new Date("2024-02-08") },
  { asset: "meta", is_buy: false, interest_rate: 1.1, value: 2384, tx_date: new Date("2024-02-09") },
  { asset: "amazon", is_buy: true, interest_rate: 1.3, value: 3642, tx_date: new Date("2024-02-10") },
  { asset: "google", is_buy: false, interest_rate: 1.4, value: 4109, tx_date: new Date("2024-02-11") },
  { asset: "tesla", is_buy: true, interest_rate: 1.6, value: 1876, tx_date: new Date("2024-02-12") },
  { asset: "apple", is_buy: false, interest_rate: 1.2, value: 4697, tx_date: new Date("2024-02-13") },
  { asset: "microsoft", is_buy: true, interest_rate: 1.5, value: 3581, tx_date: new Date("2024-02-14") },
  { asset: "meta", is_buy: false, interest_rate: 1.1, value: 4928, tx_date: new Date("2024-02-15") },
  { asset: "amazon", is_buy: true, interest_rate: 1.3, value: 3126, tx_date: new Date("2024-02-16") },
  { asset: "google", is_buy: false, interest_rate: 1.4, value: 1632, tx_date: new Date("2024-02-17") },
  { asset: "tesla", is_buy: true, interest_rate: 1.6, value: 1974, tx_date: new Date("2024-02-18") },
  { asset: "apple", is_buy: false, interest_rate: 1.2, value: 3941, tx_date: new Date("2024-02-19") },
  { asset: "microsoft", is_buy: true, interest_rate: 1.5, value: 2857, tx_date: new Date("2024-02-20") },
  { asset: "meta", is_buy: false, interest_rate: 1.1, value: 1314, tx_date: new Date("2024-02-21") },
  { asset: "amazon", is_buy: true, interest_rate: 1.3, value: 2374, tx_date: new Date("2024-02-22") },
  { asset: "google", is_buy: false, interest_rate: 1.4, value: 4783, tx_date: new Date("2024-02-23") },
  { asset: "tesla", is_buy: true, interest_rate: 1.6, value: 1942, tx_date: new Date("2024-02-24") },
  { asset: "apple", is_buy: false, interest_rate: 1.2, value: 3709, tx_date: new Date("2024-02-25") },
  { asset: "microsoft", is_buy: true, interest_rate: 1.5, value: 2456, tx_date: new Date("2024-02-26") },
  { asset: "meta", is_buy: false, interest_rate: 1.1, value: 3274, tx_date: new Date("2024-02-27") },
  { asset: "amazon", is_buy: true, interest_rate: 1.3, value: 4789, tx_date: new Date("2024-02-28") },
  { asset: "google", is_buy: false, interest_rate: 1.4, value: 1718, tx_date: new Date("2024-03-01") },
  { asset: "tesla", is_buy: true, interest_rate: 1.6, value: 2304, tx_date: new Date("2024-03-02") },
  { asset: "apple", is_buy: false, interest_rate: 1.2, value: 2974, tx_date: new Date("2024-03-03") },
  { asset: "microsoft", is_buy: true, interest_rate: 1.5, value: 4208, tx_date: new Date("2024-03-04") },
  { asset: "meta", is_buy: false, interest_rate: 1.1, value: 3946, tx_date: new Date("2024-03-05") },
  { asset: "amazon", is_buy: true, interest_rate: 1.3, value: 1809, tx_date: new Date("2024-03-06") },
  { asset: "google", is_buy: false, interest_rate: 1.4, value: 2098, tx_date: new Date("2024-03-07") },
  { asset: "tesla", is_buy: true, interest_rate: 1.6, value: 2751, tx_date: new Date("2024-03-08") },
  { asset: "apple", is_buy: false, interest_rate: 1.2, value: 4862, tx_date: new Date("2024-03-09") },
  { asset: "microsoft", is_buy: true, interest_rate: 1.5, value: 1384, tx_date: new Date("2024-03-10") },
  { asset: "meta", is_buy: false, interest_rate: 1.1, value: 2847, tx_date: new Date("2024-03-11") },
  { asset: "amazon", is_buy: true, interest_rate: 1.3, value: 4910, tx_date: new Date("2024-03-12") },
  { asset: "google", is_buy: false, interest_rate: 1.4, value: 2368, tx_date: new Date("2024-03-13") },
  { asset: "tesla", is_buy: true, interest_rate: 1.6, value: 1649, tx_date: new Date("2024-03-14") },
  { asset: "apple", is_buy: false, interest_rate: 1.2, value: 4891, tx_date: new Date("2024-03-15") },
  { asset: "microsoft", is_buy: true, interest_rate: 1.5, value: 1832, tx_date: new Date("2024-03-16") },
  { asset: "meta", is_buy: false, interest_rate: 1.1, value: 1397, tx_date: new Date("2024-03-17") },
  { asset: "amazon", is_buy: true, interest_rate: 1.3, value: 2093, tx_date: new Date("2024-03-18") },
  { asset: "google", is_buy: false, interest_rate: 1.4, value: 4328, tx_date: new Date("2024-03-19") },
  { asset: "tesla", is_buy: true, interest_rate: 1.6, value: 3971, tx_date: new Date("2024-03-20") },
  { asset: "apple", is_buy: false, interest_rate: 1.2, value: 2763, tx_date: new Date("2024-03-21") },
  { asset: "microsoft", is_buy: true, interest_rate: 1.5, value: 2719, tx_date: new Date("2024-03-22") },
  { asset: "meta", is_buy: false, interest_rate: 1.1, value: 1493, tx_date: new Date("2024-03-23") },
  { asset: "amazon", is_buy: true, interest_rate: 1.3, value: 1394, tx_date: new Date("2024-03-24") },
  { asset: "google", is_buy: false, interest_rate: 1.4, value: 1428, tx_date: new Date("2024-03-25") },
  { asset: "tesla", is_buy: true, interest_rate: 1.6, value: 2597, tx_date: new Date("2024-03-26") },
  { asset: "apple", is_buy: false, interest_rate: 1.2, value: 3156, tx_date: new Date("2024-03-27") },
  { asset: "microsoft", is_buy: true, interest_rate: 1.5, value: 1932, tx_date: new Date("2024-03-28") },
  { asset: "meta", is_buy: false, interest_rate: 1.1, value: 2941, tx_date: new Date("2024-03-29") },
  { asset: "amazon", is_buy: true, interest_rate: 1.3, value: 3047, tx_date: new Date("2024-03-30") },
  { asset: "google", is_buy: false, interest_rate: 1.4, value: 1829, tx_date: new Date("2024-03-31") },
];
