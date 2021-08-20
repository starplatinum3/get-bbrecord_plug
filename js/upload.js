//前端读取本地文件的内容   下面代码中的this.result即为获取到的内容
function readUpload(input, callback) {
    //支持chrome IE10

    // alert("input");
    // https://www.cnblogs.com/bear-blogs/p/10423759.html

    if (window.FileReader) {
        // alert("window.FileReader");
        var file = input.files[0];
        filename = file.name.split(".")[0];
        var reader = new FileReader();
        reader.onload = function () {
            // console.log("this.result");
            // console.log(this.result);
            // alert(this.result);
            // bbRecordObj=JSON.parse(this.result);
            // console.log("obj");
            // console.log(this.result);
            // console.log("typeof this.result ");
            // console.log(typeof this.result );

            callback(this.result);
        };
        reader.readAsText(file);
    }
    //支持IE 7 8 9 10
    else if (typeof window.ActiveXObject != 'undefined') {
        // alert(" window.ActiveXObject ");
        var xmlDoc;
        xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
        xmlDoc.async = false;
        xmlDoc.load(input.value);
        alert(xmlDoc.xml);
    }
    //支持FF
    else if (document.implementation && document.implementation.createDocument) {
        // alert("document.implementatio");
        var xmlDoc;
        xmlDoc = document.implementation.createDocument("", "", null);
        xmlDoc.async = false;
        xmlDoc.load(input.value);
        alert(xmlDoc.xml);
    } else {
        alert('error');
    }


}

// function pushAnswersToHtmlUl(queObjHtml, answers) {
//
// }

function bbRecordObjToHtml(bbRecordObj) {
    $("#title").val(bbRecordObj.title);
    $("#description").val(bbRecordObj.description);
    questions = bbRecordObj.questions;
    for (let i = 0; questions.length; i++) {
        queObj = questions[i];
        // oneQueAnswersObj =questions[i];
        quesText = queObj.que;
        oneQueAnswersObj = queObj.answers;
        if (oneQueAnswersObj.type === "choose") {
            queObjLi = document.createElement('li');
            queObjHtml = `<li>
${quesText}
<ul>

</ul>
</li>`;
        }
    }

}


// https://www.freesion.com/article/166978635/

// 这里要写成input的形式 调用upload函数  传递的参数就表示所选的文件
// <input type="file" οnchange="upload(this)" />
let bbRecordObj;
function upload(input) {

    readUpload(input, function (response) {
        console.log("response");
        console.log(response);
        // localStorage.bbRecordObj = JSON.parse(response);
        bbRecordObj= JSON.parse(response);

        // delCookie("bbRecordObj");
        // setCookie("bbRecordObj",JSON.stringify(response));
        // 点了upload cookie 里面就有bbRecordObj了
        //     太大了cookie存不下
        //     cookieStr= parseCookie(getCookie("bbRecordObj"));
        //     console.log("cookieStr");
        //     console.log(JSON.stringify(cookieStr));

        // https://www.cnblogs.com/kenwoo/p/10230270.html


    });

    // console.log("obj");
    // console.log(obj);
    // console.log("resultText");
    // console.log(resultText);
    // bbRecordObj = JSON.parse(obj);
    // console.log("bbRecordObj");
    // console.log(bbRecordObj);

}

uploadBBRecordInput = document.getElementById("uploadBBRecord");
// console.log("uploadBBRecordInput");
// console.log(uploadBBRecordInput);
uploadBBRecordInput.onchange = function () {
    console.log("change");
    upload(this);
};
// $("#uploadBBRecord").change(function () {
//
// });