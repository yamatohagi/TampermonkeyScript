// ==UserScript==
// @name         test
// @namespace    http://tampermonkey.net/
// @version      0.16020
// @description  try to take over the world!
// @author       yamatohagi
// @match        https://*/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @updateURL    https://github.com/yamatohagi/TampermonkeyScript/raw/main/test.user.js
// @downloadURL  https://github.com/yamatohagi/TampermonkeyScript/raw/main/test.user.js
// ==/UserScript==
let mwurl = location.href
console.log(mwurl);

//////////////////////////////////////////【japan.cybozu.com】///////////////////////////////////
if ( mwurl.match(/^(?=.*MailView)(?=.*bjapan.cybozu.com)/)) {
  //定形宣言
  let $ = window.jQuery;
  let element = '';
  //変数宣言
  let mailfield = document.querySelector("#mail-body-area > div > div > div:nth-child(3)");
  let clientmailaddress = '';
  let result = '';
  let clientfield = document.querySelector("#mainColumn > table.dataView > tbody > tr:nth-child(5) > td > span:nth-child(1) > font");
  let clientaboutText = '';

  //メールの表示画面のみ下を実行
  function clientSearchButton(){
    document.getElementById("id01").value = ("copy済")
    //顧客情報欄を参照
    if (clientfield!=null) {
      console.log("５です");
      clientaboutText = clientfield.textContent
      //テキストに変換
      if ( clientaboutText.match(/tickets.chatplus.jp|chatplus/)) {
        //条件に合致した場合
        //メール内の顧客情報欄を参照
        clientmailaddress = mailfield.textContent;
        //問い合わせ内容をテキストに変換
        result = mailfield.textContent.match(/メールアドレス】(.*)/);
        if (result != null) {
          clientmailaddress = (result[1]);
          //合致内容があればresultに格納
          if(navigator.clipboard){
            navigator.clipboard.writeText(clientmailaddress);
            //格納をコピー
          }
        }
      }
      else{
        //条件分岐問い合わせの場合
        result = clientaboutText.match(/<(.*)>/);
        if (result != null) {
          clientaboutText = (result[1]);
        }
        if(navigator.clipboard){
          navigator.clipboard.writeText(clientaboutText);
        }
      }
    }
    else{
        clientfield = document.querySelector("#mainColumn > table.dataView > tbody > tr:nth-child(4) > td > span:nth-child(1) > font");
        console.log("4です");
        clientaboutText = clientfield.textContent
        //テキストに変換
        if ( clientaboutText.match(/tickets.chatplus.jp|chatplus/)) {
          //条件分岐チャットの場合
          //顧客情報欄を参照
          clientmailaddress = mailfield.textContent;
          //問い合わせ内容をテキストに変換
          result = mailfield.textContent.match(/メールアドレス】(.*)/);
          if (result != null) {
            clientmailaddress = (result[1]);
            //合致内容があればresultに格納
            if(navigator.clipboard){
              navigator.clipboard.writeText(clientmailaddress);
              //格納をコピー
            }
          }
        }
        else{
          //条件分岐問い合わせの場合
          result = clientaboutText.match(/<(.*)>/);
          if (result != null) {
            clientaboutText = (result[1]);
          }
          if(navigator.clipboard){
            navigator.clipboard.writeText(clientaboutText);
          }
        }
    }
    setTimeout( function() {
      const url = 'https://www.partyparty.jp/admin/members?name=mwtoadmin';
      window.open(url, '_blank');
      console.log('0.1秒遅れて実行です。');
    }, 100 );
  }
  $('tr:nth-child(5)'). prepend($('<th>').append('<input type="button" id="id01" value="会員検索" style="width:100px;height:40px;font-size:20px;background:#FF66CC;" >').click(function() {
    if(navigator.clipboard){
      navigator.clipboard.writeText("ER");
    }clientSearchButton();
}));;}
//////////////////////////////////////////【japan.cybozu.com】//////////////////////////////


//////////////////////////////////////////【mw to admin】//////////////////////////////
if ( mwurl.match(/^(?=.*partyparty.jp)(?=.*members)(?=.*mwtoadmin)(?=.*admin)/)) {
  //定形宣言
  let $ = window.jQuery;
  let element = '';
  navigator.clipboard.readText().then((data) => {
    console.log("会員画面");
    document.getElementById("member_search_freeword").value = data;
    document.getElementById('member_search_freeword').focus();
  })
  setTimeout( function() {
    const value = document.getElementById("member_search_freeword").value;
    if ( value.match(/@/)) {
      //valueに@を含む場合の処理
      console.log("mail");
      //実行ボタン
      element = document.getElementById('member_search_freeword_target_2');
    }
    else {
      if ( value.match(/^(0[5-9]0[0-9]{8}|0[1-9][1-9][0-9]{7})$/)) {
      //valueにtelを含む場合の処理
      console.log("tel");
      element = document.getElementById('member_search_freeword_target_5');
      }
      else {
        if(!isNaN(value )) {
          //valueに数値を含む場合の処理
          console.log("kaiin");
          element = document.getElementById('member_search_freeword_target_1');
        }
        else{
          if(value.match(/^[ぁ-んー　]*$/)){  //"ー"の後ろの文字は全角スペースです。
            console.log("ひらがな");
            element = document.getElementById('member_search_freeword_target_4');
          }
          else{
            console.log("その他漢字");
            element = document.getElementById('member_search_freeword_target_3');
           }
        }
      }
    }
    element.checked = true;
  }, 100 );
}
//////////////////////////////////////////【mw to admin】//////////////////////////////

//////////////////////////////////////////【admin】//////////////////////////////
if ( mwurl.match(/^(?=.*partyparty.jp)(?=.*members)(?=.*admin)/)) {
  //定形宣言
  let $ = window.jQuery;
  let element = '';
  //////////______________________________________会員詳細情報画面のみ
  let result = '';
  let maillcopyclientfield = '';
  let namecopyclientfield = '';
  let clientsyousai = document.querySelector("body > div > h2")
  var clientsyousaiText = clientsyousai.textContent
  if (clientsyousaiText.match(/会員詳細情報/)) {
    //ここに処理
    console.log("会員詳細情報が実行されています");
    $('table:nth-child(7)').prepend($('<th>').append('<input type="button" id="id001" value="メアドコピー" style="width:80px;height:40px;font-size:8px;background:#3399FF;" >').click(function () {
      document.getElementById("id001").value = ("copy済")
      maillcopyclientfield = document.querySelector("body > div > table:nth-child(7)")
      result = maillcopyclientfield.textContent.match(/メールアドレス(.*)連絡用メールアドレス/);
      if (result != null) {
        maillcopyclientfield = (result[1]);
        //合致内容があればresultに格納
        if (navigator.clipboard) {
          navigator.clipboard.writeText(maillcopyclientfield);
          //格納をコピー
          console.log(maillcopyclientfield);
        }
      }
    }));;
    $('table:nth-child(7)').prepend($('<th>').append('<input type="button" id="id0001" value="苗字コピー" style="width:80px;height:40px;font-size:8px;background:#00CC33;" >').click(function () {
      document.getElementById("id0001").value = ("copy済")
      namecopyclientfield = document.querySelector("body > div > table:nth-child(7)")
      var tagetString = namecopyclientfield.textContent
      var separatorString = /\s+/;
      var arrayStrig = tagetString.split(separatorString);
      let rinzi = arrayStrig[0];
      result = rinzi.match(/姓名（ふりがな）(.*)/);
      if (result != null) {
        let clientname1 = (result[1]);
        //合致内容があればresultに格納
        if (navigator.clipboard) {
          navigator.clipboard.writeText(clientname1);
          //格納をコピー
          console.log(clientname1);
        }
      }
    }));;
  $('table:nth-child(7)').prepend($('<th>').append('<input type="button" id="id0003" value="フルネーム" style="width:80px;height:40px;font-size:8px;background:#FFCC66;" >').click(function () {
      document.getElementById("id0003").value = ("copy済")
      let fullNameString = document.querySelector("body > div > table:nth-child(7)").textContent
      result = fullNameString.match(/姓名（ふりがな）(.*)\s[（(]/);
            if (result != null) {
        let clientname1 = (result[1]);
        //合致内容があればresultに格納
        if (navigator.clipboard) {
          navigator.clipboard.writeText(clientname1);
          //格納をコピー
          console.log(clientname1);
        }
      }
    }));;
  }
  //////////______________________________________会員詳細情報画面のみ
  document.getElementById("member_search_freeword").onchange = function() {
    // onchangeイベントが発生した時の処理を記述する
    const value = document.getElementById("member_search_freeword").value;

    if ( value.match(/@/)) {
      //valueに@を含む場合の処理
      console.log("mail");
      //実行ボタン
      element = document.getElementById('member_search_freeword_target_2');
    }
    else {
      if ( value.match(/^(0[5-9]0[0-9]{8}|0[1-9][1-9][0-9]{7})$/)) {
        //valueにtelを含む場合の処理
        console.log("tel");
        element = document.getElementById('member_search_freeword_target_5');
      }
      else {
        if(!isNaN(value )) {
          //valueに数値を含む場合の処理
          console.log("kaiin");
          element = document.getElementById('member_search_freeword_target_1');
        }
        else{
          if(value.match(/^[ぁ-んー　]*$/)){  //"ー"の後ろの文字は全角スペースです。
            console.log("ひらがな");
            element = document.getElementById('member_search_freeword_target_4');
          }
          else{
            console.log("その他漢字");
            element = document.getElementById('member_search_freeword_target_3');
          }
        }
     }
   }
  element.checked = true;
  }
}
//////////////////////////////////////////【admin】//////////////////////////////
//////////////////////////////////////////【adminパーティーのみ】//////////////////////////////
if (mwurl.match(/\/admin\/parties/)) {
        let $ = window.jQuery;
      $('div.col-sm-7.text-left').append($('<div>').append('<input type="button" id="id22" value="パーティー名コピー" style="width:140px;height:30px;font-size:14px;background:#00CCFF;" >'))
    document.getElementById("id22").onclick = function() {
        var partyF = document.getElementsByClassName('party_floor span-separate-sentences')[0].textContent
        var partyB = document.getElementsByClassName('party_start_at')[0].textContent
        var partyFB = (partyF + partyB);
        if (navigator.clipboard) {
          navigator.clipboard.writeText(partyFB);
          //格納をコピー
          console.log(partyFB);
        }
    }
  
}
//////////////////////////////////////////【adminパーティーのみ】//////////////////////////////
