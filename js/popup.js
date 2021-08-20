function main() {
    let getBBRecordBtn = document.getElementById("getBBRecord");
    let getBBScoresBtn = document.getElementById("getBBScores");
    let putAnsBtn = document.getElementById("putAns");
    let msgTextArea = document.getElementById("msg");

    $("#toModifyPage").click(function () {
        window.open("./modify.html");
        sendMessageToContentScript({action: 'modify', value: '你好，我是popup！'}, function (response) {
            console.log('来自content的回复：');
            console.log( response);
            console.log( response.data);
        });
    });
    $("#modifyAns").click(function () {
        submit();
    });
    $("#downloadPage").click(()=>{
        sendMessageToContentScript({action: 'downloadPage', value: '你好，我是popup！'}, function (response) {
            console.log('来自content的回复：');
            console.log( response);
        });
    });
    // 我是傻逼 一直想着用全局变量传递数据，其实不是都可以在这种回调函数里面传递的吗
    getBBRecordBtn.onclick = function () {
        // alert("getBBRecordMain");
        sendMessageToContentScript({action: 'getBBRecord', value: '你好，我是popup！'}, function (response) {
            console.log('来自content的回复：' + response);
        });

        // chrome.runtime.sendMessage({action: 'getBBRecord'}, function(response) {
        //
        //     console.log(response);
        //     }
        // );

        // chrome.extension.sendRequest({greeting: "hello"}, function(response) {
        //     console.log(response.farewell);
        // });

        // console.log("getBBRecordMain");
        // msgTextArea.innerText = "getBBRecordMain";
        // getBBRecordMain();
    };
    getBBScoresBtn.onclick = function () {
        // alert("getBBScoresMain");
        console.log("getBBScoresMain");
        msgTextArea.innerText = "getBBScoresMain";
        // getBBScoresMain();
        // chrome.runtime.sendMessage({action: 'getBBScores'}, function(response) {
        //
        //         console.log(response);
        //     }
        // );

        sendMessageToContentScript({action: 'getBBScores', value: '你好，我是popup！'}, function (response) {
            console.log('来自content的回复：' );
            console.log(response);
            
        });
    };

    putAnsBtn.onclick = function () {
        // console.log("putAnsMain");
        msgTextArea.innerText = "putAnsMain";
        // alert("putAnsMain");
        // putAnsMain();
        // chrome.runtime.sendMessage({action: 'putAns'}, function(response) {
        //
        //         console.log(response);
        //     }
        // );
        console.log("bbRecordObj");
        console.log(bbRecordObj);
        sendMessageToContentScript({action: 'putAns', value: bbRecordObj}, function (response) {
            console.log('来自content的回复：' );
            console.log(response);
        });

    };

}

// window.onload = function () {
//     console.log("main");
//     // alert("main");
//     if (typeof chrome.tabs === 'object') {
//         console.log(" typeof chrome.tabs === 'object'");
//     } else {
//         console.log(" typeof chrome.tabs !== 'object'");
//     }
//
//
//     // alert("rr1");
//     // $(function(){
//     //     var rr1 = $('#kg_rr1').find('option:selected').text();
//     //     console.log("rr1");
//     //     console.log(rr1);
//     //     $('#kg_rr1').change(function(){
//     //         $('#youselect').text('you selected:' + $('#kg_rr1').find('option:selected').text());
//     //         rr1=$(this).find('option:selected').text();
//     //         chrome.tabs.query({active:true, currentWindow:true}, function(tabs){
//     //             // query 的 回调
//     //             console.log("chrome.tabs.query");
//     //             console.log(chrome.tabs.query);
//     //             chrome.tabs.sendMessage(tabs[0].id, {todo: "setRR1", "newRR1": rr1})
//     //         });
//     //     });
//     // });
//     main();
// };

main();

function sendMessageToContentScript(message, callback) {

    // typeof chrome.tabs === 'object'
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, message, function (response) {
            console.log("message");
            console.log(message);
            // if (callback){
            //     callback(response);
            // }
            // 返回了bbrecordobj 给content
            callback(message);
            if(chrome.runtime.lastError){
                console.log("response");
                console.log(response);
            }
          
            // callback("hehe");
            // response("hehe");
        });
    });

    // chrome.tabs.sendRequest 和 chrome.extension.sendRequest


}

// sendMessageToContentScript({cmd:'test', value:'你好，我是popup！'}, function(response)
// {
//     console.log('来自content的回复：'+response);
// });




