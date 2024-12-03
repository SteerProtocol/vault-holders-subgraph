/**
 * SteerProtocol SDK for querying vault token balances
 */
class SteerSDK {
  /**
   * Initialize the SDK
   * @param {Object} config Configuration object
   * @param {string} config.endpoint - The GraphQL endpoint URL (optional)
   */
  constructor(config = {}) {
    this.endpoint = config.endpoint || 'https://api.studio.thegraph.com/query/78728/steer-protocol-vault-holders-arbitrum/0.0.4';
  }

  /**
   * Get token balances for a specific vault at a given block
   * @param {Object} params Query parameters
   * @param {string} params.chainId - Chain identifier (e.g., 'arbitrum')
   * @param {string} params.vaultAddress - Address of the vault
   * @param {number} params.blockNumber - Block number to query
   * @returns {Promise<Object>} Formatted vault data with balances
   */
  async getVaultBalances({ chainId, vaultAddress, blockNumber }) {
    const query = this._buildVaultQuery(vaultAddress, blockNumber);
    const response = await this._queryGraph(query);
    return this._formatVaultData(response);
  }

  /**
   * Get multiple vaults' balances at once
   * @param {Object} params Query parameters
   * @param {string} params.chainId - Chain identifier
   * @param {string[]} params.vaultAddresses - Array of vault addresses
   * @param {number} params.blockNumber - Block number to query
   * @returns {Promise<Object[]>} Array of formatted vault data
   */
  async getMultipleVaultBalances({ chainId, vaultAddresses, blockNumber }) {
    const promises = vaultAddresses.map(address => 
      this.getVaultBalances({ chainId, vaultAddress: address, blockNumber })
    );
    return Promise.all(promises);
  }

  /**
   * Build the GraphQL query for vault data
   * @private
   */
  _buildVaultQuery(vaultAddress, blockNumber) {
    return `
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
  }

  /**
   * Execute GraphQL query
   * @private
   */
  async _queryGraph(query) {
    try {
      const response = await fetch(this.endpoint, {
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

      return await response.json();
    } catch (error) {
      throw new Error(`Failed to query Steer Protocol API: ${error.message}`);
    }
  }

  /**
   * Format the raw response into the desired structure
   * @private
   */
  _formatVaultData(response) {
    const contract = response.data.erc20Contracts[0];
    if (!contract) {
      throw new Error('No vault data found');
    }

    return {
      address: contract.id,
      name: contract.name,
      decimals: contract.decimals,
      balances: contract.balances
        .filter(b => b.account && b.valueExact !== "0")
        .map(b => ({
          balance: b.valueExact,
          owner: b.account.id
        }))
    };
  }
}

// Export the class
module.exports = SteerSDK;
