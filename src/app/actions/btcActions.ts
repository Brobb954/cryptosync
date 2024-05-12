import type { CryptoTypes } from "./crypto";

const fetchBtcBalance = async (userAddress: string) => {
  const newUserAddress = userAddress || process.argv[2];
  const url = `https://api.blockcypher.com/v1/btc/main/addrs/${newUserAddress}/balance`;

  const response = await fetch(url);

  const result: CryptoTypes.BTCResponse =
    (await response.json()) as CryptoTypes.BTCResponse;

  console.log("BTC Balance: ", result.balance * Math.pow(10, -8));
};

export default fetchBtcBalance;
//  {
//    "address": "1DEP8i3QJCsomS4BSMY2RpU1upv62aGvhD",
//    "total_received": 4433416,
//    "total_sent": 0,
//    "balance": 4433416,
//    "unconfirmed_balance": 0,
//    "final_balance": 4433416,
//    "n_tx": 7,
//    "unconfirmed_n_tx": 0,
//    "final_n_tx": 7
//  }
