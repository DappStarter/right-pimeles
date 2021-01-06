require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include enroll sure tribe strike cruise remain pulse grace office army gasp'; 
let testAccounts = [
"0xd9ca1d9f212f9c6d74a7205c7de35b03d994f4f4f2b6fe86950506c6c010700d",
"0x9aed222645f7bb19b76343e764b2a77e71c93ed6b6e64340998003f0f3bb4121",
"0x4560bb2003f43903b5d09051ea207d310fdc581adf83806418ab1fa8567b536a",
"0x2c45dcc7a35b1e785d4a422186b2fd35e50e95bbfca9f204a77f6401c9bfafcd",
"0x2541603e42ec1e8f808f0222b3705cd12888a33e1985798c0be95dfa97ccd0fd",
"0x3661590557711dfbf5152edcd860da5014b378b3a3e011c682eca226f8cb5737",
"0x15c3085c6824921c3c39b7acaf6484c66c93f3303c600d78409b5cb6449344cd",
"0x7f82ec79e4d802f0009f789d2ffbf397f3294e107ee93af5b4181b05a912b9cd",
"0x6b6f5f85353592f771dc50ae1e482d5ec1269af530c379d50cb980bba1b2d291",
"0x00fc35d5008654877c0925ec3d765c7aa32414269ae44fd374f076919594991a"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
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
