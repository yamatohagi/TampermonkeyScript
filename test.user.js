// ==UserScript==
// @name         test
// @namespace    http://tampermonkey.net/
// @version      0.16050
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
    $('.mailsend-selectStatus').eq(0).append($('<input type="button" id="id01199" value="メアド＆苗字" style="width:110px;height:30px;font-size:15px;background:#FF6633;" >').click(function () {
        document.getElementById("id01199").style.background = "#CCCCCC"
        setTimeout(function () {
            document.getElementById("id01199").style.background = "#FF6633"
        }, 2000);
        NameAndMaill()
    }));
    $('.mailsend-selectStatus').eq(0).append($('<input type="button" id="id01192" value="【PatyName】" style="width:110px;height:30px;font-size:15px;background:#66CCFF;" >').click(function () {
        document.getElementById("id01192").style.background = "#CCCCCC"
        setTimeout(function () {
            document.getElementById("id01192").style.background = "#66CCFF"
        }, 2000);
        paName()
    }));
}

///////////////////////【mw to ykmshg】///////////////////////////////////
if (mwurl.match(/^(?=.*ty.jp)(?=.*members)(?=.*admin)(?=.*ykmshg)/)) {
    if (document.getElementsByClassName('container mb-30')[0].textContent.match(/1件を表示/)) {
        document.querySelector("body > div.container.mb-30 > table > tbody > tr > td:nth-child(1) > a").click()
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
        else {
            if (valueadmin.match(/[｛｝〈〉《》「」『』【】＋－±×・～＼～∥｜…‥‘’“”（）〔〕]/)) {
                console.log("タイトル");
               document.getElementsByName('admin_party_search[title]')[2].checked = true;
            }
            else {
                if (valueadmin.match(/[亜-黑]{1,4}/)) {
                    console.log("感じ");
                    document.getElementsByName('admin_party_search[location]')[2].checked = true;
                    document.getElementsByName('admin_party_search[floor_name]')[2].checked = true;
                }
                else {
                    if (valueadmin.match(/^[ぁ-んー　]*$/)) {  //"ー"の後ろの文字は全角スペース
                        console.log("ひらがな");
                    }
                    else {
                        console.log("その他漢字");

                    }
                }
            }
        }

    }
}
if (mwurl.match(/^(?=.*ty.jp)(?=.*members)(?=.*admin)/)) {
    let $ = window.jQuery;
    let element = '';
    //////////______________________________________会員詳細情報画面のみ
    let maillcopyclientfield = '';
    if (document.querySelector("body > div > h2").textContent == '会員詳細情報') {
        document.title = "【会員情報】";//タブ名
        console.log("会員詳細情報が実行されています");
        $('th.background-lightgray:eq(6)').append($('<input type="button" id="id001" value="メアドコピー" style="width:80px;height:27px;font-size:8px;background:#3399FF;" >').click(function () {
            document.getElementById("id001").style.background = "#CCCCCC"
            setTimeout(function () {
                document.getElementById("id001").style.background = "#3399FF"
            }, 2000);
            maillcopyclientfield = document.getElementsByClassName('table table-sm table-bordered')[0].textContent.match(/メールアドレス(.*)連絡用メールアドレス/)[1];
            if (!(maillcopyclientfield == null || maillcopyclientfield == '')) {
                navigator.clipboard.writeText(maillcopyclientfield);
                console.log(maillcopyclientfield);
            } else {
                navigator.clipboard.writeText('ER');
            }
        }));;
        $('th.background-lightgray:eq(2)').append($('<input type="button" id="id0003" value="フルネーム" style="width:70px;height:27px;font-size:8px;background:#FFCC66;" >').click(function () {
            document.getElementById("id0003").style.background = "#CCCCCC"
            setTimeout(function () {
                document.getElementById("id0003").style.background = "#FFCC66"
            }, 2000);
            let fullNameString = document.getElementsByClassName('table table-sm table-bordered')[0].textContent.match(/姓名（ふりがな）(.*)\s[（(]/);
            if (!(fullNameString == null || fullNameString == '')) {
                navigator.clipboard.writeText(fullNameString[1]);
                console.log(fullNameString[1]);
            } else {
                navigator.clipboard.writeText('ER');
            }
        }));;
        $('th.background-lightgray:eq(2)').append($('<input type="button" id="id0001" value="苗字" style="width:50px;height:27px;font-size:8px;background:#00CC33;" >').click(function () {
            document.getElementById("id0001").style.background = "#CCCCCC"
            setTimeout(function () {
                document.getElementById("id0001").style.background = "#00CC33"
            }, 2000);
            var tagetString = document.getElementsByClassName('table table-sm table-bordered')[0].textContent.match(/姓名（ふりがな）(.*)\s[（(]/);
            if (!(tagetString == null || tagetString == '')) {
                tagetString = tagetString[1].split(/\s+/)[0]
                console.log(tagetString);
                navigator.clipboard.writeText(tagetString);
            } else {
                navigator.clipboard.writeText('ER');
            }
        }));;
        $('th.background-lightgray:eq(6)').append($('<input type="button" id="id0016" value="メアド＆苗字" style="width:80px;height:27px;font-size:10px;background:#FF6633;" >').click(function () {
            document.getElementById("id0016").style.background = "#CCCCCC"
            setTimeout(function () {
                document.getElementById("id0016").style.background = "#FF6633"
            }, 2000);
            var addressPluse = 'null'
            var namePluse = document.getElementsByClassName('table table-sm table-bordered')[0].textContent.match(/姓名（ふりがな）(.*)\s[（(]/);
            if (!(namePluse == null || namePluse == '')) {
                namePluse = namePluse[1].split(/\s+/)[0]
                addressPluse = document.getElementsByClassName('table table-sm table-bordered')[0].textContent.match(/メールアドレス(.*)連絡用メールアドレス/)[1];
                if (!(addressPluse == null || addressPluse == '')) {
                    navigator.clipboard.writeText(`comand+${addressPluse}+name+${namePluse}+comand`);
                    console.log(addressPluse);
                    console.log(namePluse);
                } else {
                    navigator.clipboard.writeText('ER');
                }
            } else {
                navigator.clipboard.writeText('ER');
            }
        }));
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
                    if (value.match(/^[ぁ-んー　]*$/)) {  //"ー"の後ろの文字は全角スペース
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
if (mwurl.match(/^(?=.*member_search)(?=.*members)(?=.*admin)/)) {
    if (document.getElementsByClassName('text-center')[2].textContent == "該当の検索結果はありません") {
        setTimeout(function () {
            location.href = (atob("aHR0cHM6Ly93d3cucGFydHlwYXJ0eS5qcC9hZG1pbi9tZW1iZXJz"));
        }, 500);
    }
}
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
                    console.log('選択ポイントはその他です。');
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
                    console.log('選択ポイントはその他です。');
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
                    console.log('選択ポイントはその他です。');
            }
        })
        full[pidi].addEventListener('dblclick', function (e) {
            var NUMPid = ($('.col-sm-7.text-left').index(this))
            console.log(NUMPid)
            switch (e.target.className) {
                case 'allinbutton':
                    var joinman = document.getElementsByClassName('capacity_man')[NUMPid].previousElementSibling.textContent
                    var joinwoman = document.getElementsByClassName('capacity_woman')[NUMPid].previousElementSibling.textContent
                    var kikakunum = document.getElementsByClassName('row party-frame')[NUMPid].textContent.match(/\d+(?=対)/)
                    var womanAge = document.getElementsByClassName('row party-frame')[NUMPid].textContent.match(/(?<=年齢・条件\（女性\）\d+[〜～])\d+(?=歳)/)
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
    var ptspot = document.getElementsByClassName('col-sm-7 text-left')[0].getElementsByTagName('span')[1].textContent
    var daytimeF = document.getElementsByClassName('party_start_at')[0].textContent.match(/\d{2}(?=:)/)
    var daytimeB = document.getElementsByClassName('party_start_at')[0].textContent.match(/(?<=:)\d{2}/)
    document.title = `【参加者】[${daytimeF} : ${daytimeB}] ${ptspot}`;//タブ名
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
    var periodDfront = periodfront[0].slice(-2)
    var periodafter = location.href.match(/(?<=admin_party_search%5Bto%5D=)(.*?)(?=&)/)
    var periodYafter = periodafter[0].match(/\d{4}(?=%2F)/)
    var periodMafter = periodafter[0].match(/(?<=%2F)(.*?)(?=%2F)/)
    var periodDafter = periodafter[0].slice(-2)
    document.title = `【PT一覧】${periodMfront[0]}/${periodDfront}～${periodMafter[0]}/${periodDafter}`;//タブ名
    $('.text-left:eq(0)').append($('<input type="button" id="id001102" value="凄いボタン" style="width:80px;height:27px;font-size:13px;background:#FF6633;" >').click(function () {
        var NameAndjoinnum = []
        for (var pidi = 0; pidi < document.getElementsByClassName('col-sm-7 text-left').length; pidi++) {
            var testPspan = document.getElementsByClassName('col-sm-7 text-left')[pidi].getElementsByTagName('span')[1].textContent
            var cusidinp1 = document.getElementsByClassName('party_id')[pidi].textContent
            var cusidinp2 = document.getElementsByClassName('party_floor span-separate-sentences')[pidi].textContent
            var cusidinp3 = document.getElementsByClassName('party_start_at')[pidi].textContent
            var cusparty_id = document.getElementsByClassName('party_id')[pidi].textContent

            var kikakunum = document.getElementsByClassName('table table-sm table-bordered')[pidi].textContent.match(/\d+(?=対)/)
            var joinman = document.getElementsByClassName('capacity_man')[pidi].previousElementSibling.textContent
            var joinwoman = document.getElementsByClassName('capacity_woman')[pidi].previousElementSibling.textContent
            var womanAge = document.getElementsByClassName('table table-sm table-bordered')[pidi].textContent.match(/(?<=年齢・条件\（女性\）\d+[〜～])\d+(?=歳)/)
            var womanJsPass = document.querySelector(`#edit_party_${cusparty_id} > table > tbody > tr:nth-child(10) > td:nth-child(2) > div`).innerHTML.match(/(.*?)(?=<br>)/)[0]
            womanAge = womanAge || womanJsPass;

            NameAndjoinnum.push(`${cusidinp1} ${testPspan} ${cusidinp2} ${cusidinp3} ${joinman}-${joinwoman}(${kikakunum}-${kikakunum}) ${womanAge}`);
        }
        console.log(NameAndjoinnum.join('\n'));
        navigator.clipboard.writeText(NameAndjoinnum.join('\n'));
    }))
}
