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


let detailLinkList=
['http://career.zucc.edu.cn/job/view/id/1195408', 'http://career.zucc.edu.cn/job/view/id/1195407', 'http://career.zucc.edu.cn/job/view/id/1195406', 'http://career.zucc.edu.cn/job/view/id/1195405', 'http://career.zucc.edu.cn/job/view/id/1195404', 'http://career.zucc.edu.cn/job/view/id/1195403', 'http://career.zucc.edu.cn/job/view/id/1195401', 'http://career.zucc.edu.cn/job/view/id/1195400', 'http://career.zucc.edu.cn/job/view/id/1195399', 'http://career.zucc.edu.cn/job/view/id/1195398', 'http://career.zucc.edu.cn/job/view/id/1195397', 'http://career.zucc.edu.cn/job/view/id/1195396', 'http://career.zucc.edu.cn/job/view/id/1195395', 'http://career.zucc.edu.cn/job/view/id/1195394', 'http://career.zucc.edu.cn/job/view/id/1195392', 'http://career.zucc.edu.cn/job/view/id/1195390', 'http://career.zucc.edu.cn/job/view/id/1195389', 'http://career.zucc.edu.cn/job/view/id/1195388', 'http://career.zucc.edu.cn/job/view/id/1195387', 'http://career.zucc.edu.cn/job/view/id/1195386', 'http://career.zucc.edu.cn/job/view/id/1195384', 'http://career.zucc.edu.cn/job/view/id/1195383', 'http://career.zucc.edu.cn/job/view/id/1195382', 'http://career.zucc.edu.cn/job/view/id/1195380', 'http://career.zucc.edu.cn/job/view/id/1195378', 'http://career.zucc.edu.cn/job/view/id/1195377', 'http://career.zucc.edu.cn/job/view/id/1195374', 'http://career.zucc.edu.cn/job/view/id/1195372', 'http://career.zucc.edu.cn/job/view/id/1195371', 'http://career.zucc.edu.cn/job/view/id/1195360', 'http://career.zucc.edu.cn/job/view/id/1195359', 'http://career.zucc.edu.cn/job/view/id/1195358', 'http://career.zucc.edu.cn/job/view/id/1195357', 'http://career.zucc.edu.cn/job/view/id/1195356', 'http://career.zucc.edu.cn/job/view/id/1195349', 'http://career.zucc.edu.cn/job/view/id/1195347', 'http://career.zucc.edu.cn/job/view/id/1195346', 'http://career.zucc.edu.cn/job/view/id/1195345', 'http://career.zucc.edu.cn/job/view/id/1195344', 'http://career.zucc.edu.cn/job/view/id/1195343', 'http://career.zucc.edu.cn/job/view/id/1195342', 'http://career.zucc.edu.cn/job/view/id/1195334', 'http://career.zucc.edu.cn/job/view/id/1195326', 'http://career.zucc.edu.cn/job/view/id/1195317', 'http://career.zucc.edu.cn/job/view/id/1195316', 'http://career.zucc.edu.cn/job/view/id/1195315', 'http://career.zucc.edu.cn/job/view/id/1195314', 'http://career.zucc.edu.cn/job/view/id/1195313', 'http://career.zucc.edu.cn/job/view/id/1195311', 'http://career.zucc.edu.cn/job/view/id/1195312', 'http://career.zucc.edu.cn/job/view/id/1195310', 'http://career.zucc.edu.cn/job/view/id/1195309', 'http://career.zucc.edu.cn/job/view/id/1195307', 'http://career.zucc.edu.cn/job/view/id/1195306', 'http://career.zucc.edu.cn/job/view/id/1195305', 'http://career.zucc.edu.cn/job/view/id/1195304', 'http://career.zucc.edu.cn/job/view/id/1195303', 'http://career.zucc.edu.cn/job/view/id/1195302', 'http://career.zucc.edu.cn/job/view/id/1195301', 'http://career.zucc.edu.cn/job/view/id/1195300', 'http://career.zucc.edu.cn/job/view/id/1195299', 'http://career.zucc.edu.cn/job/view/id/1195294', 'http://career.zucc.edu.cn/job/view/id/1195293', 'http://career.zucc.edu.cn/job/view/id/1195292', 'http://career.zucc.edu.cn/job/view/id/1195290', 'http://career.zucc.edu.cn/job/view/id/1195288', 'http://career.zucc.edu.cn/job/view/id/1195284', 'http://career.zucc.edu.cn/job/view/id/1195282', 'http://career.zucc.edu.cn/job/view/id/1195281', 'http://career.zucc.edu.cn/job/view/id/1195280', 'http://career.zucc.edu.cn/job/view/id/1195279', 'http://career.zucc.edu.cn/job/view/id/1195278', 'http://career.zucc.edu.cn/job/view/id/1195277', 'http://career.zucc.edu.cn/job/view/id/1195296', 'http://career.zucc.edu.cn/job/view/id/1195297', 'http://career.zucc.edu.cn/job/view/id/1195271', 'http://career.zucc.edu.cn/job/view/id/1195270', 'http://career.zucc.edu.cn/job/view/id/1195269', 'http://career.zucc.edu.cn/job/view/id/1195268', 'http://career.zucc.edu.cn/job/view/id/1195267', 'http://career.zucc.edu.cn/job/view/id/1195266', 'http://career.zucc.edu.cn/job/view/id/1195265', 'http://career.zucc.edu.cn/job/view/id/1195264', 'http://career.zucc.edu.cn/job/view/id/1195263', 'http://career.zucc.edu.cn/job/view/id/1195262', 'http://career.zucc.edu.cn/job/view/id/1195261', 'http://career.zucc.edu.cn/job/view/id/1195260', 'http://career.zucc.edu.cn/job/view/id/1195259', 'http://career.zucc.edu.cn/job/view/id/1195258', 'http://career.zucc.edu.cn/job/view/id/1195257', 'http://career.zucc.edu.cn/job/view/id/1195256', 'http://career.zucc.edu.cn/job/view/id/1195255', 'http://career.zucc.edu.cn/job/view/id/1195254', 'http://career.zucc.edu.cn/job/view/id/1195253', 'http://career.zucc.edu.cn/job/view/id/1195252', 'http://career.zucc.edu.cn/job/view/id/1195251', 'http://career.zucc.edu.cn/job/view/id/1195250', 'http://career.zucc.edu.cn/job/view/id/1195249', 'http://career.zucc.edu.cn/job/view/id/1195248', 'http://career.zucc.edu.cn/job/view/id/1195247', 'http://career.zucc.edu.cn/job/view/id/1195246', 'http://career.zucc.edu.cn/job/view/id/1195245', 'http://career.zucc.edu.cn/job/view/id/1195244', 'http://career.zucc.edu.cn/job/view/id/1195243', 'http://career.zucc.edu.cn/job/view/id/1195242', 'http://career.zucc.edu.cn/job/view/id/1195241', 'http://career.zucc.edu.cn/job/view/id/1195239', 'http://career.zucc.edu.cn/job/view/id/1195238', 'http://career.zucc.edu.cn/job/view/id/1195237', 'http://career.zucc.edu.cn/job/view/id/1195234', 'http://career.zucc.edu.cn/job/view/id/1195225', 'http://career.zucc.edu.cn/job/view/id/1195224', 'http://career.zucc.edu.cn/job/view/id/1195232', 'http://career.zucc.edu.cn/job/view/id/1195233', 'http://career.zucc.edu.cn/job/view/id/1195236', 'http://career.zucc.edu.cn/job/view/id/1195223', 'http://career.zucc.edu.cn/job/view/id/1195222', 'http://career.zucc.edu.cn/job/view/id/1195221', 'http://career.zucc.edu.cn/job/view/id/1195219', 'http://career.zucc.edu.cn/job/view/id/1195218', 'http://career.zucc.edu.cn/job/view/id/1195214', 'http://career.zucc.edu.cn/job/view/id/1195213', 'http://career.zucc.edu.cn/job/view/id/1195212', 'http://career.zucc.edu.cn/job/view/id/1195209', 'http://career.zucc.edu.cn/job/view/id/1195208', 'http://career.zucc.edu.cn/job/view/id/1195202', 'http://career.zucc.edu.cn/job/view/id/1195201', 'http://career.zucc.edu.cn/job/view/id/1195197', 'http://career.zucc.edu.cn/job/view/id/1195196', 'http://career.zucc.edu.cn/job/view/id/1195195', 'http://career.zucc.edu.cn/job/view/id/1195194', 'http://career.zucc.edu.cn/job/view/id/1195193', 'http://career.zucc.edu.cn/job/view/id/1195191', 'http://career.zucc.edu.cn/job/view/id/1195190', 'http://career.zucc.edu.cn/job/view/id/1195183', 'http://career.zucc.edu.cn/job/view/id/1195173', 'http://career.zucc.edu.cn/job/view/id/1195170', 'http://career.zucc.edu.cn/job/view/id/1195169', 'http://career.zucc.edu.cn/job/view/id/1195168', 'http://career.zucc.edu.cn/job/view/id/1195167', 'http://career.zucc.edu.cn/job/view/id/1195166', 'http://career.zucc.edu.cn/job/view/id/1195165', 'http://career.zucc.edu.cn/job/view/id/1195164', 'http://career.zucc.edu.cn/job/view/id/1195162', 'http://career.zucc.edu.cn/job/view/id/1195150', 'http://career.zucc.edu.cn/job/view/id/1195149', 'http://career.zucc.edu.cn/job/view/id/1195147', 'http://career.zucc.edu.cn/job/view/id/1195145', 'http://career.zucc.edu.cn/job/view/id/1195138', 'http://career.zucc.edu.cn/job/view/id/1195137', 'http://career.zucc.edu.cn/job/view/id/1195136', 'http://career.zucc.edu.cn/job/view/id/1195135', 'http://career.zucc.edu.cn/job/view/id/1195134', 'http://career.zucc.edu.cn/job/view/id/1195133', 'http://career.zucc.edu.cn/job/view/id/1195132', 'http://career.zucc.edu.cn/job/view/id/1195131', 'http://career.zucc.edu.cn/job/view/id/1195130', 'http://career.zucc.edu.cn/job/view/id/1195129', 'http://career.zucc.edu.cn/job/view/id/1195128', 'http://career.zucc.edu.cn/job/view/id/1195127', 'http://career.zucc.edu.cn/job/view/id/1195125', 'http://career.zucc.edu.cn/job/view/id/1195111', 'http://career.zucc.edu.cn/job/view/id/1195110', 'http://career.zucc.edu.cn/job/view/id/1195109', 'http://career.zucc.edu.cn/job/view/id/1195108', 'http://career.zucc.edu.cn/job/view/id/1195107', 'http://career.zucc.edu.cn/job/view/id/1195106', 'http://career.zucc.edu.cn/job/view/id/1195105', 'http://career.zucc.edu.cn/job/view/id/1195104', 'http://career.zucc.edu.cn/job/view/id/1195103', 'http://career.zucc.edu.cn/job/view/id/1195102', 'http://career.zucc.edu.cn/job/view/id/1195100', 'http://career.zucc.edu.cn/job/view/id/1195099', 'http://career.zucc.edu.cn/job/view/id/1195098', 'http://career.zucc.edu.cn/job/view/id/1195095', 'http://career.zucc.edu.cn/job/view/id/1195094', 'http://career.zucc.edu.cn/job/view/id/1195093', 'http://career.zucc.edu.cn/job/view/id/1195091', 'http://career.zucc.edu.cn/job/view/id/1195090', 'http://career.zucc.edu.cn/job/view/id/1195089', 'http://career.zucc.edu.cn/job/view/id/1195088', 'http://career.zucc.edu.cn/job/view/id/1195087', 'http://career.zucc.edu.cn/job/view/id/1195086', 'http://career.zucc.edu.cn/job/view/id/1195085', 'http://career.zucc.edu.cn/job/view/id/1195083', 'http://career.zucc.edu.cn/job/view/id/1195082', 'http://career.zucc.edu.cn/job/view/id/1195079', 'http://career.zucc.edu.cn/job/view/id/1195072', 'http://career.zucc.edu.cn/job/view/id/1195069', 'http://career.zucc.edu.cn/job/view/id/1195068', 'http://career.zucc.edu.cn/job/view/id/1195066', 'http://career.zucc.edu.cn/job/view/id/1195065', 'http://career.zucc.edu.cn/job/view/id/1195057', 'http://career.zucc.edu.cn/job/view/id/1195056', 'http://career.zucc.edu.cn/job/view/id/1195051', 'http://career.zucc.edu.cn/job/view/id/1195042', 'http://career.zucc.edu.cn/job/view/id/1195041', 'http://career.zucc.edu.cn/job/view/id/1195040', 'http://career.zucc.edu.cn/job/view/id/1195039', 'http://career.zucc.edu.cn/job/view/id/1195033', 'http://career.zucc.edu.cn/job/view/id/1195671', 'http://career.zucc.edu.cn/job/view/id/1195670', 'http://career.zucc.edu.cn/job/view/id/1195669', 'http://career.zucc.edu.cn/job/view/id/1195668', 'http://career.zucc.edu.cn/job/view/id/1195667', 'http://career.zucc.edu.cn/job/view/id/1195666', 'http://career.zucc.edu.cn/job/view/id/1195665', 'http://career.zucc.edu.cn/job/view/id/1195664', 'http://career.zucc.edu.cn/job/view/id/1195663', 'http://career.zucc.edu.cn/job/view/id/1195662', 'http://career.zucc.edu.cn/job/view/id/1195661', 'http://career.zucc.edu.cn/job/view/id/1195660', 'http://career.zucc.edu.cn/job/view/id/1195659', 'http://career.zucc.edu.cn/job/view/id/1195658', 'http://career.zucc.edu.cn/job/view/id/1195657', 'http://career.zucc.edu.cn/job/view/id/1195656', 'http://career.zucc.edu.cn/job/view/id/1195655', 'http://career.zucc.edu.cn/job/view/id/1195654', 'http://career.zucc.edu.cn/job/view/id/1195653', 'http://career.zucc.edu.cn/job/view/id/1195652', 'http://career.zucc.edu.cn/job/view/id/1195032', 'http://career.zucc.edu.cn/job/view/id/1195026', 'http://career.zucc.edu.cn/job/view/id/1195016', 'http://career.zucc.edu.cn/job/view/id/1195015', 'http://career.zucc.edu.cn/job/view/id/1195007', 'http://career.zucc.edu.cn/job/view/id/1195000', 'http://career.zucc.edu.cn/job/view/id/1194999', 'http://career.zucc.edu.cn/job/view/id/1194998', 'http://career.zucc.edu.cn/job/view/id/1194997', 'http://career.zucc.edu.cn/job/view/id/1194996', 'http://career.zucc.edu.cn/job/view/id/1194995', 'http://career.zucc.edu.cn/job/view/id/1194994', 'http://career.zucc.edu.cn/job/view/id/1194993', 'http://career.zucc.edu.cn/job/view/id/1194986', 'http://career.zucc.edu.cn/job/view/id/1194985', 'http://career.zucc.edu.cn/job/view/id/1194984', 'http://career.zucc.edu.cn/job/view/id/1194983', 'http://career.zucc.edu.cn/job/view/id/1194982', 'http://career.zucc.edu.cn/job/view/id/1194961', 'http://career.zucc.edu.cn/job/view/id/1194960', 'http://career.zucc.edu.cn/job/view/id/1194959', 'http://career.zucc.edu.cn/job/view/id/1194946', 'http://career.zucc.edu.cn/job/view/id/1194945', 'http://career.zucc.edu.cn/job/view/id/1194944', 'http://career.zucc.edu.cn/job/view/id/1194943', 'http://career.zucc.edu.cn/job/view/id/1194942', 'http://career.zucc.edu.cn/job/view/id/1194941', 'http://career.zucc.edu.cn/job/view/id/1194939', 'http://career.zucc.edu.cn/job/view/id/1194938', 'http://career.zucc.edu.cn/job/view/id/1194937', 'http://career.zucc.edu.cn/job/view/id/1194936', 'http://career.zucc.edu.cn/job/view/id/1194935', 'http://career.zucc.edu.cn/job/view/id/1194934', 'http://career.zucc.edu.cn/job/view/id/1194932', 'http://career.zucc.edu.cn/job/view/id/1194931', 'http://career.zucc.edu.cn/job/view/id/1194930', 'http://career.zucc.edu.cn/job/view/id/1194929', 'http://career.zucc.edu.cn/job/view/id/1194916', 'http://career.zucc.edu.cn/job/view/id/1194915', 'http://career.zucc.edu.cn/job/view/id/1194907', 'http://career.zucc.edu.cn/job/view/id/1194903', 'http://career.zucc.edu.cn/job/view/id/1194902', 'http://career.zucc.edu.cn/job/view/id/1194901', 'http://career.zucc.edu.cn/job/view/id/1194877', 'http://career.zucc.edu.cn/job/view/id/1194876', 'http://career.zucc.edu.cn/job/view/id/1194867', 'http://career.zucc.edu.cn/job/view/id/1194865', 'http://career.zucc.edu.cn/job/view/id/1194827', 'http://career.zucc.edu.cn/job/view/id/1194804', 'http://career.zucc.edu.cn/job/view/id/1194803', 'http://career.zucc.edu.cn/job/view/id/1194785', 'http://career.zucc.edu.cn/job/view/id/1194784', 'http://career.zucc.edu.cn/job/view/id/1194783', 'http://career.zucc.edu.cn/job/view/id/1194782', 'http://career.zucc.edu.cn/job/view/id/1194778', 'http://career.zucc.edu.cn/job/view/id/1194777', 'http://career.zucc.edu.cn/job/view/id/1194776', 'http://career.zucc.edu.cn/job/view/id/1194779', 'http://career.zucc.edu.cn/job/view/id/1194764', 'http://career.zucc.edu.cn/job/view/id/1194757', 'http://career.zucc.edu.cn/job/view/id/1194754', 'http://career.zucc.edu.cn/job/view/id/1194753', 'http://career.zucc.edu.cn/job/view/id/1194729', 'http://career.zucc.edu.cn/job/view/id/1194702', 'http://career.zucc.edu.cn/job/view/id/1194701', 'http://career.zucc.edu.cn/job/view/id/1194700', 'http://career.zucc.edu.cn/job/view/id/1194689', 'http://career.zucc.edu.cn/job/view/id/1194688', 'http://career.zucc.edu.cn/job/view/id/1194687', 'http://career.zucc.edu.cn/job/view/id/1194658', 'http://career.zucc.edu.cn/job/view/id/1194655', 'http://career.zucc.edu.cn/job/view/id/1194654', 'http://career.zucc.edu.cn/job/view/id/1194653', 'http://career.zucc.edu.cn/job/view/id/1194643', 'http://career.zucc.edu.cn/job/view/id/1194634', 'http://career.zucc.edu.cn/job/view/id/1194632', 'http://career.zucc.edu.cn/job/view/id/1194631', 'http://career.zucc.edu.cn/job/view/id/1194629', 'http://career.zucc.edu.cn/job/view/id/1194628', 'http://career.zucc.edu.cn/job/view/id/1194593', 'http://career.zucc.edu.cn/job/view/id/1194584', 'http://career.zucc.edu.cn/job/view/id/1194583', 'http://career.zucc.edu.cn/job/view/id/1194581', 'http://career.zucc.edu.cn/job/view/id/1194580', 'http://career.zucc.edu.cn/job/view/id/1194579', 'http://career.zucc.edu.cn/job/view/id/1194578', 'http://career.zucc.edu.cn/job/view/id/1194577', 'http://career.zucc.edu.cn/job/view/id/1194576', 'http://career.zucc.edu.cn/job/view/id/1194575', 'http://career.zucc.edu.cn/job/view/id/1194561', 'http://career.zucc.edu.cn/job/view/id/1194559', 'http://career.zucc.edu.cn/job/view/id/1194558', 'http://career.zucc.edu.cn/job/view/id/1194557', 'http://career.zucc.edu.cn/job/view/id/1194525', 'http://career.zucc.edu.cn/job/view/id/1194499', 'http://career.zucc.edu.cn/job/view/id/1194490', 'http://career.zucc.edu.cn/job/view/id/1194489', 'http://career.zucc.edu.cn/job/view/id/1194488', 'http://career.zucc.edu.cn/job/view/id/1194487', 'http://career.zucc.edu.cn/job/view/id/1194486', 'http://career.zucc.edu.cn/job/view/id/1194280', 'http://career.zucc.edu.cn/job/view/id/1194279', 'http://career.zucc.edu.cn/job/view/id/1194185', 'http://career.zucc.edu.cn/job/view/id/1194184', 'http://career.zucc.edu.cn/job/view/id/1194183', 'http://career.zucc.edu.cn/job/view/id/1194182', 'http://career.zucc.edu.cn/job/view/id/1194181', 'http://career.zucc.edu.cn/job/view/id/1194180', 'http://career.zucc.edu.cn/job/view/id/1194179', 'http://career.zucc.edu.cn/job/view/id/1194178', 'http://career.zucc.edu.cn/job/view/id/1194177', 'http://career.zucc.edu.cn/job/view/id/1194176', 'http://career.zucc.edu.cn/job/view/id/1194175', 'http://career.zucc.edu.cn/job/view/id/1194174', 'http://career.zucc.edu.cn/job/view/id/1194173', 'http://career.zucc.edu.cn/job/view/id/1194007', 'http://career.zucc.edu.cn/job/view/id/1194002', 'http://career.zucc.edu.cn/job/view/id/1194001', 'http://career.zucc.edu.cn/job/view/id/1194000', 'http://career.zucc.edu.cn/job/view/id/1193999', 'http://career.zucc.edu.cn/job/view/id/1193998', 'http://career.zucc.edu.cn/job/view/id/1193997', 'http://career.zucc.edu.cn/job/view/id/1193996', 'http://career.zucc.edu.cn/job/view/id/1193988', 'http://career.zucc.edu.cn/job/view/id/1193987', 'http://career.zucc.edu.cn/job/view/id/1193986', 'http://career.zucc.edu.cn/job/view/id/1193985', 'http://career.zucc.edu.cn/job/view/id/1193984', 'http://career.zucc.edu.cn/job/view/id/1193983', 'http://career.zucc.edu.cn/job/view/id/1193890', 'http://career.zucc.edu.cn/job/view/id/1193887', 'http://career.zucc.edu.cn/job/view/id/1193632', 'http://career.zucc.edu.cn/job/view/id/1193631', 'http://career.zucc.edu.cn/job/view/id/1193629', 'http://career.zucc.edu.cn/job/view/id/1193620', 'http://career.zucc.edu.cn/job/view/id/1193617', 'http://career.zucc.edu.cn/job/view/id/1193532', 'http://career.zucc.edu.cn/job/view/id/1193531', 'http://career.zucc.edu.cn/job/view/id/1193530', 'http://career.zucc.edu.cn/job/view/id/1193529', 'http://career.zucc.edu.cn/job/view/id/1193528', 'http://career.zucc.edu.cn/job/view/id/1193527', 'http://career.zucc.edu.cn/job/view/id/1193410', 'http://career.zucc.edu.cn/job/view/id/1193395', 'http://career.zucc.edu.cn/job/view/id/1193394', 'http://career.zucc.edu.cn/job/view/id/1193074', 'http://career.zucc.edu.cn/job/view/id/1192995', 'http://career.zucc.edu.cn/job/view/id/1192999', 'http://career.zucc.edu.cn/job/view/id/1192818', 'http://career.zucc.edu.cn/job/view/id/1192824', 'http://career.zucc.edu.cn/job/view/id/1192754', 'http://career.zucc.edu.cn/job/view/id/1192447', 'http://career.zucc.edu.cn/job/view/id/1192356', 'http://career.zucc.edu.cn/job/view/id/1192237', 'http://career.zucc.edu.cn/job/view/id/1192236', 'http://career.zucc.edu.cn/job/view/id/1192142', 'http://career.zucc.edu.cn/job/view/id/1192141', 'http://career.zucc.edu.cn/job/view/id/1192102', 'http://career.zucc.edu.cn/job/view/id/1192101', 'http://career.zucc.edu.cn/job/view/id/1192100', 'http://career.zucc.edu.cn/job/view/id/1192099', 'http://career.zucc.edu.cn/job/view/id/1192098', 'http://career.zucc.edu.cn/job/view/id/1192097', 'http://career.zucc.edu.cn/job/view/id/1192024', 'http://career.zucc.edu.cn/job/view/id/1192023', 'http://career.zucc.edu.cn/job/view/id/1191891', 'http://career.zucc.edu.cn/job/view/id/1191887', 'http://career.zucc.edu.cn/job/view/id/1191862', 'http://career.zucc.edu.cn/job/view/id/1191850', 'http://career.zucc.edu.cn/job/view/id/1191844', 'http://career.zucc.edu.cn/job/view/id/1191659', 'http://career.zucc.edu.cn/job/view/id/1191658', 'http://career.zucc.edu.cn/job/view/id/1191656', 'http://career.zucc.edu.cn/job/view/id/1191655', 'http://career.zucc.edu.cn/job/view/id/1191654', 'http://career.zucc.edu.cn/job/view/id/1191653', 'http://career.zucc.edu.cn/job/view/id/1191652', 'http://career.zucc.edu.cn/job/view/id/1191650', 'http://career.zucc.edu.cn/job/view/id/1191649', 'http://career.zucc.edu.cn/job/view/id/1190788', 'http://career.zucc.edu.cn/job/view/id/1190680', 'http://career.zucc.edu.cn/job/view/id/1190676', 'http://career.zucc.edu.cn/job/view/id/1190543', 'http://career.zucc.edu.cn/job/view/id/1190542', 'http://career.zucc.edu.cn/job/view/id/1190541', 'http://career.zucc.edu.cn/job/view/id/1190491', 'http://career.zucc.edu.cn/job/view/id/1190448', 'http://career.zucc.edu.cn/job/view/id/1190440', 'http://career.zucc.edu.cn/job/view/id/1190433', 'http://career.zucc.edu.cn/job/view/id/1190434', 'http://career.zucc.edu.cn/job/view/id/1190435', 'http://career.zucc.edu.cn/job/view/id/1190436', 'http://career.zucc.edu.cn/job/view/id/1190437', 'http://career.zucc.edu.cn/job/view/id/1190438', 'http://career.zucc.edu.cn/job/view/id/1190376', 'http://career.zucc.edu.cn/job/view/id/1190350', 'http://career.zucc.edu.cn/job/view/id/1190351', 'http://career.zucc.edu.cn/job/view/id/1190352', 'http://career.zucc.edu.cn/job/view/id/1190353', 'http://career.zucc.edu.cn/job/view/id/1190354', 'http://career.zucc.edu.cn/job/view/id/1195651', 'http://career.zucc.edu.cn/job/view/id/1195650', 'http://career.zucc.edu.cn/job/view/id/1195649', 'http://career.zucc.edu.cn/job/view/id/1195648', 'http://career.zucc.edu.cn/job/view/id/1195647', 'http://career.zucc.edu.cn/job/view/id/1195646', 'http://career.zucc.edu.cn/job/view/id/1195645', 'http://career.zucc.edu.cn/job/view/id/1195644', 'http://career.zucc.edu.cn/job/view/id/1195643', 'http://career.zucc.edu.cn/job/view/id/1195642', 'http://career.zucc.edu.cn/job/view/id/1195641', 'http://career.zucc.edu.cn/job/view/id/1195640', 'http://career.zucc.edu.cn/job/view/id/1195639', 'http://career.zucc.edu.cn/job/view/id/1195638', 'http://career.zucc.edu.cn/job/view/id/1195637', 'http://career.zucc.edu.cn/job/view/id/1195636', 'http://career.zucc.edu.cn/job/view/id/1195635', 'http://career.zucc.edu.cn/job/view/id/1195634', 'http://career.zucc.edu.cn/job/view/id/1195633', 'http://career.zucc.edu.cn/job/view/id/1195632', 'http://career.zucc.edu.cn/job/view/id/1195631', 'http://career.zucc.edu.cn/job/view/id/1195630', 'http://career.zucc.edu.cn/job/view/id/1195629', 'http://career.zucc.edu.cn/job/view/id/1195628', 'http://career.zucc.edu.cn/job/view/id/1195627', 'http://career.zucc.edu.cn/job/view/id/1195626', 'http://career.zucc.edu.cn/job/view/id/1195625', 'http://career.zucc.edu.cn/job/view/id/1195624', 'http://career.zucc.edu.cn/job/view/id/1195623', 'http://career.zucc.edu.cn/job/view/id/1195622', 'http://career.zucc.edu.cn/job/view/id/1195621', 'http://career.zucc.edu.cn/job/view/id/1195620', 'http://career.zucc.edu.cn/job/view/id/1195619', 'http://career.zucc.edu.cn/job/view/id/1195618', 'http://career.zucc.edu.cn/job/view/id/1195617', 'http://career.zucc.edu.cn/job/view/id/1195616', 'http://career.zucc.edu.cn/job/view/id/1195615', 'http://career.zucc.edu.cn/job/view/id/1195614', 'http://career.zucc.edu.cn/job/view/id/1195613', 'http://career.zucc.edu.cn/job/view/id/1195612', 'http://career.zucc.edu.cn/job/view/id/1195611', 'http://career.zucc.edu.cn/job/view/id/1195610', 'http://career.zucc.edu.cn/job/view/id/1195609', 'http://career.zucc.edu.cn/job/view/id/1195608', 'http://career.zucc.edu.cn/job/view/id/1195607', 'http://career.zucc.edu.cn/job/view/id/1195606', 'http://career.zucc.edu.cn/job/view/id/1195605', 'http://career.zucc.edu.cn/job/view/id/1195604', 'http://career.zucc.edu.cn/job/view/id/1195603', 'http://career.zucc.edu.cn/job/view/id/1195602', 'http://career.zucc.edu.cn/job/view/id/1195601', 'http://career.zucc.edu.cn/job/view/id/1195600', 'http://career.zucc.edu.cn/job/view/id/1195599', 'http://career.zucc.edu.cn/job/view/id/1195598', 'http://career.zucc.edu.cn/job/view/id/1195597', 'http://career.zucc.edu.cn/job/view/id/1195596', 'http://career.zucc.edu.cn/job/view/id/1195595', 'http://career.zucc.edu.cn/job/view/id/1195594', 'http://career.zucc.edu.cn/job/view/id/1195593', 'http://career.zucc.edu.cn/job/view/id/1195592', 'http://career.zucc.edu.cn/job/view/id/1195591', 'http://career.zucc.edu.cn/job/view/id/1195590', 'http://career.zucc.edu.cn/job/view/id/1195589', 'http://career.zucc.edu.cn/job/view/id/1195588', 'http://career.zucc.edu.cn/job/view/id/1195587', 'http://career.zucc.edu.cn/job/view/id/1195586', 'http://career.zucc.edu.cn/job/view/id/1195585', 'http://career.zucc.edu.cn/job/view/id/1195584', 'http://career.zucc.edu.cn/job/view/id/1195583', 'http://career.zucc.edu.cn/job/view/id/1195582', 'http://career.zucc.edu.cn/job/view/id/1195581', 'http://career.zucc.edu.cn/job/view/id/1195579', 'http://career.zucc.edu.cn/job/view/id/1195578', 'http://career.zucc.edu.cn/job/view/id/1195577', 'http://career.zucc.edu.cn/job/view/id/1195576', 'http://career.zucc.edu.cn/job/view/id/1195575', 'http://career.zucc.edu.cn/job/view/id/1195573', 'http://career.zucc.edu.cn/job/view/id/1195572', 'http://career.zucc.edu.cn/job/view/id/1195571', 'http://career.zucc.edu.cn/job/view/id/1195570', 'http://career.zucc.edu.cn/job/view/id/1195569', 'http://career.zucc.edu.cn/job/view/id/1195568', 'http://career.zucc.edu.cn/job/view/id/1195567', 'http://career.zucc.edu.cn/job/view/id/1195566', 'http://career.zucc.edu.cn/job/view/id/1195565', 'http://career.zucc.edu.cn/job/view/id/1195561', 'http://career.zucc.edu.cn/job/view/id/1195559', 'http://career.zucc.edu.cn/job/view/id/1195554', 'http://career.zucc.edu.cn/job/view/id/1195553', 'http://career.zucc.edu.cn/job/view/id/1195551', 'http://career.zucc.edu.cn/job/view/id/1195541', 'http://career.zucc.edu.cn/job/view/id/1195540', 'http://career.zucc.edu.cn/job/view/id/1195539', 'http://career.zucc.edu.cn/job/view/id/1195538', 'http://career.zucc.edu.cn/job/view/id/1195532', 'http://career.zucc.edu.cn/job/view/id/1195528', 'http://career.zucc.edu.cn/job/view/id/1195527', 'http://career.zucc.edu.cn/job/view/id/1195526', 'http://career.zucc.edu.cn/job/view/id/1195525', 'http://career.zucc.edu.cn/job/view/id/1195524', 'http://career.zucc.edu.cn/job/view/id/1195502', 'http://career.zucc.edu.cn/job/view/id/1195495', 'http://career.zucc.edu.cn/job/view/id/1195494', 'http://career.zucc.edu.cn/job/view/id/1195488', 'http://career.zucc.edu.cn/job/view/id/1195487', 'http://career.zucc.edu.cn/job/view/id/1195486', 'http://career.zucc.edu.cn/job/view/id/1195485', 'http://career.zucc.edu.cn/job/view/id/1195483', 'http://career.zucc.edu.cn/job/view/id/1195481', 'http://career.zucc.edu.cn/job/view/id/1195480', 'http://career.zucc.edu.cn/job/view/id/1195478', 'http://career.zucc.edu.cn/job/view/id/1195477', 'http://career.zucc.edu.cn/job/view/id/1195476', 'http://career.zucc.edu.cn/job/view/id/1195474', 'http://career.zucc.edu.cn/job/view/id/1195472', 'http://career.zucc.edu.cn/job/view/id/1195471', 'http://career.zucc.edu.cn/job/view/id/1195470', 'http://career.zucc.edu.cn/job/view/id/1195469', 'http://career.zucc.edu.cn/job/view/id/1195467', 'http://career.zucc.edu.cn/job/view/id/1195466', 'http://career.zucc.edu.cn/job/view/id/1195465', 'http://career.zucc.edu.cn/job/view/id/1195464', 'http://career.zucc.edu.cn/job/view/id/1195463', 'http://career.zucc.edu.cn/job/view/id/1195452', 'http://career.zucc.edu.cn/job/view/id/1195449', 'http://career.zucc.edu.cn/job/view/id/1195448', 'http://career.zucc.edu.cn/job/view/id/1195447', 'http://career.zucc.edu.cn/job/view/id/1195446', 'http://career.zucc.edu.cn/job/view/id/1195445', 'http://career.zucc.edu.cn/job/view/id/1195436', 'http://career.zucc.edu.cn/job/view/id/1195435', 'http://career.zucc.edu.cn/job/view/id/1195426', 'http://career.zucc.edu.cn/job/view/id/1195424', 'http://career.zucc.edu.cn/job/view/id/1195423', 'http://career.zucc.edu.cn/job/view/id/1195422', 'http://career.zucc.edu.cn/job/view/id/1195413', 'http://career.zucc.edu.cn/job/view/id/1195412', 'http://career.zucc.edu.cn/job/view/id/1195411', 'http://career.zucc.edu.cn/job/view/id/1195410', 'http://career.zucc.edu.cn/job/view/id/1195409', 'http://career.zucc.edu.cn/job/view/id/1195694', 'http://career.zucc.edu.cn/job/view/id/1195693', 'http://career.zucc.edu.cn/job/view/id/1195692', 'http://career.zucc.edu.cn/job/view/id/1195691', 'http://career.zucc.edu.cn/job/view/id/1195690', 'http://career.zucc.edu.cn/job/view/id/1195689', 'http://career.zucc.edu.cn/job/view/id/1195687', 'http://career.zucc.edu.cn/job/view/id/1195686', 'http://career.zucc.edu.cn/job/view/id/1195685', 'http://career.zucc.edu.cn/job/view/id/1195684', 'http://career.zucc.edu.cn/job/view/id/1195683', 'http://career.zucc.edu.cn/job/view/id/1195682', 'http://career.zucc.edu.cn/job/view/id/1195681', 'http://career.zucc.edu.cn/job/view/id/1195680', 'http://career.zucc.edu.cn/job/view/id/1195679', 'http://career.zucc.edu.cn/job/view/id/1195678', 'http://career.zucc.edu.cn/job/view/id/1195677', 'http://career.zucc.edu.cn/job/view/id/1195674', 'http://career.zucc.edu.cn/job/view/id/1195673', 'http://career.zucc.edu.cn/job/view/id/1195672']

console.log(detailLinkList.length);