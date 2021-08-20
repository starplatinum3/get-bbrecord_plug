function putObjToHtml(BBRecordObj) {
    console.log("location.href");
    console.log(location.href);
    // window.open("../html/modify.html");
    console.log("putObjToHtml");

    $("#title").val(BBRecordObj.title);
    $("#description").val(BBRecordObj.description);

    let questionObjs = BBRecordObj.questions;
    // $( "#questions")

    let answers;
    let quesHtml = "";
    for (let i = 0; i < questionObjs.length; i++) {
        quesHtml += `
 <li>
        <ul>
            <li>

                <div class="label">题号:</div>
                <div class="content">${i + 1}</div>
            </li>
            <li>

                <div class="label"> 分数:</div>
                <div class="content"> ${questionObjs[i].score_str}</div>


            </li>
            <li>
                <div class="label"> 问题:</div>
                <div class="content">${questionObjs[i].queText}</div>
            </li>
            <li class="ans">
                <div >你的答案:</div>
       `;

        // console.log("questions[i].answers.length: "+questions[i].answers.length);
        answers = questionObjs[i].answers;
        // console.log("answers:" + answers);
        // console.log("answers.length:" + answers.length);
        // for(j=0;j<answers.length;j++){
        //     outTxt+=`${j+1}. ${answers[j].text} ${answers.type=="choose"?answers[j].chosen?"    :你选择了他":"":""}\n`;
        // }
        quesHtml = pushAnswersToHtml(quesHtml, answers, questionObjs[i].type);
        quesHtml += "     </li>       </ul>            </li>";

    }
    $("#questions").html(quesHtml);
    // // if (debug) {
    // //     console.log("outTxt: " + outTxt);
    // // }
    // if (!debug)
    //     downloadTxt("bb_" + BBRecordObj.title + ".txt", outTxt);
// return quesHtml;

}

// window.addEventListener('message', function(e) {
//     console.log("e.data");
//     console.log(e.data);
// },false);


// console.log("BBRecordObj");
// console.log(BBRecordObj);

// putObjToHtml(bbRecordObj);
function submit() {

    // setCookie("bbRecordObj", bbRecordObj);

    let bbRecordObjFromModifyPage = getBBRecordObjFromModifyPage();
    console.log("bbRecordObjFromModifyPage");
    let bbRecordObjFromModifyPageStr = JSON.stringify(bbRecordObjFromModifyPage);
    console.log(bbRecordObjFromModifyPageStr);
    setCookie("bbRecordObj",bbRecordObjFromModifyPageStr);
    // console.log('getCookie("bbRecordObj")');
    // cookie=getCookie("bbRecordObj");
// console.log(document.cookie);
// https://zhidao.baidu.com/question/2207784508705968268.html
//     console.log( parseCookie(cookie));
}

function pushAnsToAnswers(answers, ansLis) {

    let isChecked;
    let ansObj;
    let chooseQueInput;
    let type;
    for (let i = 0; i < ansLis.length; i++) {
        // chooseQueInput = ansLis[i].children("input");
        chooseQueInput = ansLis[i].getElementsByTagName("input");
        if (chooseQueInput == null) {
            //填空题
            type = "fill";
            answers.push(ansLis[i].textContent);
        } else {
            isChecked = chooseQueInput.checked;
            ansObj = {
                text: ansLis[i].textContent,
                chosen: isChecked
            };
            answers.push(ansObj);
            type = "choose";
        }
    }
    let typeAndAnswers = [type, answers];

    return typeAndAnswers;
}

function getBBRecordObjFromModifyPage() {
    let questions = [];
    let questionsHtml = $("#questions>li");
    let contents;
    let answers;
    let chooseQueInput;
    let ansLis;
    let oneQueObj;
    let typeAndAnswers;
    // console.log("questionsHtml");
    // console.log(questionsHtml);
    // console.log("questionsHtml[0]");
    // console.log(questionsHtml[0]);
    for (let i = 0; i < questionsHtml.length; i++) {
        // contents = questionsHtml[i].children(".content");
        // contents = questionsHtml.children(".content");
        contents = questionsHtml[i].getElementsByClassName("content");
        // console.log("contents");
        // console.log(contents);
        answers = [];
        // chooseQueInput = questionsHtml[i].children("ul .ans>ul input");
        // chooseQueInput = questionsHtml.children("ul .ans>ul input");
        // chooseQueInput = questionsHtml[i].getElementsByClassName("ul");
        // if(chooseQueInput==null||chooseQueInput.length===0){
        //     // 填空题
        // }
        // ansLis = questionsHtml[i].children(".ans ul li");
        ansLis = questionsHtml[i].getElementsByClassName("ans")[0].getElementsByTagName("li");
        typeAndAnswers = pushAnsToAnswers(answers, ansLis);
        // console.log("contents.val()");
        // console.log(contents.val());
        oneQueObj = {
            queText: contents[2].textContent,
            answers: typeAndAnswers[1],
            type: typeAndAnswers[0],
        };
        questions.push(oneQueObj);
    }
    let bbRecordObj = {
        title: $("#title").val(),
        description: $("#description").val(),
        questions: questions,
    };
    return bbRecordObj;

}


// bbRecordObj = parseCookie(getCookie("bbRecordObj"));

// putObjToHtml(bbRecordObj);
// let bbRecordObj;
// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//     // console.log(request.value);
//     // {action:'putAns', value:'你好，我是popup！'}
//     // sendResponse('我收到了你的情书，popup~');
//     switch (request.action) {
//         case "modify":
//             bbRecordObj=request.value;
//             // getBBRecordMain();
//             putObjToHtml(bbRecordObj);
//             console.log("putObjToHtml");
//             sendResponse('我收到了你的情书，popup~,modify');
//             break;
//
//     }
//
// });
//
// 可以从modify 页面获得json  但是不能直接传递到 原来的网站 因为是不相连的
// console.log("modify page");