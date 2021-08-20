
// 版本2.0
// function getScore(score_str) {
//     // http://c.biancheng.net/view/5581.html
//     let de_pos = score_str.indexOf("得");
//     let fen_pos = score_str.indexOf("分");
//     return parseFloat(score_str.substr(de_pos + 2, fen_pos));
//     // https://blog.csdn.net/woshidaniu/article/details/70141248
// }


// function putScoreToRecord(scores, bbRecordObj) {
//     // bbRecordObj=localStorage.bbRecordObj;
//     // console.log("putScoreToRecord: ");
//     // console.log("scores: ");
//     // console.log(scores);
//     let questions = bbRecordObj.questions;
//     // console.log("questions: ");
//     // console.log(questions);
//     let score_str;
//     let question;
// // 2021年3月16日
//     // if(questions==undefined){
//     //     console.log("questions undefined");
//     //     return null;
//     // }
//     // rror in event handler: TypeError: 
//     // Cannot read property 'length' of undefined
//     // at putScoreToRecord 
//     for (let i = 0; i < questions.length; i++) {
//         score_str = scores[i];
//         if (score_str == null) {
//             // console.log("score_str null");
//             // console.log("i");
//             // console.log(i);
//             continue;
//         }
//         score_str = scores[i].trim();
//         question = questions[i];
//         question["score_str"] = score_str;
//         question["score"] = getScore(score_str);
//     }
//     // let title = to_file_path_name(bbRecordObj["title"]);
//     // out_filename =  "bb_with_score_" + title + ".json";
//     // downloadTxt(out_filename)
//     return bbRecordObj;
// }

// function getBBScoresObj() {
//     let pageTitleText = document.getElementById("pageTitleText").textContent.trim();

//     let ul = document.getElementById("content_listContainer");
//     let lis = ul.getElementsByTagName("li");
//     let scoreStrs = [];
//     let contentListRight;
//     let scoreStr;
//     // 插件的那个 竟然 type 是fill 问题大啊
//     for (let i = 0; i < lis.length; i++) {
//         contentListRight = lis[i].getElementsByClassName("contentListRight")[0];
//         if (contentListRight == null) {
//             console.log("contentListRight is null");
//             console.log("i");
//             console.log(i);
//             scoreStr = "分数出错了";
//         } else
//             scoreStr = contentListRight.textContent.trim();
//         // console.log("scoreStr:"+ scoreStr);
//         scoreStrs.push(scoreStr);
//     }
//     // console.log("scoreStrs:");
//     // console.log(scoreStrs);
//     // let BBScoresObj;
//     // 版本好像对不上了 这里没有ques 啊
//     // questions 这些好像是python 那里来的?
//     let BBScoresObj = {
//         scoreStrs: scoreStrs,
//         pageTitleText: pageTitleText,
//     };
//     // 没有 questions
//     // BBScoresObj.scoreStrs=scoreStrs;
//     // BBScoresObj.pageTitleText=pageTitleText;
//     return BBScoresObj;
// }


// function downloadWithScore(has_score, bbRecordObj) {

//     let scores = getBBScoresObj();
//     // console.log("downloadWithScore");

//     let scoreStrsList = scores.scoreStrs;
//     // console.log("scoreStrsList");
//     // console.log(scoreStrsList);contentListRight
//     bbRecordObj = putScoreToRecord((scoreStrsList), bbRecordObj);
//     let title = bbRecordObj["title"];
//     let outTxt = " 解释: '你选择了他' 是指做题的时候的选择,结合我的得分 就可以知道我选的对不对了,选项后面有个1 的是我之后补充的,不一定对,\n" +
//         " 大多数只是猜测,所以只能作为参考\n" ;
//     outTxt+="标题: " + title + "\n";

//     outTxt += "描述: " + bbRecordObj["description"] + "\n";
//     let questions = bbRecordObj["questions"];

//     let answers;
//     let question;
//     titleNumbers="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     for (let i = 0; i < questions.length; i++) {
//         question = questions[i];
//         // outTxt += `题号: ${titleNumbers[i]}\n`;
//         outTxt += `题号: ${i + 1}\n`;
//         if (has_score) {
//             outTxt += `分数: ${question['score_str']}\n`;
//         }

//         outTxt += `问题: ${question['queText']}\n`;
//         outTxt += "你的答案:\n";
//         answers = question["answers"];
//         outTxt = pushAnswersToOutTxt(outTxt, answers, question["type"]);
//         outTxt += "---------------------------------------------------------------------------------------------------------\n\n"
//     }
//     // title = title.replaceAll(" ", "_");
//     // // # https://www.cnblogs.com/jjliu/p/11514226.html
//     // title = title.replaceAll(":", "");
//     title = to_file_path_name(title);
//     let out_filename = "bb_with_score_" + title + ".txt";
//     downloadTxt(out_filename, outTxt);
// }


// BBScoresObj= getBBScoresObj();
// pageTitleText=BBScoresObj.pageTitleText;
// scoreStrs=BBScoresObj.scoreStrs;
// downloadTxt("bb_score_" + pageTitleText + ".json", JSON.stringify(scoreStrs));


// function getBBScoresMain() {
//     let href = location.href;
//     let BBScoresObj;
//     let pageTitleText;
//     let scoreStrs;
//     if (href.startsWith("file:")) {
//         BBScoresObj = getBBScoresObj();
//         pageTitleText = BBScoresObj.pageTitleText;
//         scoreStrs = BBScoresObj.scoreStrs;
//         downloadTxt("bb_score_" + pageTitleText + ".json", JSON.stringify(scoreStrs));
//         // 这个是下载只有成绩信息的一个json
//     } else {
//         // getBBScore();
//         // bbRecordObj=getCookie("bbRecordObj");
//         // localStorage.bbRecordObj;
//         // let bbRecordObj = JSON.parse(parseCookie(getCookie("bbRecordObj")));
//         let bbRecordObj= localStorage.bbRecordObj;
// // 失败了
// // console.log("bbRecordObj: ");
// // writeObj(bbRecordObj);

// // writeObj(obj2string(bbRecordObj));
// // console.log(bbRecordObj);


//         if (bbRecordObj) {
//             console.log("description: " + bbRecordObj["description"]);
//             downloadWithScore(true, bbRecordObj);
//             // 这个是下载含有成绩信息的最终的txt文件
//         }
//     }


// }

// getBBScoresMain();
// chrome.runtime.onMessage.addListener(function (request,sender,callback) {
//     // request {action: 'getBBRecord'},
//     console.log("request.action");
//     console.log(request.action);
//
//     getBBScoresMain();
//     callback('getBBScoresMain');
// });







function getScore (score_str) {
    // http://c.biancheng.net/view/5581.html
    let de_pos = score_str.indexOf("得");
    let fen_pos = score_str.indexOf("分");
    return parseFloat(score_str.substr(de_pos + 2, fen_pos));
    // https://blog.csdn.net/woshidaniu/article/details/70141248
}


function putScoreToRecord (scores, bbRecordObj) {
    // bbRecordObj=localStorage.bbRecordObj;
    // console.log("putScoreToRecord: ");
    // console.log("scores: ");
    // console.log(scores);
    let questions = bbRecordObj.questions;
    // console.log("questions: ");
    // console.log(questions);
    let score_str;
    let question;
    for (let i = 0; i < questions.length; i++) {
        score_str = scores[i];
        if (score_str == null) {
            // console.log("score_str null");
            // console.log("i");
            // console.log(i);
            continue;
        }
        score_str = scores[i].trim();
        question = questions[i];
        question["score_str"] = score_str;
        question["score"] = getScore(score_str);
    }
    // let title = to_file_path_name(bbRecordObj["title"]);
    // out_filename =  "bb_with_score_" + title + ".json";
    // downloadTxt(out_filename)
    return bbRecordObj;
}

function getBBScoresObj () {
    let pageTitleText = document.getElementById("pageTitleText").textContent.trim();

    let ul = document.getElementById("content_listContainer");
    let lis = ul.getElementsByTagName("li");
    let scoreStrs = [];
    let contentListRight;
    let scoreStr;
    for (let i = 0; i < lis.length; i++) {
        contentListRight = lis[i].getElementsByClassName("contentListRight")[0];
        if (contentListRight == null) {
            console.log("contentListRight is null");
            console.log("i");
            console.log(i);
            scoreStr = "分数出错了";
        } else
            scoreStr = contentListRight.textContent.trim();
        // console.log("scoreStr:"+ scoreStr);
        scoreStrs.push(scoreStr);
    }
    // console.log("scoreStrs:");
    // console.log(scoreStrs);
    // let BBScoresObj;
    let BBScoresObj = {
        scoreStrs: scoreStrs,
        pageTitleText: pageTitleText,
    };
    // BBScoresObj.scoreStrs=scoreStrs;
    // BBScoresObj.pageTitleText=pageTitleText;
    return BBScoresObj;
}


function downloadWithScore (has_score, bbRecordObj) {

    let scores = getBBScoresObj();
    // console.log("downloadWithScore");

    let scoreStrsList = scores.scoreStrs;
    // console.log("scoreStrsList");
    // console.log(scoreStrsList);contentListRight
    bbRecordObj = putScoreToRecord((scoreStrsList), bbRecordObj);
    let title = bbRecordObj["title"];
    let outTxt = " 解释: '你选择了他' 是指做题的时候的选择,结合我的得分 就可以知道我选的对不对了,\n" +
        "选项后面有个1 的是我之后补充的,不一定对,\n" +
        " 大多数只是猜测,所以只能作为参考\n";
    outTxt += "标题: " + title + "\n";

    outTxt += "描述: " + bbRecordObj["description"] + "\n";
    let questions = bbRecordObj["questions"];

    let answers;
    let question;
    for (let i = 0; i < questions.length; i++) {
        question = questions[i];
        outTxt += `题号: ${i + 1}\n`;
        if (has_score) {
            outTxt += `分数: ${question['score_str']}\n`;
        }
        queText = question['queText'];
        if (queText === undefined) {
            queText = question['quesText'];
        }
        // outTxt += `问题: ${question['queText']}\n`;
        outTxt += `问题: ${queText}\n`;
        outTxt += "你的答案:\n";
        answers = question["answers"];
        outTxt = pushAnswersToOutTxt(outTxt, answers, question["type"]);
        outTxt += "---------------------------------------------------------------------------------------------------------\n\n"
    }
    // title = title.replaceAll(" ", "_");
    // // # https://www.cnblogs.com/jjliu/p/11514226.html
    // title = title.replaceAll(":", "");
    title = to_file_path_name(title);
    let out_filename = "bb_with_score_" + title + ".txt";
    downloadTxt(out_filename, outTxt);
}


// BBScoresObj= getBBScoresObj();
// pageTitleText=BBScoresObj.pageTitleText;
// scoreStrs=BBScoresObj.scoreStrs;
// downloadTxt("bb_score_" + pageTitleText + ".json", JSON.stringify(scoreStrs));


function getBBScoresMain () {
    console.log('getBBScoresMain .js ');
    
    let href = location.href;
    let BBScoresObj;
    let pageTitleText;
    let scoreStrs;
    if (href.startsWith("file:")) {
        BBScoresObj = getBBScoresObj();
        pageTitleText = BBScoresObj.pageTitleText;
        scoreStrs = BBScoresObj.scoreStrs;
        downloadTxt("bb_score_" + pageTitleText + ".json", JSON.stringify(scoreStrs));
        // 这个是下载只有成绩信息的一个json
    } else {
        // 得分的确实是这个页面 但是 bb record 好像 有问题
        // getBBScore();
        let bbRecordObj = JSON.parse(localStorage.bbRecordObj);
        // 失败了
        // console.log("bbRecordObj: ");
        // writeObj(bbRecordObj);

        // writeObj(obj2string(bbRecordObj));
        // console.log(bbRecordObj);

        console.log("bbRecordObj");
        console.log(bbRecordObj);

        if (bbRecordObj) {
            console.log("description: " + bbRecordObj["description"]);
            downloadWithScore(true, bbRecordObj);
            // 这个是下载含有成绩信息的最终的txt文件
        }
    }



}


// record  的时候 把 判断当作 填空了
// todo 
function pushAnswersToOutTxt (outTxt, answers, type) {
    // console.log("pushAnswersToOutTxt");
    // console.log("answers.length: " + answers.length);
    chosenAnsNums = [];
    ansNumbers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (let j = 0; j < answers.length; j++) {
        // console.log("j+1: ");
        // console.log(j+1);
        // console.log("answers[j].text: "+answers[j].text);
        // outTxt += `${j + 1}、 `;
        outTxt += `${ansNumbers[j]}、 `;
        // console.log("answers[j].text: "+answers[j].text);
        if (type === "choose"||type === "judge") {
            outTxt += answers[j].text;
            // outTxt += answers[j].chosen ? "    :你选择了他" : "";
            if (answers[j].chosen) {
                chosenAnsNums.push(j);
            }
        } else if(type === "fill"){
            outTxt += answers[j];
        }
        // 如果是填空题 答案在answers里面了 没有chosen 他不是个obj
        outTxt += "\n";
        // outTxt+=`${j+1}. ${answers[j].text} ${answers[j].type=="choose"?answers[j].chosen?"    :你选择了他":"":""}\n`;
    }
    outTxt += "选择了: ";

    first = true;
    for (let i = 0; i < chosenAnsNums.length; i++) {
        if (first) {
            outTxt += ansNumbers[chosenAnsNums[i]];
        } else {
            outTxt += "、 " + ansNumbers[chosenAnsNums[i]];
        }

    }
    outTxt += "\n";
    // console.log("outTxt: "+outTxt);
    return outTxt;
}



// function pushAnswersToOutTxt (outTxt, answers, type) {
//     // console.log("pushAnswersToOutTxt");
//     // console.log("answers.length: " + answers.length);
//     chosenAnsNums = [];
//     ansNumbers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     for (let j = 0; j < answers.length; j++) {
//         // console.log("j+1: ");
//         // console.log(j+1);
//         // console.log("answers[j].text: "+answers[j].text);
//         // outTxt += `${j + 1}、 `;
//         outTxt += `${ansNumbers[j]}、 `;
//         // console.log("answers[j].text: "+answers[j].text);
//         if (type === "choose"||type === "judge") {
//             outTxt += answers[j].text;
//             // outTxt += answers[j].chosen ? "    :你选择了他" : "";
//             if (answers[j].chosen) {
//                 chosenAnsNums.push(j);
//             }
//         } else if(type === "fill"){
//             outTxt += answers[j];
//         }
//         // 如果是填空题 答案在answers里面了 没有chosen 他不是个obj
//         outTxt += "\n";
//         // outTxt+=`${j+1}. ${answers[j].text} ${answers[j].type=="choose"?answers[j].chosen?"    :你选择了他":"":""}\n`;
//     }
//     outTxt += "选择了: ";

//     first = true;
//     for (let i = 0; i < chosenAnsNums.length; i++) {
//         if (first) {
//             outTxt += ansNumbers[chosenAnsNums[i]];
//         } else {
//             outTxt += "、 " + ansNumbers[chosenAnsNums[i]];
//         }

//     }
//     outTxt += "\n";
//     // console.log("outTxt: "+outTxt);
//     return outTxt;
// }


// chrome.runtime.onMessage.addListener(function (request,sender,callback) {
//     // request {action: 'getBBRecord'},
//     console.log("request.action");
//     console.log(request.action);
//
//     getBBScoresMain();
//     callback('getBBScoresMain');
// });