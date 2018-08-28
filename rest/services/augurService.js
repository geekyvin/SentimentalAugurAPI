// After installing, just require augur.js to use it.
var Augur = require('augur.js');
var augur = new Augur();

var ethereumNode = {
    httpAddresses: [
        "http://127.0.0.1:8545", // local HTTP address for Geth node
        "https://rinkeby.augur.net/ethereum-http" // hosted http address for Geth node on the Rinkeby test network
    ],
    wsAddresses: [
        "ws://127.0.0.1:8546", // local WebSocket address for Geth node
        "wss://rinkeby.augur.net/ethereum-ws" // hosted WebSocket address for Geth node on the Rinkeby test network
    ]
    // ipc addresses can also be specified as:
    // ipcAddresses: [ ... ]
};
// To connect to a hosted Augur Node instead of a local Augur Node, substitute its WebSocket address below.
var augurNode = "ws://127.0.0.1:9001"; // local WebSocket address for an Augur Node

// Attempt to connect to a local Ethereum node
// If that fails, fall back to the hosted Ethereum node
augur.connect({ ethereumNode, augurNode }, function (err, connectionInfo) { /* ... */ });
// example connectionInfo object:
{
    augurNode: "ws://127.0.0.1:9001",
        ethereumNode: {
            contracts: {
                Controller: "0xb1772d9e581e5a245ff429cca3e06c57d567c58c",
                    Universe: "0xaa88b74da9e08d44c996f037ce13cb2711053cea",
                    Augur: "0xdddc5d40979660308e8017d048b04782f17af4af",
                    OrdersFinder: "0x01f2aba090b5fa26a64ea9e5afd32f6aab6ba3df",
                    LegacyReputationToken: "0x59c98505733f68e8cc2a0ac1e84380a0393fd04e",
                    CancelOrder: "0x4c0f599bdd8f9eac10cdfd152c3110ea9b803088",
                    Cash: "0x5754d0bcb36b7f30999199031d1f323c4079d58d",
                    ClaimTradingProceeds: "0xe408a58ff3eb050f39728fc45644f64e8e379e3d",
                    CompleteSets: "0xb51a3aab3d5009f21cd9b47ae856aa780460b78c",
                    CreateOrder: "0x19ef3d62d49e95e1b92c1fe12986a24a42c4f3c3",
                    FillOrder: "0x57972b23e4e97cf33b456d292411308b1053d835",
                    Order: "0x86416fd9eb6ca7797f799ccc2e08a4da4083ac17",
                    Orders: "0x452cbdba8559a9b0199bb15105a42fc7ae373983",
                    OrdersFetcher: "0xc9d0126e1aa921056af5981016904690ad73c0d3",
                    ShareToken: "0x5c8b3117b73af73405980f3700542c03709a6436",
                    Trade: "0x8d0677ee9f5330fd73db56da6c31711fd6810434",
                    TradingEscapeHatch: "0x867d607353c3fc24b35e3b02d228dc1647786f88"
            },

            abi: {
                events: { /* ... */ },
                functions: { /* ... */ }
            },
    }
}