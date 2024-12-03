import axios from 'axios';

const GRAPH_API_URL = 'https://api.studio.thegraph.com/query/78728/steer-protocol-vault-holders-arbitrum/0.0.4';

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
}

interface GraphQLResponse {
  data: {
    erc20Contracts: ERC20Contract[];
  };
}

async function queryERC20Balances(contractAddress: string, blockNumber: number): Promise<void> {
  const query = `
    query {
      erc20Contracts(
        where: { id: "${contractAddress}" }
        block: { number: ${blockNumber} }
      ) {
        id
        balances {
          account {
            id
          }
          valueExact
          value
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
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-site'
      },
      body: JSON.stringify({ query }),
      mode: 'cors',
      credentials: 'omit'
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json() as GraphQLResponse;
    console.log(JSON.stringify(data, null, 2));

    // Process response...
    const contract = data.data.erc20Contracts[0];
    if (contract) {
      console.log(`\nContract ${contract.id} balances:`);
      contract.balances.forEach(balance => {
        if (balance.value !== "0") {
          console.log(`Account: ${balance.account?.id || 'null'}`);
          console.log(`Balance: ${balance.value}`);
          console.log('---');
        }
      });
    }
  } catch (error) {
    console.error('Error querying TheGraph:', error);
  }
}

// Example usage
const contractAddress = '0x5e5b8b96f09c372a7d216e268bb89170cecd6b9b';
const blockNumber = 240666435;

queryERC20Balances(contractAddress, blockNumber); 