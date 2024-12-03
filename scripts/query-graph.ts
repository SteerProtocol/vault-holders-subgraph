import axios from 'axios';

interface Balance {
  account: {
    id: string;
  } | null;
  valueExact: string;
  value: string;
}

interface ERC20Contract {
  id: string;
  balances: Balance[];
  name: string;
  symbol: string;
  decimals: number;
}

interface GraphQLResponse {
  data: {
    erc20Contracts: ERC20Contract[];
  };
}

interface FormattedBalance {
  balance: string;
  owner: string;
}

interface FormattedVaultData {
  address: string;
  name: string;
  decimals: number;
  balances: FormattedBalance[];
}

async function getVaultBalances(chainId: string, vaultAddress: string, blockNumber: number): Promise<FormattedVaultData> {
  const GRAPH_API_URL = 'https://api.studio.thegraph.com/query/78728/steer-protocol-vault-holders-arbitrum/0.0.4';
  
  const query = `
    query {
      erc20Contracts(
        where: { id: "${vaultAddress}" }
        block: { number: ${blockNumber} }
      ) {
        id
        name
        symbol
        decimals
        balances {
          account {
            id
          }
          valueExact
        }
      }
    }
  `;

  try {
    const response = await fetch(GRAPH_API_URL, {
      method: 'POST',
      headers: {
        'accept': 'application/json, multipart/mixed',
        'content-type': 'application/json',
      },
      body: JSON.stringify({ query })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json() as GraphQLResponse;
    const contract = data.data.erc20Contracts[0];

    if (!contract) {
      throw new Error(`No contract found for address ${vaultAddress}`);
    }

    // Format the response
    const formattedData: FormattedVaultData = {
      address: contract.id,
      name: contract.name,
      decimals: contract.decimals,
      balances: contract.balances
        .filter(b => b.account && b.valueExact !== "0") // Filter out null accounts and zero balances
        .map(b => ({
          balance: b.valueExact,
          owner: b.account!.id
        }))
    };

    return formattedData;
  } catch (error) {
    console.error('Error querying TheGraph:', error);
    throw error;
  }
}

// Example usage and API endpoint simulation
async function main() {
  const chainId = 'arbitrum';
  const vaultAddress = '0x5e5b8b96f09c372a7d216e268bb89170cecd6b9b';
  const blockNumber = 240666435;

  try {
    const data = await getVaultBalances(chainId, vaultAddress, blockNumber);
    console.log(JSON.stringify(data, null, 2));
  } catch (error) {
    console.error('Failed to get vault balances:', error);
  }
}

main(); 