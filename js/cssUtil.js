//引入插件内css
//cssurl = ./meun/meun.css
function includeCss(cssurl) {
    //csspath = ./menu/
    var localCssUrl = chrome.extension.getURL(cssurl);
 
 
    $.get(localCssUrl, function (data) {
 
 
        var csspath = localCssUrl.substr(0, localCssUrl.lastIndexOf("/"));
 
 
        var data = data.replace(/\${csspath}/igm, csspath);
        
        var styleInsert = document.createElement("style");
        var styleContent = document.createTextNode(data);
        styleInsert.type = "text/css";
        if (styleInsert.styleSheet) styleInsert.styleSheet.cssText = styleContent.nodeValue;
        else {
            styleInsert.appendChild(styleContent);
            document.getElementsByTagName("head")[0].appendChild(styleInsert)
        }
 
 
    });
 
 
}
// 使用方法
// includeCss("js/Contextmenu/Contextmenu.css");