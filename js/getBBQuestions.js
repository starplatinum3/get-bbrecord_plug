
//版本2.0
function polishQueText(queText) {
    queText = queText.trim();
    // 经过我同学的修改，这个文档更加符合审美了。向他致敬
    return queText.replaceAll("\n空白 [1-9]\n", "");
}

function getChildrenByTagName(dom,tagName){
    lst=[];
    children=dom.children;
    // js 获取 元素的tag

 //    console.log("fieldsetChildren");
//    console.log(fieldsetChildren);

    for (let i = 0; i < children.length; i++) {
      //  console.log(fieldsetChildren[i]);
//  console.log(fieldsetChildren[i].tagName);
// 大写的 
        if(children[i].tagName===tagName){
            lst.push(children[i]);
        }
        
    }

    return lst;
}



/**
 * 2020年11月3日update，之前是直接拼接str串，写在txt里面，但是这样后序操作变得好难
 * 所以现在改为把东西写在对象里面，这样要处理就方便多了。然后也可以写到json文件里面
 * 2021年8月20日10:03:33  更新为这个代码
 * @param debug
 * @returns {{questions: *[], description: string, title: string}}
 */
function getBBQuestionObjs (debug) {
    debug = debug || false;
    let curriculum;
    try {
        curriculum = document.getElementById("crumb_1").textContent;
    } catch (e) {
        curriculum = "无课程名字";
    }

    let keyValueTable = document.getElementsByClassName("key-valueTable")[0];

    let descripContainer = keyValueTable.getElementsByClassName("vtbegenerated")[0];
    let descrip;
    if (descripContainer == null) descrip = "无描述";
    else descrip = descripContainer.textContent;

    let pageTitleHeader = document.getElementById("pageTitleHeader");
    let pageTitleText = document.getElementById("pageTitleText").textContent;
    curriculum = curriculum.trim();
    pageTitleText = pageTitleText.trim();


    let bbRecordObj = {
        title: pageTitleText,
        description: descrip,
        questions: []
    };
    let dataCollectionContainer = document.getElementById("dataCollectionContainer");
    let fieldsets = dataCollectionContainer.getElementsByTagName("fieldset");
    let legendVisibles = dataCollectionContainer.getElementsByClassName("legend-visible");
    if (debug)
        console.log("getBBQuestions");

    let fieldset;
    let inputs;
    let quesContainer;
    let queText;
    let answers;
    let table;

    let oneQueObj;
    let questionObjs = [];
    for (let i = 0; i < fieldsets.length; i++) {
        fieldset = fieldsets[i];
        // vtbegenerated inlineVtbegenerated 填空的class
        // vtbegenerated inlineVtbegenerated
        inputs = fieldset.getElementsByTagName("input");
        // input=fieldset.getElementsByTagName("input")[0];
        quesContainer = fieldset.getElementsByClassName("legend-visible")[0];
        if (quesContainer == undefined) {
            console.log("quesContainer undefined");
        }

        queText = getQuesText(quesContainer);
        // console.log("queText");
        // console.log(queText);
        queText = polishQueText(queText);
        // ques = fieldset.getElementsByClassName("legend-visible")[0].textContent;
        answers = [];
        // 一个选项的answers
        table = fieldset.getElementsByTagName("table")[0];
        // ps = fieldset.getElementsByTagName("p").children;
        // ps = fieldset.getElementsByTagName("p");
       
        // fieldset.
        // getChildrenByTagName
        // https://cloud.tencent.com/developer/ask/42581
        // https://cloud.tencent.com/developer/ask/42581
        // Java元素getElementsByTagName限制在顶层？

        // $0.getElementsByTagName("p").children;
        // $0.getElementsByTagName("p").childNodes;
        // https://blog.csdn.net/qq_43077318/article/details/106506985
        // $0.children;
        // 这是什么。。
        // todo 

//         ps=[];
//         fieldsetChildren=fieldset.children;
//         // js 获取 元素的tag

//      //    console.log("fieldsetChildren");
//     //    console.log(fieldsetChildren);

//         for (let i = 0; i < fieldsetChildren.length; i++) {
//           //  console.log(fieldsetChildren[i]);
// //  console.log(fieldsetChildren[i].tagName);
// // 大写的 
//             if(fieldsetChildren[i].tagName==="P"){
//               ps.push(fieldsetChildren[i]);
//             }
            
//         }


        ps=   getChildrenByTagName(fieldset,"P");


        // console.log("ps");
        // console.log(ps);


        if (table) {
            // 判断题 两个p
            // 填空题 几个input
            // 选择题
            // answers = getAnswers(table, true);
            // 这是一个题目的底下好几个ans
            answers = getAnswerObjs(table, false);
            // answers = getAnswerObjs(table, true);
            oneQueObj = {
                queText: queText,
                answers: answers,
                type: "choose",
            };


            // oneQueObj={
            //     type: "choose",
            //     answers:answers
            // };
            // oneQueAnswersObj = {
            //     type: "choose",
            //     answers: answers
            // };
            // outObj.type = "choose";
        } else if (ps!=undefined &&  ps.length == 2) {
            console.log("判断题");
            answers = getAnswerObjsOfPs(ps);
            oneQueObj = {
                queText: queText,
                answers: answers,
                type: "judge",
            };
            //  判断题目
            // for (let j = 0; j < ps.length; j++) {
            //     answers.push(ps[j].textContent);
            //     // ansStr += "空" + `${j + 1}: ` + inputs[j].value + "\n";
            // }
        }
        else if (inputs.length > 0) {

            // 这是填空题的情况
            // if (debug) console.log("input.value: " + input.value);
            // ansStr = "";
            for (let j = 0; j < inputs.length; j++) {
                answers.push(inputs[j].value);
                // ansStr += "空" + `${j + 1}: ` + inputs[j].value + "\n";
            }
            // answers.push(ansStr);
            // outObj.type = "fill";
            // oneQueAnswersObj = {
            //     type: "fill",
            //     answers: answers
            // };
            oneQueObj = {
                queText: queText,
                answers: answers,
                type: "fill",
            };

        }

        questionObjs.push(oneQueObj);
        // questions.push({
        //     que: quesText,
        //     answers: oneQueAnswersObj
        // });


    }

    bbRecordObj.questions = questionObjs;
    // console.log("questions:"+questions);
    // console.log("questions[0].answers.length:"+questions[0].answers.length);
    if (debug)
        console.log("bbRecordObj: ");
    console.log(bbRecordObj);
    // console.log("outObj.questions:"+outObj.questions);
    return bbRecordObj;

}




// 2021年6月9日09:24:21 
function getAnswerObjsOfPs (ps) {
    let answers = [];
    for (let i = 0; i < ps.length; i++) {
        p = ps[i];
        input = p.getElementsByTagName("input")[0];
        label = p.getElementsByTagName("label")[0];
        answers.push({
            text: label.textContent.trim(),
            chosen: input.checked
        });


    }

    return answers;
}





/**
 * 获得一个题目下面的很多个选项和答案
 * @param table
 * @param debug
 * @returns {[]|*[]}
 */
function getAnswerObjs (table, debug) {
    // console.log("table:"+table);
    // 如果是选择题 有choosen
    debug = debug || false;
    if (debug) console.log("getAnswers");
    let answers = [];
    let tbody = table.getElementsByTagName("tbody")[0];
    if (tbody == null) {
        console.log("no tbody");
        return answers;
    }
    let trs = tbody.getElementsByTagName("tr");

    let tds;
    let isChecked;
    let labels;
    let ansLabel;
    let ansObj;
    let ans;
    for (let i = 0; i < trs.length; i++) {
        tds = trs[i].getElementsByTagName("td");
        input = tds[0].getElementsByTagName("input")[0];
        if (input == undefined) {
            isChecked = false;
            // console.log("input");
            // console.log(input);
            console.log("tds");
            console.log(tds);
        } else {
            isChecked = input.checked;
        }

        try {
            labels = tds[2].getElementsByTagName("label");
        } catch (e) {

            continue;
        }

        //  if(labels==undefined){
        //      continue;
        //  }
        ansLabel = labels[0];


        if (ansLabel == null) continue;
        ans = ansLabel.textContent.trim();
        ansObj = {
            text: ans,
            chosen: isChecked
        };

        // ans = ans + " :你选择了他";
        // if (debug) {
        //     console.log("ans:" + ans);
        // }


        answers.push(ansObj);
    }
    return answers;
}

function getBBRecordMain () {
    // console.log("getBBRecordMain");
    // p363 重写的方法 与被重写的方法 必须有相同的签名
    // getBBQuestions(true);
    // getBBQuestionObjs(true);
    // console.log("in getBBRecordMain .js");
    // console.log("getBBRecordMain");

    let bbQuesObj = getBBQuestionObjs(true);
    // {questions: *[], description: string, title: string
    // https://blog.csdn.net/darrenzzb66/article/details/73012577
    // https://blog.csdn.net/qq_40190624/article/details/86293186

    // let msgTextArea = document.getElementById("msg");
    // msgTextArea.innerText="bbQuesObj";


    localStorage.bbRecordObj = JSON.stringify(bbQuesObj);

    console.log("localStorage.bbRecordObj");
    console.log(localStorage.bbRecordObj);

    // 没有下载这两个文件的必要
    // writeObjToTxtAndDownload(bbQuesObj);


    downloadTxt("bb_record_" + bbQuesObj.title + ".json", JSON.stringify(bbQuesObj));
    
    
    // 然而我自己测试的时候还是要用这个文件的 所以还是不要注释了


    // localStorage.one
    // 貌似在同一个网站的话，就会保存的
}


function pushAnswersToOutTxt (outTxt, answers, type) {
    // console.log("pushAnswersToOutTxt");
    // console.log("answers.length: " + answers.length);
    chosenAnsNums=[];
    for (let j = 0; j < answers.length; j++) {
        // console.log("j+1: ");
        // console.log(j+1);
        // console.log("answers[j].text: "+answers[j].text);
        outTxt += `${j + 1}、 `;

        // console.log("answers[j].text: "+answers[j].text);
        if (type === "choose") {
            outTxt += answers[j].text;
            // outTxt += answers[j].chosen ? "    :你选择了他" : "";
            if(answers[j].chosen ){
                chosenAnsNums.push(j);
            }
        } else {
            outTxt += answers[j];
        }
        // 如果是填空题 答案在answers里面了 没有chosen 他不是个obj
        outTxt += "\n";
        // outTxt+=`${j+1}. ${answers[j].text} ${answers[j].type=="choose"?answers[j].chosen?"    :你选择了他":"":""}\n`;
    }
    outTxt+="选择了: \n";
    ansNumbers="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
     first=true;
    for (let i = 0; i < chosenAnsNums.length; i++) {
        if(first){
            outTxt+=ansNumbers[chosenAnsNums[i]];
        }else{
            outTxt+="、 "+ansNumbers[chosenAnsNums[i]];
        }
        
    }
    outTxt+="\n";
    // console.log("outTxt: "+outTxt);
    return outTxt;
}





/**
 * 2020年11月3日update，之前是直接拼接str串，写在txt里面，但是这样后序操作变得好难
 * 所以现在改为把东西写在对象里面，这样要处理就方便多了。然后也可以写到json文件里面
 * @param debug
 * @returns {{questions: *[], description: string, title: string}}
 */
// function getBBQuestionObjs(debug) {
//     debug = debug || false;
//     let curriculum;
//     try{
//          curriculum = document.getElementById("crumb_1").textContent;
//     }catch (e) {
//         curriculum="无课程名字";
//     }
//     let keyValueTable = document.getElementsByClassName("key-valueTable")[0];

//     let descripContainer = keyValueTable.getElementsByClassName("vtbegenerated")[0];
//     let descrip;
//     if (descripContainer == null) descrip = "无描述";
//     else descrip = descripContainer.textContent;

//     let pageTitleHeader = document.getElementById("pageTitleHeader");
//     let pageTitleText = document.getElementById("pageTitleText").textContent;
//     curriculum = curriculum.trim();
//     pageTitleText = pageTitleText.trim();


//     let bbRecordObj = {
//         title: pageTitleText,
//         description: descrip,
//         questions: []
//     };
//     let dataCollectionContainer = document.getElementById("dataCollectionContainer");
//     let fieldsets = dataCollectionContainer.getElementsByTagName("fieldset");
//     let legendVisibles = dataCollectionContainer.getElementsByClassName("legend-visible");
//     if (debug)
//         console.log("getBBQuestions");

//     let fieldset;
//     let inputs;
//     let quesContainer;
//     let queText;
//     let answers;
//     let table;

//     let oneQueObj;
//     let questionObjs = [];
//     for (let i = 0; i < fieldsets.length; i++) {
//         fieldset = fieldsets[i];
//         // vtbegenerated inlineVtbegenerated 填空的class
//         // vtbegenerated inlineVtbegenerated
//         inputs = fieldset.getElementsByTagName("input");
//         // input=fieldset.getElementsByTagName("input")[0];
//         quesContainer = fieldset.getElementsByClassName("legend-visible")[0];
//         queText = getQuesText(quesContainer);
//         queText = polishQueText(queText);
//         // ques = fieldset.getElementsByClassName("legend-visible")[0].textContent;
//         answers = [];
//         // 一个选项的answers
//         table = fieldset.getElementsByTagName("table")[0];
//         if (table) {
//             // 选择题
//             // answers = getAnswers(table, true);
//             // 这是一个题目的底下好几个ans
//             answers = getAnswerObjs(table, true);
//             oneQueObj = {
//                 queText: queText,
//                 answers: answers,
//                 type: "choose",
//             };


//             // oneQueObj={
//             //     type: "choose",
//             //     answers:answers
//             // };
//             // oneQueAnswersObj = {
//             //     type: "choose",
//             //     answers: answers
//             // };
//             // outObj.type = "choose";
//         } else {
//             // 这是填空题的情况
//             // if (debug) console.log("input.value: " + input.value);
//             // ansStr = "";
//             for (let j = 0; j < inputs.length; j++) {
//                 answers.push(inputs[j].value);
//                 // ansStr += "空" + `${j + 1}: ` + inputs[j].value + "\n";
//             }
//             // answers.push(ansStr);
//             // outObj.type = "fill";
//             // oneQueAnswersObj = {
//             //     type: "fill",
//             //     answers: answers
//             // };
//             oneQueObj = {
//                 quesText: queText,
//                 answers: answers,
//                 type: "fill",
//             };

//         }

//         questionObjs.push(oneQueObj);
//         // questions.push({
//         //     que: quesText,
//         //     answers: oneQueAnswersObj
//         // });


//     }

//     bbRecordObj.questions = questionObjs;
//     // console.log("questions:"+questions);
//     // console.log("questions[0].answers.length:"+questions[0].answers.length);
//     if (debug){
//         console.log("bbRecordObj: ");
//         console.log(bbRecordObj);
//     }

//     // console.log("outObj.questions:"+outObj.questions);
//     return bbRecordObj;

// }



function writeObjToTxtAndDownload (totalObj, debug) {
    console.log("writeObjToTxtAndDownload");
    debug = debug || false;
    let outTxt = " 解释: '你选择了他' 是指做题的时候的选择,结合我的得分 就可以知道我选的对不对了,选项后面有个1 的是我之后补充的,不一定对,\n" +
        " 大多数只是猜测,所以只能作为参考\n";
    outTxt += "标题: " + totalObj.title + "\n";
    outTxt += "描述: " + totalObj.description + "\n";
    let questionObjs = totalObj.questions;
    // console.log("questions.length:"+questions.length);

    // oneQueAnswersObj={
    //     type:"choose",
    //     answers:answers
    // };

    let answers;
    for (let i = 0; i < questionObjs.length; i++) {
        outTxt += `题号: ${i + 1}\n`;
        outTxt += `问题: ${questionObjs[i].queText}\n`;
        outTxt += `你的答案: \n`;
        // console.log("questions[i].answers.length: "+questions[i].answers.length);
        answers = questionObjs[i].answers;
        // console.log("answers:" + answers);
        // console.log("answers.length:" + answers.length);
        // for(j=0;j<answers.length;j++){
        //     outTxt+=`${j+1}. ${answers[j].text} ${answers.type=="choose"?answers[j].chosen?"    :你选择了他":"":""}\n`;
        // }
        outTxt = pushAnswersToOutTxt(outTxt, answers, questionObjs[i].type);
        outTxt += "---------------------------------------------------------------------------------------------------------\n\n";
        // if(questions[i].answers.type="choose"){
        //     answers=questions[i].answers;
        //     for(j=0;j<answers.length;j++){
        //         outTxt+=`${j+1}. ${answers[i].text} ${answers[i].chosen?"    :你选择了他":""}\n`;
        //     }
        // }else {
        //     answers=questions[i].answers;
        //     for(j=0;j<answers.length;j++){
        //         outTxt+=`${j+1}. ${answers[i].text} \n`;
        //     }
        // }
    }
    // if (debug) {
    //     console.log("outTxt: " + outTxt);
    // }


    // if (!debug)
    //     downloadTxt("bb_" + totalObj.title + ".txt", outTxt);


}


// function writeObjToTxtAndDownload(totalObj, debug) {
//     console.log("writeObjToTxtAndDownload");
//     debug = debug || false;
//     let outTxt = "标题: " + totalObj.title + "\n";
//     outTxt += "描述: " + totalObj.description + "\n";
//     let questionObjs = totalObj.questions;
//     // console.log("questions.length:"+questions.length);

//     // oneQueAnswersObj={
//     //     type:"choose",
//     //     answers:answers
//     // };

//     let answers;
//     for (let i = 0; i < questionObjs.length; i++) {
//         outTxt += `题号: ${i + 1}\n`;
//         outTxt += `问题: ${questionObjs[i].queText}\n`;
//         outTxt += `你的答案: \n`;
//         // console.log("questions[i].answers.length: "+questions[i].answers.length);
//         answers = questionObjs[i].answers;
//         // console.log("answers:" + answers);
//         // console.log("answers.length:" + answers.length);
//         // for(j=0;j<answers.length;j++){
//         //     outTxt+=`${j+1}. ${answers[j].text} ${answers.type=="choose"?answers[j].chosen?"    :你选择了他":"":""}\n`;
//         // }
//         outTxt = pushAnswersToOutTxt(outTxt, answers, questionObjs[i].type);
//         outTxt += "---------------------------------------------------------------------------------------------------------\n\n";
//         // if(questions[i].answers.type="choose"){
//         //     answers=questions[i].answers;
//         //     for(j=0;j<answers.length;j++){
//         //         outTxt+=`${j+1}. ${answers[i].text} ${answers[i].chosen?"    :你选择了他":""}\n`;
//         //     }
//         // }else {
//         //     answers=questions[i].answers;
//         //     for(j=0;j<answers.length;j++){
//         //         outTxt+=`${j+1}. ${answers[i].text} \n`;
//         //     }
//         // }
//     }
//     // if (debug) {
//     //     console.log("outTxt: " + outTxt);
//     // }
//     // if (!debug)
//     //     downloadTxt("bb_" + totalObj.title + ".txt", outTxt);


// }


// https://bbs.csdn.net/topics/300056001
function getQuesText(quesContainer) {
    // legend-visible
    // http://www.voidcn.com/article/p-njqoeeig-bth.html
    // innerText 这个有回车
    // console.log("quesContainer.innerText: " + quesContainer.innerText);

    return quesContainer.innerText;


}

function showAnswers(answers) {
    console.log("answers:");
    for (let i = 0; i < answers.length; i++) {
        console.log(answers[i] + "\n");
    }
}

function pushAnswersToOutData(answers, outData, debug) {
    debug = debug || false;
    // console.log("answers:" + answers);
    outData += "你的答案: \n";
    let ans;
    for (let i = 0; i < answers.length; i++) {
        // console.log(answers[i] + "\n");
        ans = answers[i].trim();
        // console.log("ans: "+ans);
        outData += ans + "\n";
    }
    return outData;
}



/**
 * 获得一个题目下面的很多个选项和答案
 * @param table
 * @param debug
 * @returns {[]|*[]}
 */
function getAnswerObjs(table, debug) {
    // console.log("table:"+table);
// 如果是选择题 有choosen
    debug = debug || false;
    // if (debug) console.log("getAnswers");
    let answers = [];
    let tbody = table.getElementsByTagName("tbody")[0];
    if (tbody == null) {
        console.log("no tbody");
        return answers;
    }
    let trs = tbody.getElementsByTagName("tr");

    let tds;
    let isChecked;
    let labels;
    let ansLabel;
    let ansObj;
    let ans;
    for (let i = 0; i < trs.length; i++) {
        tds = trs[i].getElementsByTagName("td");

        isChecked = tds[0].getElementsByTagName("input")[0].checked;

        labels = tds[2].getElementsByTagName("label");

        ansLabel = labels[0];


        if (ansLabel == null) continue;
        ans = ansLabel.textContent.trim();
        ansObj = {
            text: ans,
            chosen: isChecked
        };

        // ans = ans + " :你选择了他";
        // if (debug) {
        //     console.log("ans:" + ans);
        // }


        answers.push(ansObj);
    }
    return answers;
}

// function getBBRecordMain() {
//     // console.log("getBBRecordMain");
//     // p363 重写的方法 与被重写的方法 必须有相同的签名
// // getBBQuestions(true);
// // getBBQuestionObjs(true);
//     console.log("in getBBRecordMain .js");
//     console.log("getBBRecordMain");

//     let bbQuesObj = getBBQuestionObjs(true);
// // {questions: *[], description: string, title: string
// // https://blog.csdn.net/darrenzzb66/article/details/73012577
// // https://blog.csdn.net/qq_40190624/article/details/86293186

//     // let msgTextArea = document.getElementById("msg");
//     // msgTextArea.innerText="bbQuesObj";
//     // bbRecordObj= JSON.stringify(bbQuesObj);

//     // localStorage.bbRecordObj = JSON.stringify(bbQuesObj);


//     // 不用localStorage 使用cookie 试试看
//     // cookie好像放不了那么大的
//     let bbRecordObjStr = JSON.stringify(bbQuesObj);
//     // setCookie("bbRecordObj",bbRecordObjStr);
//     writeObjToTxtAndDownload(bbQuesObj);
//     downloadTxt("bb_record_" + bbQuesObj.title + ".json", bbRecordObjStr);
// // localStorage.one
// // 貌似在同一个网站的话，就会保存的
// }

 // getBBRecordMain() ;