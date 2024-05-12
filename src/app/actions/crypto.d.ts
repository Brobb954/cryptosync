export namespace CryptoTypes {
  export interface Asset {
    id: string;
    name: string;
    symbol: string;
    amount: number;
  }

  export interface AssetsResponse {
    items: Asset[];
  }

  export interface FetchSolTokensResponse {
    items: Asset[];
  }

  export interface DisplayOptions {
    showFungible: boolean;
  }

  export interface Params {
    ownerAddress: string;
    page: number;
    limit: number;
    displayOptions: DisplayOptions;
  }

  export interface RequestBody {
    jsonrpc: string;
    id: string | number;
    method: string;
    params: Params;
  }

  export interface BTCResponse {
    address: string;
    total_received: number;
    total_sent: number;
    balance: number;
    unconfirmed_balance: number;
    final_balance: number;
    n_tx: number;
    unconfirmed_n_tx: number;
    final_n_tx: number;
  }

  export interface BSCResponse {
    status: number;
    message: string;
    result: number;
  }
}
export default CryptoTypes;
