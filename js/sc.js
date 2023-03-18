function school_23365DetailDownload() {
 
    // container
   let  containerText= document.getElementById('container')?.textContent?.trim()
  let  noContain= containerText.contains('该信息已经被删除了')
  if(noContain){

  }
//    来晚了，该信息已经被删除了...
    let  urlFront=  location.href.split("?")[0]
  //   urlFront.split('/')
//    let docName= getListLast(urlFront.split('/'))
   let parts=urlFront.split('/')
   let id =parts[parts.length-2]
    // let id = docName?.replace('.html','')
    // https://www.ncss.cn/student/jobs/7p2uYT24mTZxTJPZ1vSP
}

function jumpNext(idxIntNext,detailLinkList){
    if (idxIntNext >= detailLinkList.length) {
        return
    }
   

    let contentIdNext = detailLinkList[idxIntNext]
    console.log("contentIdNext");
    console.log(contentIdNext);
    // detailLinkList
    // let nextLink =`${contentIdNext}/&idx=${idxIntNext}`
    // let nextLink =`${contentIdNext}/idx=${idxIntNext}`
    let nextLink = `${contentIdNext}?idx=${idxIntNext}`

    // let waitMs=1000
    //  let waitMs=500
    // let waitMs = 20
    let waitMs = 2000
    // let nextLink = `http://career.zucc.edu.cn/job/search?title=&city=&d_skill=&d_industry=&d_major=&d_education=&d_category=&d_salary=&nature=&scale=&time=&page=${idxIntNext}&idx=${idxIntNext}`
    setTimeout(() => {
        window.location.href = nextLink
    }, waitMs)
}