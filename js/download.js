

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




function stripScripts (s) {
    var div = document.createElement('div');
    div.innerHTML = s.outerHTML;
    // div.innerHTML = s;
    // div.firstChild=s;
    // console.log(div);
    var scripts = div.getElementsByTagName('script');
    console.log(scripts.length);
    var i = scripts.length;
    while (i--) {
        scripts[i].parentNode.removeChild(scripts[i]);
    }

    // return div.innerHTML;
    return div;
    // http://codingdict.com/questions/10189
}

function getTitle () {
    let title = null;
    // j-title f-fl  mooc 
    let titleClassMaybe = ["problemName_3A5bH", "mb-2 card-header", "Card-title", "j-title f-fl", "f-fl j-hwname",
        "highwire-cite-title"];
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
// 把html 需要加载的资源 变成绝对路径，防止他一直在加载加载不到的东西
// 只针对mooc
function stripHtml (string) {
    // '//mc.stu.126.net/pub/s/pt_learn_learn_cc4c15bc2a2b6747962307bf201cc776.css':
    //     'https://mc.stu.126.net/pub/s/pt_learn_learn_cc4c15bc2a2b6747962307bf201cc776.css',
    replaceMap = {

        '<span class="u-icon-correct"></span>': '<span class="u-icon-correct">对</span>',
        '<span class="u-icon-wrong"></span>': '<span class="u-icon-wrong">错</span>',

    }
    replaceToNoneList = ["//edu-image.nosdn.127.net/6C21E8FAE2F95E8A964501AB5F920FC8.png?imageView&thumbnail=402y95&quality=100",
        "//s.stu.126.net/res/images/ui/ui_appbanner_closebtn.png",

        "//edu-image.nosdn.127.net/C98738F71B5E662F0239FA9D59D88011.png?imageView&thumbnail=285y66&quality=95",

        "//s.stu.126.net/res/images/ui/ui_appbanner_jt.png",

        "//edu-image.nosdn.127.net/3310f128e53b406f94400f7ae6046db2.png?imageView&quality=100",

        "//img-ph-mirror.nosdn.127.net/Rg6muO26iMOFWx9vwEHC-g==/6630234335885341999.png",

    ];
    // 那 http:// 这种不能变的啊
    addHttpPrefixList = ["//edu-image.nosdn.127.net/6C21E8FAE2F95E8A964501AB5F920FC8.png?imageView&thumbnail=402y95&quality=100",
        "//s.stu.126.net/res/images/ui/ui_appbanner_closebtn.png",

        "//edu-image.nosdn.127.net/C98738F71B5E662F0239FA9D59D88011.png?imageView&thumbnail=285y66&quality=95",

        "//s.stu.126.net/res/images/ui/ui_appbanner_jt.png",

        "//edu-image.nosdn.127.net/3310f128e53b406f94400f7ae6046db2.png?imageView&quality=100",

        "//img-ph-mirror.nosdn.127.net/Rg6muO26iMOFWx9vwEHC-g==/6630234335885341999.png",];

    prefixList = ["//s.stu.126.net", "//edu-image.nosdn.127.net", "//img-ph-mirror.nosdn.127.net", "//mc.stu.126.net"];
    for (i = 0; i < prefixList.length; i++) {
        string = string.replaceAll("\"" + prefixList[i], "\"https:" + prefixList[i]);
    }
    // data=data.replace('<span class="u-icon-correct"></span>'
    // ,'<span class="u-icon-correct">对</span>')
    // # <span class="u-icon-wrong"></span>
    // data=data.replace('<span class="u-icon-wrong"></span>'
    // ,'<span class="u-icon-wrong">错</span>')
    // filename_no_sufix=r_del_str(filename,".mhtml")
    // for(s in replaceToNoneList){
    //     string=string.replaceAll(replaceToNoneList[s],"");
    // }
    // edu-image.nosdn.127.net

    // string.replaceAll("// edu-image.nosdn.127.net")
    // for(i=0;i<addHttpPrefixList.length;i++){
    //     string=string.replaceAll(addHttpPrefixList[i],"https:"+addHttpPrefixList[i]);
    // }
    for (s in replaceMap) {
        string = string.replaceAll(s, replaceMap[s]);
    }
    // string=string.replaceAll('//mc.stu.126.net/pub/s/pt_learn_learn_cc4c15bc2a2b6747962307bf201cc776.css',
    // 'https://mc.stu.126.net/pub/s/pt_learn_learn_cc4c15bc2a2b6747962307bf201cc776.css');
    return string;
}
// var box2Div = document.createElement("div");
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
// ————————————————
// 版权声明：本文为CSDN博主「ACGuan」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
// 原文链接：https://blog.csdn.net/csdnlinyongsheng/article/details/82983446


function textareasPutVals (textareas) {
    for (i = 0; i < textareas.length; i++) {
        textarea = textareas[i];
        var fillVal = document.createElement("div");
        // https://zhidao.baidu.com/question/537483459.html
        fillVal.innerHTML=textarea.value;
        // $0.value
        insertAfter(fillVal,textarea);
    
    }
}



// 可以下载mooc  但是 mooc 的那个文件还要加载
function downloadPage () {
    console.log("downloadPage");
    
    // https://blog.csdn.net/weixin_42649856/article/details/104325029
    // console.log(document.);
    //  console.log(document.getElementsByTagName('html')[0].outerHTML);
    // downloadTxt("pta.html",document.getElementsByTagName('html')[0].outerHTML);
    let htmlDom = document.getElementsByTagName("html")[0];
    // console.log(htmlDom);
    // j-textarea inputtxt
    // 2021年3月20日11:21:33 mqp 添加这个，可以在mooc 获得填空题的内容
    textareas = htmlDom.getElementsByClassName("j-textarea inputtxt");
    textareasPutVals(textareas);
    // try{
    //     title = document.getElementById("pageTitleText").textContent;
    //     title = title.trim();
    // }catch (e) {
    //     title = htmlDom.getElementsByClassName("mb-2 card-header")[0].textContent;
    // }

    let title = getTitle();
    console.log("title");
    console.log(title);

    // title = to_file_path_name(title);
    // htmlDom = removeAllScript(htmlDom);
    let htmlTxt = stripScripts(htmlDom).outerHTML;
    htmlTxt = stripHtml(htmlTxt);
    // console.log(htmlDom);
    // console.log(htmlDom.outerHTML);
    // 获得文本的html
    // let body = htmlDom.outerHTML;
    // let body = document.getElementsByTagName('html')[0].outerHTML;
    // console.log(body);
    // let htmlTxt = removeDontWant(htmlDom.outerHTML);
    // let htmlTxt = removeDontWant(htmlDom);
    // console.log(htmlDom.outerHTML);
    // console.log(htmlDom);
    downloadTxt(title + ".html", htmlTxt);
}

// downloadPage();