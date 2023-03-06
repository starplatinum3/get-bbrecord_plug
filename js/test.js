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



function downloadJob() {
    // title = document.getElementsByClassName('f-fl j-hwname')[0].textContent
    // let  title="欢迎访问浙大城市学院就业信息网"
    let title = "浙大城市学院就业信息网"

    let jobs = document.getElementsByClassName('job')
    let names = document.getElementsByClassName('name')

    let jobsArray = Array.from(jobs)
    // Array.from(jobs)
    let resList = []
    let baseUrl="http://career.zucc.edu.cn"
    for (let i = 0; i < names.length; i++) {
        let nameDom= names[i]
    //   let  jobDetailLinkSuffix=   nameDom.getElementsByTagName('a')[0].href
    //   let  jobDetailLink= `${baseUrl}${jobDetailLinkSuffix}`

      let  jobDetailLink= nameDom.getElementsByTagName('a')[0].href
      
      //       【2023届】实习生
// http://career.zucc.edu.cn/job/view/id/1194903
        let name = names[i].textContent.trim()
        let job = jobsArray[i].innerHTML.trim()
        resList.push({
            name,
            job,
            jobDetailLink
        })
        // console.log(names[i].innerHTML)
    }

    // resList[0]

    // let page = getQueryString("page")
    // let idxIntNext = genNextIdx()
    // console.log("idxIntNext");
    // console.log(idxIntNext);
    // downloadTxt(`${title}_page_${page}.json`, JSON.stringify(resList))

    // if (idxIntNext >= contentIdList.length) {
    //     return
    // }
    // let lastPageNum = 30
    // if (idxIntNext >= lastPageNum) {
    //     return
    // }

    // let contentIdNext = contentIdList[idxIntNext]
    // console.log("contentIdNext");
    // console.log(contentIdNext);

    // let nextLink = `http://career.zucc.edu.cn/job/search?title=&city=&d_skill=&d_industry=&d_major=&d_education=&d_category=&d_salary=&nature=&scale=&time=&page=${idxIntNext}&idx=${idxIntNext}`
    // setTimeout(() => {
    //     window.location.href = nextLink
    // }, 3000)

}
