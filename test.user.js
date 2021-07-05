// ==UserScript==
// @name         test
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       yamatohagi
// @match        https://ibjapan.cybozu.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js
// ==/UserScript==

//タイトル（メールワイズ会員検索ボタン追加）ver1.001_beta
//下の欄に【ibjapan.cybozu.com】を入力
var $ = window.jQuery;
var mwurl = location.href
if ( mwurl.match(/MailView/)) {
  //メールの表示画面のみ下を実行
  function clientSearchButton(){
    var clientfield = document.querySelector("#mainColumn > table.dataView > tbody > tr:nth-child(5) > td > span:nth-child(1) > font")
    //顧客情報欄を参照
    if (clientfield!=null) {
      console.log("５です");
      var clientaboutText = clientfield.textContent
      //テキストに変換
      if ( clientaboutText.match(/tickets.chatplus.jp|chatplus/)) {
        //条件に合致した場合
        var mailfield = document.querySelector("#mail-body-area > div > div > div:nth-child(3)")
        //メール内の顧客情報欄を参照
        var ticketinmail = mailfield.textContent
        //問い合わせ内容をテキストに変換
        const ticketmailmatch = ticketinmail;
        var clientmailaddress = ticketinmail;
        const result = ticketmailmatch.match(/メールアドレス】(.*)/);
        if (result != null) {
          clientmailaddress = (result[1]);
          //合致内容があればresultに格納
          if(navigator.clipboard){
            navigator.clipboard.writeText(clientmailaddress);
            //格納をコピー
          }
        }
      }else{
        //条件分岐問い合わせの場合
        const str = clientaboutText;
        var clientmailaddress2 = clientaboutText;
        const result = str.match(/<(.*)>/);
        if (result != null) {
        clientmailaddress2 = (result[1]);
        }
        if(navigator.clipboard){
          navigator.clipboard.writeText(clientmailaddress2);
        }
      }
    }else{
        clientfield = document.querySelector("#mainColumn > table.dataView > tbody > tr:nth-child(4) > td > span:nth-child(1) > font")
      console.log("4です");
      clientaboutText = clientfield.textContent
      //テキストに変換
      if ( clientaboutText.match(/tickets.chatplus.jp|chatplus/)) {
        //条件分岐チャットの場合
        mailfield = document.querySelector("#mail-body-area > div > div > div:nth-child(3)")
        //顧客情報欄を参照
        ticketinmail = mailfield.textContent
        //問い合わせ内容をテキストに変換
        const ticketmailmatch = ticketinmail;
        clientmailaddress = ticketinmail;
        const result = ticketmailmatch.match(/メールアドレス】(.*)/);
        if (result != null) {
          clientmailaddress = (result[1]);
          //合致内容があればresultに格納
          if(navigator.clipboard){
            navigator.clipboard.writeText(clientmailaddress);
            //格納をコピー
          }
        }
      }else{
        //条件分岐問い合わせの場合
        const str = clientaboutText;
        clientmailaddress2 = clientaboutText;
        const result = str.match(/<(.*)>/);
        if (result != null) {
          clientmailaddress2 = (result[1]);
        }
        if(navigator.clipboard){
          navigator.clipboard.writeText(clientmailaddress2);
        }
      }
    }
    setTimeout( function() {
      const url = 'https://qiita.com'
      window.open(url, '_blank')
      console.log('0.1秒遅れて実行です。');
    }, 100 );
  }
  $('tr:nth-child(5)'). prepend($('<th>').append('<input type="button" id="id01" value="会員検索" style="width:100px;height:40px;font-size:20px;background:#FF66CC;" >')).click(function() {
         if(navigator.clipboard){
        navigator.clipboard.writeText("ER");
        }
      clientSearchButton()
});;
  //ボタンを追加
     //「.friends」のボタンをクリックしたらダイアログを表示
}


// Your code here...