// ライブラリ
var bitcore = require('bitcore-lib');
var explorers = require('bitcore-explorers');
var Transaction = bitcore.Transaction;
var insight = new explorers.Insight(NETWORK_TYPE);

// 今回はtestnetを使っていきます
const NETWORK_TYPE = 'testnet';

//送金元アドレス
var fromAddress = process.argv[2];
//送金先アドレス
var toAddress = process.argv[3];
//送金元アドレスの秘密鍵
var privateKey = process.argv[4];

insight.getUnspentUtxos(fromAddress, function(err, utxos) {
    if (err) {
        console.log(err);
    } else {
        console.log(utxos);
        var transaction = new Transaction()
        .fee(10000)//手数料(0.0001BTC = 10000satoshi)
        .from(utxos)
        .to(toAddress,20000) //送金先アドレス、送金金額(0.0001BTC = 10000satoshi)
        .change(fromAddress) //お釣りの送金先アドレス
        .sign(privateKey)
        ;
        insight.broadcast(transaction, function(err, returnedTxId) {
            if (err) {
                console.log(err);
            } else {
                console.log(returnedTxId);
            }
        });
    }
});






