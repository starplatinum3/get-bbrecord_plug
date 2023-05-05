
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



function hugDown(){
    
    let  names= document.getElementsByClassName('group flex items-center truncate')
    let parts=location.href.split('/')
    let  brach=parts[parts.length-1]
    // let  mdCmd=`md /${parts[3]}/${parts[4]}`
    let modelDir=`/j05025/model/${parts[3]}/${parts[4]}`
    // let  mdCmd=`mkdir -p /j05025/model/${parts[3]}/${parts[4]}`
    let  mdCmd=`mkdir -p ${modelDir}`
    
    console.log(mdCmd);
    let allCmd=` ${mdCmd}\n`
    
    // "D:\software\wget-1.21.3-win64\wget.exe"
    // let  wgetSh=String.raw`D:\software\wget-1.21.3-win64\wget.exe`
    let  wgetSh=String.raw`wget`
    
    // let  wgetSh="D:\software\wget-1.21.3-win64\wget.exe"
    for(let i=0;i<names.length;i++){
        let  name= names[i]?.textContent.trim()
        console.log(name);
        // get
        // let fileName=`pytorch_model.bin`
        fileName=name
     let repoName= `${parts[2]}/${parts[3]}`
     let link=  `https://huggingface.co/${parts[3]}/${parts[4]}/resolve/${brach}/${fileName}`
     let downFilePath=`d:/download/${fileName}`
    //  let mvCmd=`mv ${downFilePath} /${parts[3]}/${parts[4]}/${fileName}`
    //  let downloadCmd=`wget ${link} -O /${parts[3]}/${parts[4]}`
    // let downloadCmd=`${wgetSh} ${link}  -P /${parts[3]}/${parts[4]}`
    let downloadCmd=`${wgetSh} ${link}  -P ${modelDir}  &`
    
    //  let downloadCmd=`wget ${link}  -P /${parts[3]}/${parts[4]}`
    
     console.log(downloadCmd);
     allCmd+=downloadCmd+"\n"
    }
    
    // downloadTxt(`hugDown_${parts[3]}_${parts[4]}.bat`, allCmd)
    downloadTxt(`hugDown_${parts[3]}_${parts[4]}.txt`, allCmd)
    
    
    // let allCmd=`wget ${link} -O /${parts[3]}/${parts[4]} && ${mvCmd}`
    // let allCmd=`wget ${link} -O /${parts[3]}/${parts[4]}`
    
    
    
    // # 'https://huggingface.co/facebook/opt-1.3b/resolve/main/pytorch_model.bin'
    
    // 把 
    // 'https://huggingface.co/facebook/opt-1.3b/tree/main'
    // 转化成 
    // `https://huggingface.co/facebook/opt-1.3b/resolve/${brach}/pytorch_model.bin`
    // 用
    // let parts=location.href.split('/')
    // let  brach=parts[parts.length-1]
    // let fileName=`pytorch_model.bin`
    //  let repoName= `${parts[2]}/${parts[3]}`
    //  let link=  `https://huggingface.co/${parts[3]}/${parts[4]}/resolve/${brach}/${fileName}`
    
    //  console.log(link);
    // parts[parts.length-1]=`resolve/main/${fileName}`
    
    
    }
    