// ==UserScript==
// @name         test
// @namespace    http://tampermonkey.net/
// @version      0.16069
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
    let clientMailAd = '';
    let befoe = '';
    let maillorFon = '';
    //基本情報格納
    clientMailAd = document.getElementsByClassName('dataView')[0].textContent.match(/(?<=顧客情報)(.*)/)[0];
    if (clientMailAd.match(/\</)) {
        clientMailAd = clientMailAd.match(/(?<=\<)(.*)(?=\>)/)[0]
    }
    if (clientMailAd.match(/tickets.chatplus.jp|chatplus/)) {
        clientMailAd = document.querySelector("#mail-body-area > div > div > div:nth-child(3)").textContent;
        if (clientMailAd.match(/メールアドレス】/)) {
            clientMailAd = clientMailAd.match(/(?<=メールアドレス】)(.*)/)[0];
            maillorFon = 0
        }
        if (clientMailAd.match(/電話番号】/)) {
            clientMailAd = clientMailAd.match(/(?<=電話番号】)(.*)/)[0];
            maillorFon = 1
        }
    }
    function clientSearchButton() {
        navigator.clipboard.writeText(clientMailAd);
        if (maillorFon == 0) {
            setTimeout(function () {
                const replaced = clientMailAd.replace('@', '%40')
                befoe = (atob("aHR0cHM6Ly93d3cucGFydHlwYXJ0eS5qcC9hZG1pbi9tZW1iZXJzL2xpc3Q/ZW50cnlfdHlwZT0mcGFydHlfaWQ9Jm1lbWJlcl9zZWFyY2glNUJ0cmFuc2Zlcl9wYXJ0eV9pZCU1RD0mbWVtYmVyX3NlYXJjaCU1QmZyZWV3b3JkJTVEPQ=="));
                var adURL = `${befoe}${replaced}&member_search%5Bfreeword_target%5D=2&member_search%5Bblacklist_search_code%5D=&member_search%5Badmin_user_id%5D=&member_search%5Bmember_type_cd%5D=&member_search%5Bdelete_flg%5D=&member_search%5Bgender_cd%5D=&member_search%5Bage_from%5D=&member_search%5Bage_to%5D=&member_search%5Bbirthday_year%5D=&member_search%5Bbirthday_month%5D=&member_search%5Bbirthday_day%5D=&member_search%5Bmarital_history_cd%5D=&member_search%5Blast_login_at_from%5D=&member_search%5Blast_login_at_to%5D=&member_search%5Bparty_total_entry_from%5D=&member_search%5Bparty_total_entry_to%5D=&member_search%5Boption%5D=9&member_search%5Bblock_cd%5D=&member_search%5Bsales_section%5D=&member_search%5Bfreeword2%5D=&ykmshg`
                window.open(adURL, '_blank');
            }, 10);
        } else {
            setTimeout(function () {
                befoe = (atob("aHR0cHM6Ly93d3cucGFydHlwYXJ0eS5qcC9hZG1pbi9tZW1iZXJzL2xpc3Q/ZW50cnlfdHlwZT0mcGFydHlfaWQ9Jm1lbWJlcl9zZWFyY2glNUJ0cmFuc2Zlcl9wYXJ0eV9pZCU1RD0mbWVtYmVyX3NlYXJjaCU1QmZyZWV3b3JkJTVEPQ=="));
                var adURL = `${befoe}${clientMailAd}&member_search%5Bfreeword_target%5D=5&member_search%5Bblacklist_search_code%5D=&member_search%5Badmin_user_id%5D=&member_search%5Bmember_type_cd%5D=&member_search%5Bdelete_flg%5D=&member_search%5Bgender_cd%5D=&member_search%5Bage_from%5D=&member_search%5Bage_to%5D=&member_search%5Bbirthday_year%5D=&member_search%5Bbirthday_month%5D=&member_search%5Bbirthday_day%5D=&member_search%5Bmarital_history_cd%5D=&member_search%5Blast_login_at_from%5D=&member_search%5Blast_login_at_to%5D=&member_search%5Bparty_total_entry_from%5D=&member_search%5Bparty_total_entry_to%5D=&member_search%5Boption%5D=9&member_search%5Bblock_cd%5D=&member_search%5Bsales_section%5D=&member_search%5Bfreeword2%5D=&ykmshg`
                window.open(adURL, '_blank');
            }, 10);
        }
    }
    $('.dataView').append($('<input type="button" id="id01" value="会員検索" style="width:90px;height:30px;font-size:18px;background:#FF66CC;" >').click(function () {
        navigator.clipboard.writeText("ER");
        clientSearchButton();
    }));;
}
if (mwurl.match(/^(?=.*MailSend)(?=.*japan)/)) {
    function NameAndMaill() {
        var setNameMaill = "non"
        var addressmaill = "no"
        navigator.clipboard.readText().then((data) => {
            if (data.match(/^(?=.*comand)/)) {
                setNameMaill = data.match(/name\+(.*?)\+/)[1]
                addressmaill = data.match(/comand\+(.*?)\+/)[1]
                console.log(setNameMaill)
                console.log(addressmaill)
                var maillAll = document.getElementById("mailsend_data").value
                document.getElementById("mailsend_data").value = maillAll.replace(/(.*)(?=様)/, `${setNameMaill} `);
                document.getElementsByClassName("inputText")[0].value = addressmaill
            } else {
                alert("エラー\nこのボタンを使用するには、会員画面のオレンジの「メアド＆苗字」ボタンをクリックした直後にご使用ください")
            }
        });
    };
    function paName() {
        navigator.clipboard.readText().then((data) => {
            if (data.match(/^(?=.*～)/)) {
                var maillAll = document.getElementById("mailsend_data").value
                document.getElementById("mailsend_data").value = maillAll.replace(/【(.*?)】/, `【${data}】 `);
                document.getElementsByClassName("inputText")[0].value = addressmaill
            } else {
                alert("エラー\nこのボタンを使用するにはパーティー名をコピーした直後に使用してください")
            }
        });
    };
}
///////////////////////【mw to ykmshg】///////////////////////////////////
if (mwurl.match(/^(?=.*ty.jp)(?=.*members)(?=.*admin)(?=.*ykmshg)/)) {
    if (document.getElementsByClassName('container mb-30')[0].textContent.match(/1件を表示/)) {
        document.querySelector("body > div.container.mb-30 > table > tbody > tr > td:nth-child(1) > a").click()
    }
    if (document.getElementsByClassName('text-center')[2].textContent == "該当の検索結果はありません") {
        setTimeout(function () {
            location.href = (atob("aHR0cHM6Ly93d3cucGFydHlwYXJ0eS5qcC9hZG1pbi9tZW1iZXJz"));
        }, 500);
    }
}
///////////////////////【mw to ykmshg】/////////////////////////////////
//////////////////////////////////////////【admin】/////////////////////////////////////////////////【admin】////////////////////////
if (mwurl == 'https://www.partyparty.jp/admin/parties') {
    var elementadmincheck = ''
    document.getElementsByName('admin_party_search[freeword]')[1].oninput = function () {
        const valueadmin = document.getElementsByName('admin_party_search[freeword]')[1].value;
        if (valueadmin.match(/[0-9]{5,10}/)) {
            console.log('id')
            document.getElementsByName('admin_party_search[id]')[2].checked = true;
        }
    }
}
// <<<<<<<<<<<<<<<<<保存ボタン <<<<<<<<<<<<<<<<<保存ボタン <<<<<<<<<<<<<<<<<保存ボタン <<<<<<<<<<<<<<<<<
if (mwurl == 'https://www.partyparty.jp/admin/parties') {
    var ptSearchdate = new Date()
    function getCookieNo1Array(getNo1) {        
        function getCookieArray() {
            var arr = new Array();
            if (document.cookie != '') {
                var tmp = document.cookie.split('; ');
                for (var i = 0; i < tmp.length; i++) {
                    var data = tmp[i].split('=');
                    arr[data[0]] = decodeURIComponent(data[1]);
                }
            }
            return arr;
        }
        // keyを指定して取得
        // 「 key1=val1; key2=val2; key3=val3; ・・・ 」というCookie情報が保存されているとする
        var arrSelected = getCookieArray();
        var cookieArr = arrSelected[getNo1];
        var getFloorNumArr = cookieArr.split('+');
        console.log(getFloorNumArr);
        for (var initcheckFloorNum = 0; initcheckFloorNum < document.getElementsByClassName('sales_section_check_box').length; initcheckFloorNum++) {
            document.getElementsByClassName('sales_section_check_box')[initcheckFloorNum].checked = false
        }
        for (var checkFloorNum = 0; checkFloorNum < getFloorNumArr.length; checkFloorNum++) {
            var num = getFloorNumArr[checkFloorNum]
            document.getElementsByClassName('sales_section_check_box')[num].checked = true
            setTimeout(function(){
                        document.getElementById('admin_party_search_wday_1').focus()
                    },0);
        }
    }
    function settCookieNo1Array(saveNo1) {
        var checkFloorNumAry = [];
        var checkFloor = document.getElementsByClassName('sales_section_check_box')
        for (var checkFloorNum = 0; checkFloorNum < checkFloor.length; checkFloorNum++) {
            if (checkFloor[checkFloorNum].checked == true) {
                checkFloorNumAry.push(checkFloorNum)
            }
        }
        var checkFloorNumAryString = checkFloorNumAry.join('+');
        var checkFloorNumAryStringSet = `${saveNo1}=${checkFloorNumAryString}; max-age=1000000000`
        console.log(checkFloorNumAryStringSet)
        document.cookie = checkFloorNumAryStringSet
    }
    $('.col-sm-8:eq(1)').append($('<input type="button" id="id1156" value="今日" style="width:50px;height:27px;font-size:15px;background:#CEEAF7;" >').click(function () {
        document.getElementById('party_search_from').value = (`${ptSearchdate.getFullYear()}/${ptSearchdate.getMonth() + 1}/${ptSearchdate.getDate() + 0}`)
        document.getElementById('party_search_to').value = (`${ptSearchdate.getFullYear()}/${ptSearchdate.getMonth() + 1}/${ptSearchdate.getDate() + 0}`)
        setTimeout(function(){
                        document.getElementById('admin_party_search_wday_1').focus()
                    },0);
    }))
    $('.col-sm-8:eq(1)').append($('<input type="button" id="id1156" value="明日" style="width:50px;height:27px;font-size:15px;background:#EBD5E6;" >').click(function () {
        document.getElementById('party_search_from').value = (`${ptSearchdate.getFullYear()}/${ptSearchdate.getMonth() + 1}/${ptSearchdate.getDate() + 1}`)
        document.getElementById('party_search_to').value = (`${ptSearchdate.getFullYear()}/${ptSearchdate.getMonth() + 1}/${ptSearchdate.getDate() + 1}`)
        setTimeout(function(){
                        document.getElementById('admin_party_search_wday_1').focus()
                    },0);
    }))
     $('.col-sm-2.background-lightgray:eq(4)').append($('<input type="button" id="id0011021" value="①保存" style="width:80px;color:#353535;height:27px;font-size:14px;background:#92C9C9;" >').click(function () {
        settCookieNo1Array('defaultValueSet')
    }))
    $('.col-sm-2.background-lightgray:eq(4)').append($('<input type="button" id="id00112" value="①Set" style="width:80px;color:#353535;height:27px;font-size:14px;background:#92C9C9;" >').click(function () {
        getCookieNo1Array('defaultValueSet')
    }))
    $('.col-sm-2.background-lightgray:eq(4)').append($('<input type="button" id="id00110321" value="②保存" style="width:80px;color:#353535;height:27px;font-size:14px;background:#E8CEB0;" >').click(function () {
        settCookieNo1Array('defaultValueSetNo2')
    }))
    $('.col-sm-2.background-lightgray:eq(4)').append($('<input type="button" id="id0011032" value="②Set" style="width:80px;color:#353535;height:27px;font-size:14px;background:#E8CEB0;" >').click(function () {
        getCookieNo1Array('defaultValueSetNo2')
    }))
    $('.col-sm-2.background-lightgray:eq(4)').append($('<input type="button" id="id00110331" value="③保存" style="width:80px;color:#353535;height:27px;font-size:14px;background:#C3E991;" >').click(function () {
        settCookieNo1Array('defaultValueSetNo3')
    }))
    $('.col-sm-2.background-lightgray:eq(4)').append($('<input type="button" id="id0011033" value="③Set" style="width:80px;color:#353535;height:27px;font-size:14px;background:#C3E991;" >').click(function () {
        getCookieNo1Array('defaultValueSetNo3')
    }))
}
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>保存ボタン>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>保存ボタン>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>保存ボタン
if (mwurl.match(/^(?=.*ty.jp)(?=.*members)(?=.*admin)/)) {
    let $ = window.jQuery;
    let element = '';
    //////////______________________________________会員詳細情報画面のみ
    let maillcopyclientfield = '';
    let IDcopyclientfield = '';
    if (document.querySelector("body > div > h2").textContent == '会員詳細情報') {
        document.title = "【会員情報】";//タブ名
        console.log("会員詳細情報が実行されています");
    }
    //////////______________________________________会員詳細情報画面のみ/////______________________________________会員詳細情報画面のみ/////______________________________________会員詳細情報画面のみ
    document.getElementById("member_search_freeword").oninput = function () {
        const value = document.getElementById("member_search_freeword").value;
        if (value.match(/@/)) {
            console.log("mail");
            element = document.getElementById('member_search_freeword_target_2');
        }
        else {
            if (value.match(/^(0[5-9]0[0-9]{8}|0[1-9][1-9][0-9]{7})$/)) {
                console.log("tel");
                element = document.getElementById('member_search_freeword_target_5');
            }
            else {
                if (!isNaN(value)) {
                    console.log("kaiin");
                    element = document.getElementById('member_search_freeword_target_1');
                }
                else {
                    if (value.match(/^[ぁ-んー　]*$/)) {  //"ー"の後ろの文字は全角スペース
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
///////【member_search】/////////////【member_search】///////
///////【member_search】/////////////【member_search】///////
if (mwurl.match(/\/admin\/parties\//)) {
    let $ = window.jQuery;
    var full = document.getElementsByClassName('col-sm-7 text-left')
    var noId1 = document.getElementsByClassName('party_floor span-separate-sentences')
    var noId2 = document.getElementsByClassName('party_start_at')
    var idinp1 = document.getElementsByClassName('party_id')
    var idinp2 = document.getElementsByClassName('party_floor span-separate-sentences')
    var idinp3 = document.getElementsByClassName('party_start_at')
    var party_id = document.getElementsByClassName('party_id')
    for (var pidi = 0; pidi < full.length; pidi++) {
        var prime_minister_list = document.getElementsByClassName('col-sm-7 text-left')[pidi]
        var before = document.getElementsByClassName('col-sm-7 text-left')[pidi].innerHTML
        prime_minister_list.innerHTML = `<button type='button' class='allinbutton' style="background:#FFFFAA;">AllCopy</button>${before}`
        full[pidi].addEventListener('mouseover', function (e) {
            var NUMPid = ($('.col-sm-7.text-left').index(this))
            console.log(NUMPid)
            switch (e.target.className) {
                case 'party_floor span-separate-sentences':
                    noId1[NUMPid].style.background = '#66CCFF';
                    noId2[NUMPid].style.background = '#66CCFF';
                    break;
                  case 'party_start_at':
                    noId1[NUMPid].style.background = '#66CCFF';
                    noId2[NUMPid].style.background = '#66CCFF';
                    break;
                case 'allinbutton':
                    idinp1[NUMPid].style.background = '#FFFFAA';
                    full[NUMPid].getElementsByTagName('span')[1].style.backgroundColor = '#FFFFAA';
                    idinp2[NUMPid].style.background = '#FFFFAA';
                    idinp3[NUMPid].style.background = '#FFFFAA';
                    break;
                case 'party_id':
                    party_id[NUMPid].style.background = '#FF97C2';
                    break;
                default:
                    if(e.target.tagName == 'SPAN'){
                    full[NUMPid].getElementsByTagName('span')[1].style.backgroundColor = '#FFFFAA';
                    }
            }
        }, false);
        full[pidi].addEventListener('mouseout', function (e) {
            var NUMPid = ($('.col-sm-7.text-left').index(this))
            console.log(NUMPid)
            switch (e.target.className) {
                case 'party_floor span-separate-sentences':
                    noId1[NUMPid].style.background = '';
                    noId2[NUMPid].style.background = '';
                    break;
                case 'party_start_at':
                    noId1[NUMPid].style.background = '';
                    noId2[NUMPid].style.background = '';
                    break;
                case 'allinbutton':
                    idinp1[NUMPid].style.background = '';
                    full[NUMPid].getElementsByTagName('span')[1].style.backgroundColor = '';
                    idinp2[NUMPid].style.background = '';
                    idinp3[NUMPid].style.background = '';
                    break;
                case 'party_id':
                    party_id[NUMPid].style.background = '';
                    break;
                default:
                    if(e.target.tagName == 'SPAN'){
                    full[NUMPid].getElementsByTagName('span')[1].style.backgroundColor = '';
                    }
            }
        })
        full[pidi].addEventListener('click', function (e) {
            var NUMPid = ($('.col-sm-7.text-left').index(this))
            console.log(NUMPid)
            switch (e.target.className) {
                case 'party_floor span-separate-sentences':
                    navigator.clipboard.writeText(noId1[NUMPid].textContent + ' ' + noId2[NUMPid].textContent);
                    console.log(noId1[NUMPid].textContent + noId2[NUMPid].textContent)
                    noId1[NUMPid].style.background = '#33FF99';
                    noId2[NUMPid].style.background = '#33FF99';
                    break;
                case 'party_start_at':
                    navigator.clipboard.writeText(noId1[NUMPid].textContent + ' ' + noId2[NUMPid].textContent);
                    console.log(noId1[NUMPid].textContent + noId2[NUMPid].textContent)
                    noId1[NUMPid].style.background = '#33FF99';
                    noId2[NUMPid].style.background = '#33FF99';
                    break;
                case 'allinbutton':
                    navigator.clipboard.writeText(idinp1[NUMPid].textContent + ' ' + full[NUMPid].getElementsByTagName('span')[1].textContent + ' ' + idinp2[NUMPid].textContent + ' ' + idinp3[NUMPid].textContent)
                    console.log(idinp1[NUMPid].textContent + full[NUMPid].getElementsByTagName('span')[1].textContent + idinp2[NUMPid].textContent + idinp3[NUMPid].textContent)
                    idinp1[NUMPid].style.background = '#33FF99';
                    full[NUMPid].getElementsByTagName('span')[1].style.backgroundColor = '#33FF99';
                    idinp2[NUMPid].style.background = '#33FF99';
                    idinp3[NUMPid].style.background = '#33FF99';
                    break;
                case 'party_id':
                    navigator.clipboard.writeText(party_id[NUMPid].textContent)
                    console.log(party_id[NUMPid].textContent)
                    party_id[NUMPid].style.background = '#33FF99';
                    break;
                default:
                    if(e.target.tagName == 'SPAN'){
                    navigator.clipboard.writeText(full[NUMPid].getElementsByTagName('span')[1].textContent)
                    full[NUMPid].getElementsByTagName('span')[1].style.backgroundColor = '#33FF99';
                    }
            }
        })
        full[pidi].addEventListener('dblclick', function (e) {
            var NUMPid = ($('.col-sm-7.text-left').index(this))
            console.log('ダブル')
            switch (e.target.className) {
                case 'allinbutton':
                    var joinman = document.getElementsByClassName('capacity_man')[NUMPid].previousElementSibling.textContent
                    var joinwoman = document.getElementsByClassName('capacity_woman')[NUMPid].previousElementSibling.textContent
                    var kikakunum = document.getElementsByClassName('row party-frame')[NUMPid].textContent.match(/\d+(?=対)/)
                    var womanAge = document.getElementsByClassName('row party-frame')[NUMPid].textContent.match(/(?<=年齢・条件\（女性\）\d+[~〜～])\d+(?=歳)/)
                    var womanJsPass = document.querySelector(`#edit_party_${party_id[NUMPid].textContent} > table > tbody > tr:nth-child(10) > td:nth-child(2) > div`).innerHTML.match(/(.*?)(?=<br>)/)[0]
                    womanAge = womanAge || womanJsPass;
                    navigator.clipboard.writeText(`${idinp1[NUMPid].textContent} ${full[NUMPid].getElementsByTagName('span')[1].textContent} ${idinp2[NUMPid].textContent} ${idinp3[NUMPid].textContent} ${joinman}-${joinwoman}(${kikakunum}-${kikakunum}) ${womanAge}`)
                    idinp1[NUMPid].style.background = '#ff0000';
                    full[NUMPid].getElementsByTagName('span')[1].style.backgroundColor = '#ff0000';
                    idinp2[NUMPid].style.background = '#ff0000';
                    idinp3[NUMPid].style.background = '#ff0000';
                    console.log('iiyoooooo')
                    break;
                default:
                    console.log('選択ポイントはその他です。');
            }
        })
    }
}
//////////////////////////////////////////【adminパーティーのみ】/////////////////////////////////////【adminパーティーのみ】////////////////////
if (mwurl.match(/\/admin\/parties/)) {
    if (location.pathname == '/admin/parties') {
        document.title = '【PT検索】'
    }
    if (mwurl.match(/^(?=.*admin)(?=.*parties)(?=.*edit)/)) {
        console.log('ikite')
        var editHour = document.getElementById('party_start_at_hour').value
        var editMin = document.getElementById('party_start_at_min').value
        if (editMin == 0) {
            editMin = '00'
        }
        var editDay = document.getElementById('start_at_date').value.slice(-5)
        document.title = `【PT編集】${editDay} ${editHour} : ${editMin}`;
    }
}
if (mwurl.match(/\/admin\/members/)) {
    if (location.pathname == '/admin/members') {
        document.title = '【会員検索】'
    }
}
if (mwurl.match(/\/admin\/parties\/\d/)) {
    var ptdate = document.getElementsByClassName('party_start_at')[0].getAttribute('data-start-at').match(/(?<=\d{4}\/).*?(?=\d{2}:\d{2})/)[0].replace(/\s+/g,'').replace(/\//g,'')
    var ptspot = document.getElementsByClassName('col-sm-7 text-left')[0].getElementsByTagName('span')[1].textContent
    var daytimeF = document.getElementsByClassName('party_start_at')[0].getAttribute('data-start-at').match(/\d{2}(?=:)/)
    var daytimeB = document.getElementsByClassName('party_start_at')[0].getAttribute('data-start-at').match(/(?<=:)\d{2}/)
    document.title = `${daytimeF}:${daytimeB}|${ptdate}${ptspot}`;//タブ名
}
if (mwurl.match(/^(?=.*admin)(?=.*smartdevice_parties)/)) {
    var ProgressdaytimeF = document.getElementsByClassName('container mb-30')[0].textContent.match(/\d{2}(?=:)/)
    var ProgressdaytimeB = document.getElementsByClassName('container mb-30')[0].textContent.match(/(?<=:)\d{2}/)
    document.title = `【進行】[${ProgressdaytimeF} : ${ProgressdaytimeB}]`;//タブ名
}
if (mwurl.match(/^(?=.*admin)(?=.*smart_parties)/)) {
    var ProgressdaytimeSmartF = document.getElementsByClassName('container mb-30')[0].textContent.match(/\d{2}(?=:)/)
    var ProgressdaytimeSmartB = document.getElementsByClassName('container mb-30')[0].textContent.match(/(?<=:)\d{2}/)
    document.title = `【進行】[${ProgressdaytimeSmartF} : ${ProgressdaytimeSmartB}]`;//タブ名
}
if (mwurl.match(/^(?=.*admin)(?=.*parties)(?=.*search)/)) {
    var periodfront = location.href.match(/(?<=admin_party_search%5Bfrom%5D=)(.*?)(?=&)/)
    var periodYfront = periodfront[0].match(/\d{4}(?=%2F)/)
    var periodMfront = periodfront[0].match(/(?<=%2F)(.*?)(?=%2F)/)
    var periodDfront = periodfront[0].slice(-3)
    periodDfront = periodDfront.match(/(?<=F)\d+/)
    var periodafter = location.href.match(/(?<=admin_party_search%5Bto%5D=)(.*?)(?=&)/)
    var periodYafter = periodafter[0].match(/\d{4}(?=%2F)/)
    var periodMafter = periodafter[0].match(/(?<=%2F)(.*?)(?=%2F)/)
    var periodDafter = periodafter[0].slice(-3)
    periodDafter = periodDafter.match(/(?<=F)\d+/)
    document.title = `${periodMfront[0]}${periodDfront}~${periodMafter[0]}${periodDafter}`;//タブ名
}
