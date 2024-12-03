## To deploy this subgraph

1. Create a new subgraph in The Graph Hosted service

You will then have a `username/subgraphname` that you will use later.

2. Clone the repo:

```
git clone git@github.com:dabit3/erc20-subgraph-starter.git
```

3. Install dependencies

```sh
npm install

# or

yarn
```

4. Update the `deploy` script in `package.json` to match the name of your subgraph:

```javascript
"deploy": "graph deploy --node https://api.thegraph.com/deploy/your-username/your-subgraphname"

# update
your-username/your-subgraphname
```

5. Authenticate

```sh
graph auth
```

6. Deploy

```sh
yarn deploy
```

## Example Queries

### Get All Balances for an Account

```graphql
{
  accounts {
    ERC20balances {
      id 
      value
      contract {
        name
      }
    }
  }
}
```

### Get All Holders of a Specific Vault

```graphql
{
  erc20Contract(id: "0x1234...") {  # Replace with vault address
    symbol
    name
    balances(where: { valueExact_gt: "0" }) {
      account {
        id
      }
      value
      valueExact
    }
  }
}
```

## Query Variables

For queries that require variables, you can pass them like this:

```graphql
query getVaultHolders($vaultAddress: String!) {
  erc20Contract(id: $vaultAddress) {
    symbol
    name
    balances(where: { valueExact_gt: "0" }) {
      account {
        id
      }
      value
      valueExact
    }
  }
}
```

Variables:
```json
{
  "vaultAddress": "0x1234..." // Replace with actual vault address
}
```
