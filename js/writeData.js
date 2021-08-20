

// function pushAnswersToOutTxt(outTxt, answers, type) {
//     // console.log("pushAnswersToOutTxt");
//     // console.log("answers.length: " + answers.length);
//    let rightAns;
//     let markChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     for (let j = 0; j < answers.length; j++) {
//         // console.log("j+1: ");
//         // console.log(j+1);
//         // console.log("answers[j].text: "+answers[j].text);
//         // outTxt += `${j + 1}、 `;
//         outTxt += `${markChars[j]}、 `;

//         // console.log("answers[j].text: "+answers[j].text);
//         if (type === "choose") {
//             outTxt += answers[j].text;
//             // outTxt += answers[j].chosen ? "    :你选择了他" : "";
//             if(answers[j].chosen){
//                 rightAns=answers[j].text;
//             }

//         } else {
//             outTxt += answers[j];
//         }
//         // 如果是填空题 答案在answers里面了 没有chosen 他不是个obj
//         outTxt += "\n";
//         // outTxt+=`${j+1}. ${answers[j].text} ${answers[j].type=="choose"?answers[j].chosen?"    :你选择了他":"":""}\n`;
//     }
//     outTxt+="正确答案: "+rightAns+"\n";
//     // console.log("outTxt: "+outTxt);
//     return outTxt;
// }





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



function pushAnswersToHtml(htmlStr, answers, type) {
    // console.log("pushAnswersToOutTxt");
    // console.log("answers.length: " + answers.length);
    htmlStr += "<ol>";
    for (let j = 0; j < answers.length; j++) {
        // console.log("j+1: ");
        // console.log(j+1);
        // console.log("answers[j].text: "+answers[j].text);
        if (type === "choose") {
            htmlStr += "<li>";

            // htmlStr += answers[j].chosen ? "    :你选择了他" : "";
            htmlStr += answers[j].chosen ? "<input class='ans-checkbox' type='checkbox' checked='checked'>" : "<input   class='ans-checkbox' type='checkbox'>";
            // htmlStr +=` <div class="ans-text"> ${answers[j].text} </div>`;
            htmlStr += answers[j].text;
            htmlStr += "</li>";
        } else {
            htmlStr += `<li>${answers[j]}</li>`;
        }

        // outTxt+=`${j+1}. ${answers[j].text} ${answers[j].type=="choose"?answers[j].chosen?"    :你选择了他":"":""}\n`;
    }
    htmlStr += "</ol>";
    // console.log("outTxt: "+outTxt);
    return htmlStr;
}