// 今回はtestnetを使っていきます
// PORT番号は適当です
const NETWORK_TYPE = 'testnet';
const PORT = '28332';

// bitcore
var bitcore = require('bitcore-lib');
var explorers = require('bitcore-explorers');
var insight = new explorers.Insight(NETWORK_TYPE);

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

