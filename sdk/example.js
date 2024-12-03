// CommonJS
const SteerSDK = require('./sdk');

// ES Modules
// import SteerSDK from './sdk';

async function example() {
  // Initialize the SDK
  const sdk = new SteerSDK({
    endpoint: 'https://api.studio.thegraph.com/query/78728/steer-protocol-vault-holders-arbitrum/0.0.4'
  });

  try {
    // Get balances for a single vault
    const singleVaultData = await sdk.getVaultBalances({
      chainId: 'arbitrum',
      vaultAddress: '0x5e5b8b96f09c372a7d216e268bb89170cecd6b9b',
      blockNumber: 240666435
    });
    console.log('Single Vault Data:', JSON.stringify(singleVaultData, null, 2));

    // Get balances for multiple vaults
    const multipleVaultData = await sdk.getMultipleVaultBalances({
      chainId: 'arbitrum',
      vaultAddresses: [
        '0x5e5b8b96f09c372a7d216e268bb89170cecd6b9b',
        '0xANOTHER_VAULT_ADDRESS'
      ],
      blockNumber: 240666435
    });
    console.log('Multiple Vaults Data:', JSON.stringify(multipleVaultData, null, 2));

  } catch (error) {
    console.error('Error:', error.message);
  }
}

example(); 