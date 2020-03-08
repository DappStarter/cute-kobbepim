require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom produce bone food report raise maze puppy harvest hat army gaze'; 
let testAccounts = [
"0xc6a142d79f9c052025e5293d2e2c2753dbb1550f6d02b0d28b235b6b085b1006",
"0xbec82b1f0259ea880be5f5a7551ab149c22b9475b5e6e4b1f919a39cbdecba68",
"0x8ecfb8e777d5df52c626082545fd129f1c603c44992e3321781d5d106d9ee3ee",
"0x490886cdb65ba9ed77e95fe04c8024b3bbeeda7f3e44b5e72704175155890eb9",
"0x282b430538e46abd505e70d6068bbe5e0f5898975a89ee2ea8c5508d36485b85",
"0xdf985782a752e892fba9783d5fc47a8352d49950bacda1d53f099ca2b5830200",
"0xd4e8b126ec57b8628a135fcc469b49b746eec2d0f0261c48aec1e330abdc1095",
"0x82b6c46e24aac35dd097d8b90e1630b27952a09138e639d5d63b97f977d581a8",
"0x6dd2e4fc4f02cbb6d34c5b0e73359744c25fd35bc0b0c758303730f01bdc5e9a",
"0xb1b5deccd6429dd54981dd4b5934a329e07df703d001ecaa4cbd8a8cbc887440"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                testAccounts,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
