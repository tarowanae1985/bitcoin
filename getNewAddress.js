// 今回はtestnetを使っていきます
// PORT番号は適当です
const NETWORK_TYPE = 'testnet';
const PORT = '28332';

// bitcore
var bitcore = require('bitcore-lib');

// routing設定
// 秘密鍵の生成
var privateKey = new bitcore.PrivateKey(NETWORK_TYPE);
// 秘密鍵から公開鍵を生成
var publicKey = privateKey.toPublicKey();
// 公開鍵からビットコインアドレスを生成
var bitcoinAddress = publicKey.toAddress(NETWORK_TYPE);

// 生成した秘密鍵、公開鍵、ビットコインアドレスを表示
console.log('privateKey     : %s', privateKey.toString());
console.log('publicKey      : %s', publicKey.toString());
console.log('bitcoinAddress : %s', bitcoinAddress.toString());






