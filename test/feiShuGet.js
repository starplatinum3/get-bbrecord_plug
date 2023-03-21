
// let pdfText=
// document.getElementsByClassName('sc-ljMRZr hZEDaT pdf-page-container-text')[0]?.textContent?.trim()

// pdfText

function downloadTxt(filename, text) {
    var pom = document.createElement('a');
    pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    pom.setAttribute('download', filename);
    if (document.createEvent) {
        var event = document.createEvent('MouseEvents');
        event.initEvent('click', true, true);
        pom.dispatchEvent(event);
    } else {
        pom.click();
    }
}



let  pdfList= document.getElementsByClassName('sc-ljMRZr hZEDaT pdf-page-container-text')

// note-title__input-new。 
// let  title=
// document.getElementsByClassName('note-title__input-new')[0]?.textContent?.trim()

let  title=
document.getElementsByClassName('note-title__input-new')[0]?.value
// ||?.textContent?.trim()

let  pdfTextList=[]
function  textsLineChange(texts){

    let res=""
    for(let i=0;i<texts.length;i++){
        let  text= texts[i]
        let  x=text.getAttribute('x')
        let  y=text.getAttribute('y')
        let  text2= texts[i+1]
        let  x2=text2?.getAttribute('x')
        let  y2=text2?.getAttribute('y')
      let  letter=  text?.textContent?.trim()
      res+=letter
        // let  pdfText=  pdfList[i]?.textContent?.trim()
        if(x2<x){
            // pdfText+="\n"
            res+='\n'
        }
      
        // pdfTextList.push(pdfText)
    }
    return res
}

let
out_str=""
for(let i=0;i<pdfList.length;i++){
    let pdfDom= pdfList[i]
    // text
    // textsLineChange(pdfDom.getElementsByTagName('text')
   let  texts= pdfDom.getElementsByTagName('text')
  let  pdfText= textsLineChange(texts)
//    console.log(texts);
//    let  x=texts[0].getAttribute('x')
//    let  y=texts[0].getAttribute('y')
// //    let  x=texts[1].getAttribute('x')
// //    let  y=texts[1].getAttribute('y')

//    console.log(x);
//    console.log(y);
//    console.log(texts[1].getAttribute('x'));
//    console.log(texts[1].getAttribute('y'));
//    let  pdfText=  pdfList[i]?.textContent?.trim()
out_str+=pdfText+"\n"
   pdfTextList.push(pdfText)
}

// pdfTextList[0]
// console.log(pdfTextList);
console.log(out_str);

// downloadTxt('pdfTextList.json',JSON.stringify(pdfTextList))
// downloadTxt(`${title}.json`,JSON.stringify(pdfTextList))
// downloadTxt(`${title}.md`,JSON.stringify(out_str))
downloadTxt(`${title}.md`,out_str)

// download

// page-container
// let pageDocxData=
// document.getElementsByClassName('page-container')[0]?.textContent?.trim()

let pageDocxData=
document.getElementsByClassName('wps-wrap show-status-bar')[0]?.textContent?.trim()

// wps-wrap show-status-bar