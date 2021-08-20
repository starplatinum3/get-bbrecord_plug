


function getTitle () {
    let title = null;
    // j-title f-fl  mooc 
    let titleClassMaybe = ["problemName_3A5bH", "mb-2 card-header",
     "Card-title", "j-title f-fl", "f-fl j-hwname",
        "highwire-cite-title","pc-text pc-xl pc-gap-6 grow shrink"];
    let titleIdMaybe = ["pageTitleText"];
    let titleDom;
    for (let i = 0; i < titleClassMaybe.length; i++) {
        titleDom = document.getElementsByClassName(titleClassMaybe[i])[0];
        if (titleDom) {
            title = titleDom.textContent;
            break;
        }
    }

    for (let i = 0; i < titleIdMaybe.length; i++) {
        titleDom = document.getElementById(titleIdMaybe[i]);
        if (titleDom) {
            title = titleDom.textContent;
            break;
        }
    }
    if (title == null) {
        title = "没有标题";
    }
    title = to_file_path_name(title);
    return title;

}


//我同学dearning，从网上搜来的函数
String.prototype.replaceAll = function (s1, s2) {
    return this.replace(new RegExp(s1, "gm"), s2);
};

function downloadTxt (filename, text) {
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
    // console.log("download done");
}



function stripScripts (s) {
    var div = document.createElement('div');
    div.innerHTML = s.outerHTML;
    // div.innerHTML = s;
    // div.firstChild=s;
    // console.log(div);
    var scripts = div.getElementsByTagName('script');
    // console.log("scripts.length");
    // console.log(scripts.length);
    var i = scripts.length;
    while (i--) {
        scripts[i].parentNode.removeChild(scripts[i]);
    }

    // return div.innerHTML;
    return div;
    // http://codingdict.com/questions/10189
}

function to_file_path_name (filename) {

    filename = filename.trim();
    // filename = filename.replace(" ", "_");
    filename = filename.replaceAll(" ", "_");
    // # https://www.cnblogs.com/jjliu/p/11514226.html
    filename = filename.replaceAll(":", "");
    return filename;
}

function insertAfter (newElement, targetElement) {
    var parent = targetElement.parentNode;
    // console.log(parent);
    if (parent.lastChild == targetElement) {
        // 如果最后的节点是目标元素，则直接添加。因为默认是最后        
        parent.appendChild(newElement);
    }
    else {
        parent.insertBefore(newElement, targetElement.nextSibling);
        //如果不是，则插入在目标元素的下一个兄弟节点 的前面。也就是目标元素的后面    
    }
}


function bbRecord() { 
    ul=document.getElementsByClassName("contentListPlain")[0];
    // lis=ul.getElementsByClassName ("clearfix liItem read");
    // for(let i=0;i<lis.length;i++){
    //     console.log(lis[i]);
    //     // console.log(lis.textContent);
    // }

    // console.log(ul);

    htmlFront=`<!DOCTYPE html>
    <html>
    <body rlt="1">`;

    htmlAfter=`</body>
    </html>`;

		
    title=getTitle();

    // let htmlDom = document.getElementsByTagName("html")[0];

    // htmlDom.appendChild(ul);
    // var newItem=document.createElement("li");

    // insertAfter(ul,htmlDom);
    // let htmlTxt = stripScripts(htmlDom).outerHTML;
    let htmlTxt = stripScripts(ul).outerHTML;
    // htmlTxt = stripHtml(htmlTxt);
    htmlTxt=htmlFront+htmlTxt+htmlAfter;

    // var newItem=document.createElement("li")

    // var textnode=document.createTextNode("Water")

    // newItem.appendChild(textnode)

    // var list=document.getElementById("myList")

    // list.insertBefore(newItem,list.childNodes[0]);


    // console.log("htmlTxt");
    // console.log(htmlTxt);
    downloadTxt(title + ".html", htmlTxt);
 }

 bbRecord();

//  containerDiv=document.getElementById("containerdiv");
// //  console.log(containerDiv);

//   var newItem=document.createElement("li")

//     var textnode=document.createTextNode("Water")

//     newItem.appendChild(textnode)

//     // var list=document.getElementById("myList")

    
//     // containerDiv.insertBefore(newItem,containerDiv.childNodes[0]);
//     // containerDiv.insertAfter(newItem,containerDiv.childNodes[containerDiv.childNodes.length-1]);
//     console.log(containerDiv);