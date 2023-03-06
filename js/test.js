// qaDescription f-fl f-cb

// let qaDescriptions = document.getElementsByClassName("qaDescription f-fl f-cb")
// let qaDescription = document.getElementsByClassName("qaDescription f-fl f-cb")[0];
// let ansDiv = document.getElementsByClassName("j-richOrText text f-f0 f-richEditorText edueditor_styleclass_29 edueditor_styleclass_31")[0];

// let  questionObj=
// {
//     question:qaDescription.textContent,
//     myAns: ansDiv.textContent,
// }

// console.log("questionObj");
// console.log(questionObj);


 linksDivs = document.getElementsByClassName("j-quizBtn u-btn u-btn-default f-fr")
 for(let linkDiv of linksDivs){

    console.log(linkDiv);
    // id= linkDiv.getAttr("id")
    // console.log(id);
 }

 
 linksDivs = document.getElementsByClassName("j-quizBtn u-btn u-btn-default f-fr")
 for(let i=0;i<linksDivs.length;i++){
   let  linkDiv= linksDivs[i]
    // .getAttribute("id");
    id= linkDiv.getAttribute("id")
    id=id.replace("auto-id-","")
    // id= linkDiv.getAttr("id")

    // console.log(linkDiv);
    console.log(id);

    // id= linkDiv.getAttr("id")
    // console.log(id);
 }

 qaDescription = document.getElementsByClassName("qaDescription f-fl f-cb")[0];
 ansDiv = document.getElementsByClassName("j-richOrText text f-f0 f-richEditorText edueditor_styleclass_29 edueditor_styleclass_31")[0];

 commentDiv = document.getElementsByClassName("j-comment comment")[0];

 title = document.getElementsByClassName('f-fl j-hwname')[0].textContent
 try{
    course = document.getElementsByClassName('f-fc3 courseTxt')[0].textContent.trim()
}catch(e){
    course = null
}
 try{
    teacher = document.getElementsByClassName('f-fcgreen padding-top-5')[0].innerHTML.trim()
}catch(e){
    teacher = null
}
 try{
        score = document.getElementsByClassName('score j-score')[0].textContent.trim()
 }catch(e){
     score = "未评分"
 }
//  score = document.getElementsByClassName('score j-score')[0].textContent.trim()

//   questionObj=
// {
//     question:qaDescription.textContent,
//     myAns: ansDiv.textContent,
// }

// questionObj=
// {
//     "question":qaDescription.textContent,
//     "myAns": ansDiv.textContent,
// }

// questionObj=
// {
//     "question":qaDescription.innerHTML,
//     "myAns": ansDiv.textContent,
// }

questionObj=
{
    "question":qaDescription.innerHTML.trim(),
    "myAns": ansDiv.innerHTML.trim(),
    questionText:qaDescription.textContent.trim(),
    myAnsText:ansDiv.textContent.trim(),
    commentText:commentDiv.textContent.trim(),
    comment:commentDiv.innerHTML.trim(),
    location_href: location.href.trim(),
    title,
    course,
    teacher,
    score

}

// ansDiv.innerHTML



question=qaDescription.textContent
console.log("questionObj");
console.log(questionObj);


// document.getElementsByClassName("qaDescription f-fl f-cb")[0].innerHTML = "test";