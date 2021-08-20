
function frontDelStr(oldStr, dontWant) {

    if (dontWant === "") {
        return oldStr;
    }
    let oldStrLen = (oldStr).length;
    let dontWantLen = (dontWant).length;
    let minLen = Math.min(oldStrLen, dontWantLen);

    let iOld = 0;
    let iDont = 0;

    let iRes = 0;
    let iNow = 0;
    while (true) {


        if (!(oldStr[iOld] === dontWant[iDont])) {
            return oldStr.substring(iRes, oldStrLen);
        }

        iNow++;
        if (iNow - iRes === dontWantLen) {
            iRes += dontWantLen;

        }
        if (iDont === minLen - 1 || iOld === minLen - 1)
            return oldStr.substring(iRes, oldStrLen);

        iOld++;
        iDont++;

    }
}

function parseCookie(cookie) {
  return  decodeURIComponent(unescape(cookie));
}
function backDelStr(oldStr, dontWant) {
    //todo ,completed
    if (dontWant === "") {
        return oldStr;
    }
    let oldStrLen = (oldStr).length;
    let dontWantLen = (dontWant).length;
    let iOld = oldStrLen - 1;
    let iDont = dontWantLen - 1;

    let iRes = oldStrLen;
    let iNow = oldStrLen;
    while (true) {


        if (!(oldStr[iOld] === dontWant[iDont])) {
            return oldStr.substring(0, iRes);
        }

        iNow -= 1;
        if (iRes - iNow === dontWantLen) {
            iRes -= dontWantLen;

        }
        // https://www.w3school.com.cn/js/jsref_substring.asp
        if (iDont === 0 || iOld === 0)
            return oldStr.substring(0, iRes);

        iOld--;
        iDont--;

    }

}

//我同学dearning，从网上搜来的函数
String.prototype.replaceAll = function (s1, s2) {
    return this.replace(new RegExp(s1, "gm"), s2);
};

function stripScripts(s) {
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


function to_file_path_name(filename) {

    filename = filename.trim();
    // filename = filename.replace(" ", "_");
    filename = filename.replaceAll(" ", "_");
    // # https://www.cnblogs.com/jjliu/p/11514226.html
    filename = filename.replaceAll(":", "");
    return filename;
}
