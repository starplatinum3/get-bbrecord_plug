// get popup2content info
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    // console.log(request.value);
    // {action:'putAns', value:'你好，我是popup！'}
    // sendResponse('我收到了你的情书，popup~');
    switch (request.action) {
        case "getBBRecord":
            // 这代码在哪里。。。
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
            bbRecordObj=request.value;
            putAnsMain((bbRecordObj));

            sendResponse('我收到了你的情书，popup~,putAnsMain');
            break;
        case "downloadPage":
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