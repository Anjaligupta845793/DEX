Here’s the updated `README.md` template with the deployed addresses for TokenA, TokenB, and the DEX on the Polygon Amoy testnet included:

````markdown
# Decentralized Exchange (DEX) Platform

## Assignment Overview

This project involves the development of a decentralized exchange (DEX) platform that allows users to add liquidity, swap tokens, and remove liquidity from pools. The platform is built on the Polygon Amoy testnet.

## Features

- **Add Liquidity**: Users can add tokens to liquidity pools to earn rewards.
- **Token Swapping**: Users can swap between different ERC-20 tokens directly from their wallets.
- **Remove Liquidity**: Users can withdraw their tokens from liquidity pools.

## Deliverables

- Smart contracts implementing the DEX functionality.
- Comprehensive test cases to ensure contract reliability.
- Deployment on the Polygon Amoy testnet.
- Complete README documentation.

## Deployed Addresses

- **TokenA Address**: [0x390fFE633099A8b68E4fb3dfCdC40D3dA493847e](https://polygonscan.com/address/0x390fFE633099A8b68E4fb3dfCdC40D3dA493847e)
- **TokenB Address**: [0xbBDD8122236a31A86B4Cda115E192917C41F3DD4](https://polygonscan.com/address/0xbBDD8122236a31A86B4Cda115E192917C41F3DD4)
- **DEX Address**: [0x78D0DE3F642074485B6fF36d6D7B22C1D0D278A7](https://polygonscan.com/address/0x78D0DE3F642074485B6fF36d6D7B22C1D0D278A7)

## Technologies Used

- **Solidity**: For writing smart contracts.
- **Hardhat**: Development environment for Ethereum.
- **Ethers.js**: Library for interacting with the Ethereum blockchain.
- **React**: Frontend framework for the user interface (if applicable).

## Getting Started

### Prerequisites

- Node.js
- npm or yarn
- Hardhat

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```
````

2. Install dependencies:

   ```bash
   npm install
   ```

3. Configure your environment:
   - Create a `.env` file and add your environment variables (e.g., `API_URL`, `PRIVATE_KEY`).

### Running the Project

1. Compile the smart contracts:

   ```bash
   npx hardhat compile
   ```

2. Deploy the contracts on the Polygon Amoy testnet:

   ```bash
   npx hardhat run scripts/deploy.js --network polygon_amoy
   ```

3. Run tests:
   ```bash
   npx hardhat test
   ```

### Usage

- Connect your wallet (e.g., MetaMask) to interact with the DEX.
- Use the interface to add liquidity, swap tokens, or remove liquidity.

## Testing

All test cases are included in the `test` directory. Run the following command to execute the tests:

```bash
npx hardhat test
```

## Contributing

Contributions are welcome! Please submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Contact

For questions or feedback, please reach out to [sajalanjali3@gmail.com].

```

```
