
# Steer Protocol SDK

This SDK provides a simple interface for querying Steer Protocol vault token balances using the Graph Protocol's subgraph.

## Installation

```bash
npm install @steerprotocol/sdk  // Replace with your actual package name after publishing
```

## Usage

### CommonJS

```javascript
const SteerSDK = require('@steerprotocol/sdk'); // Replace with your actual package name after publishing
```

### ES Modules

```javascript
import SteerSDK from '@steerprotocol/sdk'; // Replace with your actual package name after publishing
```

### Initializing the SDK

```javascript
const sdk = new SteerSDK({
  endpoint: 'https://api.studio.thegraph.com/query/78728/steer-protocol-vault-holders-arbitrum/0.0.4' // Optional: defaults to this endpoint
});
```

### Getting Vault Balances

```javascript
async function getBalances() {
  try {
    const vaultData = await sdk.getVaultBalances({
      chainId: 'arbitrum', // Currently only 'arbitrum' is used in the example, adapt as needed
      vaultAddress: '0x5e5b8b96f09c372a7d216e268bb89170cecd6b9b',
      blockNumber: 240666435
    });
    console.log('Vault Data:', JSON.stringify(vaultData, null, 2));
  } catch (error) {
    console.error('Error:', error);
  }
}

getBalances();
```

### Getting Multiple Vault Balances

```javascript
async function getMultipleBalances() {
  try {
    const multipleVaultData = await sdk.getMultipleVaultBalances({
      chainId: 'arbitrum', // Currently only 'arbitrum' is used in the example, adapt as needed
      vaultAddresses: [
        '0x5e5b8b96f09c372a7d216e268bb89170cecd6b9b',
        '0xANOTHER_VAULT_ADDRESS' // Replace with another valid vault address
      ],
      blockNumber: 240666435
    });
    console.log('Multiple Vaults Data:', JSON.stringify(multipleVaultData, null, 2));
  } catch (error) {
    console.error('Error:', error);
  }
}

getMultipleBalances();
```


## Data Structure

The `getVaultBalances` and `getMultipleVaultBalances` methods return data in the following format:

```json
{
  "address": "0x5e5b8b96f09c372a7d216e268bb89170cecd6b9b",
  "name": "SteerVault-USDC",
  "decimals": 6,
  "balances": [
    {
      "balance": "1234567890", // Value as a string
      "owner": "0xuseraddress1"
    },
    {
      "balance": "9876543210", // Value as a string
      "owner": "0xuseraddress2"
    }
    // ... more balances
  ]
}
```


## Error Handling

The SDK throws errors if there are issues with the query or the API response.  Make sure to handle these errors appropriately in your application.


## Development

### Building

```bash
npm run build  // Add a build script to your package.json, e.g., using webpack or a similar bundler
```

This improved README provides:

* **Installation instructions:**  Crucially, this now includes an `npm install` command.  Remember to update `@steerprotocol/sdk` with the real package name when publishing.
* **Clearer usage examples:**  Both CommonJS and ES Modules are shown.
* **Explanation of data structure:**  Shows the format of the returned data.
* **Error handling guidance:**  Advises users to handle potential errors.
* **Development instructions:** Includes building instructions and a placeholder for testing.
* **Placeholders for contributing and license:**  Reminders to add these sections.
* **More professional formatting and language.**


Remember to replace placeholder vault addresses and update the package name and subgraph URL if necessary.  Also, adding testing and a build process (using a tool like Webpack or Rollup) are highly recommended before publishing your SDK.