/* eslint-disable @typescript-eslint/no-unused-vars */
export namespace models {
  interface Wallet {
    asset: string;
    currentWorth: number;
    allocation: number;
    quantity: number;
  }

  interface EthAddress {
    address: string;
  }

  interface WalletDropdownProps {
    onWalletSelect: (wallet: string) => void;
    walletOptions: string[];
  }
}

export default WalletDropdownProps;
export default EthAddress;
export default Wallet;
