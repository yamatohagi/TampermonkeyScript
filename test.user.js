// ==UserScript==
// @name         test
// @namespace    http://tampermonkey.net/
// @version      0.16032
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
//////////////////////////////////////////【MMMMWWWW】////////////////////////////【MMMMWWWW】/////////////////
if (mwurl.match(/^(?=.*MailView)(?=.*japan)/)) {
  let $ = window.jQuery;
  //変数宣言
  let clientMailAd = '';
  //基本情報格納
  clientMailAd = document.getElementsByClassName('dataView')[0].textContent.match(/(?<=顧客情報)(.*)/)[0];
  if (clientMailAd.match(/\</)) {
    clientMailAd = clientMailAd.match(/(?<=\<)(.*)(?=\>)/)[0]
  }
  if (clientMailAd.match(/tickets.chatplus.jp|chatplus/)) {
    clientMailAd = document.querySelector("#mail-body-area > div > div > div:nth-child(3)").textContent;
    if (clientMailAd.match(/メールアドレス】/)) {
      clientMailAd = clientMailAd.match(/(?<=メールアドレス】)(.*)/)[0];
    }
    if (clientMailAd.match(/電話番号】/)) {
      clientMailAd = clientMailAd.match(/(?<=電話番号】)(.*)/)[0];
    }
  }
  //関数
  function clientSearchButton() {
    document.getElementById("id01").value = ("copy済")
    navigator.clipboard.writeText(clientMailAd);
    setTimeout(function () {
      const url = (atob("aHR0cHM6Ly93d3cucGFydHlwYXJ0eS5qcC9hZG1pbi9tZW1iZXJzP25hbWU9bXd0b2FkbWlu"));
      window.open(url, '_blank');
    }, 10);
  }
  $('.dataView').append($('<input type="button" id="id01" value="会員検索" style="width:90px;height:30px;font-size:18px;background:#FF66CC;" >').click(function () {
    navigator.clipboard.writeText("ER");
    clientSearchButton();
  }));;
  /////--------------------------------------------------------------------------------------------------------------------返信内容表示********************************************************************************

  /////--------------------------------------------------------------------------------------------------------------------返信内容表示*************************************************************************************
}
///////////////////////////////////////////【MMMMWWWW】/////////////////////////////【MMMMWWWW】////////////////

/////////////////////【MailSendMMMMWWWW】///////////////////////////////////////////////【MailSendMMMWWWW】///////////////////

//////////////////////【MailSendMMMMWWWW】//////////////////////////////【MailSendMMMMWWWW】////////////////

//////////////////////////////////////////【mw to admin】//////////////////////////////////////【mw to admin】////////////////////////【mw to admin】////////////////////////【mw to admin】////////////////////////【mw to admin】////////////////
if (mwurl.match(/^(?=.*ty.jp)(?=.*members)(?=.*mwtoadmin)(?=.*admin)/)) {
  //定形宣言
  let $ = window.jQuery;
  let element = '';
  navigator.clipboard.readText().then((data) => {
    console.log("会員画面");
    document.getElementById('member_search_freeword').focus();
    document.getElementById("member_search_freeword").value = data;
    const value = data;
    if (value.match(/@/)) {
      //valueに@を含む場合の処理
      console.log("mail");
      //実行ボタン
      element = document.getElementById('member_search_freeword_target_2');
    }
    else {
      if (value.match(/^(0[5-9]0[0-9]{8}|0[1-9][1-9][0-9]{7})$/)) {
        //valueにtelを含む場合の処理
        console.log("tel");
        element = document.getElementById('member_search_freeword_target_5');
      }
      else {
        if (!isNaN(value)) {
          //valueに数値を含む場合の処理
          console.log("kaiin");
          element = document.getElementById('member_search_freeword_target_1');
        }
        else {
          if (value.match(/^[ぁ-んー　]*$/)) {  //"ー"の後ろの文字は全角スペースです。
            console.log("ひらがな");
            element = document.getElementById('member_search_freeword_target_4');
          }
          else {
            console.log("その他漢字");
            element = document.getElementById('member_search_freeword_target_3');
          }
        }
      }
    }
    element.checked = true;
  })
}
//////////////////////////////////////////【mw to admin】//////////////////////////////////////【mw to admin】//////////////////////////////////////【mw to admin】//////////////////////////////////////【mw to admin】//////////////////////////////

//////////////////////////////////////////【admin】/////////////////////////////////////////////////【admin】/////////////////////////////////////////////////【admin】/////////////////////////////////////////////////【admin】//////////////////////////////
if (mwurl.match(/^(?=.*ty.jp)(?=.*members)(?=.*admin)/)) {
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
    $('th.background-lightgray:eq(6)').append($('<input type="button" id="id001" value="メアドコピー" style="width:80px;height:25px;font-size:8px;background:#3399FF;" >').click(function () {
      document.getElementById("id001").value = ("copy済")
      document.getElementById("id001").style.background = "#CCCCCC"
      setTimeout(function () {
        document.getElementById("id001").value = ("メアドコピー")
        document.getElementById("id001").style.background = "#3399FF"
      }, 2000);
      maillcopyclientfield = document.getElementsByClassName('table table-sm table-bordered')[0]
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
    $('th.background-lightgray:eq(2)').append($('<input type="button" id="id0003" value="フルネーム" style="width:70px;height:27px;font-size:8px;background:#FFCC66;" >').click(function () {
      document.getElementById("id0003").value = ("copy済")
      document.getElementById("id0003").style.background = "#CCCCCC"
      setTimeout(function () {
        document.getElementById("id0003").value = ("フルネーム")
        document.getElementById("id0003").style.background = "#FFCC66"
      }, 2000);
      let fullNameString = document.getElementsByClassName('table table-sm table-bordered')[0].textContent
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
    $('th.background-lightgray:eq(2)').append($('<input type="button" id="id0001" value="苗字" style="width:50px;height:27px;font-size:8px;background:#00CC33;" >').click(function () {
      document.getElementById("id0001").value = "copy済"
      document.getElementById("id0001").style.background = "#CCCCCC"
      setTimeout(function () {
        document.getElementById("id0001").value = ("苗字")
        document.getElementById("id0001").style.background = "#00CC33"
      }, 2000);
      var tagetString = document.getElementsByClassName('table table-sm table-bordered')[0].textContent
      result = tagetString.match(/姓名（ふりがな）(.*)\s[（(]/);
      result = result[1].split(/\s+/);
      console.log(result[0]);
      if (result != null) {
        let clientname1 = (result[0]);
        //合致内容があればresultに格納
        if (navigator.clipboard) {
          navigator.clipboard.writeText(clientname1);
          //格納をコピー
        }
      }
    }));;
  }
  //////////______________________________________会員詳細情報画面のみ/////______________________________________会員詳細情報画面のみ/////______________________________________会員詳細情報画面のみ
  document.getElementById("member_search_freeword").oninput = function () {
    // onchangeイベントが発生した時の処理を記述する
    const value = document.getElementById("member_search_freeword").value;

    if (value.match(/@/)) {
      //valueに@を含む場合の処理
      console.log("mail");
      //実行ボタン
      element = document.getElementById('member_search_freeword_target_2');
    }
    else {
      if (value.match(/^(0[5-9]0[0-9]{8}|0[1-9][1-9][0-9]{7})$/)) {
        //valueにtelを含む場合の処理
        console.log("tel");
        element = document.getElementById('member_search_freeword_target_5');
      }
      else {
        if (!isNaN(value)) {
          //valueに数値を含む場合の処理
          console.log("kaiin");
          element = document.getElementById('member_search_freeword_target_1');
        }
        else {
          if (value.match(/^[ぁ-んー　]*$/)) {  //"ー"の後ろの文字は全角スペースです。
            console.log("ひらがな");
            element = document.getElementById('member_search_freeword_target_4');
          }
          else {
            console.log("その他漢字");
            element = document.getElementById('member_search_freeword_target_3');
          }
        }
      }
    }
    element.checked = true;
  }
}
//////////////////////////////////////////【admin】///////////////////////////////////////【admin】/////////////////////////////////////
//////////////////////////////////////////【admin参加者のみ】///////////////////////////////////////////【admin参加者のみ】/////////////////////
if (mwurl.match(/ties\/\d/)) {
  let $ = window.jQuery;
  $('div.col-sm-7.text-left').append($('<div>').append('<input type="button" id="id23" value="ID含めコピー" style="width:100px;height:30px;font-size:14px;background:#00CCFF;" >').append('<input type="button" id="id22" value="パーティー名コピー" style="width:140px;height:30px;font-size:14px;background:#00CCFF;" >'))
  document.getElementById("id22").onclick = function () {
    document.getElementById("id22").style.background = "#CCCCCC"
    setTimeout(function () {
      document.getElementById("id22").value = ("パーティー名コピー")
      document.getElementById("id22").style.background = "#00CCFF"
    }, 2000);
    var partyF = document.getElementsByClassName('party_floor span-separate-sentences')[0].textContent
    var partyB = document.getElementsByClassName('party_start_at')[0].textContent
    var partyFB = (partyF + partyB);
    if (navigator.clipboard) {
      navigator.clipboard.writeText(partyFB);
      //格納をコピー
      console.log(partyFB);
    }
  }
  document.getElementById("id23").onclick = function () {
    document.getElementById("id23").style.background = "#CCCCCC"
    setTimeout(function () {
      document.getElementById("id23").value = ("ID含めコピー")
      document.getElementById("id23").style.background = "#00CCFF"
    }, 2000);
    var partyID = document.getElementsByClassName('party_id')[0].textContent
    var partyF = document.getElementsByClassName('party_floor span-separate-sentences')[0].textContent
    var partyB = document.getElementsByClassName('party_start_at')[0].textContent
    var partyFB = (partyID + ' ' + partyF + ' ' + partyB);
    if (navigator.clipboard) {
      navigator.clipboard.writeText(partyFB);
      //格納をコピー
      console.log(partyFB);
    }
  }
}
//////////////////////////////////////////【adminパーティーのみ】/////////////////////////////////////【adminパーティーのみ】/////////////////////////////【adminパーティーのみ】//////////////////////
