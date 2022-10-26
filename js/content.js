// get popup2content info
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    // console.log(request.value);
    // {action:'putAns', value:'你好，我是popup！'}
    // sendResponse('我收到了你的情书，popup~');
    // 只有在 zucc 才可以用
    switch (request.action) {
        case "getBBRecord":
            // 这代码在哪里。。。
            console.log("getBBRecord");
            getBBRecordMain();
            sendResponse('我收到了你的情书，popup~,getBBRecordMain');
            break;
            // nchecked runtime.lastError: The message port closed before a response was received.
        case "getBBScores":
            getBBScoresMain();
            console.log("getBBScoresMain");
            
            sendResponse('我收到了你的情书，popup~,getBBScoresMain');
            break;
        case "putAns":
            // console.log("request");
            // console.log(request.value);
            console.log("putAns");
            bbRecordObj=request.value;
            putAnsMain(bbRecordObj);

            sendResponse('我收到了你的情书，popup~,putAnsMain');
            break;
        case "downloadPage":
            console.log("downloadPage");
            
            try{
                downloadPage();
                sendResponse('download good');
            }catch (e) {
                sendResponse('download not  good');
                console.log(e);
            }

            break;

    }
    // if (request.action === "putAns") {
    //     putAnsMain();
    //     sendResponse('我收到了你的情书，popup~,putAnsMain');
    // } else if (request.action === "getBBRecord") {
    //     getBBRecordMain();
    //     sendResponse('我收到了你的情书，popup~,getBBRecordMain');
    // } else if (request.action === "getBBScores") {
    //     getBBScoresMain();
    //     sendResponse('我收到了你的情书，popup~,getBBScoresMain');
    // }
});
// <input id="uploadBBRecord" type="file"/> <br>
// inputHtml=`<input type="file" οnchange="upload(this)" />`;
function putHtml(){
    divHtml=`<div id="addDiv" style="width: 300px;height: 300px;background-color:yellow;"></div>`;
    inputHtml=`<input id="uploadBBRecord" type="file"/>`;
    // $('body').append(divHtml);
    // $('body').appendChild(divHtml);
    let body = document.getElementsByTagName("body")[0];
    body.innerHTML+=divHtml;
    // https://blog.csdn.net/weixin_43749561/article/details/86173893
}
//
// window.onload = function(){
//     putHtml();
//     // https://www.cnblogs.com/Loveonely/p/8118256.html
// };


// $("#uploadBBRecord")

// $("#addDiv")

console.log("this is index.js")
console.log(document)
console.log(location)

alert("this is index.js")

//创建页面函数
function createPage () {
    const page = $('<div id="cj_move_page"></div>')
    const h3 = $('<h3 id="cj_move_h3">my Plugin</h3>')
    page.append(h3)
    $('body').append(page)
    //拖拽
    drag(cj_move_h3)
}
createPage()

//拖拽
function drag(ele) {
    let oldX, oldY, newX, newY
    ele.onmousedown = function (e) {
        if (!cj_move_page.style.right && !cj_move_page.style.bottom) {
            cj_move_page.style.right = 0
            cj_move_page.style.bottom = 0
        }
        oldX = e.clientX
        oldY = e.clientY
        document.onmousemove = function (e) {
            newX = e.clientX
            newY = e.clientY
            cj_move_page.style.right = parseInt(cj_move_page.style.right) - newX + oldX + 'px'
            cj_move_page.style.bottom = parseInt(cj_move_page.style.bottom) - newY + oldY + 'px'
            oldX = newX
            oldY = newY
        }
        document.onmouseup = function () {
            document.onmousemove = null
            document.onmouseup = null
        }
    }
}
