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
            bbRecordObj = request.value;
            putAnsMain(bbRecordObj);

            sendResponse('我收到了你的情书，popup~,putAnsMain');
            break;
        case "downloadPage":
            console.log("downloadPage");

            try {
                downloadPage();
                sendResponse('download good');
            } catch (e) {
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
function putHtml() {
    divHtml = `<div id="addDiv" style="width: 300px;height: 300px;background-color:yellow;"></div>`;
    inputHtml = `<input id="uploadBBRecord" type="file"/>`;
    // $('body').append(divHtml);
    // $('body').appendChild(divHtml);
    let body = document.getElementsByTagName("body")[0];
    body.innerHTML += divHtml;
    // https://blog.csdn.net/weixin_43749561/article/details/86173893
}
//
// window.onload = function(){
//     putHtml();
//     // https://www.cnblogs.com/Loveonely/p/8118256.html
// };


// $("#uploadBBRecord")

// idea 回车 不能 
// $("#addDiv")



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

// let  searchWordList=["手机","橘子","香蕉","面包","泡面",
// "男装","帽子","内裤","java","python","饼干","矿泉水",
// "手表","项链","保温杯","热水器","空调","电脑","电视","洗衣机",
// "马桶","抽水马桶","士力架","脉动",
// "可乐","雪碧","芬达","联想","华为手机",]

function searchWordListAllDownload(searchWordList) {

    // searchWordAndDownloadPage(searchWordList[i],searchWordAndDownloadPage,searchWordList[i+1])

    searchWordAndDownloadPage(searchWordList, 0)


}

// searchWord,
// callback,
function searchWordAndDownloadPage(searchWordList, idx) {
    if (idx >= searchWordList.length) {
        return
    }
    // let searchWord=searchWordList[i];
    let searchWord = searchWordList[idx];
    let searchWordInput = J_searchForm.getElementsByTagName("input")[0]
    console.log("searchWord");
    console.log(searchWord);
    searchWordInput.value = searchWord

    let submitBtn = document.getElementsByClassName("submit")[0]
    // .click()
    // submit
    // let submitBtn= inputs[0].getElementsByTagName("input")[0]
    console.log("submitBtn");
    console.log(submitBtn);

    submitBtn.click()
    // 读取 window.location.href 的参数 js 获取url参数



    //     setTimeout(()=>{
    //         downloadPage()

    // //         setTimeout(()=>{
    // //             console.log("searchWordAndDownloadPage");
    // // //    searchWordAndDownloadPage(searchWordList,idx+1)
    // //         },7000)

    //         // if(callback){
    //         //     callback()
    //         // }

    //     },7000)
}

function delayDownloadPage() {
    setTimeout(() => {
        downloadPage()
    })

}

function getQueryString(name) {

    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");

    console.log("reg");
    console.log(reg);
    console.log("window.location.search");
    console.log(window.location.search);
    var result = window.location.search.substr(1).match(reg);

    console.log("result");
    console.log(result);


    if (result != null) {
        let QueryString = result[2];
        console.log("QueryString");
        console.log(QueryString);
        return QueryString

    } else {

        return null;

    };

}

function downloadPage(callback) {

    let J_searchForm = document.getElementById("J_searchForm")
    console.log(J_searchForm);


    let searchWordInput = J_searchForm.getElementsByTagName("input")[0]
    let itemNames = document.getElementsByClassName("pc-items-item-title pc-items-item-title-row2")

    console.log(itemNames);

    // let  searchWord= document.getElementsByClassName("text-wrap")[0].textContent
    // console.log(searchWord);

    // let  searchWord= document.getElementById("J_searchForm").textContent
    // console.log(searchWord);


    // let  searchWord= J_searchForm.innerText
    // let  searchWord= J_searchForm.value 
    // console.log(searchWord);
    let inputs = J_searchForm.getElementsByTagName("input")
    // console.log(inputs);
    // let input0=  inputs[0]
    // console.log("input0");
    // console.log(input0);


    // 热卖PC搜索
    // https://uland.taobao.com/sem/tbsearch?refpid=mm_26632258_3504122_32538762&keyword=java&clk1=f0c0948220ecee34d8e48fcb4b69b80b&upsId=f0c0948220ecee34d8e48fcb4b69b80b&spm=a2e0b.20350158.search.1&pid=mm_26632258_3504122_32538762&union_lens=recoveryid%3A201_33.42.156.233_16319860_1667716432848%3Bprepvid%3A201_33.8.41.104_12221870_1667717148444


    let searchWord = searchWordInput.value
    console.log(searchWord);




    let afterCouponList = document.getElementsByClassName("coupon-price-afterCoupon")
    console.log(afterCouponList);
    let pc_items_item_lis = document.getElementsByClassName("pc-items-item item-undefined")
    console.log("pc_items_item_lis");
    console.log(pc_items_item_lis);
    // pc_items_item_lis.setAttribute("data-itemid")
    console.log("pc_items_item_lis.length");
    console.log(pc_items_item_lis.length);

    let coupon_price_olds = document.getElementsByClassName("coupon-price-old")
    let sell_infos = document.getElementsByClassName("sell-info")
    let seller_name_list = document.getElementsByClassName("seller-name")

    let res = []

    if (itemNames.length != afterCouponList.length) {
        console.log("长度不同");
        alert("长度不同");
    } else {
        // console.log("长度相同" );
        // alert("长度相同" );
    }

    let date = new Date()
    //    keywo

    for (let i = 0; i < itemNames.length; i++) {
        let pc_items_item_li = pc_items_item_lis[i]
        let coupon_price_old = coupon_price_olds[i]
        // itemNames[i]
        let sell_info = sell_infos[i]
        let seller_name = seller_name_list[i]
        res.push({
            itemName: itemNames[i].innerText,
            afterCoupon: afterCouponList[i].innerText,
            date: date,
            "data_itemid": pc_items_item_li.getAttribute("data-itemid"),
            coupon_price_old: coupon_price_old.innerText,
            sell_info: sell_info.innerText,
            // 卖出了100 
            seller_name: seller_name.innerText,
            searchWord: searchWord,
        })
        // console.log(itemNames[i].innerText,afterCouponList[i].innerText)
    }

    let NowTimeStr = getNowTimeStr()
    let answerListStr = JSON.stringify(res)
    let txtName = `taobao_${searchWord}_${NowTimeStr}.json`

    downloadTxt(txtName, answerListStr)
    // callback()


    let idx = getQueryString("idx")
    console.log("idx");
    console.log(idx);
    if (!idx) {
        idx = "0"
    }
    let idxInt = parseInt(idx)
    let idxIntNext = idxInt + 1
    if (idxIntNext >= searchWordList.length) {
        return
    }

    let searchWordNext = searchWordList[idxIntNext]
    //  location.href.replace 

    window.location.href = `https://uland.taobao.com/sem/tbsearch?keyword=${searchWordNext}&idx=${idxIntNext}`

    // https://uland.taobao.com/sem/tbsearch?keyword=橘子&idx=3

}

function getNowTimeStr() {
    var current = new Date(); //实例化Date对象
    var nowYear = current.getFullYear(); //获取当前的年份
    var nowMonth = current.getMonth() + 1; //默认显示的是0-11月，比我们正常的月份少一个月，所以要+1
    var nowdates = current.getDate(); //获取日期
    // ————————————————
    // 版权声明：本文为CSDN博主「樱花树下的空白」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
    // 原文链接：https://blog.csdn.net/qq_45382872/article/details/124325266
    var nowHours = current.getHours(); //获取小时
    var nowMinutes = current.getMinutes(); //获取分钟
    var nowSeconds = current.getSeconds(); //获取秒
    // var nowTime = nowYear + "-" + nowMonth + "-" + nowdates + " " + nowHours + ":" + nowMinutes + ":" + nowSeconds;
    // console.log(nowTime);
    var nowTime = nowYear + "_" + nowMonth + "_" + nowdates + "_" + nowHours + "_" + nowMinutes + "_" + nowSeconds;
    return nowTime
}

function initClick() {


    let searchWordInput = J_searchForm.getElementsByTagName("input")[0]
    searchWordInput.value = "手机"

    let submitBtn = document.getElementsByClassName("submit")[0]
    // .click()
    // submit
    // let submitBtn= inputs[0].getElementsByTagName("input")[0]
    console.log("submitBtn");
    console.log(submitBtn);

    submitBtn.click()

}


// alert("this is index.js")

// let  Datagrid1 =document.getElementById("Datagrid1")

// let  trs=Datagrid1.getElementsByTagName("tr")

// console.log("trs");
// console.log(trs);

// let xueFenCol=6

// for (let i=0;i<trs.length;i++){
//    let  tr=  trs[i]
//    let  tds=tr.getElementsByTagName("td")
//   let  xueFen=  tds[xueFenCol]
//   console.log(xueFen);
// }



//创建页面函数
function createPage() {
    console.log("createPage");
    // const page = $('<div id="cj_move_page"></div>')
    let docStr = ` <div class="right_fbox" style="position: fixed;
    right: 1%;" >
    python 面试。  OSI七层，别是物理层,数据链路层,网络层,传输层,会话层，表示层和应用层。 五层：物理、数据链路、网络、传输、应用。。生成器 #调用 next() 内置函数  print(next(num))   #调用 __next__() 方法  print(num.__next__())  。。节省内存空间，即它不会一次性生成所有的数据，而是什么时候需要，什么时候生成。 巨大
    python 面试。  OSI七层，别是物理层,数据链路层,网络层,传输层,会话层，表示层和应用层。 五层：物理、数据链路、网络、传输、应用。。生成器 #调用 next() 内置函数  print(next(num))   #调用 __next__() 方法  print(num.__next__())  。。节省内存空间，即它不会一次性生成所有的数据，而是什么时候需要，什么时候生成。 巨大的序列 。。堆栈帧实际上不在堆栈上——它在堆（内存）上。。bool(gen_fn.__code__.co_flags & generator_bit)。。 “last instruction”(  > gen.send(None)。。线程  class myThread (threading.Thread):  threadLock = threading.Lock() threadLock.acquire() threadLock.release() 。解释器全局锁。只有一个线程在执行。。 元类： ins = type('Fake', (), {'a': 1, 'b': 2, 'method_a': method_a})() 。。 class New_Hello2(metaclass=HelloMeta2):  。。def funSelf(self): 实例方法  Python中，主要通过 引用计数（Reference Counting） 进行垃圾回收。Python的字符串驻留机制.字符中有一个空格所以才不采用驻留.IO多路复用单线程或单进程同时监测若干个文件描述符是否可以执行IO操作的能力。select、poll、epoll，TIME_WAIT状态存在的理由：可靠地实现TCP全双工连接的终止.允许老的重复分节在网络中消逝 .高并发短连接.大量TIME_WAIT.65535端口。业务处理+传输数据的时间 远远小于 TIMEWAIT超时的时间。。进程通信方式。匿名管匿名管道( pipe )。高级管道通信/有名管道。消息队列通信。信号量通信。信号。共享内存通信。套接字通信。进程状态。在三态模型中，进程状态分为三个基本状态，即运行态，就绪态，阻塞态。在五态模型中，进程分为新建态、终止态，运行态，就绪态，阻塞态
孤儿进程：一个父进程退出，而它的一个或多个子进程还在运行，那么那些子进程将成为孤儿进程。孤儿进程将被init进程(进程号为1)所收养，并由init进程对它们完成状态收集工作。
　　僵尸进程：一个进程使用fork创建子进程，如果子进程退出，而父进程并没有调用wait或waitpid获取子进程的状态信息，那么子进程的进程描述符仍然保存在系统中。这种进程称之为僵死进程。  事务管理（ACID）。原子性（Atomicity）。一致性（Consistency）事务前后数据的完整性必须保持一致。。隔离性（Isolation）。持久性（Durability）
HTTP1.0 HTTP 1.1主要区别. 长连接, HTTP 1.0需要使用keep-alive参数来告知服务器端要建立一个长连接.  节约带宽 . HTTP 1.1支持只发送header信息(不带任何body信息)  ,  HOST域
HTTP1.1 HTTP 2.0主要区别 .多路复用 .数据压缩  服务器推送
程序进程中的分区中都存些什么？ BSS区：未初始化的全局变量。 数据段 代码段 堆 栈。非对称加密算法：RSA，DSA/DSS。对称加密算法：AES，RC4，3DES。HASH算法 MD5，SHA1，SHA256   。浏览器发加密规则 ，选出加密算法与HASH算法。验证证书。随机数 公钥加密。 HASH 握手消息，随机数对消息加密。私钥解密取出密码，密码解密握手消息，验证HASH。 密码加密握手消息。浏览器解密HASH

协程
#-*- coding:utf8 -*-
import asyncio

@asyncio.coroutine
def test(i):
print('test_1', i)
r = yield from asyncio.sleep(1)
print('test_2', i)

if __name__ == '__main__':
loop = asyncio.get_event_loop()
tasks = [test(i) for i in range(3)]
loop.run_until_complete(asyncio.wait(tasks))
loop.close()

说明多线程适合IO密集型任务。说明多进程适合计算密集型任务
tcp

TCP的可靠性传输是如何保证的。检验和。序列号/确认应答。超时重传。最大消息长度。滑动窗口控制。拥塞控制。UDP 单播、广播和多播。求序列的中值，然后选取序列的中值作为主元素
若一棵二叉树至多只有最下面两层的结点的度数可以小于2，并且最下层的结点都集中在该层最左边的若干位置上，则此二叉树为完全二叉树。高速缓冲器cache作用是可以大大提高cPU访问主存的速度


@decorator_02
@decorator_01  先
def func():
print('This is func')
    </div>`
    // const page = $(docStr)
    // console.log("page");
    // console.log(page);

    // const h3 = $('<h3 id="cj_move_h3">my Plugin</h3>')
    // page.append(h3)

    // $('.tw-w-10 tw-fixed tw-right-2.5').append(page)
    // $('body').append(page)
    // document.write(docStr)
    //     var txt = document.createTextNode("New insert text.");
    // insertElement.appendChild(txt);

    var insertElement = document.createElement("div");
    insertElement.innerHTML = docStr
    // document.getElementById("insert").appendChild(insertElement);

    // https://uland.taobao.com/

    console.log("insertElement");
    console.log(insertElement);
    //  let bodys= document.getElementsByTagName('body')
    //  console.log("bodys");
    //  console.log(bodys);
    //     let  body=document.getElementsByTagName('body')[0]
    //     body.appendChild(insertElement)
    //     console.log("body");
    //     console.log(body);

    document.body.appendChild(insertElement);
    // document.getElementsByTagName('body')[0].appendChild(page)
    // document.getElementsByTagName('body')[0].appendChild(page)
    //拖拽
    // drag(cj_move_h3)
}
// createPage()

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


console.log("this is index.js")
console.log("document")
console.log(document)
console.log("location")
console.log(location)
// host


let searchWordList = ["手机", "面包", "泡面",
    "男装", "帽子", "内裤", "java", "python", "饼干", "矿泉水",
    "手表", "项链", "保温杯", "热水器", "空调", "电脑", "电视", "洗衣机",
    "马桶", "抽水马桶", "士力架", "脉动",
    "可乐", "雪碧", "芬达", "联想", "华为手机",
    "优衣库", "连衣裙", "零食", "床", "女套装", "男士t恤", "充电宝", "洗面奶", "iphone",
    "泡面", "香肠", "寿司", "手撕面包", "感冒药", "止泻药", "薯片", "止疼药",
    "发烧药", "防窥膜", "防晒霜", "手套", "床垫", "床单", "被子", "电热毯", "电热水壶",
    "运动鞋", "洗发水", "剃须刀", "即热食品", "热干面", "热狗", "紫菜",
    "即时", "凤爪", "棉拖鞋", "麻花", "手套", "酒精", "巧克力", "蛋糕",
    "烤鸭", "烤鸡", "马桶坐垫", "不锈钢脸盆", "洗脚盆", "电饭煲", "洗衣液",
]
let fruits = ['樱桃', '西瓜', '葡萄', "橘子",
    "香蕉", '水蜜桃', '芒果', '石榴', '李子', '柚子', '橄榄', '荔枝', '柠檬',
    '龙眼', '椰子', '甘蔗', '山楂', '栗子', '柿子', '番石榴', '杏仁',
]

// 零食 
let snacks = ["薯片", "玉米片", "坚果", " 杏仁", "腰果", "核桃", "开心果", "爆米花", "牛油果酱", "洋葱", "番茄",
    "奶黄包", "肉包", "速冻饺子", "肉干", "猪肉干", "香肠", "火鸡", "小熊软糖", "士力架", "糖豆", "棒棒糖", "牙膏", "牙刷", "蜜饯", "话梅"
]
let chinese_snacks = ['瓜子', '剝壳嗑瓜子', '鱼片干', '鱿鱼丝', '内脏', '鸭舌头', '鸭翅膀', '辣条', '海苔']
// +fruits
// js 列表 相加 
snacks =
    addAll(snacks, chinese_snacks)



function removeSame(arr) {

    // var a = [1,2,3,4,5,2,3,5,5,5,5]
    let list = [...new Set(arr)]
    // console.log(list); // 输出结果 [1, 2, 3, 4, 5]
    return list
}

function addAll(srcList, addList) {
    for (let i = 0; i < addList.length; i++) {
        srcList.push(addList[i])
    }
    return srcList
}

function moocDownload() {


    linksDivs = document.getElementsByClassName("j-quizBtn u-btn u-btn-default f-fr")
    for (let i = 0; i < linksDivs.length; i++) {
        let linkDiv = linksDivs[i]
        // .getAttribute("id");
        id = linkDiv.getAttribute("id")
        id = id.replace("auto-id-", "")
        // id= linkDiv.getAttr("id")

        // console.log(linkDiv);
        console.log(id);

        // id= linkDiv.getAttr("id")
        // console.log(id);
    }

    qaDescription = document.getElementsByClassName("qaDescription f-fl f-cb")[0];
    //  ansDiv = document.getElementsByClassName("j-richOrText text f-f0 f-richEditorText edueditor_styleclass_29 edueditor_styleclass_31")[0];

    ansDiv = document.getElementsByClassName("j-richOrText text ")[0];

    commentDiv = document.getElementsByClassName("j-comment comment")[0];

    title = document.getElementsByClassName('f-fl j-hwname')[0].textContent
    try {
        course = document.getElementsByClassName('f-fc3 courseTxt')[0].textContent.trim()
    } catch (e) {
        course = null
    }
    try {
        teacher = document.getElementsByClassName('f-fcgreen padding-top-5')[0].innerHTML.trim()
    } catch (e) {
        teacher = null
    }
    try {
        score = document.getElementsByClassName('score j-score')[0].textContent.trim()
    } catch (e) {
        score = "未评分"
    }
    //  score = document.getElementsByClassName('score j-score')[0].textContent.trim()

    //   questionObj=
    // {
    //     question:qaDescription.textContent,
    //     myAns: ansDiv.textContent,
    // }

    // questionObj=
    // {
    //     "question":qaDescription.textContent,
    //     "myAns": ansDiv.textContent,
    // }

    // questionObj=
    // {
    //     "question":qaDescription.innerHTML,
    //     "myAns": ansDiv.textContent,
    // }

    questionObj = {
        "question": qaDescription.innerHTML.trim(),
        "myAns": ansDiv.innerHTML.trim(),
        questionText: qaDescription.textContent.trim(),
        myAnsText: ansDiv.textContent.trim(),
        commentText: commentDiv.textContent.trim(),
        comment: commentDiv.innerHTML.trim(),
        location_href: location.href.trim(),
        title,
        course,
        teacher,
        score

    }

    downloadTxt(`${title}_${course}.json`, JSON.stringify(questionObj))

    // let idx = getQueryString("idx")
    // console.log("idx");
    // console.log(idx);
    // if (!idx) {
    //     idx = "0"
    // }
    // let idxInt = parseInt(idx)
    // let idxIntNext = idxInt + 1
    let idxIntNext = genNextIdx()
    console.log("idxIntNext");
    console.log(idxIntNext);

    if (idxIntNext >= contentIdList.length) {
        return
    }

    let contentIdNext = contentIdList[idxIntNext]
    console.log("contentIdNext");
    console.log(contentIdNext);

    //  location.href.replace 
    // 计算机网络_中国大学MOOC(慕课)
    // window.location.href = `https://uland.taobao.com/sem/tbsearch?keyword=${searchWordNext}&idx=${idxIntNext}`
    // let  nextLink=`https://www.icourse163.org/learn/HIT-154005?tid=1463162470#/learn/hw?id=${contentIdNext}&idx=${idxIntNext}`
    let nextLink = `https://www.icourse163.org/learn/HIT-154005?tid=1463162470&idx=${idxIntNext}#/learn/hw?id=${contentIdNext}`

    console.log("nextLink");
    console.log(nextLink);

    setTimeout(() => {
        window.location.href = nextLink
    }, 3000)

}

function downloadJob() {
    // title = document.getElementsByClassName('f-fl j-hwname')[0].textContent
    // let  title="欢迎访问浙大城市学院就业信息网"
    let title = "浙大城市学院就业信息网"

    let jobs = document.getElementsByClassName('job')
    let names = document.getElementsByClassName('name')

    let jobsArray = Array.from(jobs)
    // Array.from(jobs)
    let resList = []
    // for (let i = 0; i < names.length; i++) {
    //     let name = names[i].textContent.trim()
    //     let job = jobsArray[i].innerHTML.trim()
    //     resList.push({
    //         name,
    //         job
    //     })
    //     // console.log(names[i].innerHTML)
    // }

    let baseUrl = "http://career.zucc.edu.cn"
    for (let i = 0; i < names.length; i++) {
        let nameDom = names[i]
        //   let  jobDetailLinkSuffix=   nameDom.getElementsByTagName('a')[0].href
        //   let  jobDetailLink= `${baseUrl}${jobDetailLinkSuffix}`

        let jobDetailLink = nameDom.getElementsByTagName('a')[0].href

        //       【2023届】实习生
        // http://career.zucc.edu.cn/job/view/id/1194903
        let name = names[i].textContent.trim()
        let job = jobsArray[i].innerHTML.trim()
        resList.push({
            name,
            job,
            jobDetailLink
        })
        // console.log(names[i].innerHTML)
    }


    let page = getQueryString("page")
    if (!page) {
        page = "1"
    }
    let idxIntNext = genNextIdx()
    console.log("idxIntNext");
    console.log(idxIntNext);
    downloadTxt(`${title}_page_${page}.json`, JSON.stringify(resList))

    // if (idxIntNext >= contentIdList.length) {
    //     return
    // }
    let lastPageNum = 30
    if (idxIntNext >= lastPageNum) {
        return
    }

    // let contentIdNext = contentIdList[idxIntNext]
    // console.log("contentIdNext");
    // console.log(contentIdNext);

    let nextLink = `http://career.zucc.edu.cn/job/search?title=&city=&d_skill=&d_industry=&d_major=&d_education=&d_category=&d_salary=&nature=&scale=&time=&page=${idxIntNext}&idx=${idxIntNext}`
    setTimeout(() => {
        window.location.href = nextLink
    }, 3000)

}

let contentIdList = ['1237071659', '1237072629', '1237068750', '1237068752', '1237070693', '1237069773', '1237072630', '1237068753', '1237067810',
    '1237071660'
]

function genNextIdx() {
    let idx = getQueryString("idx")
    console.log("idx");
    console.log(idx);
    if (!idx) {
        idx = "0"
    }
    let idxInt = parseInt(idx)
    let idxIntNext = idxInt + 1
    return idxIntNext
}
searchWordList =
    addAll(searchWordList, fruits)
// 水果 fruit

function downloadMoocCourseLinks() {

    let courseObjList = []
    //     let  courseCards=
    // Array.from(document.getElementsByClassName('course-card-wrapper'))
    // // document.getElementsByClassName('course-card-wrapper')
    // // [0].style.display = 'none'

    // let hrefs=courseCards.map(courseCard=>courseCard.getElementsByTagName('a')[0].href)
    let courseCards =
        Array.from(document.getElementsByClassName('course-card-wrapper'))
    // document.getElementsByClassName('course-card-wrapper')
    // [0].style.display = 'none'

    let hrefs = courseCards.map(courseCard => courseCard.getElementsByTagName('a')[0].href)

    console.log("hrefs");
    console.log(hrefs);

    let titleList = Array.from(
        document.getElementsByClassName('common-info-wrapper common-info-wrapper-fix-height')
    )
    console.log("titleList");
    console.log(titleList);
    // let  title=
    // document.getElementsByClassName('common-info-wrapper common-info-wrapper-fix-height')[0].textContent

    // let  
    let scoreList = []
    try {
        scoreList =
            document.getElementsByClassName('score ')
    } catch (e) {
        console.log(e);
        scoreList = []
    }

    console.log("scoreList");
    console.log(scoreList);

    // let  score=
    // document.getElementsByClassName('score ')[0].textContent.trim().replace('\n','')

    let courseStatusList = document.getElementsByClassName('course-status')
    // let  courseStatus=
    // document.getElementsByClassName('course-status')[0].textContent
    console.log("courseStatusList");
    console.log(courseStatusList);
    for (let i = 0; i < hrefs.length; i++) {

        let href =
            hrefs[i]

        let title = titleList[i].textContent
        let score = null
        // if(i>=scoreList.length){
        //     let  score= scoreList[i]
        // }

        if (i < scoreList.length) {
            score = scoreList[i].textContent.trim().replace('\n', '')
        }

        let courseStatus = courseStatusList[i].textContent

        let courseObj = {
            href,
            title,
            score,
            courseStatus,
        }

        courseObjList.push(courseObj)


    }

    console.log("courseObjList");
    console.log(courseObjList);

}

function getUrlFileName() {
    var path = window.location.pathname;
    console.log("path");
    console.log(path);
    //     path
    // VM2533:5 /home.htm

    // down.innerHTML = path.split("/").pop();
    let urlFileName = path.split("/").pop();
    console.log("urlFileName");
    console.log(urlFileName);

    return urlFileName
}

function detailsListTextGet() {
    let lis = document.querySelectorAll(".details-list li ")
    // lis
    let resList = []

    for (let i = 0; i < lis.length; i++) {
        let li = lis[i]
        // li. 

        // console.log(   li.firstChild.nodeValue);
        // // li.seco 
        // // console.log(   li.children[1].nodeValue);
        // // console.log(  li.children);
        // console.log(  li.children[0].textContent);
        let title = li.firstChild.nodeValue
        let value = li.children[0].textContent

        resList.push({
            title,
            value
        })


        // console.log(  li.te);
        //         JavaScript 技术篇-js只获取本节点text文本，不包含子节点_禁止text()捕获子节点内容_挣扎的蓝藻的博客-CSDN博客
        // https://blog.csdn.net/qq_38161040/article/details/95059026

        // console.log(  li.innerText);
        // console.log(li.textContent);
    }

    return resList

}

function getListLast(lst) {

    return lst[lst.length - 1]
}


function jobDetailGet() {
    // title-message
    let titleMessage = document.getElementsByClassName('title-message')[0] ?.textContent
    //    titleMessage
    let title = document.getElementsByClassName('title')[0] ?.textContent

    //    title
    let salary = document.getElementsByClassName('text-orange salary')[0] ?.textContent
    //    salary

    let education = document.getElementsByClassName('education')[0] ?.textContent
    education
    //    text-orange salary

    // let jobDetail=   document.getElementsByClassName('mge-title')[0].textContent
    // jobDetail
    // 职位详情
    // jobDetail
    // let jobDetail=   document.getElementsByClassName('aContent')[0].textContent
    let jobDetail = document.getElementsByClassName('aContent')[0] ?.innerHTML

    jobDetail


    let address = document.getElementsByClassName('address-container')[0] ?.textContent
    address
    // document.querySelector("body > div.css-wrapper > div.css-out-content > div:nth-child(2) > div > div.maininfo > div.details-address > div > p")
    // let address=   document.getElementsByClassName('map-container')[0].textContent
    // document.querySelector("#yw0 > img")
    //  let mapImg= document.querySelector(".map-container > img")+""
    //  let mapImg= document.querySelector(".map-container > img").innerHTML
    let mapImg = document.querySelector(".map-container > img") ?.outerHTML
    mapImg

    let location_href =
        location.href

    //  getla 
    //  let  = location_href.split('/')[-1]
    let id = getListLast(location_href.split('/'))
    // let clearfix=   document.getElementsByClassName('clearfix')[0]
    // let clearfix=   document.getElementsByClassName('details-list')[0]
    // let detailsList=   document.getElementsByClassName('details-list')[0]
    // let  lis= detailsList.getElementsByTagName('li')
    // let  lis= document.querySelector(".details-list > li ")
    // let  lis= document.querySelector(".details-list li ")
    // lis

    // let  lis= document.querySelectorAll(".details-list li ")
    // lis

    // for(let i=0;i<lis.length;i++){
    //     let li=lis[i]
    //     console.log(li.textContent);
    // }
    let detailsList = detailsListTextGet()
    // querySelectorAll


    // body > div.css-wrapper > div.css-out-content > div:nth-child(2) > div > div.maininfo > div.details-list > ul > li:nth-child(1)


    //   let  lis= clearfix.getElementsByTagName('li')
    //   lis

    // let clearfix=   document.getElementsByClassName('clearfix')[0].textContent
    // clearfix

    // clearfix
    return {
        id,
        titleMessage,
        title,
        salary,
        education,
        jobDetail,
        address,
        mapImg,
        location_href,
        detailsList,
    }
}

async function postData(url = "", data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
}

// D:\proj\python\my_util_py_pub>python "d:\proj\python\my_util_py_pub\read_job.py"
let detailLinkList = ['http://career.zucc.edu.cn/job/view/id/1195408', 'http://career.zucc.edu.cn/job/view/id/1195407', 'http://career.zucc.edu.cn/job/view/id/1195406', 'http://career.zucc.edu.cn/job/view/id/1195405', 'http://career.zucc.edu.cn/job/view/id/1195404', 'http://career.zucc.edu.cn/job/view/id/1195403', 'http://career.zucc.edu.cn/job/view/id/1195401', 'http://career.zucc.edu.cn/job/view/id/1195400', 'http://career.zucc.edu.cn/job/view/id/1195399', 'http://career.zucc.edu.cn/job/view/id/1195398', 'http://career.zucc.edu.cn/job/view/id/1195397', 'http://career.zucc.edu.cn/job/view/id/1195396', 'http://career.zucc.edu.cn/job/view/id/1195395', 'http://career.zucc.edu.cn/job/view/id/1195394', 'http://career.zucc.edu.cn/job/view/id/1195392', 'http://career.zucc.edu.cn/job/view/id/1195390', 'http://career.zucc.edu.cn/job/view/id/1195389', 'http://career.zucc.edu.cn/job/view/id/1195388', 'http://career.zucc.edu.cn/job/view/id/1195387', 'http://career.zucc.edu.cn/job/view/id/1195386', 'http://career.zucc.edu.cn/job/view/id/1195384', 'http://career.zucc.edu.cn/job/view/id/1195383', 'http://career.zucc.edu.cn/job/view/id/1195382', 'http://career.zucc.edu.cn/job/view/id/1195380', 'http://career.zucc.edu.cn/job/view/id/1195378', 'http://career.zucc.edu.cn/job/view/id/1195377', 'http://career.zucc.edu.cn/job/view/id/1195374', 'http://career.zucc.edu.cn/job/view/id/1195372', 'http://career.zucc.edu.cn/job/view/id/1195371', 'http://career.zucc.edu.cn/job/view/id/1195360', 'http://career.zucc.edu.cn/job/view/id/1195359', 'http://career.zucc.edu.cn/job/view/id/1195358', 'http://career.zucc.edu.cn/job/view/id/1195357', 'http://career.zucc.edu.cn/job/view/id/1195356', 'http://career.zucc.edu.cn/job/view/id/1195349', 'http://career.zucc.edu.cn/job/view/id/1195347', 'http://career.zucc.edu.cn/job/view/id/1195346', 'http://career.zucc.edu.cn/job/view/id/1195345', 'http://career.zucc.edu.cn/job/view/id/1195344', 'http://career.zucc.edu.cn/job/view/id/1195343', 'http://career.zucc.edu.cn/job/view/id/1195342', 'http://career.zucc.edu.cn/job/view/id/1195334', 'http://career.zucc.edu.cn/job/view/id/1195326', 'http://career.zucc.edu.cn/job/view/id/1195317', 'http://career.zucc.edu.cn/job/view/id/1195316', 'http://career.zucc.edu.cn/job/view/id/1195315', 'http://career.zucc.edu.cn/job/view/id/1195314', 'http://career.zucc.edu.cn/job/view/id/1195313', 'http://career.zucc.edu.cn/job/view/id/1195311', 'http://career.zucc.edu.cn/job/view/id/1195312', 'http://career.zucc.edu.cn/job/view/id/1195310', 'http://career.zucc.edu.cn/job/view/id/1195309', 'http://career.zucc.edu.cn/job/view/id/1195307', 'http://career.zucc.edu.cn/job/view/id/1195306', 'http://career.zucc.edu.cn/job/view/id/1195305', 'http://career.zucc.edu.cn/job/view/id/1195304', 'http://career.zucc.edu.cn/job/view/id/1195303', 'http://career.zucc.edu.cn/job/view/id/1195302', 'http://career.zucc.edu.cn/job/view/id/1195301', 'http://career.zucc.edu.cn/job/view/id/1195300', 'http://career.zucc.edu.cn/job/view/id/1195299', 'http://career.zucc.edu.cn/job/view/id/1195294', 'http://career.zucc.edu.cn/job/view/id/1195293', 'http://career.zucc.edu.cn/job/view/id/1195292', 'http://career.zucc.edu.cn/job/view/id/1195290', 'http://career.zucc.edu.cn/job/view/id/1195288', 'http://career.zucc.edu.cn/job/view/id/1195284', 'http://career.zucc.edu.cn/job/view/id/1195282', 'http://career.zucc.edu.cn/job/view/id/1195281', 'http://career.zucc.edu.cn/job/view/id/1195280', 'http://career.zucc.edu.cn/job/view/id/1195279', 'http://career.zucc.edu.cn/job/view/id/1195278', 'http://career.zucc.edu.cn/job/view/id/1195277', 'http://career.zucc.edu.cn/job/view/id/1195296', 'http://career.zucc.edu.cn/job/view/id/1195297', 'http://career.zucc.edu.cn/job/view/id/1195271', 'http://career.zucc.edu.cn/job/view/id/1195270', 'http://career.zucc.edu.cn/job/view/id/1195269', 'http://career.zucc.edu.cn/job/view/id/1195268', 'http://career.zucc.edu.cn/job/view/id/1195267', 'http://career.zucc.edu.cn/job/view/id/1195266', 'http://career.zucc.edu.cn/job/view/id/1195265', 'http://career.zucc.edu.cn/job/view/id/1195264', 'http://career.zucc.edu.cn/job/view/id/1195263', 'http://career.zucc.edu.cn/job/view/id/1195262', 'http://career.zucc.edu.cn/job/view/id/1195261', 'http://career.zucc.edu.cn/job/view/id/1195260', 'http://career.zucc.edu.cn/job/view/id/1195259', 'http://career.zucc.edu.cn/job/view/id/1195258', 'http://career.zucc.edu.cn/job/view/id/1195257', 'http://career.zucc.edu.cn/job/view/id/1195256', 'http://career.zucc.edu.cn/job/view/id/1195255', 'http://career.zucc.edu.cn/job/view/id/1195254', 'http://career.zucc.edu.cn/job/view/id/1195253', 'http://career.zucc.edu.cn/job/view/id/1195252', 'http://career.zucc.edu.cn/job/view/id/1195251', 'http://career.zucc.edu.cn/job/view/id/1195250', 'http://career.zucc.edu.cn/job/view/id/1195249', 'http://career.zucc.edu.cn/job/view/id/1195248', 'http://career.zucc.edu.cn/job/view/id/1195247', 'http://career.zucc.edu.cn/job/view/id/1195246', 'http://career.zucc.edu.cn/job/view/id/1195245', 'http://career.zucc.edu.cn/job/view/id/1195244', 'http://career.zucc.edu.cn/job/view/id/1195243', 'http://career.zucc.edu.cn/job/view/id/1195242', 'http://career.zucc.edu.cn/job/view/id/1195241', 'http://career.zucc.edu.cn/job/view/id/1195239', 'http://career.zucc.edu.cn/job/view/id/1195238', 'http://career.zucc.edu.cn/job/view/id/1195237', 'http://career.zucc.edu.cn/job/view/id/1195234', 'http://career.zucc.edu.cn/job/view/id/1195225', 'http://career.zucc.edu.cn/job/view/id/1195224', 'http://career.zucc.edu.cn/job/view/id/1195232', 'http://career.zucc.edu.cn/job/view/id/1195233', 'http://career.zucc.edu.cn/job/view/id/1195236', 'http://career.zucc.edu.cn/job/view/id/1195223', 'http://career.zucc.edu.cn/job/view/id/1195222', 'http://career.zucc.edu.cn/job/view/id/1195221', 'http://career.zucc.edu.cn/job/view/id/1195219', 'http://career.zucc.edu.cn/job/view/id/1195218', 'http://career.zucc.edu.cn/job/view/id/1195214', 'http://career.zucc.edu.cn/job/view/id/1195213', 'http://career.zucc.edu.cn/job/view/id/1195212', 'http://career.zucc.edu.cn/job/view/id/1195209', 'http://career.zucc.edu.cn/job/view/id/1195208', 'http://career.zucc.edu.cn/job/view/id/1195202', 'http://career.zucc.edu.cn/job/view/id/1195201', 'http://career.zucc.edu.cn/job/view/id/1195197', 'http://career.zucc.edu.cn/job/view/id/1195196', 'http://career.zucc.edu.cn/job/view/id/1195195', 'http://career.zucc.edu.cn/job/view/id/1195194', 'http://career.zucc.edu.cn/job/view/id/1195193', 'http://career.zucc.edu.cn/job/view/id/1195191', 'http://career.zucc.edu.cn/job/view/id/1195190', 'http://career.zucc.edu.cn/job/view/id/1195183', 'http://career.zucc.edu.cn/job/view/id/1195173', 'http://career.zucc.edu.cn/job/view/id/1195170', 'http://career.zucc.edu.cn/job/view/id/1195169', 'http://career.zucc.edu.cn/job/view/id/1195168', 'http://career.zucc.edu.cn/job/view/id/1195167', 'http://career.zucc.edu.cn/job/view/id/1195166', 'http://career.zucc.edu.cn/job/view/id/1195165', 'http://career.zucc.edu.cn/job/view/id/1195164', 'http://career.zucc.edu.cn/job/view/id/1195162', 'http://career.zucc.edu.cn/job/view/id/1195150', 'http://career.zucc.edu.cn/job/view/id/1195149', 'http://career.zucc.edu.cn/job/view/id/1195147', 'http://career.zucc.edu.cn/job/view/id/1195145', 'http://career.zucc.edu.cn/job/view/id/1195138', 'http://career.zucc.edu.cn/job/view/id/1195137', 'http://career.zucc.edu.cn/job/view/id/1195136', 'http://career.zucc.edu.cn/job/view/id/1195135', 'http://career.zucc.edu.cn/job/view/id/1195134', 'http://career.zucc.edu.cn/job/view/id/1195133', 'http://career.zucc.edu.cn/job/view/id/1195132', 'http://career.zucc.edu.cn/job/view/id/1195131', 'http://career.zucc.edu.cn/job/view/id/1195130', 'http://career.zucc.edu.cn/job/view/id/1195129', 'http://career.zucc.edu.cn/job/view/id/1195128', 'http://career.zucc.edu.cn/job/view/id/1195127', 'http://career.zucc.edu.cn/job/view/id/1195125', 'http://career.zucc.edu.cn/job/view/id/1195111', 'http://career.zucc.edu.cn/job/view/id/1195110', 'http://career.zucc.edu.cn/job/view/id/1195109', 'http://career.zucc.edu.cn/job/view/id/1195108', 'http://career.zucc.edu.cn/job/view/id/1195107', 'http://career.zucc.edu.cn/job/view/id/1195106', 'http://career.zucc.edu.cn/job/view/id/1195105', 'http://career.zucc.edu.cn/job/view/id/1195104', 'http://career.zucc.edu.cn/job/view/id/1195103', 'http://career.zucc.edu.cn/job/view/id/1195102', 'http://career.zucc.edu.cn/job/view/id/1195100', 'http://career.zucc.edu.cn/job/view/id/1195099', 'http://career.zucc.edu.cn/job/view/id/1195098', 'http://career.zucc.edu.cn/job/view/id/1195095', 'http://career.zucc.edu.cn/job/view/id/1195094', 'http://career.zucc.edu.cn/job/view/id/1195093', 'http://career.zucc.edu.cn/job/view/id/1195091', 'http://career.zucc.edu.cn/job/view/id/1195090', 'http://career.zucc.edu.cn/job/view/id/1195089', 'http://career.zucc.edu.cn/job/view/id/1195088', 'http://career.zucc.edu.cn/job/view/id/1195087', 'http://career.zucc.edu.cn/job/view/id/1195086', 'http://career.zucc.edu.cn/job/view/id/1195085', 'http://career.zucc.edu.cn/job/view/id/1195083', 'http://career.zucc.edu.cn/job/view/id/1195082', 'http://career.zucc.edu.cn/job/view/id/1195079', 'http://career.zucc.edu.cn/job/view/id/1195072', 'http://career.zucc.edu.cn/job/view/id/1195069', 'http://career.zucc.edu.cn/job/view/id/1195068', 'http://career.zucc.edu.cn/job/view/id/1195066', 'http://career.zucc.edu.cn/job/view/id/1195065', 'http://career.zucc.edu.cn/job/view/id/1195057', 'http://career.zucc.edu.cn/job/view/id/1195056', 'http://career.zucc.edu.cn/job/view/id/1195051', 'http://career.zucc.edu.cn/job/view/id/1195042', 'http://career.zucc.edu.cn/job/view/id/1195041', 'http://career.zucc.edu.cn/job/view/id/1195040', 'http://career.zucc.edu.cn/job/view/id/1195039', 'http://career.zucc.edu.cn/job/view/id/1195033', 'http://career.zucc.edu.cn/job/view/id/1195671', 'http://career.zucc.edu.cn/job/view/id/1195670', 'http://career.zucc.edu.cn/job/view/id/1195669', 'http://career.zucc.edu.cn/job/view/id/1195668', 'http://career.zucc.edu.cn/job/view/id/1195667', 'http://career.zucc.edu.cn/job/view/id/1195666', 'http://career.zucc.edu.cn/job/view/id/1195665', 'http://career.zucc.edu.cn/job/view/id/1195664', 'http://career.zucc.edu.cn/job/view/id/1195663', 'http://career.zucc.edu.cn/job/view/id/1195662', 'http://career.zucc.edu.cn/job/view/id/1195661', 'http://career.zucc.edu.cn/job/view/id/1195660', 'http://career.zucc.edu.cn/job/view/id/1195659', 'http://career.zucc.edu.cn/job/view/id/1195658', 'http://career.zucc.edu.cn/job/view/id/1195657', 'http://career.zucc.edu.cn/job/view/id/1195656', 'http://career.zucc.edu.cn/job/view/id/1195655', 'http://career.zucc.edu.cn/job/view/id/1195654', 'http://career.zucc.edu.cn/job/view/id/1195653', 'http://career.zucc.edu.cn/job/view/id/1195652', 'http://career.zucc.edu.cn/job/view/id/1195032', 'http://career.zucc.edu.cn/job/view/id/1195026', 'http://career.zucc.edu.cn/job/view/id/1195016', 'http://career.zucc.edu.cn/job/view/id/1195015', 'http://career.zucc.edu.cn/job/view/id/1195007', 'http://career.zucc.edu.cn/job/view/id/1195000', 'http://career.zucc.edu.cn/job/view/id/1194999', 'http://career.zucc.edu.cn/job/view/id/1194998', 'http://career.zucc.edu.cn/job/view/id/1194997', 'http://career.zucc.edu.cn/job/view/id/1194996', 'http://career.zucc.edu.cn/job/view/id/1194995', 'http://career.zucc.edu.cn/job/view/id/1194994', 'http://career.zucc.edu.cn/job/view/id/1194993', 'http://career.zucc.edu.cn/job/view/id/1194986', 'http://career.zucc.edu.cn/job/view/id/1194985', 'http://career.zucc.edu.cn/job/view/id/1194984', 'http://career.zucc.edu.cn/job/view/id/1194983', 'http://career.zucc.edu.cn/job/view/id/1194982', 'http://career.zucc.edu.cn/job/view/id/1194961', 'http://career.zucc.edu.cn/job/view/id/1194960', 'http://career.zucc.edu.cn/job/view/id/1194959', 'http://career.zucc.edu.cn/job/view/id/1194946', 'http://career.zucc.edu.cn/job/view/id/1194945', 'http://career.zucc.edu.cn/job/view/id/1194944', 'http://career.zucc.edu.cn/job/view/id/1194943', 'http://career.zucc.edu.cn/job/view/id/1194942', 'http://career.zucc.edu.cn/job/view/id/1194941', 'http://career.zucc.edu.cn/job/view/id/1194939', 'http://career.zucc.edu.cn/job/view/id/1194938', 'http://career.zucc.edu.cn/job/view/id/1194937', 'http://career.zucc.edu.cn/job/view/id/1194936', 'http://career.zucc.edu.cn/job/view/id/1194935', 'http://career.zucc.edu.cn/job/view/id/1194934', 'http://career.zucc.edu.cn/job/view/id/1194932', 'http://career.zucc.edu.cn/job/view/id/1194931', 'http://career.zucc.edu.cn/job/view/id/1194930', 'http://career.zucc.edu.cn/job/view/id/1194929', 'http://career.zucc.edu.cn/job/view/id/1194916', 'http://career.zucc.edu.cn/job/view/id/1194915', 'http://career.zucc.edu.cn/job/view/id/1194907', 'http://career.zucc.edu.cn/job/view/id/1194903', 'http://career.zucc.edu.cn/job/view/id/1194902', 'http://career.zucc.edu.cn/job/view/id/1194901', 'http://career.zucc.edu.cn/job/view/id/1194877', 'http://career.zucc.edu.cn/job/view/id/1194876', 'http://career.zucc.edu.cn/job/view/id/1194867', 'http://career.zucc.edu.cn/job/view/id/1194865', 'http://career.zucc.edu.cn/job/view/id/1194827', 'http://career.zucc.edu.cn/job/view/id/1194804', 'http://career.zucc.edu.cn/job/view/id/1194803', 'http://career.zucc.edu.cn/job/view/id/1194785', 'http://career.zucc.edu.cn/job/view/id/1194784', 'http://career.zucc.edu.cn/job/view/id/1194783', 'http://career.zucc.edu.cn/job/view/id/1194782', 'http://career.zucc.edu.cn/job/view/id/1194778', 'http://career.zucc.edu.cn/job/view/id/1194777', 'http://career.zucc.edu.cn/job/view/id/1194776', 'http://career.zucc.edu.cn/job/view/id/1194779', 'http://career.zucc.edu.cn/job/view/id/1194764', 'http://career.zucc.edu.cn/job/view/id/1194757', 'http://career.zucc.edu.cn/job/view/id/1194754', 'http://career.zucc.edu.cn/job/view/id/1194753', 'http://career.zucc.edu.cn/job/view/id/1194729', 'http://career.zucc.edu.cn/job/view/id/1194702', 'http://career.zucc.edu.cn/job/view/id/1194701', 'http://career.zucc.edu.cn/job/view/id/1194700', 'http://career.zucc.edu.cn/job/view/id/1194689', 'http://career.zucc.edu.cn/job/view/id/1194688', 'http://career.zucc.edu.cn/job/view/id/1194687', 'http://career.zucc.edu.cn/job/view/id/1194658', 'http://career.zucc.edu.cn/job/view/id/1194655', 'http://career.zucc.edu.cn/job/view/id/1194654', 'http://career.zucc.edu.cn/job/view/id/1194653', 'http://career.zucc.edu.cn/job/view/id/1194643', 'http://career.zucc.edu.cn/job/view/id/1194634', 'http://career.zucc.edu.cn/job/view/id/1194632', 'http://career.zucc.edu.cn/job/view/id/1194631', 'http://career.zucc.edu.cn/job/view/id/1194629', 'http://career.zucc.edu.cn/job/view/id/1194628', 'http://career.zucc.edu.cn/job/view/id/1194593', 'http://career.zucc.edu.cn/job/view/id/1194584', 'http://career.zucc.edu.cn/job/view/id/1194583', 'http://career.zucc.edu.cn/job/view/id/1194581', 'http://career.zucc.edu.cn/job/view/id/1194580', 'http://career.zucc.edu.cn/job/view/id/1194579', 'http://career.zucc.edu.cn/job/view/id/1194578', 'http://career.zucc.edu.cn/job/view/id/1194577', 'http://career.zucc.edu.cn/job/view/id/1194576', 'http://career.zucc.edu.cn/job/view/id/1194575', 'http://career.zucc.edu.cn/job/view/id/1194561', 'http://career.zucc.edu.cn/job/view/id/1194559', 'http://career.zucc.edu.cn/job/view/id/1194558', 'http://career.zucc.edu.cn/job/view/id/1194557', 'http://career.zucc.edu.cn/job/view/id/1194525', 'http://career.zucc.edu.cn/job/view/id/1194499', 'http://career.zucc.edu.cn/job/view/id/1194490', 'http://career.zucc.edu.cn/job/view/id/1194489', 'http://career.zucc.edu.cn/job/view/id/1194488', 'http://career.zucc.edu.cn/job/view/id/1194487', 'http://career.zucc.edu.cn/job/view/id/1194486', 'http://career.zucc.edu.cn/job/view/id/1194280', 'http://career.zucc.edu.cn/job/view/id/1194279', 'http://career.zucc.edu.cn/job/view/id/1194185', 'http://career.zucc.edu.cn/job/view/id/1194184', 'http://career.zucc.edu.cn/job/view/id/1194183', 'http://career.zucc.edu.cn/job/view/id/1194182', 'http://career.zucc.edu.cn/job/view/id/1194181', 'http://career.zucc.edu.cn/job/view/id/1194180', 'http://career.zucc.edu.cn/job/view/id/1194179', 'http://career.zucc.edu.cn/job/view/id/1194178', 'http://career.zucc.edu.cn/job/view/id/1194177', 'http://career.zucc.edu.cn/job/view/id/1194176', 'http://career.zucc.edu.cn/job/view/id/1194175', 'http://career.zucc.edu.cn/job/view/id/1194174', 'http://career.zucc.edu.cn/job/view/id/1194173', 'http://career.zucc.edu.cn/job/view/id/1194007', 'http://career.zucc.edu.cn/job/view/id/1194002', 'http://career.zucc.edu.cn/job/view/id/1194001', 'http://career.zucc.edu.cn/job/view/id/1194000', 'http://career.zucc.edu.cn/job/view/id/1193999', 'http://career.zucc.edu.cn/job/view/id/1193998', 'http://career.zucc.edu.cn/job/view/id/1193997', 'http://career.zucc.edu.cn/job/view/id/1193996', 'http://career.zucc.edu.cn/job/view/id/1193988', 'http://career.zucc.edu.cn/job/view/id/1193987', 'http://career.zucc.edu.cn/job/view/id/1193986', 'http://career.zucc.edu.cn/job/view/id/1193985', 'http://career.zucc.edu.cn/job/view/id/1193984', 'http://career.zucc.edu.cn/job/view/id/1193983', 'http://career.zucc.edu.cn/job/view/id/1193890', 'http://career.zucc.edu.cn/job/view/id/1193887', 'http://career.zucc.edu.cn/job/view/id/1193632', 'http://career.zucc.edu.cn/job/view/id/1193631', 'http://career.zucc.edu.cn/job/view/id/1193629', 'http://career.zucc.edu.cn/job/view/id/1193620', 'http://career.zucc.edu.cn/job/view/id/1193617', 'http://career.zucc.edu.cn/job/view/id/1193532', 'http://career.zucc.edu.cn/job/view/id/1193531', 'http://career.zucc.edu.cn/job/view/id/1193530', 'http://career.zucc.edu.cn/job/view/id/1193529', 'http://career.zucc.edu.cn/job/view/id/1193528', 'http://career.zucc.edu.cn/job/view/id/1193527', 'http://career.zucc.edu.cn/job/view/id/1193410', 'http://career.zucc.edu.cn/job/view/id/1193395', 'http://career.zucc.edu.cn/job/view/id/1193394', 'http://career.zucc.edu.cn/job/view/id/1193074', 'http://career.zucc.edu.cn/job/view/id/1192995', 'http://career.zucc.edu.cn/job/view/id/1192999', 'http://career.zucc.edu.cn/job/view/id/1192818', 'http://career.zucc.edu.cn/job/view/id/1192824', 'http://career.zucc.edu.cn/job/view/id/1192754', 'http://career.zucc.edu.cn/job/view/id/1192447', 'http://career.zucc.edu.cn/job/view/id/1192356', 'http://career.zucc.edu.cn/job/view/id/1192237', 'http://career.zucc.edu.cn/job/view/id/1192236', 'http://career.zucc.edu.cn/job/view/id/1192142', 'http://career.zucc.edu.cn/job/view/id/1192141', 'http://career.zucc.edu.cn/job/view/id/1192102', 'http://career.zucc.edu.cn/job/view/id/1192101', 'http://career.zucc.edu.cn/job/view/id/1192100', 'http://career.zucc.edu.cn/job/view/id/1192099', 'http://career.zucc.edu.cn/job/view/id/1192098', 'http://career.zucc.edu.cn/job/view/id/1192097', 'http://career.zucc.edu.cn/job/view/id/1192024', 'http://career.zucc.edu.cn/job/view/id/1192023', 'http://career.zucc.edu.cn/job/view/id/1191891', 'http://career.zucc.edu.cn/job/view/id/1191887', 'http://career.zucc.edu.cn/job/view/id/1191862', 'http://career.zucc.edu.cn/job/view/id/1191850', 'http://career.zucc.edu.cn/job/view/id/1191844', 'http://career.zucc.edu.cn/job/view/id/1191659', 'http://career.zucc.edu.cn/job/view/id/1191658', 'http://career.zucc.edu.cn/job/view/id/1191656', 'http://career.zucc.edu.cn/job/view/id/1191655', 'http://career.zucc.edu.cn/job/view/id/1191654', 'http://career.zucc.edu.cn/job/view/id/1191653', 'http://career.zucc.edu.cn/job/view/id/1191652', 'http://career.zucc.edu.cn/job/view/id/1191650', 'http://career.zucc.edu.cn/job/view/id/1191649', 'http://career.zucc.edu.cn/job/view/id/1190788', 'http://career.zucc.edu.cn/job/view/id/1190680', 'http://career.zucc.edu.cn/job/view/id/1190676', 'http://career.zucc.edu.cn/job/view/id/1190543', 'http://career.zucc.edu.cn/job/view/id/1190542', 'http://career.zucc.edu.cn/job/view/id/1190541', 'http://career.zucc.edu.cn/job/view/id/1190491', 'http://career.zucc.edu.cn/job/view/id/1190448', 'http://career.zucc.edu.cn/job/view/id/1190440', 'http://career.zucc.edu.cn/job/view/id/1190433', 'http://career.zucc.edu.cn/job/view/id/1190434', 'http://career.zucc.edu.cn/job/view/id/1190435', 'http://career.zucc.edu.cn/job/view/id/1190436', 'http://career.zucc.edu.cn/job/view/id/1190437', 'http://career.zucc.edu.cn/job/view/id/1190438', 'http://career.zucc.edu.cn/job/view/id/1190376', 'http://career.zucc.edu.cn/job/view/id/1190350', 'http://career.zucc.edu.cn/job/view/id/1190351', 'http://career.zucc.edu.cn/job/view/id/1190352', 'http://career.zucc.edu.cn/job/view/id/1190353', 'http://career.zucc.edu.cn/job/view/id/1190354', 'http://career.zucc.edu.cn/job/view/id/1195651', 'http://career.zucc.edu.cn/job/view/id/1195650', 'http://career.zucc.edu.cn/job/view/id/1195649', 'http://career.zucc.edu.cn/job/view/id/1195648', 'http://career.zucc.edu.cn/job/view/id/1195647', 'http://career.zucc.edu.cn/job/view/id/1195646', 'http://career.zucc.edu.cn/job/view/id/1195645', 'http://career.zucc.edu.cn/job/view/id/1195644', 'http://career.zucc.edu.cn/job/view/id/1195643', 'http://career.zucc.edu.cn/job/view/id/1195642', 'http://career.zucc.edu.cn/job/view/id/1195641', 'http://career.zucc.edu.cn/job/view/id/1195640', 'http://career.zucc.edu.cn/job/view/id/1195639', 'http://career.zucc.edu.cn/job/view/id/1195638', 'http://career.zucc.edu.cn/job/view/id/1195637', 'http://career.zucc.edu.cn/job/view/id/1195636', 'http://career.zucc.edu.cn/job/view/id/1195635', 'http://career.zucc.edu.cn/job/view/id/1195634', 'http://career.zucc.edu.cn/job/view/id/1195633', 'http://career.zucc.edu.cn/job/view/id/1195632', 'http://career.zucc.edu.cn/job/view/id/1195631', 'http://career.zucc.edu.cn/job/view/id/1195630', 'http://career.zucc.edu.cn/job/view/id/1195629', 'http://career.zucc.edu.cn/job/view/id/1195628', 'http://career.zucc.edu.cn/job/view/id/1195627', 'http://career.zucc.edu.cn/job/view/id/1195626', 'http://career.zucc.edu.cn/job/view/id/1195625', 'http://career.zucc.edu.cn/job/view/id/1195624', 'http://career.zucc.edu.cn/job/view/id/1195623', 'http://career.zucc.edu.cn/job/view/id/1195622', 'http://career.zucc.edu.cn/job/view/id/1195621', 'http://career.zucc.edu.cn/job/view/id/1195620', 'http://career.zucc.edu.cn/job/view/id/1195619', 'http://career.zucc.edu.cn/job/view/id/1195618', 'http://career.zucc.edu.cn/job/view/id/1195617', 'http://career.zucc.edu.cn/job/view/id/1195616', 'http://career.zucc.edu.cn/job/view/id/1195615', 'http://career.zucc.edu.cn/job/view/id/1195614', 'http://career.zucc.edu.cn/job/view/id/1195613', 'http://career.zucc.edu.cn/job/view/id/1195612', 'http://career.zucc.edu.cn/job/view/id/1195611', 'http://career.zucc.edu.cn/job/view/id/1195610', 'http://career.zucc.edu.cn/job/view/id/1195609', 'http://career.zucc.edu.cn/job/view/id/1195608', 'http://career.zucc.edu.cn/job/view/id/1195607', 'http://career.zucc.edu.cn/job/view/id/1195606', 'http://career.zucc.edu.cn/job/view/id/1195605', 'http://career.zucc.edu.cn/job/view/id/1195604', 'http://career.zucc.edu.cn/job/view/id/1195603', 'http://career.zucc.edu.cn/job/view/id/1195602', 'http://career.zucc.edu.cn/job/view/id/1195601', 'http://career.zucc.edu.cn/job/view/id/1195600', 'http://career.zucc.edu.cn/job/view/id/1195599', 'http://career.zucc.edu.cn/job/view/id/1195598', 'http://career.zucc.edu.cn/job/view/id/1195597', 'http://career.zucc.edu.cn/job/view/id/1195596', 'http://career.zucc.edu.cn/job/view/id/1195595', 'http://career.zucc.edu.cn/job/view/id/1195594', 'http://career.zucc.edu.cn/job/view/id/1195593', 'http://career.zucc.edu.cn/job/view/id/1195592', 'http://career.zucc.edu.cn/job/view/id/1195591', 'http://career.zucc.edu.cn/job/view/id/1195590', 'http://career.zucc.edu.cn/job/view/id/1195589', 'http://career.zucc.edu.cn/job/view/id/1195588', 'http://career.zucc.edu.cn/job/view/id/1195587', 'http://career.zucc.edu.cn/job/view/id/1195586', 'http://career.zucc.edu.cn/job/view/id/1195585', 'http://career.zucc.edu.cn/job/view/id/1195584', 'http://career.zucc.edu.cn/job/view/id/1195583', 'http://career.zucc.edu.cn/job/view/id/1195582', 'http://career.zucc.edu.cn/job/view/id/1195581', 'http://career.zucc.edu.cn/job/view/id/1195579', 'http://career.zucc.edu.cn/job/view/id/1195578', 'http://career.zucc.edu.cn/job/view/id/1195577', 'http://career.zucc.edu.cn/job/view/id/1195576', 'http://career.zucc.edu.cn/job/view/id/1195575', 'http://career.zucc.edu.cn/job/view/id/1195573', 'http://career.zucc.edu.cn/job/view/id/1195572', 'http://career.zucc.edu.cn/job/view/id/1195571', 'http://career.zucc.edu.cn/job/view/id/1195570', 'http://career.zucc.edu.cn/job/view/id/1195569', 'http://career.zucc.edu.cn/job/view/id/1195568', 'http://career.zucc.edu.cn/job/view/id/1195567', 'http://career.zucc.edu.cn/job/view/id/1195566', 'http://career.zucc.edu.cn/job/view/id/1195565', 'http://career.zucc.edu.cn/job/view/id/1195561', 'http://career.zucc.edu.cn/job/view/id/1195559', 'http://career.zucc.edu.cn/job/view/id/1195554', 'http://career.zucc.edu.cn/job/view/id/1195553', 'http://career.zucc.edu.cn/job/view/id/1195551', 'http://career.zucc.edu.cn/job/view/id/1195541', 'http://career.zucc.edu.cn/job/view/id/1195540', 'http://career.zucc.edu.cn/job/view/id/1195539', 'http://career.zucc.edu.cn/job/view/id/1195538', 'http://career.zucc.edu.cn/job/view/id/1195532', 'http://career.zucc.edu.cn/job/view/id/1195528', 'http://career.zucc.edu.cn/job/view/id/1195527', 'http://career.zucc.edu.cn/job/view/id/1195526', 'http://career.zucc.edu.cn/job/view/id/1195525', 'http://career.zucc.edu.cn/job/view/id/1195524', 'http://career.zucc.edu.cn/job/view/id/1195502', 'http://career.zucc.edu.cn/job/view/id/1195495', 'http://career.zucc.edu.cn/job/view/id/1195494', 'http://career.zucc.edu.cn/job/view/id/1195488', 'http://career.zucc.edu.cn/job/view/id/1195487', 'http://career.zucc.edu.cn/job/view/id/1195486', 'http://career.zucc.edu.cn/job/view/id/1195485', 'http://career.zucc.edu.cn/job/view/id/1195483', 'http://career.zucc.edu.cn/job/view/id/1195481', 'http://career.zucc.edu.cn/job/view/id/1195480', 'http://career.zucc.edu.cn/job/view/id/1195478', 'http://career.zucc.edu.cn/job/view/id/1195477', 'http://career.zucc.edu.cn/job/view/id/1195476', 'http://career.zucc.edu.cn/job/view/id/1195474', 'http://career.zucc.edu.cn/job/view/id/1195472', 'http://career.zucc.edu.cn/job/view/id/1195471', 'http://career.zucc.edu.cn/job/view/id/1195470', 'http://career.zucc.edu.cn/job/view/id/1195469', 'http://career.zucc.edu.cn/job/view/id/1195467', 'http://career.zucc.edu.cn/job/view/id/1195466', 'http://career.zucc.edu.cn/job/view/id/1195465', 'http://career.zucc.edu.cn/job/view/id/1195464', 'http://career.zucc.edu.cn/job/view/id/1195463', 'http://career.zucc.edu.cn/job/view/id/1195452', 'http://career.zucc.edu.cn/job/view/id/1195449', 'http://career.zucc.edu.cn/job/view/id/1195448', 'http://career.zucc.edu.cn/job/view/id/1195447', 'http://career.zucc.edu.cn/job/view/id/1195446', 'http://career.zucc.edu.cn/job/view/id/1195445', 'http://career.zucc.edu.cn/job/view/id/1195436', 'http://career.zucc.edu.cn/job/view/id/1195435', 'http://career.zucc.edu.cn/job/view/id/1195426', 'http://career.zucc.edu.cn/job/view/id/1195424', 'http://career.zucc.edu.cn/job/view/id/1195423', 'http://career.zucc.edu.cn/job/view/id/1195422', 'http://career.zucc.edu.cn/job/view/id/1195413', 'http://career.zucc.edu.cn/job/view/id/1195412', 'http://career.zucc.edu.cn/job/view/id/1195411', 'http://career.zucc.edu.cn/job/view/id/1195410', 'http://career.zucc.edu.cn/job/view/id/1195409', 'http://career.zucc.edu.cn/job/view/id/1195694', 'http://career.zucc.edu.cn/job/view/id/1195693', 'http://career.zucc.edu.cn/job/view/id/1195692', 'http://career.zucc.edu.cn/job/view/id/1195691', 'http://career.zucc.edu.cn/job/view/id/1195690', 'http://career.zucc.edu.cn/job/view/id/1195689', 'http://career.zucc.edu.cn/job/view/id/1195687', 'http://career.zucc.edu.cn/job/view/id/1195686', 'http://career.zucc.edu.cn/job/view/id/1195685', 'http://career.zucc.edu.cn/job/view/id/1195684', 'http://career.zucc.edu.cn/job/view/id/1195683', 'http://career.zucc.edu.cn/job/view/id/1195682', 'http://career.zucc.edu.cn/job/view/id/1195681', 'http://career.zucc.edu.cn/job/view/id/1195680', 'http://career.zucc.edu.cn/job/view/id/1195679', 'http://career.zucc.edu.cn/job/view/id/1195678', 'http://career.zucc.edu.cn/job/view/id/1195677', 'http://career.zucc.edu.cn/job/view/id/1195674', 'http://career.zucc.edu.cn/job/view/id/1195673', 'http://career.zucc.edu.cn/job/view/id/1195672']

function jobDetailDownload() {
    let jobDetail =
        jobDetailGet()
    jobDetail

    // jobDeta

    // deta 


    downloadTxt(`jobDetail_${jobDetail.id}.json`, JSON.stringify(jobDetail))
    // postData()
    let data = jobDetail
    postData(`http://localhost:8003/api/all/mongoInsert`, {
            data: data,
            collectionName: "job",
        })
        // HttpUtil.fetchGet(Common.productUrl+ "/Peoples",{})
        .then((res) => {
            console.log("res Peoples");
            console.log(res);
        });

    // let page = getQueryString("page")
    //     if(!page){
    //         page="1"
    //     }
    let idxIntNext = genNextIdx()
    console.log("idxIntNext");
    console.log(idxIntNext);
    // downloadTxt(`${title}_page_${page}.json`, JSON.stringify(resList))

    if (idxIntNext >= detailLinkList.length) {
        return
    }
    // let lastPageNum = 30
    // if (idxIntNext >= lastPageNum) {
    //     return
    // }

    // let contentIdNext = contentIdList[idxIntNext]
    // console.log("contentIdNext");
    // console.log(contentIdNext);

    let contentIdNext = detailLinkList[idxIntNext]
    console.log("contentIdNext");
    console.log(contentIdNext);
    // detailLinkList
    // let nextLink =`${contentIdNext}/&idx=${idxIntNext}`
    // let nextLink =`${contentIdNext}/idx=${idxIntNext}`
    let nextLink = `${contentIdNext}?idx=${idxIntNext}`

    // let waitMs=1000
    //  let waitMs=500
    let waitMs = 20
    // let nextLink = `http://career.zucc.edu.cn/job/search?title=&city=&d_skill=&d_industry=&d_major=&d_education=&d_category=&d_salary=&nature=&scale=&time=&page=${idxIntNext}&idx=${idxIntNext}`
    setTimeout(() => {
        window.location.href = nextLink
    }, waitMs)

}

function zhiPin(){

}

function crawlerDo() {


    let UrlFileName =

        getUrlFileName()


    let location_href = location.href
    searchWordList = addAll(searchWordList, snacks)
    searchWordList =
        removeSame(searchWordList)

    if (location.host == "uland.taobao.com") {
        console.log("uland.taobao.com");



        //  searchWordListAllDownload(searchWordList)
        // let waitMs=3000
        let waitMs=2000
        setTimeout(() => {
            downloadPage()
            // searchWordListAllDownload(searchWordList)
            // let  idx=     getQueryString("idx")
            // console.log("idx");
            // console.log(idx);
            // https://uland.taobao.com/sem/tbsearch?keyword=橘子&idx=3
        }, waitMs);
        // 7000
        // 11000

        // let downloadPageInterval = setInterval(() => {
        //     downloadPage()
        // }, 4000)

    } else if (location.host == "www.icourse163.org") {
        // if(UrlFileName=="learn.htm"){
        //     console.log("www.icourse163.org");
        //     setTimeout(() => {
        //         moocDownload()
        //     }, 5000);
        //     // moocDownload()

        // }else

        if (UrlFileName == "home.htm") {
            setTimeout(() => {
                downloadMoocCourseLinks()

            }, 5000);
        } else {
            console.log("www.icourse163.org");
            setTimeout(() => {
                moocDownload()
            }, 5000);
            // moocDownload()
        }
        // home.htm

    }
    // location_href
    else if (location_href.startsWith('http://career.zucc.edu.cn/job/view/id')) {
        // location. 
        // http://career.zucc.edu.cn/job/view/id/1194903
        // let jobDetail =
        //     jobDetailGet()
        // jobDetail

        // downloadTxt(`jobDetail_${jobDetail.id}.json`, JSON.stringify(jobDetail))

        // let waitMs=1000
        let waitMs = 500
        setTimeout(() => {
            jobDetailDownload()

        }, waitMs);
    } else if (location.host == 'career.zucc.edu.cn') {
        setTimeout(() => {
            downloadJob()

        }, 5000);

    }
    else if (location.host =='we.51job.com') {
        setTimeout(() => {
            qianCheng()
        }, 5000);

    }
    else if (location.host =='www.zhipin.com') {
        setTimeout(() => {
            // zhiPin()
            zhiPinGetAll()
        }, 5000);

    }
    // 'www.zhipin.com'
    //    'we.51job.com'
    //     else if(){
    //         // location. 
    //         // http://career.zucc.edu.cn/job/view/id/1194903
    //         jobDetail=
    // jobDetailGet()
    // jobDetail

    // downloadTxt(`jobDetail_${jobDetail.id}.json`, JSON.stringify(jobDetail))
    //     }
    // www.icourse163.org'

    // downloadJob

}

function zhiLian() {
    let classNameInfoMap = {
        "job-card-left": "href",
        "company-name": "companyName",
        "job-title clearfix": "jobTitle",
        "salary": "salary",

    }
    // job-card-left
    let jobs = document.getElementsByClassName('job-card-left')

    let companyNames = document.getElementsByClassName('company-name')
    let jobTitles = document.getElementsByClassName('job-title clearfix')
    // let jobTitles = document.getElementsByClassName('salary')
    // document.getElementsByClassName('salary')
    // for(let key in classNameInfoMap){
    //     classNameInfoMap[key]
    // }
    // salary
    let jobInfoList = []
    for (let i = 0; i < jobs.length; i++) {
        // let job = jobs[i].textContent.trim()
        let job = jobs[i]

        let jobTitle = jobTitles[i].textContent.trim()
        let companyName = companyNames[i].textContent.trim()
        let href = job.href
        //    href
        console.log(href);
        console.log(companyName);
        jobInfoList.push({
            href,
            job,
            jobTitle,
            companyName
        })

    }

    console.log("jobInfoList");
    console.log(jobInfoList);

}


function fieldParse(field) {
    // resMap[className].dom=
    // emLine
    // resMap[className].doms= document.getElementsByClassName(className)
    // info.dom 
    // job.

    // job.text 
    // job.field
    // field. 
    field.texts = []
    for (let i = 0; i < field.doms.length; i++) {
        let dom = field.doms[i]
        let text = dom.textContent.trim()
        field.texts.push(text)
    }
    // console.log("field");
    // console.log(field);


}

function toResList(resMap) {
    let resList = []
    // resMap.ke 
    // 多个 列表 转化多个 obj 
    // 了
    let keyNumber = 0
    let  errorIndexList=[]
    for (let key in resMap) {
        // console.log("key");
        // console.log(key);

        let texts = resMap[key].texts
        // console.log("texts");
        // console.log(texts);
        // console.log("keyNumber");
        // console.log(keyNumber);
        haveLook=false

        for (let i = 0; i < texts.length; i++) {
            haveLook=true
            let text = texts[i]
            // console.log(object);
            // console.log("keyNumber");
            // console.log(keyNumber);
            if (keyNumber == 0) {
                let obj = {}
                // obj name == text 
                obj[key] = text
                // console.log("obj  keyNumber == 0");
                // console.log(obj);

                resList.push(obj)
            } else {
                // console.log( "resList[i]");
                // console.log( resList[i]);
                // console.log( " resList[i][key]");
                // console.log(  resList[i][key]);
                let  obj=resList[i]
                if(!obj){
                    errorIndexList.push(i)
                    continue
                }
                obj[key] = text

                // resList[i][key] = text
            }

            // resList[i]
        }
        if(haveLook){
            keyNumber++
        }
      
        // for(let text of texts){
        //     let obj={}
        //     obj[key]=text
        //     // resList.push({
        //     //     key:text
        //     // })
        //     resList.push(obj)
        // }
    }
    // console.log("errorIndexList");
    // console.log(errorIndexList);
    // console.log("resList");
    // console.log(resList);
    return resList
}

function toTextList(classNameInfoMap) {
    let resMap = {}

    // list_l
    for (let className in classNameInfoMap) {
        let fieldName = classNameInfoMap[className]

        // let jobs = document.getElementsByClassName(className)
        resMap[fieldName] = {}
        let fieldObj = resMap[fieldName]
        fieldObj.doms = document.getElementsByClassName(className)

        // document.getElementsByClassName('list_l')
        fieldParse(fieldObj)

        // resMap[className] = {}
        // resMap[className].doms = document.getElementsByClassName(className)
        // fieldParse(resMap[className])
    }
    return resMap
}

function firstLinkListGet(className){
    let hrefList = []
    let linkDoms = document.getElementsByClassName(className)
    console.log("linkDoms");
    console.log(linkDoms);

    for (let i = 1; i < linkDoms.length; i++) {
        let href = linkDoms[i].getElementsByTagName('a')[0].href
        hrefList.push(href)
    }
    return hrefList
}

function getLiTextList(lis){

    let resList=[]
    for(let i=0;i<lis.length;i++){
       
        resList.push(
            lis[i].textContent.trim()
        )
    }
    return resList
}

function zhiPinGetOne(){
    console.log('qianCheng start');
    let classNameInfoMap = {
        // "job-card-left": "href",
        // "company-name": "companyName",
        // "job-title clearfix": "jobTitle",
        // "salary": "salary",
        'postName elli': "postName",
        'compName': "compName",
        'pay': "pay",
        'postMsg': "postMsg",
        'compMsg elli': "compMsg",
        'label': "label",
        "jname at":"jobName",
        "sal":"salary",
        "d at":"jobDetail",
        "er":"companyName",
        "job-name":'jobName',
        'job-area':"jobArea",
        'company-name':"companyName",
        'salary':'salary',
        // "tag-list":"tagList",
'info-public':"infoPublic",
"info-desc":"infoDesc"
    }

    let classNames = [
        'postName elli',
        'compName', 'pay', 'postMsg', 'compMsg elli',
        'label'
    ]

    // let resMap = {}

    // for (let className in classNameInfoMap) {
    //     let fieldName = classNameInfoMap[className]

    //     // let jobs = document.getElementsByClassName(className)
    //     resMap[fieldName] = {}
    //     let fieldObj = resMap[fieldName]
    //     fieldObj.doms = document.getElementsByClassName(className)
    //     fieldParse(fieldObj)

    //     // resMap[className] = {}
    //     // resMap[className].doms = document.getElementsByClassName(className)
    //     // fieldParse(resMap[className])
    // }
    let resMap = toTextList(classNameInfoMap)
    // console.log("resMap");
    // console.log(resMap);
    let hrefList = []
    let linkDoms = document.getElementsByClassName('list_l')
    for (let i = 0; i < linkDoms.length; i++) {
        let href = linkDoms[i].getElementsByTagName('a')[0].href
        hrefList.push(href)
    }
    resMap["href"] = {}
    resMap["href"].texts = hrefList

    // company-name
    // job-card-body clearfix
    let linkName="linkToDetail"
    resMap[linkName] = {}
    // resMap[linkName].texts = firstLinkListGet('company-name')
    resMap[linkName].texts = firstLinkListGet('job-card-body clearfix')

    let tagListKey="tagListKey"
   
    let tagListArrTexts = []
    let  tagTextListList=[]
    let tagListArr = document.getElementsByClassName('tag-list')
    for (let i = 0; i < tagListArr.length; i++) {
        let tagList= tagListArr[i]
        let lis= tagList.getElementsByTagName('li')
       let tagTextList= getLiTextList(lis)
        let href = tagListArr[i].innerHTML.trim()
        tagListArrTexts.push(href)
        tagTextListList.push(tagTextList)
    }
    // document.getElementsByClassName('tag-list')
    // resMap[linkName].texts = firstLinkListGet('company-name')
    resMap[tagListKey] = {}
    resMap[tagListKey].texts = tagListArrTexts
    resMap["tagTextListList"] = {}
    resMap["tagTextListList"].texts = tagTextListList
    
    // tag-list
    // console.log("resMap");
    // console.log(resMap);
    let resList = toResList(resMap)
    // console.log("resList");
    // console.log(resList);

    // let hostName='zhiLian'
    let hostName='zhiPin'
    let  query=getQueryString('query')
    if(!query){
        query=""
    }
    query= decodeURIComponent(query)
    // js query str 转化 中文

    let   location_href= location.href

    let res={
     location_href,
     resList
    }

    // number active
    let pageIndex=   document.getElementsByClassName('selected')[0].textContent
//   let pageIndex=   document.getElementsByClassName('number active')[0].textContent
  downloadTxt(`${hostName}_page_${pageIndex}_${query}.json`, JSON.stringify(res))


    // let  nextBtn= document.getElementsByClassName('btn-next')[0]

    let  pageAs= document.getElementsByClassName('options-pages')[0].getElementsByTagName('a')
    let  nextBtn=  getListLast(pageAs)
    // disabled
//   let d=   document.getElementsByClassName('disabled')
    // .click()
    // document.getElementsByClassName('options-pages')[0].getElementsByTagName('a')[0].click()
        // console.log("nextBtn");
        // console.log(nextBtn);
        nextBtn?.click()

}


function zhiLianGetOne(){
    console.log('qianCheng start');
    let classNameInfoMap = {
        // "job-card-left": "href",
        // "company-name": "companyName",
        // "job-title clearfix": "jobTitle",
        // "salary": "salary",
        'postName elli': "postName",
        'compName': "compName",
        'pay': "pay",
        'postMsg': "postMsg",
        'compMsg elli': "compMsg",
        'label': "label",
        "jname at":"jobName",
        "sal":"salary",
        "d at":"jobDetail",
        "er":"companyName",
        "job-name":'jobName',
        'job-area':"jobArea",
        'company-name':"companyName",
        'salary':'salary',
        "tag-list":"tagList",
'info-public':"infoPublic",
"info-desc":"infoDesc"
    }

    let classNames = [
        'postName elli',
        'compName', 'pay', 'postMsg', 'compMsg elli',
        'label'
    ]

    // let resMap = {}

    // for (let className in classNameInfoMap) {
    //     let fieldName = classNameInfoMap[className]

    //     // let jobs = document.getElementsByClassName(className)
    //     resMap[fieldName] = {}
    //     let fieldObj = resMap[fieldName]
    //     fieldObj.doms = document.getElementsByClassName(className)
    //     fieldParse(fieldObj)

    //     // resMap[className] = {}
    //     // resMap[className].doms = document.getElementsByClassName(className)
    //     // fieldParse(resMap[className])
    // }
    let resMap = toTextList(classNameInfoMap)
    console.log("resMap");
    console.log(resMap);
    let hrefList = []
    let linkDoms = document.getElementsByClassName('list_l')
    for (let i = 0; i < linkDoms.length; i++) {
        let href = linkDoms[i].getElementsByTagName('a')[0].href
        hrefList.push(href)
    }
    resMap["href"] = {}
    resMap["href"].texts = hrefList


    console.log("resMap");
    console.log(resMap);
    let resList = toResList(resMap)
    console.log("resList");
    console.log(resList);

    let hostName='zhiLian'
    // number active
  let pageIndex=   document.getElementsByClassName('number active')[0].textContent
  downloadTxt(`${hostName}_page_${pageIndex}.json`, JSON.stringify(resList))


    // let  nextBtn= document.getElementsByClassName('btn-next')[0]

    let  pageAs= document.getElementsByClassName('options-pages')[0].getElementsByTagName('a')
    let  nextBtn=  getListLast(pageAs).click()
    // document.getElementsByClassName('options-pages')[0].getElementsByTagName('a')[0].click()
        // console.log("nextBtn");
        // console.log(nextBtn);
        nextBtn.click()

}

function qianChengGetOne(){
    console.log('qianCheng start');
    let classNameInfoMap = {
        // "job-card-left": "href",
        // "company-name": "companyName",
        // "job-title clearfix": "jobTitle",
        // "salary": "salary",
        'postName elli': "postName",
        'compName': "compName",
        'pay': "pay",
        'postMsg': "postMsg",
        'compMsg elli': "compMsg",
        'label': "label",
        "jname at":"jobName",
        "sal":"salary",
        "d at":"jobDetail",
        "er":"companyName",

    }

    let classNames = [
        'postName elli',
        'compName', 'pay', 'postMsg', 'compMsg elli',
        'label'
    ]

    // let resMap = {}

    // for (let className in classNameInfoMap) {
    //     let fieldName = classNameInfoMap[className]

    //     // let jobs = document.getElementsByClassName(className)
    //     resMap[fieldName] = {}
    //     let fieldObj = resMap[fieldName]
    //     fieldObj.doms = document.getElementsByClassName(className)
    //     fieldParse(fieldObj)

    //     // resMap[className] = {}
    //     // resMap[className].doms = document.getElementsByClassName(className)
    //     // fieldParse(resMap[className])
    // }
    let resMap = toTextList(classNameInfoMap)
    console.log("resMap");
    console.log(resMap);
    let hrefList = []
    let linkDoms = document.getElementsByClassName('list_l')
    for (let i = 0; i < linkDoms.length; i++) {
        let href = linkDoms[i].getElementsByTagName('a')[0].href
        hrefList.push(href)
    }
    resMap["href"] = {}
    resMap["href"].texts = hrefList


    console.log("resMap");
    console.log(resMap);
    let resList = toResList(resMap)
    console.log("resList");
    console.log(resList);

    // number active
  let pageIndex=   document.getElementsByClassName('number active')[0].textContent
  downloadTxt(`qianCheng_page_${pageIndex}.json`, JSON.stringify(resList))


    let  nextBtn= document.getElementsByClassName('btn-next')[0]

        console.log("nextBtn");
        console.log(nextBtn);
        nextBtn.click()

}


function zhiPinGetAll() {
   
    // let pageNum=111
    let pageNum=10
    for(let i=0;i<pageNum;i++){
        setTimeout(() => {
            zhiPinGetOne()
          
        }, 10000*i);
        // 这里可以加快 我故意设置的慢点的 不知道多块 会被封
    }

    // document.getElementsByClassName('btn-next')[0].click()

    // list_l
}

function qianCheng() {
    // console.log('qianCheng start');
    // let classNameInfoMap = {
    //     // "job-card-left": "href",
    //     // "company-name": "companyName",
    //     // "job-title clearfix": "jobTitle",
    //     // "salary": "salary",
    //     'postName elli': "postName",
    //     'compName': "compName",
    //     'pay': "pay",
    //     'postMsg': "postMsg",
    //     'compMsg elli': "compMsg",
    //     'label': "label",
    //     "jname at":"jobName",
    //     "sal":"salary",
    //     "d at":"jobDetail",
    //     "er":"companyName",

    // }

    // let classNames = [
    //     'postName elli',
    //     'compName', 'pay', 'postMsg', 'compMsg elli',
    //     'label'
    // ]

    // // let resMap = {}

    // // for (let className in classNameInfoMap) {
    // //     let fieldName = classNameInfoMap[className]

    // //     // let jobs = document.getElementsByClassName(className)
    // //     resMap[fieldName] = {}
    // //     let fieldObj = resMap[fieldName]
    // //     fieldObj.doms = document.getElementsByClassName(className)
    // //     fieldParse(fieldObj)

    // //     // resMap[className] = {}
    // //     // resMap[className].doms = document.getElementsByClassName(className)
    // //     // fieldParse(resMap[className])
    // // }
    // let resMap = toTextList(classNameInfoMap)
    // console.log("resMap");
    // console.log(resMap);
    // let hrefList = []
    // let linkDoms = document.getElementsByClassName('list_l')
    // for (let i = 0; i < linkDoms.length; i++) {
    //     let href = linkDoms[i].getElementsByTagName('a')[0].href
    //     hrefList.push(href)
    // }
    // resMap["href"] = {}
    // resMap["href"].texts = hrefList


    // console.log("resMap");
    // console.log(resMap);
    // let resList = toResList(resMap)
    // console.log("resList");
    // console.log(resList);

    // // set 
    // setTimeout(() => {
    //     let  nextBtn= document.getElementsByClassName('btn-next')[0]

    //     console.log("nextBtn");
    //     console.log(nextBtn);
    //     nextBtn.click()
    // }, 2000);
  
    let pageNum=111
    for(let i=0;i<pageNum;i++){
        setTimeout(() => {
            qianChengGetOne()
            // let  nextBtn= document.getElementsByClassName('btn-next')[0]
    
            // console.log("nextBtn");
            // console.log(nextBtn);
            // nextBtn.click()
        }, 10000*i);
        // 这里可以加快 我故意设置的慢点的 不知道多块 会被封
    }

    // document.getElementsByClassName('btn-next')[0].click()

    // list_l
}


function qianChengDup() {
    let classNameInfoMap = {
        // "job-card-left": "href",
        // "company-name": "companyName",
        // "job-title clearfix": "jobTitle",
        // "salary": "salary",
        'postName elli': "postName",
        'compName': "compName",
        'pay': "pay",
        'postMsg': "postMsg",
        'compMsg elli': "compMsg",
        'label': "label",

    }

    let classNames = [
        'postName elli',
        'compName', 'pay', 'postMsg', 'compMsg elli',
        'label'
    ]

    // let resMap = {}

    // for (let className in classNameInfoMap) {
    //     let fieldName = classNameInfoMap[className]

    //     // let jobs = document.getElementsByClassName(className)
    //     resMap[fieldName] = {}
    //     let fieldObj = resMap[fieldName]
    //     fieldObj.doms = document.getElementsByClassName(className)
    //     fieldParse(fieldObj)

    //     // resMap[className] = {}
    //     // resMap[className].doms = document.getElementsByClassName(className)
    //     // fieldParse(resMap[className])
    // }
    let resMap = toTextList(classNameInfoMap)
    console.log("resMap");
    console.log(resMap);
    let resList = toResList(resMap)
    console.log("resList");
    console.log(resList);
    // compName
    // postName elli
    // job-card-left
    let jobs = document.getElementsByClassName('job-card-left')

    let companyNames = document.getElementsByClassName('company-name')
    let jobTitles = document.getElementsByClassName('job-title clearfix')
    // let jobTitles = document.getElementsByClassName('salary')
    // document.getElementsByClassName('salary')
    // for(let key in classNameInfoMap){
    //     classNameInfoMap[key]
    // }
    // salary
    let jobInfoList = []
    for (let i = 0; i < jobs.length; i++) {
        // let job = jobs[i].textContent.trim()
        let job = jobs[i]

        let jobTitle = jobTitles[i].textContent.trim()
        let companyName = companyNames[i].textContent.trim()
        let href = job.href
        //    href
        console.log(href);
        console.log(companyName);
        jobInfoList.push({
            href,
            job,
            jobTitle,
            companyName
        })

    }

    console.log("jobInfoList");
    console.log(jobInfoList);

}


let doGet = true
// let doGet = false

if (doGet) {
    crawlerDo()

    // setTimeout(() => {
    //     qianCheng()
    // }, 1000);

}