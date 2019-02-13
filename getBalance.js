// ライブラリ
var bitcore = require('bitcore-lib');
var explorers = require('bitcore-explorers');

// 今回はtestnetを使っていきます
const NETWORK_TYPE = 'testnet';

var insight = new explorers.Insight(NETWORK_TYPE);

// 引数(アドレス)の取得
var address = process.argv[2];

// ビットコインアドレスの残高取得
insight.getUnspentUtxos(address, function (err, utxos) {
    if (err) throw err;
    console.log(
        utxos.map(function(v){ return {
            txid: v.txId,
            vout: v.outputIndex,
            scriptPubKey: v.script,
            satoshis: v.satoshis,
        }}));
});

