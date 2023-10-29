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
- **Transaction Creation**: The first step in the transaction creation is to initiate a transaction. Transaction can be cryptocurrency transfer, executing smart contract or any sort of interaction with the blockchain. Signing the transaction with the user's private key generates a digital signature . Digital signature is unique to private key and proves that the trancation was initiated by the owner of the private key. Transaction data and digital signature are hashed together to create a unique transaction hash. This hashg works as the idintity of the transaction. 
- **Transaction Broadcasting**: Transaction hash, data and digital signature is broadcasted in the blockchain. Meaning sending the transaction to the nodes for verification.
- **Transaction Verificaton**: The received transactions are verified by the nodes. Correct format of the transaction data, validity of Digital signature, enough fund to complete the transaction in the user's wallet, rules of blockchain being followed, etc sort of things are assessed by the nodes. all the verified transactions are temporarily held in mempool(memory pool) - waiting area for pending transactions. 
- **Block addition to the chain**: Based on the consensus a blockchain follows Miners(in PoW), Validators(in PoS) compete to add the transaction in the next block. A block constitute of some transactions from the mempool. Once the miner or validator addes the block in the blockchain, transaction hash of previous block is chained with the current one. After a successful addition of the block in the chain, users is notified via their wallet of user's client application. 

**Role of Miners in blockchain**: In proof of Work consensus, Miners are those who solve complex mathematical problems to validate the transactions. In return of validating the transactions they receive rewards. The more the miners the more robust and decentralized the chain becomes. 

**Consensus**: Consensus basically means "General agreenment". Since the blockchain is decentralized - no single entity is governing it, there must be a common agreement among the the people involved in the chain. Consensus is a publically agreed set of rules on how any transaction should be verified. Let's discuss two most common consensuses in the space: 
- Proof of Work: This consensus says the one who can solve the complex mathematical problem the fastest get to validate the transaction. They are called miners. They get rewards in return. The rewareds are freshly mined. Since it is almost impossible to aquire majority of computational power by single entity, it is impossible to hack the chain. But this is a slow process, it consumes lot of energy. It can process less number of transactions per second. 
- Proof of Stake: This consensus says the one which highest stake in the chain gets to validate the transactions. They are called validators. They have to lock their money in the network to be able to compete for being validator. The coins are not mined here. So, the rewards they get is from the fee taken by users to complete the transactions. Sinve there is no calculation involved, it is comparitavly faster and can process more number of transactions per second. 



## 3. Key components
- **Block**: Blockchain is simply a long chain of blocks. A Block is composed of hash of previous block, hash and data of current block. Each block data has bunch of transactions data taken from mempool. The transactions data can be of any type depending upon the type of blockchain. Generally they are cryptocurrency transfer and smart contract execution.
- **Chain**: All the blocks in blockchain are linked together in chronological order. Each block contains the hash of previous block. Hence the tampering in any previous blocks disturbs the currect block. The chain ensures the integirity and immutability of the blockchain. 
- **Miner**: In proof of Work consensus, Miners are those who solve complex mathematical problems to validate the transactions. In return of validating the transactions they receive rewards. The more the miners the more robust and decentralized the chain becomes. 

**Significance of Cryptographic Hash function**: Cryptographich hash function is used to create a unique code - hash code for each blocks. The code is used in the next block. It takes in the block data and produces a hash for corresponding block. The hash works as the pointer to the block data.

## 4. Cryptocurrency
