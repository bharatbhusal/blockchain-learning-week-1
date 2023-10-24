# Blockchain Summary Assignmnet
_Concise explanations of some major concepts in Blockchain Technology._

## 1. Concepts of Blockchain
- **Defination of Blockchain Technology**: As the name suggests simply, Blockchain is a long chain of blocks. It being a chain makes almost impossible to not notice any changes in the blockchain. and Block is what houses the juice of this technology. Basically, each block contains the hash of previous block in the chain, data of current and block and the hash of current block. This way each and every block in the chain is linked with one another. A tiniest change(suspicious activity) in any block is noticed by all other blocks prior to it. In order to make it as decentralized as possible blockchains use different consensus mechanisms. Proof of Work(PoW) and Proof of Stake(PoS) are two widely adopted consensuses in the space. in PoW consensus, the one with highest computation power has the highest chances to verify the blocks and hence higher earning. Similary in PoS, the one with highest stake of the chain's native/governing token has the highest chance of block verification and earn rewards. Now, If one decides to hack the blockchain he either will have to own more than 50% of computation power in PoW or stake in PoS to verify his fraudulent block. In either of the cases it's almost imppossible to afford this huge power.
- **Difference between blockchain and traditional database**: 
Blockhain can be considered as a distributed ledger. This ledger is open source and decentralized. It is simply a database but distributed, transparent and immutable. 
    - **Decentralized and secured**: Not one single person or group of people can controll the blockchain. This gives blockchain the security also. It being distributed, hacker would need to hack more than 50% of the nodes.
    - **Transparent**:  Unlike traditional databases, blockchain allows anyone to view and add the data in the chain.
    - **Immutable**: Once the data is written and verified in the chain, no one can change it in the future. It remains as is forever.
- **Structure and working of Blockchain**: A blockchain starts with genesis block at height 1. The genesis block consists of only data and hash of first block. But from second block onwards, each block majorly consist of previous block hash and current block data and hash. Every block once verified is added to the tail of the chain.<br>
Blocks are added in the chain with the following fundamental steps:
    1. Transaction Verification: When a Users initiates a transaction within the blockchain network. The transaction is broadcasted to the network and collected in a pool of unconfirmed transactions.

    2. Transaction Validation: Miners or validators select transactions from the pool and validate.

    3. Block Creation: Once enough transactions are validated, they are grouped together to form a new block.

    4. Consensus Mechanism: The method of achieving consensus varies depending on the blockchain's design. PoW and PoS as discussed above are two examples of consensuses widely used.

    5. Block Validation: The new block is broadcasted to the network. Other nodes in the network verify the proof and ensure that the block is valid according to the consensus.

    6. Consensus Agreement: If the majority of nodes agree that the block is valid, it is added to the blockchain.

    7. Updating the Blockchain: Once the new block is added, it becomes the latest block in the blockchain. This process continues, with new blocks being added sequentially, forming a chain of blocks.

## 2. Working of Blockchain
- **Transaction Creation**: 