// ==UserScript==
// @name         test
// @namespace    http://tampermonkey.net/
// @version      0.16001
// @description  try to take over the world!
// @author       yamatohagi
// @match        https://*/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js
// @updateURL    https://github.com/yamatohagi/TampermonkeyScript/raw/main/test.user.js
// @downloadURL  https://github.com/yamatohagi/TampermonkeyScript/raw/main/test.user.js
// ==/UserScript==
//更新テストおはよう！！！！！！！！！！！！！！１
//タイトル（メールワイズ会員検索ボタン追加）ver1.001_beta
//下の欄に【ibjapan.cybozu.com】を入力
var $ = window.jQuery;
var mwurl = location.href
console.log(mwurl);

//////////////////////////////////////////【ibjapan.cybozu.com】///////////////////////////////////
if ( mwurl.match(/^(?=.*MailView)(?=.*bjapan.cybozu.com)/)) {
  //メールの表示画面のみ下を実行
  function clientSearchButton(){
    document.getElementById("id01").value = ("copy済")
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
      const url = 'https://www.partyparty.jp/admin/members'
      window.open(url, '_blank')
      console.log('0.1秒遅れて実行です。');
    }, 100 );
      setTimeout( function() {
console.log('0.2秒遅れて実行です。');
              navigator.clipboard.readText()
    .then((data) => {
console.log("会員画面")
document.getElementById("member_search_freeword").value = data;

document.getElementById('member_search_freeword').focus();
})
    }, 500 );
  }
  $('tr:nth-child(5)'). prepend($('<th>').append('<input type="button" id="id01" value="会員検索" style="width:100px;height:40px;font-size:20px;background:#FF66CC;" >')).click(function() {
         if(navigator.clipboard){
        navigator.clipboard.writeText("ER");
        }
      clientSearchButton()
});;
}
//////////////////////////////////////////【ibjapan.cybozu.com】//////////////////////////////


//////////////////////////////////////////【gitta】//////////////////////////////
if ( mwurl.match(/^(?=.*partyparty.jp)(?=.*members)(?=.*admin)/)) {
    navigator.clipboard.readText()
    .then((data) => {
console.log("会員画面")
document.getElementById("member_search_freeword").value = data;

document.getElementById('member_search_freeword').focus();
})

       setTimeout( function() {
 var textbox = document.getElementById("member_search_freeword")
 const value = textbox.value

 if ( value.match(/@/)) {
 //valueに@を含む場合の処理
console.log("mail");
 //実行ボタン
let element = document.getElementById('member_search_freeword_target_2');
element.checked = true;

 }else {
 if ( value.match(/^(0[5-9]0[0-9]{8}|0[1-9][1-9][0-9]{7})$/)) {
  //valueにtelを含む場合の処理
console.log("tel");
let element = document.getElementById('member_search_freeword_target_5');
element.checked = true;
 }else {
  if(!isNaN(value )) {
  //valueに数値を含む場合の処理
  console.log("kaiin");
let element = document.getElementById('member_search_freeword_target_1');
element.checked = true;

  }else{
if(value.match(/^[ぁ-んー　]*$/)){  //"ー"の後ろの文字は全角スペースです。
  console.log("ひらがな");
let element = document.getElementById('member_search_freeword_target_4');
element.checked = true;
 }else{
console.log("その他漢字");
let element = document.getElementById('member_search_freeword_target_3');
element.checked = true;
 }

}
 }
 }
    }, 200 );
}
//////////////////////////////////////////【gitta】//////////////////////////////

//////////////////////////////////////////【partyparty.jp】//////////////////////////////
if ( mwurl.match(/^(?=.*partyparty.jp)(?=.*members)(?=.*admin)/)) {
    document.getElementById("member_search_freeword").onchange = function() {
 // onchangeイベントが発生した時の処理を記述する
 var textbox = document.getElementById("member_search_freeword")
 const value = textbox.value

 if ( value.match(/@/)) {
 //valueに@を含む場合の処理
console.log("mail");
 //実行ボタン
let element = document.getElementById('member_search_freeword_target_2');
element.checked = true;

 }else {
 if ( value.match(/^(0[5-9]0[0-9]{8}|0[1-9][1-9][0-9]{7})$/)) {
  //valueにtelを含む場合の処理
console.log("tel");
let element = document.getElementById('member_search_freeword_target_5');
element.checked = true;
 }else {
  if(!isNaN(value )) {
  //valueに数値を含む場合の処理
  console.log("kaiin");
let element = document.getElementById('member_search_freeword_target_1');
element.checked = true;

  }else{
if(value.match(/^[ぁ-んー　]*$/)){  //"ー"の後ろの文字は全角スペースです。
  console.log("ひらがな");
let element = document.getElementById('member_search_freeword_target_4');
element.checked = true;
 }else{
console.log("その他漢字");
let element = document.getElementById('member_search_freeword_target_3');
element.checked = true;
 }

}
 }
 }
}
}
//////////////////////////////////////////【partyparty.jp】//////////////////////////////
