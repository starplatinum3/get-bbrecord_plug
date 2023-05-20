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
        // case "downloadPage":
        //     console.log("downloadPage");

        //     try {
        //         downloadPage();
        //         sendResponse('download good');
        //     } catch (e) {
        //         sendResponse('download not  good');
        //         console.log(e);
        //     }

        //     break;

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

const d=(newDom)=>{
    // 创建一个新的 <div> 元素
var newDiv = document.createElement("div");

// 设置新元素的属性
newDiv.id = "myNewDiv";
newDiv.className = "new-div";

// 获取要插入的节点元素
var existingElem = document.getElementById("existing-elem");

// 将新元素添加到现有节点的末尾
existingElem.appendChild(newDiv);

}
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
    "小米 mi 9pro","小米","oppo","华为","vivo","u盘","内存","固态硬盘","显卡",
    "cpu","主板","电源","机箱","显示器","键盘","鼠标","耳机","音箱","路由器","无线网卡","移动硬盘","移动ssd",
  
    "苹果 iPhone 12",
    "苹果 iPhone 11",
    "三星 Galaxy S21",
    "三星 Galaxy S20",
    "华为 Mate 40 Pro",
    "华为 P40 Pro",
    "小米 Redmi Note 9",
    "小米 Mi Band 6",
    "索尼 PlayStation 5",
    "任天堂 Switch",
    "惠普 笔记本电脑",
    "戴尔 台式电脑",
    "联想 ThinkPad",
    "华硕 游戏显示器",
    "罗技 无线鼠标",
    "微软 Xbox Series X",
    "Bose 无线耳机",
    "JBL 蓝牙音箱",
    "D-Link 路由器",
    "西部数据 移动硬盘",
    "金士顿 内存条",
    "海盗船 机械键盘"
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

    title = document.getElementsByClassName('f-fl j-hwname')[0]?.textContent
    try {
        course = document.getElementsByClassName('f-fc3 courseTxt')[0]?.textContent?.trim()
    } catch (e) {
        course = null
    }
    try {
        teacher = document.getElementsByClassName('f-fcgreen padding-top-5')[0]?.innerHTML?.trim()
    } catch (e) {
        teacher = null
    }
    try {
        score = document.getElementsByClassName('score j-score')[0]?.textContent?.trim()
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

function getNowIdx() {
    let idx = getQueryString("idx")
    // console.log("idx");
    // console.log(idx);
    if (!idx) {
        idx = "0"
    }
    let idxInt = parseInt(idx)
    console.log("idxInt");
    console.log(idxInt);
    return idxInt
    // let idxIntNext = idxInt + 1
    // return idxIntNext
}

function genNowIdx() {
    let idx = getQueryString("idx")
    console.log("idx");
    console.log(idx);
    if (!idx) {
        idx = "0"
    }
    let idxInt = parseInt(idx)
    return idxInt
    // let idxIntNext = idxInt + 1
    // return idxIntNext
}

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

// function 
// D:\proj\python\my_util_py_pub>python "d:\proj\python\my_util_py_pub\read_job.py"
let detailLinkList = ['http://career.zucc.edu.cn/job/view/id/1195408', 'http://career.zucc.edu.cn/job/view/id/1195407', 'http://career.zucc.edu.cn/job/view/id/1195406', 'http://career.zucc.edu.cn/job/view/id/1195405', 'http://career.zucc.edu.cn/job/view/id/1195404', 'http://career.zucc.edu.cn/job/view/id/1195403', 'http://career.zucc.edu.cn/job/view/id/1195401', 'http://career.zucc.edu.cn/job/view/id/1195400', 'http://career.zucc.edu.cn/job/view/id/1195399', 'http://career.zucc.edu.cn/job/view/id/1195398', 'http://career.zucc.edu.cn/job/view/id/1195397', 'http://career.zucc.edu.cn/job/view/id/1195396', 'http://career.zucc.edu.cn/job/view/id/1195395', 'http://career.zucc.edu.cn/job/view/id/1195394', 'http://career.zucc.edu.cn/job/view/id/1195392', 'http://career.zucc.edu.cn/job/view/id/1195390', 'http://career.zucc.edu.cn/job/view/id/1195389', 'http://career.zucc.edu.cn/job/view/id/1195388', 'http://career.zucc.edu.cn/job/view/id/1195387', 'http://career.zucc.edu.cn/job/view/id/1195386', 'http://career.zucc.edu.cn/job/view/id/1195384', 'http://career.zucc.edu.cn/job/view/id/1195383', 'http://career.zucc.edu.cn/job/view/id/1195382', 'http://career.zucc.edu.cn/job/view/id/1195380', 'http://career.zucc.edu.cn/job/view/id/1195378', 'http://career.zucc.edu.cn/job/view/id/1195377', 'http://career.zucc.edu.cn/job/view/id/1195374', 'http://career.zucc.edu.cn/job/view/id/1195372', 'http://career.zucc.edu.cn/job/view/id/1195371', 'http://career.zucc.edu.cn/job/view/id/1195360', 'http://career.zucc.edu.cn/job/view/id/1195359', 'http://career.zucc.edu.cn/job/view/id/1195358', 'http://career.zucc.edu.cn/job/view/id/1195357', 'http://career.zucc.edu.cn/job/view/id/1195356', 'http://career.zucc.edu.cn/job/view/id/1195349', 'http://career.zucc.edu.cn/job/view/id/1195347', 'http://career.zucc.edu.cn/job/view/id/1195346', 'http://career.zucc.edu.cn/job/view/id/1195345', 'http://career.zucc.edu.cn/job/view/id/1195344', 'http://career.zucc.edu.cn/job/view/id/1195343', 'http://career.zucc.edu.cn/job/view/id/1195342', 'http://career.zucc.edu.cn/job/view/id/1195334', 'http://career.zucc.edu.cn/job/view/id/1195326', 'http://career.zucc.edu.cn/job/view/id/1195317', 'http://career.zucc.edu.cn/job/view/id/1195316', 'http://career.zucc.edu.cn/job/view/id/1195315', 'http://career.zucc.edu.cn/job/view/id/1195314', 'http://career.zucc.edu.cn/job/view/id/1195313', 'http://career.zucc.edu.cn/job/view/id/1195311', 'http://career.zucc.edu.cn/job/view/id/1195312', 'http://career.zucc.edu.cn/job/view/id/1195310', 'http://career.zucc.edu.cn/job/view/id/1195309', 'http://career.zucc.edu.cn/job/view/id/1195307', 'http://career.zucc.edu.cn/job/view/id/1195306', 'http://career.zucc.edu.cn/job/view/id/1195305', 'http://career.zucc.edu.cn/job/view/id/1195304', 'http://career.zucc.edu.cn/job/view/id/1195303', 'http://career.zucc.edu.cn/job/view/id/1195302', 'http://career.zucc.edu.cn/job/view/id/1195301', 'http://career.zucc.edu.cn/job/view/id/1195300', 'http://career.zucc.edu.cn/job/view/id/1195299', 'http://career.zucc.edu.cn/job/view/id/1195294', 'http://career.zucc.edu.cn/job/view/id/1195293', 'http://career.zucc.edu.cn/job/view/id/1195292', 'http://career.zucc.edu.cn/job/view/id/1195290', 'http://career.zucc.edu.cn/job/view/id/1195288', 'http://career.zucc.edu.cn/job/view/id/1195284', 'http://career.zucc.edu.cn/job/view/id/1195282', 'http://career.zucc.edu.cn/job/view/id/1195281', 'http://career.zucc.edu.cn/job/view/id/1195280', 'http://career.zucc.edu.cn/job/view/id/1195279', 'http://career.zucc.edu.cn/job/view/id/1195278', 'http://career.zucc.edu.cn/job/view/id/1195277', 'http://career.zucc.edu.cn/job/view/id/1195296', 'http://career.zucc.edu.cn/job/view/id/1195297', 'http://career.zucc.edu.cn/job/view/id/1195271', 'http://career.zucc.edu.cn/job/view/id/1195270', 'http://career.zucc.edu.cn/job/view/id/1195269', 'http://career.zucc.edu.cn/job/view/id/1195268', 'http://career.zucc.edu.cn/job/view/id/1195267', 'http://career.zucc.edu.cn/job/view/id/1195266', 'http://career.zucc.edu.cn/job/view/id/1195265', 'http://career.zucc.edu.cn/job/view/id/1195264', 'http://career.zucc.edu.cn/job/view/id/1195263', 'http://career.zucc.edu.cn/job/view/id/1195262', 'http://career.zucc.edu.cn/job/view/id/1195261', 'http://career.zucc.edu.cn/job/view/id/1195260', 'http://career.zucc.edu.cn/job/view/id/1195259', 'http://career.zucc.edu.cn/job/view/id/1195258', 'http://career.zucc.edu.cn/job/view/id/1195257', 'http://career.zucc.edu.cn/job/view/id/1195256', 'http://career.zucc.edu.cn/job/view/id/1195255', 'http://career.zucc.edu.cn/job/view/id/1195254', 'http://career.zucc.edu.cn/job/view/id/1195253', 'http://career.zucc.edu.cn/job/view/id/1195252', 'http://career.zucc.edu.cn/job/view/id/1195251', 'http://career.zucc.edu.cn/job/view/id/1195250', 'http://career.zucc.edu.cn/job/view/id/1195249', 'http://career.zucc.edu.cn/job/view/id/1195248', 'http://career.zucc.edu.cn/job/view/id/1195247', 'http://career.zucc.edu.cn/job/view/id/1195246', 'http://career.zucc.edu.cn/job/view/id/1195245', 'http://career.zucc.edu.cn/job/view/id/1195244', 'http://career.zucc.edu.cn/job/view/id/1195243', 'http://career.zucc.edu.cn/job/view/id/1195242', 'http://career.zucc.edu.cn/job/view/id/1195241', 'http://career.zucc.edu.cn/job/view/id/1195239', 'http://career.zucc.edu.cn/job/view/id/1195238', 'http://career.zucc.edu.cn/job/view/id/1195237', 'http://career.zucc.edu.cn/job/view/id/1195234', 'http://career.zucc.edu.cn/job/view/id/1195225', 'http://career.zucc.edu.cn/job/view/id/1195224', 'http://career.zucc.edu.cn/job/view/id/1195232', 'http://career.zucc.edu.cn/job/view/id/1195233', 'http://career.zucc.edu.cn/job/view/id/1195236', 'http://career.zucc.edu.cn/job/view/id/1195223', 'http://career.zucc.edu.cn/job/view/id/1195222', 'http://career.zucc.edu.cn/job/view/id/1195221', 'http://career.zucc.edu.cn/job/view/id/1195219', 'http://career.zucc.edu.cn/job/view/id/1195218', 'http://career.zucc.edu.cn/job/view/id/1195214', 'http://career.zucc.edu.cn/job/view/id/1195213', 'http://career.zucc.edu.cn/job/view/id/1195212', 'http://career.zucc.edu.cn/job/view/id/1195209', 'http://career.zucc.edu.cn/job/view/id/1195208', 'http://career.zucc.edu.cn/job/view/id/1195202', 'http://career.zucc.edu.cn/job/view/id/1195201', 'http://career.zucc.edu.cn/job/view/id/1195197', 'http://career.zucc.edu.cn/job/view/id/1195196', 'http://career.zucc.edu.cn/job/view/id/1195195', 'http://career.zucc.edu.cn/job/view/id/1195194', 'http://career.zucc.edu.cn/job/view/id/1195193', 'http://career.zucc.edu.cn/job/view/id/1195191', 'http://career.zucc.edu.cn/job/view/id/1195190', 'http://career.zucc.edu.cn/job/view/id/1195183', 'http://career.zucc.edu.cn/job/view/id/1195173', 'http://career.zucc.edu.cn/job/view/id/1195170', 'http://career.zucc.edu.cn/job/view/id/1195169', 'http://career.zucc.edu.cn/job/view/id/1195168', 'http://career.zucc.edu.cn/job/view/id/1195167', 'http://career.zucc.edu.cn/job/view/id/1195166', 'http://career.zucc.edu.cn/job/view/id/1195165', 'http://career.zucc.edu.cn/job/view/id/1195164', 'http://career.zucc.edu.cn/job/view/id/1195162', 'http://career.zucc.edu.cn/job/view/id/1195150', 'http://career.zucc.edu.cn/job/view/id/1195149', 'http://career.zucc.edu.cn/job/view/id/1195147', 'http://career.zucc.edu.cn/job/view/id/1195145', 'http://career.zucc.edu.cn/job/view/id/1195138', 'http://career.zucc.edu.cn/job/view/id/1195137', 'http://career.zucc.edu.cn/job/view/id/1195136', 'http://career.zucc.edu.cn/job/view/id/1195135', 'http://career.zucc.edu.cn/job/view/id/1195134', 'http://career.zucc.edu.cn/job/view/id/1195133', 'http://career.zucc.edu.cn/job/view/id/1195132', 'http://career.zucc.edu.cn/job/view/id/1195131', 'http://career.zucc.edu.cn/job/view/id/1195130', 'http://career.zucc.edu.cn/job/view/id/1195129', 'http://career.zucc.edu.cn/job/view/id/1195128', 'http://career.zucc.edu.cn/job/view/id/1195127', 'http://career.zucc.edu.cn/job/view/id/1195125', 'http://career.zucc.edu.cn/job/view/id/1195111', 'http://career.zucc.edu.cn/job/view/id/1195110', 'http://career.zucc.edu.cn/job/view/id/1195109', 'http://career.zucc.edu.cn/job/view/id/1195108', 'http://career.zucc.edu.cn/job/view/id/1195107', 'http://career.zucc.edu.cn/job/view/id/1195106', 'http://career.zucc.edu.cn/job/view/id/1195105', 'http://career.zucc.edu.cn/job/view/id/1195104', 'http://career.zucc.edu.cn/job/view/id/1195103', 'http://career.zucc.edu.cn/job/view/id/1195102', 'http://career.zucc.edu.cn/job/view/id/1195100', 'http://career.zucc.edu.cn/job/view/id/1195099', 'http://career.zucc.edu.cn/job/view/id/1195098', 'http://career.zucc.edu.cn/job/view/id/1195095', 'http://career.zucc.edu.cn/job/view/id/1195094', 'http://career.zucc.edu.cn/job/view/id/1195093', 'http://career.zucc.edu.cn/job/view/id/1195091', 'http://career.zucc.edu.cn/job/view/id/1195090', 'http://career.zucc.edu.cn/job/view/id/1195089', 'http://career.zucc.edu.cn/job/view/id/1195088', 'http://career.zucc.edu.cn/job/view/id/1195087', 'http://career.zucc.edu.cn/job/view/id/1195086', 'http://career.zucc.edu.cn/job/view/id/1195085', 'http://career.zucc.edu.cn/job/view/id/1195083', 'http://career.zucc.edu.cn/job/view/id/1195082', 'http://career.zucc.edu.cn/job/view/id/1195079', 'http://career.zucc.edu.cn/job/view/id/1195072', 'http://career.zucc.edu.cn/job/view/id/1195069', 'http://career.zucc.edu.cn/job/view/id/1195068', 'http://career.zucc.edu.cn/job/view/id/1195066', 'http://career.zucc.edu.cn/job/view/id/1195065', 'http://career.zucc.edu.cn/job/view/id/1195057', 'http://career.zucc.edu.cn/job/view/id/1195056', 'http://career.zucc.edu.cn/job/view/id/1195051', 'http://career.zucc.edu.cn/job/view/id/1195042', 'http://career.zucc.edu.cn/job/view/id/1195041', 'http://career.zucc.edu.cn/job/view/id/1195040', 'http://career.zucc.edu.cn/job/view/id/1195039', 'http://career.zucc.edu.cn/job/view/id/1195033', 'http://career.zucc.edu.cn/job/view/id/1195671', 'http://career.zucc.edu.cn/job/view/id/1195670', 'http://career.zucc.edu.cn/job/view/id/1195669', 'http://career.zucc.edu.cn/job/view/id/1195668', 'http://career.zucc.edu.cn/job/view/id/1195667', 'http://career.zucc.edu.cn/job/view/id/1195666', 'http://career.zucc.edu.cn/job/view/id/1195665', 'http://career.zucc.edu.cn/job/view/id/1195664', 'http://career.zucc.edu.cn/job/view/id/1195663', 'http://career.zucc.edu.cn/job/view/id/1195662', 'http://career.zucc.edu.cn/job/view/id/1195661', 'http://career.zucc.edu.cn/job/view/id/1195660', 'http://career.zucc.edu.cn/job/view/id/1195659', 'http://career.zucc.edu.cn/job/view/id/1195658', 'http://career.zucc.edu.cn/job/view/id/1195657', 'http://career.zucc.edu.cn/job/view/id/1195656', 'http://career.zucc.edu.cn/job/view/id/1195655', 'http://career.zucc.edu.cn/job/view/id/1195654', 'http://career.zucc.edu.cn/job/view/id/1195653', 'http://career.zucc.edu.cn/job/view/id/1195652', 'http://career.zucc.edu.cn/job/view/id/1195032', 'http://career.zucc.edu.cn/job/view/id/1195026', 'http://career.zucc.edu.cn/job/view/id/1195016', 'http://career.zucc.edu.cn/job/view/id/1195015', 'http://career.zucc.edu.cn/job/view/id/1195007', 'http://career.zucc.edu.cn/job/view/id/1195000', 'http://career.zucc.edu.cn/job/view/id/1194999', 'http://career.zucc.edu.cn/job/view/id/1194998', 'http://career.zucc.edu.cn/job/view/id/1194997', 'http://career.zucc.edu.cn/job/view/id/1194996', 'http://career.zucc.edu.cn/job/view/id/1194995', 'http://career.zucc.edu.cn/job/view/id/1194994', 'http://career.zucc.edu.cn/job/view/id/1194993', 'http://career.zucc.edu.cn/job/view/id/1194986', 'http://career.zucc.edu.cn/job/view/id/1194985', 'http://career.zucc.edu.cn/job/view/id/1194984', 'http://career.zucc.edu.cn/job/view/id/1194983', 'http://career.zucc.edu.cn/job/view/id/1194982', 'http://career.zucc.edu.cn/job/view/id/1194961', 'http://career.zucc.edu.cn/job/view/id/1194960', 'http://career.zucc.edu.cn/job/view/id/1194959', 'http://career.zucc.edu.cn/job/view/id/1194946', 'http://career.zucc.edu.cn/job/view/id/1194945', 'http://career.zucc.edu.cn/job/view/id/1194944', 'http://career.zucc.edu.cn/job/view/id/1194943', 'http://career.zucc.edu.cn/job/view/id/1194942', 'http://career.zucc.edu.cn/job/view/id/1194941', 'http://career.zucc.edu.cn/job/view/id/1194939', 'http://career.zucc.edu.cn/job/view/id/1194938', 'http://career.zucc.edu.cn/job/view/id/1194937', 'http://career.zucc.edu.cn/job/view/id/1194936', 'http://career.zucc.edu.cn/job/view/id/1194935', 'http://career.zucc.edu.cn/job/view/id/1194934', 'http://career.zucc.edu.cn/job/view/id/1194932', 'http://career.zucc.edu.cn/job/view/id/1194931', 'http://career.zucc.edu.cn/job/view/id/1194930', 'http://career.zucc.edu.cn/job/view/id/1194929', 'http://career.zucc.edu.cn/job/view/id/1194916', 'http://career.zucc.edu.cn/job/view/id/1194915', 'http://career.zucc.edu.cn/job/view/id/1194907', 'http://career.zucc.edu.cn/job/view/id/1194903', 'http://career.zucc.edu.cn/job/view/id/1194902', 'http://career.zucc.edu.cn/job/view/id/1194901', 'http://career.zucc.edu.cn/job/view/id/1194877', 'http://career.zucc.edu.cn/job/view/id/1194876', 'http://career.zucc.edu.cn/job/view/id/1194867', 'http://career.zucc.edu.cn/job/view/id/1194865', 'http://career.zucc.edu.cn/job/view/id/1194827', 'http://career.zucc.edu.cn/job/view/id/1194804', 'http://career.zucc.edu.cn/job/view/id/1194803', 'http://career.zucc.edu.cn/job/view/id/1194785', 'http://career.zucc.edu.cn/job/view/id/1194784', 'http://career.zucc.edu.cn/job/view/id/1194783', 'http://career.zucc.edu.cn/job/view/id/1194782', 'http://career.zucc.edu.cn/job/view/id/1194778', 'http://career.zucc.edu.cn/job/view/id/1194777', 'http://career.zucc.edu.cn/job/view/id/1194776', 'http://career.zucc.edu.cn/job/view/id/1194779', 'http://career.zucc.edu.cn/job/view/id/1194764', 'http://career.zucc.edu.cn/job/view/id/1194757', 'http://career.zucc.edu.cn/job/view/id/1194754', 'http://career.zucc.edu.cn/job/view/id/1194753', 'http://career.zucc.edu.cn/job/view/id/1194729', 'http://career.zucc.edu.cn/job/view/id/1194702', 'http://career.zucc.edu.cn/job/view/id/1194701', 'http://career.zucc.edu.cn/job/view/id/1194700', 'http://career.zucc.edu.cn/job/view/id/1194689', 'http://career.zucc.edu.cn/job/view/id/1194688', 'http://career.zucc.edu.cn/job/view/id/1194687', 'http://career.zucc.edu.cn/job/view/id/1194658', 'http://career.zucc.edu.cn/job/view/id/1194655', 'http://career.zucc.edu.cn/job/view/id/1194654', 'http://career.zucc.edu.cn/job/view/id/1194653', 'http://career.zucc.edu.cn/job/view/id/1194643', 'http://career.zucc.edu.cn/job/view/id/1194634', 'http://career.zucc.edu.cn/job/view/id/1194632', 'http://career.zucc.edu.cn/job/view/id/1194631', 'http://career.zucc.edu.cn/job/view/id/1194629', 'http://career.zucc.edu.cn/job/view/id/1194628', 'http://career.zucc.edu.cn/job/view/id/1194593', 'http://career.zucc.edu.cn/job/view/id/1194584', 'http://career.zucc.edu.cn/job/view/id/1194583', 'http://career.zucc.edu.cn/job/view/id/1194581', 'http://career.zucc.edu.cn/job/view/id/1194580', 'http://career.zucc.edu.cn/job/view/id/1194579', 'http://career.zucc.edu.cn/job/view/id/1194578', 'http://career.zucc.edu.cn/job/view/id/1194577', 'http://career.zucc.edu.cn/job/view/id/1194576', 'http://career.zucc.edu.cn/job/view/id/1194575', 'http://career.zucc.edu.cn/job/view/id/1194561', 'http://career.zucc.edu.cn/job/view/id/1194559', 'http://career.zucc.edu.cn/job/view/id/1194558', 'http://career.zucc.edu.cn/job/view/id/1194557', 'http://career.zucc.edu.cn/job/view/id/1194525', 'http://career.zucc.edu.cn/job/view/id/1194499', 'http://career.zucc.edu.cn/job/view/id/1194490', 'http://career.zucc.edu.cn/job/view/id/1194489', 'http://career.zucc.edu.cn/job/view/id/1194488', 'http://career.zucc.edu.cn/job/view/id/1194487', 'http://career.zucc.edu.cn/job/view/id/1194486', 'http://career.zucc.edu.cn/job/view/id/1194280', 'http://career.zucc.edu.cn/job/view/id/1194279', 'http://career.zucc.edu.cn/job/view/id/1194185', 'http://career.zucc.edu.cn/job/view/id/1194184', 'http://career.zucc.edu.cn/job/view/id/1194183', 'http://career.zucc.edu.cn/job/view/id/1194182', 'http://career.zucc.edu.cn/job/view/id/1194181', 'http://career.zucc.edu.cn/job/view/id/1194180', 'http://career.zucc.edu.cn/job/view/id/1194179', 'http://career.zucc.edu.cn/job/view/id/1194178', 'http://career.zucc.edu.cn/job/view/id/1194177', 'http://career.zucc.edu.cn/job/view/id/1194176', 'http://career.zucc.edu.cn/job/view/id/1194175', 'http://career.zucc.edu.cn/job/view/id/1194174', 'http://career.zucc.edu.cn/job/view/id/1194173', 'http://career.zucc.edu.cn/job/view/id/1194007', 'http://career.zucc.edu.cn/job/view/id/1194002', 'http://career.zucc.edu.cn/job/view/id/1194001', 'http://career.zucc.edu.cn/job/view/id/1194000', 'http://career.zucc.edu.cn/job/view/id/1193999', 'http://career.zucc.edu.cn/job/view/id/1193998', 'http://career.zucc.edu.cn/job/view/id/1193997', 'http://career.zucc.edu.cn/job/view/id/1193996', 'http://career.zucc.edu.cn/job/view/id/1193988', 'http://career.zucc.edu.cn/job/view/id/1193987', 'http://career.zucc.edu.cn/job/view/id/1193986', 'http://career.zucc.edu.cn/job/view/id/1193985', 'http://career.zucc.edu.cn/job/view/id/1193984', 'http://career.zucc.edu.cn/job/view/id/1193983', 'http://career.zucc.edu.cn/job/view/id/1193890', 'http://career.zucc.edu.cn/job/view/id/1193887', 'http://career.zucc.edu.cn/job/view/id/1193632', 'http://career.zucc.edu.cn/job/view/id/1193631', 'http://career.zucc.edu.cn/job/view/id/1193629', 'http://career.zucc.edu.cn/job/view/id/1193620', 'http://career.zucc.edu.cn/job/view/id/1193617', 'http://career.zucc.edu.cn/job/view/id/1193532', 'http://career.zucc.edu.cn/job/view/id/1193531', 'http://career.zucc.edu.cn/job/view/id/1193530', 'http://career.zucc.edu.cn/job/view/id/1193529', 'http://career.zucc.edu.cn/job/view/id/1193528', 'http://career.zucc.edu.cn/job/view/id/1193527', 'http://career.zucc.edu.cn/job/view/id/1193410', 'http://career.zucc.edu.cn/job/view/id/1193395', 'http://career.zucc.edu.cn/job/view/id/1193394', 'http://career.zucc.edu.cn/job/view/id/1193074', 'http://career.zucc.edu.cn/job/view/id/1192995', 'http://career.zucc.edu.cn/job/view/id/1192999', 'http://career.zucc.edu.cn/job/view/id/1192818', 'http://career.zucc.edu.cn/job/view/id/1192824', 'http://career.zucc.edu.cn/job/view/id/1192754', 'http://career.zucc.edu.cn/job/view/id/1192447', 'http://career.zucc.edu.cn/job/view/id/1192356', 'http://career.zucc.edu.cn/job/view/id/1192237', 'http://career.zucc.edu.cn/job/view/id/1192236', 'http://career.zucc.edu.cn/job/view/id/1192142', 'http://career.zucc.edu.cn/job/view/id/1192141', 'http://career.zucc.edu.cn/job/view/id/1192102', 'http://career.zucc.edu.cn/job/view/id/1192101', 'http://career.zucc.edu.cn/job/view/id/1192100', 'http://career.zucc.edu.cn/job/view/id/1192099', 'http://career.zucc.edu.cn/job/view/id/1192098', 'http://career.zucc.edu.cn/job/view/id/1192097', 'http://career.zucc.edu.cn/job/view/id/1192024', 'http://career.zucc.edu.cn/job/view/id/1192023', 'http://career.zucc.edu.cn/job/view/id/1191891', 'http://career.zucc.edu.cn/job/view/id/1191887', 'http://career.zucc.edu.cn/job/view/id/1191862', 'http://career.zucc.edu.cn/job/view/id/1191850', 'http://career.zucc.edu.cn/job/view/id/1191844', 'http://career.zucc.edu.cn/job/view/id/1191659', 'http://career.zucc.edu.cn/job/view/id/1191658', 'http://career.zucc.edu.cn/job/view/id/1191656', 'http://career.zucc.edu.cn/job/view/id/1191655', 'http://career.zucc.edu.cn/job/view/id/1191654', 'http://career.zucc.edu.cn/job/view/id/1191653', 'http://career.zucc.edu.cn/job/view/id/1191652', 'http://career.zucc.edu.cn/job/view/id/1191650', 'http://career.zucc.edu.cn/job/view/id/1191649', 'http://career.zucc.edu.cn/job/view/id/1190788', 'http://career.zucc.edu.cn/job/view/id/1190680', 'http://career.zucc.edu.cn/job/view/id/1190676', 'http://career.zucc.edu.cn/job/view/id/1190543', 'http://career.zucc.edu.cn/job/view/id/1190542', 'http://career.zucc.edu.cn/job/view/id/1190541', 'http://career.zucc.edu.cn/job/view/id/1190491', 'http://career.zucc.edu.cn/job/view/id/1190448', 'http://career.zucc.edu.cn/job/view/id/1190440', 'http://career.zucc.edu.cn/job/view/id/1190433', 'http://career.zucc.edu.cn/job/view/id/1190434', 'http://career.zucc.edu.cn/job/view/id/1190435', 'http://career.zucc.edu.cn/job/view/id/1190436', 'http://career.zucc.edu.cn/job/view/id/1190437', 'http://career.zucc.edu.cn/job/view/id/1190438', 'http://career.zucc.edu.cn/job/view/id/1190376', 'http://career.zucc.edu.cn/job/view/id/1190350', 'http://career.zucc.edu.cn/job/view/id/1190351', 'http://career.zucc.edu.cn/job/view/id/1190352', 'http://career.zucc.edu.cn/job/view/id/1190353', 'http://career.zucc.edu.cn/job/view/id/1190354', 'http://career.zucc.edu.cn/job/view/id/1195651', 'http://career.zucc.edu.cn/job/view/id/1195650', 'http://career.zucc.edu.cn/job/view/id/1195649', 'http://career.zucc.edu.cn/job/view/id/1195648', 'http://career.zucc.edu.cn/job/view/id/1195647', 'http://career.zucc.edu.cn/job/view/id/1195646', 'http://career.zucc.edu.cn/job/view/id/1195645', 'http://career.zucc.edu.cn/job/view/id/1195644', 'http://career.zucc.edu.cn/job/view/id/1195643', 'http://career.zucc.edu.cn/job/view/id/1195642', 'http://career.zucc.edu.cn/job/view/id/1195641', 'http://career.zucc.edu.cn/job/view/id/1195640', 'http://career.zucc.edu.cn/job/view/id/1195639', 'http://career.zucc.edu.cn/job/view/id/1195638', 'http://career.zucc.edu.cn/job/view/id/1195637', 'http://career.zucc.edu.cn/job/view/id/1195636', 'http://career.zucc.edu.cn/job/view/id/1195635', 'http://career.zucc.edu.cn/job/view/id/1195634', 'http://career.zucc.edu.cn/job/view/id/1195633', 'http://career.zucc.edu.cn/job/view/id/1195632', 'http://career.zucc.edu.cn/job/view/id/1195631', 'http://career.zucc.edu.cn/job/view/id/1195630', 'http://career.zucc.edu.cn/job/view/id/1195629', 'http://career.zucc.edu.cn/job/view/id/1195628', 'http://career.zucc.edu.cn/job/view/id/1195627', 'http://career.zucc.edu.cn/job/view/id/1195626', 'http://career.zucc.edu.cn/job/view/id/1195625', 'http://career.zucc.edu.cn/job/view/id/1195624', 'http://career.zucc.edu.cn/job/view/id/1195623', 'http://career.zucc.edu.cn/job/view/id/1195622', 'http://career.zucc.edu.cn/job/view/id/1195621', 'http://career.zucc.edu.cn/job/view/id/1195620', 'http://career.zucc.edu.cn/job/view/id/1195619', 'http://career.zucc.edu.cn/job/view/id/1195618', 'http://career.zucc.edu.cn/job/view/id/1195617', 'http://career.zucc.edu.cn/job/view/id/1195616', 'http://career.zucc.edu.cn/job/view/id/1195615', 'http://career.zucc.edu.cn/job/view/id/1195614', 'http://career.zucc.edu.cn/job/view/id/1195613', 'http://career.zucc.edu.cn/job/view/id/1195612', 'http://career.zucc.edu.cn/job/view/id/1195611', 'http://career.zucc.edu.cn/job/view/id/1195610', 'http://career.zucc.edu.cn/job/view/id/1195609', 'http://career.zucc.edu.cn/job/view/id/1195608', 'http://career.zucc.edu.cn/job/view/id/1195607', 'http://career.zucc.edu.cn/job/view/id/1195606', 'http://career.zucc.edu.cn/job/view/id/1195605', 'http://career.zucc.edu.cn/job/view/id/1195604', 'http://career.zucc.edu.cn/job/view/id/1195603', 'http://career.zucc.edu.cn/job/view/id/1195602', 'http://career.zucc.edu.cn/job/view/id/1195601', 'http://career.zucc.edu.cn/job/view/id/1195600', 'http://career.zucc.edu.cn/job/view/id/1195599', 'http://career.zucc.edu.cn/job/view/id/1195598', 'http://career.zucc.edu.cn/job/view/id/1195597', 'http://career.zucc.edu.cn/job/view/id/1195596', 'http://career.zucc.edu.cn/job/view/id/1195595', 'http://career.zucc.edu.cn/job/view/id/1195594', 'http://career.zucc.edu.cn/job/view/id/1195593', 'http://career.zucc.edu.cn/job/view/id/1195592', 'http://career.zucc.edu.cn/job/view/id/1195591', 'http://career.zucc.edu.cn/job/view/id/1195590', 'http://career.zucc.edu.cn/job/view/id/1195589', 'http://career.zucc.edu.cn/job/view/id/1195588', 'http://career.zucc.edu.cn/job/view/id/1195587', 'http://career.zucc.edu.cn/job/view/id/1195586', 'http://career.zucc.edu.cn/job/view/id/1195585', 'http://career.zucc.edu.cn/job/view/id/1195584', 'http://career.zucc.edu.cn/job/view/id/1195583', 'http://career.zucc.edu.cn/job/view/id/1195582', 'http://career.zucc.edu.cn/job/view/id/1195581', 'http://career.zucc.edu.cn/job/view/id/1195579', 'http://career.zucc.edu.cn/job/view/id/1195578', 'http://career.zucc.edu.cn/job/view/id/1195577', 'http://career.zucc.edu.cn/job/view/id/1195576', 'http://career.zucc.edu.cn/job/view/id/1195575', 'http://career.zucc.edu.cn/job/view/id/1195573', 'http://career.zucc.edu.cn/job/view/id/1195572', 'http://career.zucc.edu.cn/job/view/id/1195571', 'http://career.zucc.edu.cn/job/view/id/1195570', 'http://career.zucc.edu.cn/job/view/id/1195569', 'http://career.zucc.edu.cn/job/view/id/1195568', 'http://career.zucc.edu.cn/job/view/id/1195567', 'http://career.zucc.edu.cn/job/view/id/1195566', 'http://career.zucc.edu.cn/job/view/id/1195565', 'http://career.zucc.edu.cn/job/view/id/1195561', 'http://career.zucc.edu.cn/job/view/id/1195559', 'http://career.zucc.edu.cn/job/view/id/1195554', 'http://career.zucc.edu.cn/job/view/id/1195553', 'http://career.zucc.edu.cn/job/view/id/1195551', 'http://career.zucc.edu.cn/job/view/id/1195541', 'http://career.zucc.edu.cn/job/view/id/1195540', 'http://career.zucc.edu.cn/job/view/id/1195539', 'http://career.zucc.edu.cn/job/view/id/1195538', 'http://career.zucc.edu.cn/job/view/id/1195532', 'http://career.zucc.edu.cn/job/view/id/1195528', 'http://career.zucc.edu.cn/job/view/id/1195527', 'http://career.zucc.edu.cn/job/view/id/1195526', 'http://career.zucc.edu.cn/job/view/id/1195525', 'http://career.zucc.edu.cn/job/view/id/1195524', 'http://career.zucc.edu.cn/job/view/id/1195502', 'http://career.zucc.edu.cn/job/view/id/1195495', 'http://career.zucc.edu.cn/job/view/id/1195494', 'http://career.zucc.edu.cn/job/view/id/1195488', 'http://career.zucc.edu.cn/job/view/id/1195487', 'http://career.zucc.edu.cn/job/view/id/1195486', 'http://career.zucc.edu.cn/job/view/id/1195485', 'http://career.zucc.edu.cn/job/view/id/1195483', 'http://career.zucc.edu.cn/job/view/id/1195481', 'http://career.zucc.edu.cn/job/view/id/1195480', 'http://career.zucc.edu.cn/job/view/id/1195478', 'http://career.zucc.edu.cn/job/view/id/1195477', 'http://career.zucc.edu.cn/job/view/id/1195476', 'http://career.zucc.edu.cn/job/view/id/1195474', 'http://career.zucc.edu.cn/job/view/id/1195472', 'http://career.zucc.edu.cn/job/view/id/1195471', 'http://career.zucc.edu.cn/job/view/id/1195470', 'http://career.zucc.edu.cn/job/view/id/1195469', 'http://career.zucc.edu.cn/job/view/id/1195467', 'http://career.zucc.edu.cn/job/view/id/1195466', 'http://career.zucc.edu.cn/job/view/id/1195465', 'http://career.zucc.edu.cn/job/view/id/1195464', 'http://career.zucc.edu.cn/job/view/id/1195463', 'http://career.zucc.edu.cn/job/view/id/1195452', 'http://career.zucc.edu.cn/job/view/id/1195449', 'http://career.zucc.edu.cn/job/view/id/1195448', 'http://career.zucc.edu.cn/job/view/id/1195447', 'http://career.zucc.edu.cn/job/view/id/1195446', 'http://career.zucc.edu.cn/job/view/id/1195445', 'http://career.zucc.edu.cn/job/view/id/1195436', 'http://career.zucc.edu.cn/job/view/id/1195435', 'http://career.zucc.edu.cn/job/view/id/1195426', 'http://career.zucc.edu.cn/job/view/id/1195424', 'http://career.zucc.edu.cn/job/view/id/1195423', 'http://career.zucc.edu.cn/job/view/id/1195422', 'http://career.zucc.edu.cn/job/view/id/1195413', 'http://career.zucc.edu.cn/job/view/id/1195412', 'http://career.zucc.edu.cn/job/view/id/1195411', 'http://career.zucc.edu.cn/job/view/id/1195410', 'http://career.zucc.edu.cn/job/view/id/1195409', 'http://career.zucc.edu.cn/job/view/id/1195694', 'http://career.zucc.edu.cn/job/view/id/1195693', 'http://career.zucc.edu.cn/job/view/id/1195692', 'http://career.zucc.edu.cn/job/view/id/1195691', 'http://career.zucc.edu.cn/job/view/id/1195690', 'http://career.zucc.edu.cn/job/view/id/1195689', 'http://career.zucc.edu.cn/job/view/id/1195687', 'http://career.zucc.edu.cn/job/view/id/1195686', 'http://career.zucc.edu.cn/job/view/id/1195685', 'http://career.zucc.edu.cn/job/view/id/1195684', 'http://career.zucc.edu.cn/job/view/id/1195683', 'http://career.zucc.edu.cn/job/view/id/1195682', 'http://career.zucc.edu.cn/job/view/id/1195681', 'http://career.zucc.edu.cn/job/view/id/1195680', 'http://career.zucc.edu.cn/job/view/id/1195679', 'http://career.zucc.edu.cn/job/view/id/1195678', 'http://career.zucc.edu.cn/job/view/id/1195677', 'http://career.zucc.edu.cn/job/view/id/1195674', 'http://career.zucc.edu.cn/job/view/id/1195673', 'http://career.zucc.edu.cn/job/view/id/1195672']

function jobDetailDownloadBoss() {
    // jobDetailDownloadBoss
    // job-sec-text

    // let bossList=["https://www.zhipin.com/job_detail/9d402f4ba95e8cbb1XRz3N-8ElpQ.html?lid=8ON7tpwTr4v.search.272&securityId=9UONYueTTkYRv-h1rhUygO0bdj9VPV2pW2J8r46D8E8Uw2k1jTiaVAFoJXftxGED5M1gZlqyjtLvL2-VUbmsD6LC4I0RnhJ9VUaoGLzSXJrFdiw~&sessionId=", "https://www.zhipin.com/job_detail/21e92c877c1a23411nFz29q-E1JQ.html?lid=8ON7tpwTr4v.search.273&securityId=Z6JSNMrq6sW8C-J1IihFsbsAre5JcPtDDJ2edREtxz6RFnXf18GZXeIrliQCb0XvGuM4LCYguAbuux9WdkhTt7_CHfPRXZdqExowvPvitB3pH1xm&sessionId=", ]
    // let  keywordInput
    // 需要爬取一个新的 网站的话 基本只要修改这里的 class 和 最后一个obj里面的key名字的map关系
    // 因为 要存入数据库 obj的key尽量要好看一点 符合命名规范 所以写成了 小驼峰的形式
    // 这种是每个class 就代表一个textContent 简单的方法 如果复杂 还是要写具体逻辑
    let classNameInfoMap = {
        // "job-card-left": "href",
        // "company-name": "companyName",
        // "job-title clearfix": "jobTitle",
        // "salary": "salary",
        // companyName
        'postName elli': "postName",
        // 'compName': "compName",
        // 'compName': "companyName",
        
        'job-sec-text': "jobDescription",
                'cname at': "companyName",
// 'cname at'
'dc at': "companyDesc",
// d at
// 'dc at': "companyName",
// companyIndustry
        // 'pay': "pay",
        'pay': "monthlySalary",
        // monthlySalary
        'postMsg': "postMsg",
        // companyIntroduction
        'compMsg elli': "companyIntroduction",

        // 'compMsg elli': "compMsg",
        'label': "label",
        "jname at":"jobName",
        "sal":"salary",
        // "d at":"jobDetail",
        "d at":"jobDescription",
        // detailedPlaceWork
        "d at":"detailedPlaceWorkInfo",

        // jobDescription
        // "er":"companyName",
        // "int at":"trade",
        "int at":"companyIndustry",

        // companyIndustry
        // 行业 
        "time":'releaseDate'

    }

  let  urlFront=  location.href.split("?")[0]
//   urlFront.split('/')
 let docName= getListLast(urlFront.split('/'))
  let id = docName?.replace('.html','')
    // https://www.zhipin.com/job_detail/21e92c877c1a23411nFz29q-E1JQ.html?lid=8ON7tpwTr4v.search.273&securityId=Z6JSNMrq6sW8C-J1IihFsbsAre5JcPtDDJ2edREtxz6RFnXf18GZXeIrliQCb0XvGuM4LCYguAbuux9WdkhTt7_CHfPRXZdqExowvPvitB3pH1xm&sessionId=&idx=1
    // 'job-sec-text': "jobDescription",
   let  jobDescription= document.getElementsByClassName("job-sec-text")[0]?.textContent?.trim()
   let  companyIntroduction= document.getElementsByClassName("job-sec-text fold-text")[0]?.textContent?.trim()
   
   let  companyUser= document.getElementsByClassName("company-user")[0]?.textContent?.trim()
//    法定代表人
// 
companyUser=  companyUser?.replace('法定代表人',"")
   let  resTime= document.getElementsByClassName("res-time")[0]?.textContent?.trim()
//    成立日期
resTime=resTime?.replace('成立日期',"")
//    firstChild.nodeValue 是获取本节点的text文本，不包含子节点的。
// let  companyType=   document.getElementsByClassName("company-type")[0]?.firstChild?.nodeValue 
// 企业类型
//    let  companyTypeDomChildren= document.getElementsByClassName("company-type")[0]?.children
//    console.log("companyTypeDomChildren");
//    console.log(companyTypeDomChildren);
//    let  companyTypeDom= document.getElementsByClassName("company-type")[0]?.children[1]
//    console.log("companyTypeDom");
//    console.log(companyTypeDom);
let  companyType=  document.getElementsByClassName("company-type")[0]?.textContent?.trim()

//    let  companyType=  document.getElementsByClassName("company-type")[0]?.children[1]?.textContent?.trim()
   companyType=  companyType?.replace('企业类型',"")
//    let  companyType= document.getElementsByClassName("company-type")[0]?.textContent?.trim()

let  manageState=  document.getElementsByClassName("manage-state")[0]?.textContent?.trim()?.replace('经营状态',"")
//    companyType=  companyType.replace('企业类型',"")
//    job-sec-text fold-text
// class="company-fund"
let  companyFund=  document.getElementsByClassName("company-fund")[0]?.textContent?.trim()?.replace('注册资金',"")

let  companyName=  document.getElementsByClassName("company-name")[0]?.textContent?.trim()?.replace('公司名称',"")
// text-desc text-experiece
let  workExperience=  document.getElementsByClassName("text-desc text-experiece")[0]?.textContent?.trim()
// ?.replace('公司名称',"")
// salary
    
let  monthlySalary=  document.getElementsByClassName("salary")[0]?.textContent?.trim()

let  placeWork=  document.getElementsByClassName("text-desc text-city")[0]?.textContent?.trim()

let  jobTags=  document.getElementsByClassName("job-tags")[0]?.innerHTML?.trim()

let  jobStatus=  document.getElementsByClassName("job-status")[0]?.textContent?.trim()

let  hrName=  document.getElementsByClassName("name")[0]?.textContent?.trim()

let  bossInfo=  document.getElementsByClassName("boss-info-attr")[0]?.textContent?.trim()

        let idxIntNext = genNextIdx()
        console.log("idxIntNext");
        console.log(idxIntNext);
    
        // let  linkList
        let  detailLinkList=bossList

       let link= detailLinkList[idxIntNext-1]
       let  obj={
        jobDescription,
        companyIntroduction,
        companyUser,
        resTime,
        companyType,
        manageState,
        companyFund,
        id,
        link,
        companyName,
        workExperience,
        monthlySalary,
        placeWork,
        jobTags,
        jobStatus,
        hrName,
        bossInfo
    
       }
    //    子节点 的 值 没有孙子节点的 js 
        // let resMap = toTextList(classNameInfoMap)
        // let resList = toResList(resMap)
        // console.log("resList");
        // console.log(resList);
        console.log("obj");
        console.log(obj);

       downloadTxt(`boss_detail_${id}_idx_${idxIntNext-1}.json`, JSON.stringify(obj))

        if (idxIntNext >= detailLinkList.length) {
            return
        }
       
    
        let contentIdNext = detailLinkList[idxIntNext]
        console.log("contentIdNext");
        console.log(contentIdNext);
        // detailLinkList
        // let nextLink =`${contentIdNext}/&idx=${idxIntNext}`
        // let nextLink =`${contentIdNext}/idx=${idxIntNext}`
        let nextLink = `${contentIdNext}&idx=${idxIntNext}`
    
        // let waitMs=1000
        //  let waitMs=500
        // let waitMs = 20
        // let waitMs = 2000
        // let waitMs =   randomNum(2000, 4000)
                let waitMs =  4000

        // js 生成 随机数 1000 到 3000
//         这种最简单，因为和 random 的特点保持一致。只需使用如下公式即可：
// Math.random()*(m-n)+n
        // let nextLink = `http://career.zucc.edu.cn/job/search?title=&city=&d_skill=&d_industry=&d_major=&d_education=&d_category=&d_salary=&nature=&scale=&time=&page=${idxIntNext}&idx=${idxIntNext}`
        setTimeout(() => {
            window.location.href = nextLink
        }, waitMs)
    

}

function zhihu_ans_download(){
    // QuestionHeader-title
    // getElementsByClassName("QuestionHeader-title")
    let title=
    getTextContentByClassName('QuestionHeader-title')
    let  titleLittle=
    getTextContentByClassName('QuestionRichText')
    let  ansDoms=
    document.
    getElementsByClassName('RichContent-inner')
    let ansList=[]
    for(let i=0;i<ansDoms.length;i++) {
        let ansDom=
        ansDoms[i]
        let  ans=
        getTextContent(ansDom)
        ansList.push(ans)
    }
    let res={
        title,
        titleLittle,
        ansList
    }
    downloadTxt(`zhihu_ans_${title}.json`, JSON.stringify(res))
}

function giteeFileDown(){
    
    let  branchNameDoms= document.getElementsByClassName('item git-project-branch-item')
    if(!branchNameDoms){
        return
    }
    // let  branchName= document.getElementsByClassName("branch-name")[0]?.textContent?.trim()
   
    // location.href
    let outCmdStr=""
let fileLinkDoms=
document.getElementsByClassName('five wide column tree-item-file-name tree-list-item')
// https://gitee.com/De_arning/study-on-the-optimization-strategy-of-forest-harvesting-management-under-the-background-of-carbon-neutrality/raw/master/mcm2022-czyzjhsjc/2022_MCM_ICM_Problems/2022_ICM_Problem_D.pdf
// https://gitee.com/De_arning/study-on-the-optimization-strategy-of-forest-harvesting-management-under-the-background-of-carbon-neutrality/raw/master/mcm2022-czyzjhsjc/2022_MCM_ICM_Problems/2022_MCM_Problem_B.pdf
for(let i=0;i<fileLinkDoms.length;i++){
    let  fileLinkDom=
    fileLinkDoms[i]
    let  linkDom=
    fileLinkDom.getElementsByTagName('a')[0]
    let  link=
    linkDom.href
    // console.log(link);
    // /raw/
    // link.replace('/raw/','/blob/')
    let  rawLink=
    link.replace('/blob/','/raw/')
    console.log(rawLink);

    // wget 
    let wgetSh=String.raw`D:\software\wget-1.21.3-win64/wget.exe`
    // "D:\software\wget-1.21.3-win64\wget.exe"
    let cmd=`${wgetSh} ${rawLink} -O ${link.split('/').pop()}`
    // console.log(cmd);
    outCmdStr+=cmd+"\n"
}
if(outCmdStr.length<=0){
return
}
// outCmdStr.length()>0
downloadTxt(`wget_${location.href}.sh`,outCmdStr)
}
function  randomNum(from,to){
    // 生成 [ n, m ) 范围内的随机数（大于等于n，小于m）
   return  Math.random()*(to-from)+from
}

function qianChengDetailDownload() {
 
  let  urlFront=  location.href.split("?")[0]
//   urlFront.split('/')
 let docName= getListLast(urlFront.split('/'))
  let id = docName?.replace('.html','')
    // https://www.zhipin.com/job_detail/21e92c877c1a23411nFz29q-E1JQ.html?lid=8ON7tpwTr4v.search.273&securityId=Z6JSNMrq6sW8C-J1IihFsbsAre5JcPtDDJ2edREtxz6RFnXf18GZXeIrliQCb0XvGuM4LCYguAbuux9WdkhTt7_CHfPRXZdqExowvPvitB3pH1xm&sessionId=&idx=1
    // 'job-sec-text': "jobDescription",
//    let  jobDescription= document.getElementsByClassName("job-sec-text")[0]?.textContent?.trim()
//    let  companyIntroduction= document.getElementsByClassName("job-sec-text fold-text")[0]?.textContent?.trim()
   
   let  jobTitle= document.getElementsByClassName("cn")[0]?.textContent?.trim()
   
   let  jobDescription= document.getElementsByClassName("bmsg job_msg inbox")[0]?.textContent?.trim()
   
   let  placeparts= document.getElementsByClassName("msg ltype")[0]?.textContent?.trim().split('|')

   let  placeWork=placeparts[0]
   let  typeRecruitment=placeparts[1]

   let  minimumEducation=placeparts[2]

   let  releaseDate=placeparts[3]
   let  depart= document.getElementsByClassName("bmsg inbox")[0]?.textContent?.trim()
   
   let  companyNature= document.getElementsByClassName("com_tag")[0]?.textContent?.trim()

   let  companyIntroduction= document.getElementsByClassName("tmsg inbox")[0]?.textContent?.trim()
//    com_name 
   let  companyName= document.getElementsByClassName("com_name")[0]?.textContent?.trim()

   
   let  companyUser= document.getElementsByClassName("company-user")[0]?.textContent?.trim()
//    法定代表人
// 
companyUser=  companyUser?.replace('法定代表人',"")
   let  resTime= document.getElementsByClassName("res-time")[0]?.textContent?.trim()
//    成立日期
resTime=resTime?.replace('成立日期',"")
//    firstChild.nodeValue 是获取本节点的text文本，不包含子节点的。
// let  companyType=   document.getElementsByClassName("company-type")[0]?.firstChild?.nodeValue 
// 企业类型
//    let  companyTypeDomChildren= document.getElementsByClassName("company-type")[0]?.children
//    console.log("companyTypeDomChildren");
//    console.log(companyTypeDomChildren);
//    let  companyTypeDom= document.getElementsByClassName("company-type")[0]?.children[1]
//    console.log("companyTypeDom");
//    console.log(companyTypeDom);
let  companyType=  document.getElementsByClassName("company-type")[0]?.textContent?.trim()

//    let  companyType=  document.getElementsByClassName("company-type")[0]?.children[1]?.textContent?.trim()
   companyType=  companyType?.replace('企业类型',"")
//    let  companyType= document.getElementsByClassName("company-type")[0]?.textContent?.trim()

let  manageState=  document.getElementsByClassName("manage-state")[0]?.textContent?.trim()?.replace('经营状态',"")
//    companyType=  companyType.replace('企业类型',"")
//    job-sec-text fold-text
// class="company-fund"
let  companyFund=  document.getElementsByClassName("company-fund")[0]?.textContent?.trim()?.replace('注册资金',"")

// let  companyName=  document.getElementsByClassName("company-name")[0]?.textContent?.trim()?.replace('公司名称',"")
// text-desc text-experiece
let  workExperience=  document.getElementsByClassName("text-desc text-experiece")[0]?.textContent?.trim()
// ?.replace('公司名称',"")
// salary
    
let  monthlySalary=  document.getElementsByClassName("salary")[0]?.textContent?.trim()

// let  placeWork=  document.getElementsByClassName("text-desc text-city")[0]?.textContent?.trim()

let  jobTags=  document.getElementsByClassName("job-tags")[0]?.innerHTML?.trim()

let  jobStatus=  document.getElementsByClassName("job-status")[0]?.textContent?.trim()

let  hrName=  document.getElementsByClassName("name")[0]?.textContent?.trim()

let  bossInfo=  document.getElementsByClassName("boss-info-attr")[0]?.textContent?.trim()

        let idxIntNext = genNextIdx()
        console.log("idxIntNext");
        console.log(idxIntNext);
    
        // let  linkList
        let  detailLinkList=bossList

       let link= detailLinkList[idxIntNext-1]
    //    let  typeRecruitment=placeparts[1]

    //    let  minimumEducation=placeparts[2]
    
    //    let  releaseDate=placeparts[3]
    //    let  depart= document.getElementsByClassName("bmsg inbox")[0]?.textContent?.trim()
       
    //    let  companyNature= document.getElementsByClassName("com_tag")[0]?.textContent?.trim()

       
       let  obj={
        typeRecruitment,
        minimumEducation,
        releaseDate,
        depart,
        companyNature,
        jobTitle,
        jobDescription,
        companyIntroduction,
        companyUser,
        resTime,
        companyType,
        manageState,
        companyFund,
        id,
        link,
        companyName,
        workExperience,
        monthlySalary,
        placeWork,
        jobTags,
        jobStatus,
        hrName,
        bossInfo
    
       }
    //    子节点 的 值 没有孙子节点的 js 
        // let resMap = toTextList(classNameInfoMap)
        // let resList = toResList(resMap)
        // console.log("resList");
        // console.log(resList);
        console.log("obj");
        console.log(obj);

       downloadTxt(`qianCheng_detail_${id}_idx_${idxIntNext-1}.json`, JSON.stringify(obj))

        if (idxIntNext >= detailLinkList.length) {
            return
        }
       
    
        let contentIdNext = detailLinkList[idxIntNext]
        console.log("contentIdNext");
        console.log(contentIdNext);
        // detailLinkList
        // let nextLink =`${contentIdNext}/&idx=${idxIntNext}`
        // let nextLink =`${contentIdNext}/idx=${idxIntNext}`
        let nextLink = `${contentIdNext}&idx=${idxIntNext}`
    
        // let waitMs=1000
        //  let waitMs=500
        // let waitMs = 20
        let waitMs = 2000
        // let nextLink = `http://career.zucc.edu.cn/job/search?title=&city=&d_skill=&d_industry=&d_major=&d_education=&d_category=&d_salary=&nature=&scale=&time=&page=${idxIntNext}&idx=${idxIntNext}`
        setTimeout(() => {
            window.location.href = nextLink
        }, waitMs)
    

}

// 'https://www.ncss.cn/student/jobs/F6641B14AFD40166E0530A010016B4F5/detail.html'

// idxIntNext,
function jumpNext(detailLinkList){
    let idxIntNext = genNextIdx()
    console.log("idxIntNext");
    console.log(idxIntNext);

    // let  linkList
    // let  detailLinkList=jobLinkLst243

//    let link= detailLinkList[idxIntNext-1]

    if (idxIntNext >= detailLinkList.length) {
        return
    }
   

    let contentIdNext = detailLinkList[idxIntNext]
    console.log("contentIdNext");
    console.log(contentIdNext);
    // detailLinkList
    // let nextLink =`${contentIdNext}/&idx=${idxIntNext}`
    // let nextLink =`${contentIdNext}/idx=${idxIntNext}`
    let nextLink = `${contentIdNext}?idx=${idxIntNext}`

    // let waitMs=1000
    //  let waitMs=500
    // let waitMs = 20
    let waitMs = 2000
    // let nextLink = `http://career.zucc.edu.cn/job/search?title=&city=&d_skill=&d_industry=&d_major=&d_education=&d_category=&d_salary=&nature=&scale=&time=&page=${idxIntNext}&idx=${idxIntNext}`
    setTimeout(() => {
        window.location.href = nextLink
    }, waitMs)
}

function downloadAndNext(jobLinkObjNow,id){
    // let idxIntNext = genNextIdx()
    // console.log("idxIntNext");
    // console.log(idxIntNext);
    // jobLinkObjNow.idx 


    // let  linkList
    // let  detailLinkList=jobLinkLst243
    let link= jobLinkObjNow.jobLink
//    let link= detailLinkList[idxIntNext-1]
//    let  typeRecruitment=placeparts[1]

//    let  minimumEducation=placeparts[2]

//    let  releaseDate=placeparts[3]
//    let  depart= document.getElementsByClassName("bmsg inbox")[0]?.textContent?.trim()
   
//    let  companyNature= document.getElementsByClassName("com_tag")[0]?.textContent?.trim()

//   let  numberRecruits= salaryLis[4]?.textContent?.trim()
//   let  source= document.getElementsByClassName("source-sp")[0]?.textContent?.trim()

//   let  major= document.getElementsByClassName("major")[0]?.textContent?.trim()
   let  obj={
      numberRecruits,
      source,
      major,
    typeRecruitment,
    minimumEducation,
    releaseDate,
    depart,
    companyNature,
    jobTitle,
    jobDescription,
    companyIntroduction,
    companyUser,
    resTime,
    companyType,
    manageState,
    companyFund,
    id,
    link,
    companyName,
    workExperience,
    monthlySalary,
    placeWork,
    jobTags,
    jobStatus,
    hrName,
    bossInfo

   }
//    子节点 的 值 没有孙子节点的 js 
    // let resMap = toTextList(classNameInfoMap)
    // let resList = toResList(resMap)
    // console.log("resList");
    // console.log(resList);
    console.log("obj");
    console.log(obj);

    let   idxIntNext=jobLinkObjNow.idx +1
  //  downloadTxt(`qianCheng_detail_${id}_idx_${idxIntNext-1}.json`, JSON.stringify(obj))
   downloadTxt(`school_24_detail_${id}_idx_${idxIntNext-1}.json`, JSON.stringify(obj))

    if (idxIntNext >= detailLinkList.length) {
        return
    }
   
    postData(`http://localhost:8003/api/jobLink/getByIdx`, { idx: idxIntNext })
    .then(data => {
      console.log(data);
    //   data.response
    //    let jobLinkNow=  data.response.jobLink
       let  jobLinkObjNext= data.response
    //    downloadAndNext(jobLinkObjNow)

    let contentIdNext =  jobLinkObjNext.jobLink
    // let contentIdNext = detailLinkList[idxIntNext]
    console.log("contentIdNext");
    console.log(contentIdNext);
    // detailLinkList
    // let nextLink =`${contentIdNext}/&idx=${idxIntNext}`
    // let nextLink =`${contentIdNext}/idx=${idxIntNext}`
    let nextLink = `${contentIdNext}?idx=${idxIntNext}`

    // let waitMs=1000
    //  let waitMs=500
    // let waitMs = 20
    let waitMs = 2000
    // let nextLink = `http://career.zucc.edu.cn/job/search?title=&city=&d_skill=&d_industry=&d_major=&d_education=&d_category=&d_salary=&nature=&scale=&time=&page=${idxIntNext}&idx=${idxIntNext}`
    setTimeout(() => {
        window.location.href = nextLink
    }, waitMs)
    })

   
}
function school_23365DetailDownload() {
 
    // container
    let  urlFront=  location.href.split("?")[0]
  //   urlFront.split('/')
//    let docName= getListLast(urlFront.split('/'))
   let parts=urlFront.split('/')
   let id =parts[parts.length-2]

  
//    container
let containerStr=document.getElementById('container')?.textContent?.trim()
if(containerStr){
    let  isDeleted=  strIsIn("该信息已经被删除了",containerStr)
    if(isDeleted){
       jumpNext(jobLinkLst243)
    }
}
 
//    jumpNext(jobLinkLst243)
    // let id = docName?.replace('.html','')
    // https://www.ncss.cn/student/jobs/7p2uYT24mTZxTJPZ1vSPLt/detail.html?idx=20
      // https://www.zhipin.com/job_detail/21e92c877c1a23411nFz29q-E1JQ.html?lid=8ON7tpwTr4v.search.273&securityId=Z6JSNMrq6sW8C-J1IihFsbsAre5JcPtDDJ2edREtxz6RFnXf18GZXeIrliQCb0XvGuM4LCYguAbuux9WdkhTt7_CHfPRXZdqExowvPvitB3pH1xm&sessionId=&idx=1
      // 'job-sec-text': "jobDescription",
  //    let  jobDescription= document.getElementsByClassName("job-sec-text")[0]?.textContent?.trim()
  //    let  companyIntroduction= document.getElementsByClassName("job-sec-text fold-text")[0]?.textContent?.trim()
     
    //  let  jobTitle= document.getElementsByClassName("cn")[0]?.textContent?.trim()
    //  jobName
    let  jobTitle= document.getElementById("jobName")?.textContent?.trim()
    // work clearfix
    let  typeRecruitment= document.getElementsByClassName("work clearfix")[0]?.getElementsByTagName('li')[1]?.textContent?.trim()
    
    let  natureWork= document.getElementsByClassName("work clearfix")[0]?.getElementsByTagName('li')[1]?.textContent?.trim()
    let  salaryLis= document.getElementsByClassName("salary clearfix")[0]?.getElementsByTagName('li')

    // salaryLis.getElementsByTagName()
   let  monthlySalary= salaryLis[0]?.textContent?.trim()
   let  minimumEducation= salaryLis[2]?.textContent?.trim()
   let  releaseDate= salaryLis[5]?.textContent?.trim()

   let  numberRecruits= salaryLis[4]?.textContent?.trim()
   let  source= document.getElementsByClassName("source-sp")[0]?.textContent?.trim()
   
   let  major= document.getElementsByClassName("major")[0]?.textContent?.trim()
    //  let  jobDescription= document.getElementsByClassName("bmsg job_msg inbox")[0]?.textContent?.trim()
    //  source-sp
    // mainContent mainContent
    // let  jobDescription= document.getElementsByClassName("mainContent mainContent-geshi")[0]?.textContent?.trim()
    let  jobDescription= document.getElementsByClassName("mainContent")[0]?.textContent?.trim()
    //  let  placeparts= document.getElementsByClassName("msg ltype")[0]?.textContent?.trim().split('|')
    //  let  placeWork=placeparts[0]
    
    // let  companyIndustry= document.getElementsByClassName("show fr")[0]?.textContent?.trim()
    // industrySectors
    // mainindustries
    let  companyIndustry= document.getElementById("mainindustries")?.textContent?.trim()
    // CompanySize
    let  companyIntroduction= document.getElementById("industrySectors")?.textContent?.trim()

    let  placeWork= document.getElementsByClassName("site-tag")[0]?.textContent?.trim()
    //  site-tag
  
    //  let  typeRecruitment=placeparts[1]
  
    //  let  minimumEducation=placeparts[2]
  
    //  let  releaseDate=placeparts[3]
     let  depart= document.getElementsByClassName("bmsg inbox")[0]?.textContent?.trim()
     
     let  companyNature= document.getElementsByClassName("com_tag")[0]?.textContent?.trim()
  
    //  let  companyIntroduction= document.getElementsByClassName("tmsg inbox")[0]?.textContent?.trim()
  //    com_name 
     let  companyName= document.getElementsByClassName("com_name")[0]?.textContent?.trim()
  
     
     let  companyUser= document.getElementsByClassName("company-user")[0]?.textContent?.trim()
  //    法定代表人
  // 
  companyUser=  companyUser?.replace('法定代表人',"")
     let  resTime= document.getElementsByClassName("res-time")[0]?.textContent?.trim()
  //    成立日期
  resTime=resTime?.replace('成立日期',"")
  //    firstChild.nodeValue 是获取本节点的text文本，不包含子节点的。
  // let  companyType=   document.getElementsByClassName("company-type")[0]?.firstChild?.nodeValue 
  // 企业类型
  //    let  companyTypeDomChildren= document.getElementsByClassName("company-type")[0]?.children
  //    console.log("companyTypeDomChildren");
  //    console.log(companyTypeDomChildren);
  //    let  companyTypeDom= document.getElementsByClassName("company-type")[0]?.children[1]
  //    console.log("companyTypeDom");
  //    console.log(companyTypeDom);
  let  companyType=  document.getElementsByClassName("company-type")[0]?.textContent?.trim()
  
  //    let  companyType=  document.getElementsByClassName("company-type")[0]?.children[1]?.textContent?.trim()
     companyType=  companyType?.replace('企业类型',"")
  //    let  companyType= document.getElementsByClassName("company-type")[0]?.textContent?.trim()
  
  let  manageState=  document.getElementsByClassName("manage-state")[0]?.textContent?.trim()?.replace('经营状态',"")
  //    companyType=  companyType.replace('企业类型',"")
  //    job-sec-text fold-text
  // class="company-fund"
  let  companyFund=  document.getElementsByClassName("company-fund")[0]?.textContent?.trim()?.replace('注册资金',"")
  
  // let  companyName=  document.getElementsByClassName("company-name")[0]?.textContent?.trim()?.replace('公司名称',"")
  // text-desc text-experiece
  let  workExperience=  document.getElementsByClassName("text-desc text-experiece")[0]?.textContent?.trim()
  // ?.replace('公司名称',"")
  // salary
      
//   let  monthlySalary=  document.getElementsByClassName("salary")[0]?.textContent?.trim()
  
  // let  placeWork=  document.getElementsByClassName("text-desc text-city")[0]?.textContent?.trim()
  
  let  jobTags=  document.getElementsByClassName("job-tags")[0]?.innerHTML?.trim()
  
  let  jobStatus=  document.getElementsByClassName("job-status")[0]?.textContent?.trim()
  
  let  hrName=  document.getElementsByClassName("name")[0]?.textContent?.trim()
  
  let  bossInfo=  document.getElementsByClassName("boss-info-attr")[0]?.textContent?.trim()
//   companyNameMap
  let  detailedPlaceWork=  document.getElementById("companyNameMap")?.textContent?.trim()
//   corpFeel
  let  companyLink=  document.getElementById("corpFeel")?.href

//   let nowIdx= getNowIdx()
//    postData(`http://localhost:8003/api/jobLink/getByIdx`, { idx: nowIdx })
// .then(data => {
//   console.log(data);
// //   data.response
//    let jobLinkNow=  data.response.jobLink
//    let  jobLinkObjNow= data.response
//    downloadAndNext(jobLinkObjNow)
// })

          let idxIntNext = genNextIdx()
          console.log("idxIntNext");
          console.log(idxIntNext);
        //   let startIdx=200
          let startIdx=0
        //   idxIntNext-=startIdx
      
          // let  linkList
          let  detailLinkList=jobLinkLst243
          let link= detailLinkList[idxIntNext-startIdx-1]

        //   corpFeel
        //  let link= detailLinkList[idxIntNext-1]
      //    let  typeRecruitment=placeparts[1]
  
      //    let  minimumEducation=placeparts[2]
      
      //    let  releaseDate=placeparts[3]
      //    let  depart= document.getElementsByClassName("bmsg inbox")[0]?.textContent?.trim()
         
      //    let  companyNature= document.getElementsByClassName("com_tag")[0]?.textContent?.trim()
  
    //   let  numberRecruits= salaryLis[4]?.textContent?.trim()
    //   let  source= document.getElementsByClassName("source-sp")[0]?.textContent?.trim()
      
    //   let  major= document.getElementsByClassName("major")[0]?.textContent?.trim()
         let  obj={
            companyLink,
            detailedPlaceWork,
            natureWork,
            companyIndustry,
            numberRecruits,
            source,
            major,
          typeRecruitment,
          minimumEducation,
          releaseDate,
          depart,
          companyNature,
          jobTitle,
          jobDescription,
          companyIntroduction,
          companyUser,
          resTime,
          companyType,
          manageState,
          companyFund,
          id,
          link,
          companyName,
          workExperience,
          monthlySalary,
          placeWork,
          jobTags,
          jobStatus,
          hrName,
          bossInfo
      
         }
      //    子节点 的 值 没有孙子节点的 js 
          // let resMap = toTextList(classNameInfoMap)
          // let resList = toResList(resMap)
          // console.log("resList");
          // console.log(resList);
          console.log("obj");
          console.log(obj);
  
        //  downloadTxt(`qianCheng_detail_${id}_idx_${idxIntNext-1}.json`, JSON.stringify(obj))
         downloadTxt(`school_24_detail_${id}_idx_${idxIntNext-1}.json`, JSON.stringify(obj))
         let lstIdx=idxIntNext-startIdx
         console.log("detailLinkList.length");
         console.log(detailLinkList.length);
          if (lstIdx >= detailLinkList.length) {
              return
          }
        //   if (idxIntNext >= detailLinkList.length) {
        //     return
        // }
        let contentIdNext = detailLinkList[lstIdx]

        //   let contentIdNext = detailLinkList[idxIntNext]

        //   let contentIdNext = detailLinkList[idxIntNext]
          console.log("contentIdNext");
          console.log(contentIdNext);
          // detailLinkList
          // let nextLink =`${contentIdNext}/&idx=${idxIntNext}`
          // let nextLink =`${contentIdNext}/idx=${idxIntNext}`
          let nextLink = `${contentIdNext}?idx=${idxIntNext}`
      
          console.log("nextLink");
          console.log(nextLink);

          // let waitMs=1000
          //  let waitMs=500
          // let waitMs = 20
          let waitMs = 2000
          // let nextLink = `http://career.zucc.edu.cn/job/search?title=&city=&d_skill=&d_industry=&d_major=&d_education=&d_category=&d_salary=&nature=&scale=&time=&page=${idxIntNext}&idx=${idxIntNext}`
          setTimeout(() => {
              window.location.href = nextLink
          }, waitMs)
      
  
  }


// jobDetailDownloadBoss
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
    else if (location_href.startsWith('https://www.nowcoder.com/exam/test')) {
        // 牛客网 - 找工作神器|笔试题库|面试经验|实习招聘内推，求职就业一站解决_牛客网
        // https://www.nowcoder.com/exam/test/67762537/detail?pid=48310220&examPageSource=Company&testCallback=https%3A%2F%2Fwww.nowcoder.com%2Fexam%2Fcompany&testclass=%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91
        let waitMs = 500
        setTimeout(() => {
            nowCoderGet()
        }, waitMs);
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
    } 
    // 'https://www.zhipin.com/job_detail/16f81d142be2954a1XB-2966E1RW.html?lid=9EToA2okvyo.search.271&securityId=VZEspRwv7i6B2-J1C0OOHSgBRnsMqEVwt5otRfOtEGX2IiD9dR5uDX-jXL-m95DNAzWrA5eeEiou0KfCJtDz3nmoI5GPoD1EQd_VpHsWVZ0YLXph2h8EIUWRa8Y_4K3gR1OcCQ-31yneS9EqTPBJjQ~~&sessionId='

    else if (location_href.startsWith('https://www.zhipin.com/job_detail')) {
        // location. 
        // http://career.zucc.edu.cn/job/view/id/1194903
        // let jobDetail =
        //     jobDetailGet()
        // jobDetail

        // downloadTxt(`jobDetail_${jobDetail.id}.json`, JSON.stringify(jobDetail))

        // let waitMs=1000
        let waitMs = 500
        setTimeout(() => {
            jobDetailDownloadBoss()

        }, waitMs);
    } 
  
    // nowCoderGet
    // 'https://jobs.51job.com/yancheng/141706707.html?s=sou_sou_soulb&t=0_1&req=c1191f782f43fd1ac6100723441a8d73&timestamp__1258=mq0x2DnDRWi%3DqGNDQiq0K0%3De6WfDu7iiYD&alichlgref=https%3A%2F%2Fwe.51job.com%2F'
    else if (location_href.startsWith('https://jobs.51job.com')) {
   
        let waitMs = 500
        setTimeout(() => {
            qianChengDetailDownload()
        }, waitMs);
    } 
//     else if (location_href.startsWith('https://www.ncss.cn/student/jobs')) {
//     let waitMs = 500
//     setTimeout(() => {
//         school_23365DetailDownload()
//     }, waitMs);
// } 
else if (location_href =='https://www.ncss.cn/student/jobs/index.html') {
    setTimeout(() => {
        get24365School()
    }, 5000);

}
else if (location_href.startsWith('https://www.kanzhun.com/search/') ) {
    setTimeout(() => {
        getKanZhunCompanyLink()
    }, 5000);
}
// https://www.onetonline.org/find/result?s=software+engineer
else if (location_href.startsWith('https://www.onetonline.org/find/result') ) {
    setTimeout(() => {
       OccupationKeywordSearch()
    }, 5000);
}
// https://www.zhihu.com/search?type=content&q=%E6%80%8E%E4%B9%88%E8%BF%9B%E5%A4%A7%E5%8E%82
else if (location_href.startsWith('https://www.zhihu.com/search') ) {

let CurBrowser=getCurBrowser()
if(CurBrowser!="Chrome"){
    return
}

const explorer = navigator.userAgent;
console.log("explorer");
console.log(explorer);

if(explorer.indexOf("Edg") >= 0){
    return
}

    let waitMs=3000
   
    setTimeout(() => {
        // zhiHuGet()
    }, waitMs);
}
else if (location_href.startsWith('https://www.zhihu.com/question') ) {
    // https://www.zhihu.com/question/23671661/answer/2872873481
// let CurBrowser=getCurBrowser()
// if(CurBrowser!="Chrome"){
//     return
// }

    let waitMs=3000
    setTimeout(() => {
        zhihu_ans_download()
    }, waitMs);
}
// zhihu_ans_download
// zhiHuGet
else if (location_href.startsWith('https://huggingface.co/')
&&
strIsIn('tree/',location_href) ) {
    
    let   btnsBar= document.getElementsByClassName('container relative ')[0]
    // new Dom 
    // 插入一个新的 button js 
    // var button = "<a role='button' id="+jinfo[i].id+" onclick='function(this.id)'><i class='icon-edit'></i></a>";
    // window.hugDown()
    var button =  `<button onclick='hugDown()'> hugDown </button>`
    btnsBar.innerHTML += button;
    window.hugDown=hugDown

    // 创建一个 script 标签
const script = document.createElement('script');
script.type = 'text/javascript';


// 设置要执行的 JavaScript 代码
script.innerHTML = `
  // 这里是你要执行的 JavaScript 代码
  
`;

console.log("chrome");
console.log(chrome);
console.log("chrome.tabs");
console.log(chrome.tabs);

// "js/hugDown.js",
// chrome.tabs?.executeScript({ file: "js/hugDown.js" }, function() {
//     console.log("Content script executed.");
//   });

// 将 script 标签添加到 head 元素中
// document.head.appendChild(script);

// MyDiv.innerHTML += button;
    // btnsBar.appendChild()
    // document.getElementsByClassName('container relative ')[0].style.position = 'relative'
    // container relative 
    // document.getElementByClassNam()
    let waitMs=3000
    setTimeout(() => {
        hugDown()
    }, waitMs);
}

else if (location_href.startsWith('http://zjks.rlsbt.zj.gov.cn/col') ) {
    setTimeout(() => {
        kaoBianLinkGet()
    }, 5000);
}
// http://zjks.rlsbt.zj.gov.cn/col
// hugDown
// 15-1243.00 - Database Architects
// https://www.onetonline.org/link/summary/15-1243.00
else if (location_href.startsWith('https://www.onetonline.org/link/summary') ) {
    setTimeout(() => {
        onetonlineGet()
    }, 3000);
}
// 'https://chat.openai.com/chat'
else if (location_href.startsWith('https://chat.openai.com/chat') ) {
    // setTimeout(() => {
    //     // questionListQuery()
    //     questionListQueryAll()
    // }, 6000);
}
else if (location_href.startsWith('https://gitee.com')) {
    setTimeout(() => {
        giteeGithubLinkGet()
        // giteeFileDown()
    }, 1000); 
    
    setTimeout(() => {
        giteeFileDown()
    }, 2000);

}
else if (location_href.startsWith('https://www.nowcoder.com/search/all')) {
    setTimeout(() => {
        nowCoderCrawler()
    }, 1000); 
}
else if (location_href.startsWith('https://www.nowcoder.com/discuss')
||location_href.startsWith('https://www.nowcoder.com/feed/main/detail')) {
    setTimeout(() => {
        nowCoderAnsCrawler()
    }, 1000); 
}
// nowCoderAnsCrawler
// nowCoderCrawler
// giteeFileDown
// else if (location_href.startsWith('https://gitee.com/') ) {
   
// }
// btn-sync-from-github
// questionListQuery
// onetonlineGet
// 'https://www.onetonline.org/find/result?s=software+engineer'
// 'https://www.kanzhun.com/firm/wage/0Xx-29m_.html?ka=com-salary-module-expose'
// 'https://www.kanzhun.com/firm/wage'


else if (location_href.startsWith('https://www.kanzhun.com/firm') ) {
    // 防止爬虫 10个就不行了 
    // 10000 100 被封锁 
    // setTimeout(() => {
    //     kanZhunSalary()
    // }, 30000);
}


// kanZhunSalary
// 'https://www.kanzhun.com/search/?query=%E5%9F%8E%E4%BA%91%E7%A7%91%E6%8A%80(%E4%B8%AD%E5%9B%BD)%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8&type=0'
// 'search.gitee.com'
else if (location.host =='search.gitee.com') {
    setTimeout(() => {
        giteeLinkIgnore()
    }, 1000);

}

// giteeLinkIgnore
    // 'https://www.ncss.cn/student/jobs/F6641B14AFD40166E0530A010016B4F5/detail.html'
    // qianChengDetailDownload
    else if (location.host == 'career.zucc.edu.cn') {
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
    else if (location.host =='24365.zj.smartedu.cn') {
        setTimeout(() => {
            // get24365()
            // ok 
            get24365ByIndex()
        }, 5000);

    }
    // 'https://www.ncss.cn/student/jobs/index.html'
    // else if (location.host =='www.ncss.cn') {
    //     setTimeout(() => {
    //         get24365School()
    //     }, 5000);

    // }

    else if (location_href.startsWith('https://www.ncss.cn/student/jobs')) {
        let waitMs = 500
        setTimeout(() => {
            school_23365DetailDownload()
        }, waitMs);
    } 

    // 'www.ncss.cn'
   
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

function firstLinkListGetFromIdx(className,fromIdx=0){
    let hrefList = []
    let linkDoms = document.getElementsByClassName(className)
    console.log("linkDoms");
    console.log(linkDoms);

    for (let i = fromIdx; i < linkDoms.length; i++) {
        let href = linkDoms[i].getElementsByTagName('a')[0].href
        hrefList.push(href)
    }
    return hrefList
}


/**
 * 
 * lis  的 texts
 * @param {} lis 
 * @returns 
 */
function getLiTextList(lis){

    let resList=[]
    for(let i=0;i<lis.length;i++){
       
        resList.push(
            lis[i].textContent?.trim()
        )
    }
    return resList
}

function  listContains(lst,target){
    for(let i=0;i<lst.length;i++){
        if(lst[i]==target){
            return true
        }
    }
    return false
//    return  lst.indexOf(target) != -1  
}
function zhiPinGetOne(){
    console.log('qianCheng start');
    let classNameInfoMap = {
        // "job-card-left": "href",
        // "company-name": "companyName",
        // "job-title clearfix": "jobTitle",
        // "salary": "salary",
        'postName elli': "postName",
        // companyIndustry
        'company-tag-list': "companyTagList",
        // company-tag-list
        'compName': "compName",
        'pay': "pay",
        'postMsg': "postMsg",
        'compMsg elli': "compMsg",
        // 'label': "label",
        'label': "companyIndustry",
        "jname at":"jobName",
        "sal":"salary",
        "sal":"monthlySalary",

        "d at":"jobDetail",
        "er":"companyName",
        "job-name":'jobName',
        "job-name":'jobTitle',
        // 'job-area':"jobArea",
        'job-area':"detailedPlaceWork",
        'job-area':"placeWork",
        // monthlySalary
        // detailedPlaceWork
        'company-name':"companyName",
        'salary':'salary',
        // "tag-list":"tagList",
'info-public':"infoPublic",
"info-desc":"infoDesc"
    }

    // let classNames = [
    //     'postName elli',
    //     'compName', 'pay', 'postMsg', 'compMsg elli',
    //     'label'
    // ]

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
    // jobLink
    let linkName="jobLink"

    // let linkName="linkToDetail"
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
        let href = tagListArr[i].innerHTML?.trim()
        tagListArrTexts.push(href)
        tagTextListList.push(tagTextList)
    }

    let  keyIndexMap={
        'companyIntroduction':0,
        'companyNature':1,
        'CompanySize':2,
        
    }

    let  textsMap={
        'companyIntroduction':[]
    }

 
    for(let key in keyIndexMap){
        resMap[key] = {}
        // textsMap[key] = []
        resMap[key].texts =[]
        // resMap[key].texts = tagTextListList
    }
    let companyTagListRes=[]
    let  companyIntroductionList=[]
    let companyTagListArr = document.getElementsByClassName('company-tag-list')
    for (let i = 0; i < companyTagListArr.length; i++) {
        let companyTagList= companyTagListArr[i]
        let lis= companyTagList.getElementsByTagName('li')
       let tagTextList= getLiTextList(lis)
        // let href = tagListArr[i].innerHTML.trim()
        // tagListArrTexts.push(href)
        // tagTextListList.push(tagTextList)
    //    let  companyIntroduction= tagTextList[0]?.trim()
    //    let  companyNature= tagTextList[1]?.trim()
    //    let  CompanySize= tagTextList[2]?.trim()
    //    companyIntroductionList.push(companyIntroduction)
        companyTagListRes.push(tagTextList)

        for(let key in keyIndexMap){
            // resMap[key] = {}
            // textsMap[key] = []
            let idx=keyIndexMap[key]
            resMap[key].texts.push(    tagTextList[idx]?.trim())
            // textsMap[key] .push(    tagTextList[idx]?.trim())
            // resMap[key].texts = tagTextListList
        }
    }

    // company-tag-list
    // document.getElementsByClassName('tag-list')
    // resMap[linkName].texts = firstLinkListGet('company-name')
    resMap[tagListKey] = {}
    resMap[tagListKey].texts = tagListArrTexts
    let tagTextListKey="tagList"
    resMap[tagTextListKey] = {}
    resMap[tagTextListKey].texts = tagTextListList
    // resMap["tagTextListList"] = {}
    // resMap["tagTextListList"].texts = tagTextListList
    // resMap["tagTextListList"] = {}
    // resMap["tagTextListList"].texts = tagTextListList
    // companyTagListRes
    // for(  let  tagTextListList of   resMap["tagTextListList"].texts){
    //     tagTextListList.split('|')
    // }
    // 'company-tag-list': "companyTagList",
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
    // List.indexOf("str") != -1  
//  .conta 
    let  isDisabled= listContains(   nextBtn.classList,"disabled")
    if(isDisabled){
        return 
    }
// js 列表 contains 
    // .classList.add("mystyle");
    // nextBtn.getClassList
    // disabled
//   let d=   document.getElementsByClassName('disabled')
    // .click()
    // document.getElementsByClassName('options-pages')[0].getElementsByTagName('a')[0].click()
        // console.log("nextBtn");
        // console.log(nextBtn);
        nextBtn?.click()
        setTimeout(() => {
            zhiPinGetOne()
        }, 10000);
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


// 'https://www.zhipin.com/job_detail/16f81d142be2954a1XB-2966E1RW.html?lid=9EToA2okvyo.search.271&securityId=VZEspRwv7i6B2-J1C0OOHSgBRnsMqEVwt5otRfOtEGX2IiD9dR5uDX-jXL-m95DNAzWrA5eeEiou0KfCJtDz3nmoI5GPoD1EQd_VpHsWVZ0YLXph2h8EIUWRa8Y_4K3gR1OcCQ-31yneS9EqTPBJjQ~~&sessionId='
/**
 *    // let  keywordInput
    // 需要爬取一个新的 网站的话 基本只要修改这里的 class 和 最后一个obj里面的key名字的map关系
    // 因为 要存入数据库 obj的key尽量要好看一点 符合命名规范 所以写成了 小驼峰的形式
    // 这种是每个class 就代表一个textContent 简单的方法 如果复杂 还是要写具体逻辑

     // 这里就是具体逻辑 因为class 获取 textContent 的方法不够 一般是要获取a 的href ，
    // 或者一些li 每个都是一个text 需要变成一个列表 ，于是具体写一下 放到 resMap里面 
    // 比如 resMap["href"] = {}
    // resMap["href"].texts = hrefList
    // 这样最终 href 也是obj里面的一个字段了
 */
function qianChengGetOne(){
    console.log('qianCheng start');
    
    
    // let  keywordInput
    // 需要爬取一个新的 网站的话 基本只要修改这里的 class 和 最后一个obj里面的key名字的map关系
    // 因为 要存入数据库 obj的key尽量要好看一点 符合命名规范 所以写成了 小驼峰的形式
    // 这种是每个class 就代表一个textContent 简单的方法 如果复杂 还是要写具体逻辑
    let classNameInfoMap = {
        // "job-card-left": "href",
        // "company-name": "companyName",
        // "job-title clearfix": "jobTitle",
        // "salary": "salary",
        // companyName
        'postName elli': "postName",
        // 'compName': "compName",
        // 'compName': "companyName",
        
                'cname at': "companyName",
// 'cname at'
'dc at': "companyDesc",
// d at
// 'dc at': "companyName",
// companyIndustry
        // 'pay': "pay",
        'pay': "monthlySalary",
        // monthlySalary
        'postMsg': "postMsg",
        // companyIntroduction
        'compMsg elli': "companyIntroduction",

        // 'compMsg elli': "compMsg",
        'label': "label",
        "jname at":"jobName",
        "sal":"salary",
        // "d at":"jobDetail",
        "d at":"jobDescription",
        // detailedPlaceWork
        "d at":"detailedPlaceWorkInfo",

        // jobDescription
        // "er":"companyName",
        // "int at":"trade",
        "int at":"companyIndustry",

        // companyIndustry
        // 行业 
        "time":'releaseDate'

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
    // 这里就是具体逻辑 因为class 获取 textContent 的方法不够 一般是要获取a 的href ，
    // 或者一些li 每个都是一个text 需要变成一个列表 ，于是具体写一下 放到 resMap里面 
    // 比如 resMap["href"] = {}
    // resMap["href"].texts = hrefList
    // 这样最终 href 也是obj里面的一个字段了
    let hrefList = []
    let linkDoms = document.getElementsByClassName('list_l')
    for (let i = 0; i < linkDoms.length; i++) {
        let href = linkDoms[i]?.getElementsByTagName('a')[0]?.href
        hrefList.push(href)
    }
    let companyLinkList = []
    // let companyLinkDoms = document.getElementsByClassName('cname at')
    
    let companyLinkDoms = document.getElementsByClassName('er')

    for (let i = 0; i < companyLinkDoms.length; i++) {
        let href = companyLinkDoms[i]?.getElementsByTagName('a')[0]?.href
        companyLinkList.push(href)
        // companyLink.push(href)

        // companyLinkList
    }
    resMap["companyLink"] = {}
    resMap["companyLink"].texts = companyLinkList
    // cname at
    resMap["href"] = {}
    resMap["href"].texts = hrefList

    let jumpLinkList = []
    let els = document.getElementsByClassName('el')
    for (let i = 0; i < els.length; i++) {
        let href = els[i].href
        jumpLinkList.push(href)
    }
    // firstLinkListGetFromIdx('el',0)
    // getLiTextList
    let  jobLinkKey='jobLink'
    resMap["jumpLink"] = {}
    resMap["jumpLink"].texts =   jumpLinkList

    resMap[jobLinkKey] = {}
    resMap[jobLinkKey].texts =   jumpLinkList
    // jobLink
// 

let  detailedPlaceWorkList=[]
// typeRecruitment
let  typeRecruitmentList=[]
let  minimumEducationList=[]
for(let detailedPlaceWorkInfoObj of resMap['detailedPlaceWorkInfo'].texts){
   let infoList= detailedPlaceWorkInfoObj.split('|')
//   let  dd= infoList[0]
console.log("infoList");
console.log(infoList);
  detailedPlaceWorkList.push(infoList[0])
  typeRecruitmentList.push(infoList[1])
  minimumEducationList.push(infoList[2])

}

resMap['detailedPlaceWork'] = {}
resMap['detailedPlaceWork'].texts =   detailedPlaceWorkList

resMap['typeRecruitment'] = {}
resMap['typeRecruitment'].texts =   typeRecruitmentList

resMap['minimumEducation'] = {}
resMap['minimumEducation'].texts =   minimumEducationList

// companyDesc

let  companyNatureList=[]
// companyNature
// typeRecruitment
let  CompanySizeList=[]
// CompanySize
// let  minimumEducationList=[]
// companyDesc":"民营  |  1000-5000人
for(let detailedPlaceWorkInfoObj of resMap['companyDesc'].texts){
   let infoList= detailedPlaceWorkInfoObj.split('|')
//   let  dd= infoList[0]
console.log("infoList[0]");
console.log(infoList[0]);
console.log("infoList[1]");
console.log(infoList[1]);
companyNatureList.push(infoList[0]?.trim())
CompanySizeList.push(infoList[1]?.trim())
//   minimumEducationList.push(infoList[2])

}

resMap['companyNature'] = {}
resMap['companyNature'].texts =  companyNatureList

resMap['CompanySize'] = {}
resMap['CompanySize'].texts =   CompanySizeList

// detailedPlaceWorkInfo
    console.log("resMap");
    console.log(resMap);
    let resList = toResList(resMap)
    console.log("resList");
    console.log(resList);

    // number active
    let   keywordInputVal= document.getElementById('keywordInput').value
  let pageIndex=   document.getElementsByClassName('number active')[0].textContent
  downloadTxt(`qianCheng_page_${pageIndex}_${keywordInputVal}.json`, JSON.stringify(resList))


    let  nextBtn= document.getElementsByClassName('btn-next')[0]

    // nextBtn.bi 
    let  disabled=nextBtn.getAttribute('disabled')
    if(disabled=='disabled'){
        console.log("disabled");
        return false
    }
    // disabled="disabled"
        console.log("nextBtn");
        console.log(nextBtn);
        nextBtn.click()
        // return true

        setTimeout(() => {
            qianChengGetOne()
         
        }, 10000);

}

/**
 * boss 直聘 只能10页面
 */
function zhiPinGetAll() {
   
    // let pageNum=111
    zhiPinGetOne()


    // let pageNum=10
    // for(let i=0;i<pageNum;i++){
    //     setTimeout(() => {
    //         zhiPinGetOne()
          
    //     }, 10000*i);
    //     // 这里可以加快 我故意设置的慢点的 不知道多块 会被封
    // }

    // document.getElementsByClassName('btn-next')[0].click()

    // list_l
}

/**
 * 前程无忧  因为他可以往后好多页数 可能可以100个，但是boss 只能10页  所以要给出搜索的关键词
 * 每个关键词 一个连接 贴到 浏览器上 有5个连接 5个tab的话，每个tab都是在爬取一个关键词（一个职位的）的信息
 * 这样也算是并发了。boss 不登陆也是可以爬取的，前程无忧也可以不登陆
 * 
这是一些连接的示例  可以 直接贴在浏览器上 或者改一下关键词
文档：这是一些连接的示例  可以 直接贴在浏?..
链接：http://note.youdao.com/noteshare?id=6d58716a94e2622d8e11f16af00fa976

 */
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
    qianChengGetOne()


    // let pageNum=111
    // for(let i=0;i<pageNum;i++){
    //     setTimeout(() => {
    //         qianChengGetOne()
    //         // let  nextBtn= document.getElementsByClassName('btn-next')[0]
    
    //         // console.log("nextBtn");
    //         // console.log(nextBtn);
    //         // nextBtn.click()
    //     }, 10000*i);
    //     // 这里可以加快 我故意设置的慢点的 不知道多块 会被封
    // }

    // document.getElementsByClassName('btn-next')[0].click()

    // list_l
}


/**
 * // 废弃的方法
 */
function qianChengDup() {
    // el
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

        let jobTitle = jobTitles[i].textContent?.trim()
        let companyName = companyNames[i].textContent?.trim()
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

function getLink(value){
    let  as =value.getElementsByTagName('a')
    if(!as){
        return null
    }
    console.log("as");
    console.log(as);
    // "<div class="card-view"><span class="title" style="text-align: center; width: 30px; ">单位名称</span><span class="value"><a href="/jyxt-v5/sczp/zpztgl/ckZpgwList.zf?dwxxid=JG1020160" target="_blank">杭州泽佳网络科技有限公司</a></span></div><div class="card-view"><span class="title" style="text-align: center; width: 60px; ">岗位名称</span><span class="value"><span class="value">护肤品微信销售</span></span></div><div class="card-view"><span class="title" style="text-align: center; width: 10px; ">发布时间</span><span class="value">2023-03-09</span></div>"

   let  href=  as[0]?.href
   return href
}

function getCardViewsData(cardViews){
    let   values= cardViews.getElementsByClassName('value')
    let res=[]
    for(let i=0;i<values.length;i++){
        // values[i]
        res.push(values[i].textContent?.trim())
    }
    return res
}
// http://24365.zj.smartedu.cn/
function get24365(){
    let  tabGrid=document.getElementById('tabGrid')
    // card-views
    let  values=document.getElementsByClassName('value')
    let  cardViewsList=document.getElementsByClassName('card-views')
    let objList=[]
    for(let i=0;i<cardViewsList.length;i++){
        let value=cardViewsList[i]
       
        objList.push( value.innerHTML)
       let  res= getCardViewsData(value)
       console.log(res);
    //   let   values= value.getElementsByClassName('value')
        // value 
        // let  text=value.textContent.trim()
//         console.log(text);
//         if(idx==0){
//             obj={}
//             console.log("value");
//             console.log(value);

//             // let  as =value.getElementsByTagName('a')
//             // if(!as){
                
//             // }
//             let  href=   getLink(value)
//         //    let  href=  value.getElementsByTagName('a')[0].href
//             obj.companyName=text
//             obj.href=href
//         }
//    else      if(idx==1){
//             obj.postName=text
//         }
//         else      if(idx==2){
//             obj.publishDate=text
//             objList.push(obj)
//         }
     
//         // if(i%)
//         idx++
//         if(idx==3){
//             idx=0;
//         }
    }
    let idx=0
    let obj={}
    let objIdx=0

//     for(let i=0;i<values.length;i++){
//         let value=values[i]
//         let  text=value.textContent.trim()
//         console.log(text);
//         if(idx==0){
//             obj={}
//             console.log("value");
//             console.log(value);

//             // let  as =value.getElementsByTagName('a')
//             // if(!as){
                
//             // }
//             let  href=   getLink(value)
//         //    let  href=  value.getElementsByTagName('a')[0].href
//             obj.companyName=text
//             obj.href=href
//         }
//    else      if(idx==1){
//             obj.postName=text
//         }
//         else      if(idx==2){
//             obj.publishDate=text
//             objList.push(obj)
//         }
     
//         // if(i%)
//         idx++
//         if(idx==3){
//             idx=0;
//         }
//     }
    console.log("objList");
    console.log(objList);

}

function get24365School(){

    // fl first-ul
//    let  jobNamePart= document.getElementsByClassName('fl first-ul')[0]
   let  jobNameParts= document.getElementsByClassName('fl first-ul')
   let  companyUls= document.getElementsByClassName('company-ul')
   
   let  companyLinks= document.getElementsByClassName('company-name basic-color')
   
   let  mainAreaSpans= document.getElementsByClassName('main-areaspan ')
//    main-areaspan hide
   console.log("companyLinks.length");
   console.log(companyLinks.length);
   console.log("mainAreaSpans.length");
   console.log(mainAreaSpans.length);

//    class="time-sp"
let  releaseDate= document.getElementsByClassName('time-sp')?.textContent?.trim()

   let  resList=[]

    for(let i=0;i<jobNameParts.length;i++){
    let jobNameDom=  jobNameParts[i]
    // console.log(companyLinks[i]);
  let  companyLink=  companyLinks[i]?.href
    // let  jobName= jobNameDom.getElementsByTagName('h5')[0].textContent.trim()
    let companyUl=  companyUls[i]
   let h5Dom=  jobNameDom.getElementsByTagName('h5')[0]
   let jobLink=  h5Dom.getElementsByTagName('a')[0]?.href
   let  jobTitle= h5Dom.textContent.trim()
    // let  jobTitle= jobNameDom.getElementsByTagName('h5')[0].textContent.trim()
    // jobName
    let  mainAreaSpan= mainAreaSpans[i]
    // mainAreaSpan.classList.remove('hide')
    let mainArea="重点领域"
    let  isHidden= listContains(mainAreaSpan.classList,'hide')

    if(isHidden){
        mainArea="非重点领域"
    }
  
//    let mainArea=  mainAreaSpans[i].textContent.trim()
   let  lis=   jobNameDom.getElementsByTagName('li')
   let  parts= lis[0].textContent.split('|')
   let  minimumEducation=parts[0]?.trim()
   let  monthlySalary=parts[1]?.trim()
   let  areaParts=  lis[1].textContent.split('|')
   let placeWork=areaParts[0]?.trim()
   let subject=areaParts[1]?.trim()
 let  companyLis=  companyUl.getElementsByTagName('li')
 let  companyNameDom= companyLis[0]
 let companyIntroductionDom=  companyLis[1]
//  companyName
  let  companyName= companyNameDom.textContent?.trim()
  let companyIntroductionTextParts= companyIntroductionDom.textContent.split('|')
  let companyNature= companyIntroductionTextParts[0]?.trim()
  let CompanySize= companyIntroductionTextParts[1]?.trim()

  let numberRecruits= companyIntroductionTextParts[2]?.trim()

  let detailedPlaceWork=placeWork
//    companyLis[0].textContent.trim()
// let  companyLink=  companyNameDom.getElementsByTagName('h5')[0].getElementsByTagName('a')[0].href
//    subject
// company-ul
   resList.push({
    detailedPlaceWork,
    mainArea,
    jobLink,
    minimumEducation,
    monthlySalary,
    // jobName,
    jobTitle,
    subject,
    placeWork,
    companyName,
    companyLink,
    companyNature,
    CompanySize,
    numberRecruits,
    releaseDate
   })

    // li
   }

   console.log("resList");
   console.log(resList);
 let   pageIndex=document.getElementsByClassName('pageactive')[0]?.textContent?.trim()
//  let waitMs=2000
 let waitMs=3000
 if(pageIndex<20){
    waitMs=5000
 }
   downloadTxt(`24265_school_page_${pageIndex}.json`, JSON.stringify(resList))
   document.getElementsByClassName('next')[0]?.click()
   setTimeout(() => {
    get24365School()
   }, waitMs);
//    1000
    // document.getElementsByClassName('fl first-ul')[0].getAttribute
}
function get24365ByIndex(){
    let  tabGrid=document.getElementById('tabGrid')
    // card-views
    let  values=document.getElementsByClassName('value')
    let  cardViewsList=document.getElementsByClassName('card-views')
    let objList=[]
    for(let i=0;i<cardViewsList.length;i++){
        let value=cardViewsList[i]
       
        // objList.push( value.innerHTML)
        // let  text=value.textContent.trim()
//         console.log(text);
//         if(idx==0){
//             obj={}
//             console.log("value");
//             console.log(value);

//             // let  as =value.getElementsByTagName('a')
//             // if(!as){
                
//             // }
//             let  href=   getLink(value)
//         //    let  href=  value.getElementsByTagName('a')[0].href
//             obj.companyName=text
//             obj.href=href
//         }
//    else      if(idx==1){
//             obj.postName=text
//         }
//         else      if(idx==2){
//             obj.publishDate=text
//             objList.push(obj)
//         }
     
//         // if(i%)
//         idx++
//         if(idx==3){
//             idx=0;
//         }
    }
    let idx=0
    let obj={}
    let objIdx=0

    for(let i=0;i<values.length;i++){
        let value=values[i]
        let  text=value.textContent.trim()
        console.log(text);
        if(idx==0){
            obj={}
            console.log("value");
            console.log(value);

            // let  as =value.getElementsByTagName('a')
            // if(!as){
                
            // }
            let  href=   getLink(value)
        //    let  href=  value.getElementsByTagName('a')[0].href
            obj.companyName=text
            obj.href=href
            obj.companyLink=href
            // companyLink
        }
   else      if(idx==1){
    
    obj.jobTitle=text
            obj.postName=text
        }
        else      if(idx==2){
            // obj.publishDate=text
            // objList.push(obj)
        }
        else      if(idx==3){
            
            obj.releaseDate=text

            obj.publishDate=text
            objList.push(obj)
        }
        // if(i%)
        idx++
        if(idx==4){
            idx=0;
        }
    }
    console.log("objList");
    console.log(objList);

    // downloadTxt()
   let pageIndex= document.getElementsByClassName('page-number active')[0].textContent?.trim()
    downloadTxt(`24265_page_${pageIndex}.json`, JSON.stringify(objList))

    // page-next
    document.getElementsByClassName('page-next')[0]?.click()
    setTimeout(() => {
        get24365ByIndex()
    },2000)
    // href="https://gitee.com/elegant-code-ge/ssm-xie-tong-filter-food-recommand?_from=gitee_search"

//     let  ignoreList=['https://gitee.com/elegant-code-ge/ssm-xie-tong-filter-food-recommand?_from=gitee_search']
//     // background-color: yellow;
//     // js dom 设置颜色
//     // document.getElementsByClassName('item')[0].style['background-color']="yellow"

//     // https://gitee.com/elegant-code-ge/ssm-xie-tong-filter-food-recommand?_from=gitee_search
//     // title
//  let  hitsList=   document.getElementById('hits-list')
//  let items=  hitsList.getElementsByClassName('item')
//  for(let i=0;i<items.length;i++){
//     let  item=items[i]
//     let link= item.getElementsByClassName('title')[0].getElementsByTagName('a')[0].href
//      let  linkShoudIgnore= isInLike(link,ignoreList)
//      if(linkShoudIgnore){
//         item .style['background-color']="yellow"
//      }
//  }
//  hitsList.getElementsByClassName('item')[0].style['background-color']="yellow"

    // document.getElementsByClassName('item')[0].style.backgroudcol="yellow"
   
}

// nowcoderLinkList
const nowCoderAnsCrawler=()=>{
    let  title=
    getTextContentByClassName('content-post-title')
    || getTextContentByClassName('tw-mb-5 tw-font-medium tw-text-size-title-lg-pure tw-text-gray-800')
    // 'tw-mb-5 tw-font-medium tw-text-size-title-lg-pure tw-text-gray-800'
    // 'tw-flex'
    let askContent=
    getTextContentByClassName('nc-post-content')
    ||  getTextContentByClassName('feed-content-text tw-text-gray-800 tw-mb-4 tw-break-all')
    console.log("askContent");
    console.log(askContent);

    // let  askContent=
    // getTextContentByClassName('feed-content-text tw-text-gray-800 tw-mb-4 tw-break-all')
    let  discussDoms=
    document.getElementsByClassName('vue-ellipsis-js-content')
    let  discussList=[]
    for(let i=0;i<discussDoms.length;i++){
        // let  discussDoms
        // discussDoms[i]
        let  discuss=
        getTextContent(discussDoms[i])
        discussList.push(discuss)
    }
    let res={
        title,
        askContent,
        discussList
    }

    console.log("res");
    console.log(res);

    let idx=
    getNowIdx()

  
    // nowcoderLinkList


   downloadTxt(`nowcoderAns_idx_${idx}.json`,JSON.stringify(res))
    nextLinkReplace(nowcoderLinkList)

}
// tw-cursor-pointer
const nowCoderCrawler=()=>{

    // 'tw-cursor-pointer'
  let  className_titleDoms='tw-overflow-hidden hover:tw-text-gray-700 tw-overflow-ellipsis tw-whitespace-nowrap tw-font-bold tw-text-lg tw-text-gray-800'
    let  titleDoms=
    document.getElementsByClassName(className_titleDoms)
    let resList=[]
    // vue-ellipsis-js feed-text-ellipsis tw-w-full
    // 'vue-ellipsis-js feed-text-ellipsis tw-w-full'
    let  contentDoms=
    document.getElementsByClassName('vue-ellipsis-js feed-text-ellipsis tw-w-full')
    for(let i=0;i<titleDoms.length;i++){
        let  titleDom=
        titleDoms[i]
        let title= getTextContent(titleDoms[i])
        console.log(title);
        let  linkDom=
        titleDom.getElementsByTagName('a')[0]
        let  contentLik=
        linkDom.href
        // let  
        // contentDoms[i]
        let content= getTextContent(contentDoms[i])
        resList.push({
            title,
            contentLik,
            content,
        })
    }

    // location.href
    console.log(resList);
    // downloadTxt(`nowcoder_${location.href}.json`, JSON.stringify(resList))

    downloadTxt(`nowcoder.json`, JSON.stringify(resList))
    let btnNext= document.getElementsByClassName('btn-prev')[1]
    // disabled
    let disabled=
    btnNext.getAttribute('disabled')
    if(disabled=='disabled'){
        return
    }
    console.log("btnNext");
    console.log(btnNext);

    btnNext.click()
    // disabled
    setTimeout(() => {
        nowCoderCrawler()
    }, 2000);
 
}
const giteeGithubLinkGet=()=>{
    // btn-sync-from-github
   let  btnSyncGithub= document.getElementById('btn-sync-from-github')
    // .click()
    let title= btnSyncGithub.getAttribute('title')
    console.log("title");
    console.log(title);

        // 创建一个新的 <div> 元素
var newDiv = document.createElement("div");

// 设置新元素的属性
newDiv.id = "myNewDiv";
newDiv.className = "new-div";
newDiv.innerHTML=title;
let recommendSelfDom=
document.getElementsByClassName('iconfont icon-recommend recommend-icon')[0]
let projTitleBar=
document.getElementsByClassName('git-project-title mt-0 mb-0')[0]

let parentDom=projTitleBar


// 获取要插入的节点元素
// var existingElem = document.getElementById("existing-elem");

// 将新元素添加到现有节点的末尾
// recommendSelfDom.appendChild(newDiv);
parentDom.appendChild(newDiv);

}

function giteeLinkIgnore(){
    let  ignoreList=['https://gitee.com/elegant-code-ge/ssm-xie-tong-filter-food-recommand?_from=gitee_search'
,"https://gitee.com/elegant-code-ge/ssm-food-recommendation-system-xietongguolv?_from=gitee_search"]
    // background-color: yellow;
    // js dom 设置颜色
    // document.getElementsByClassName('item')[0].style['background-color']="yellow"

    // https://gitee.com/elegant-code-ge/ssm-xie-tong-filter-food-recommand?_from=gitee_search
    // title
 let  hitsList=   document.getElementById('hits-list')
 let items=  hitsList.getElementsByClassName('item')
 for(let i=0;i<items.length;i++){
    let  item=items[i]
    let link= item.getElementsByClassName('title')[0].getElementsByTagName('a')[0].href
     let  linkShoudIgnore= isInLike(link,ignoreList)
     if(linkShoudIgnore){
        item .style['background-color']="yellow"
     }
 }
}

function putButton(){
    // ui horizontal list repo-action-list
    let  repoActionList= document.getElementsByClassName('ui horizontal list repo-action-list')
    // 在一个dom的左边插入 dom 
}
function alertWord(){
    alert("好活")
}
function strIsIn(smallStr,bigStr){
    return bigStr.includes(smallStr)
}

function isInLike(link,ignoreList){
for(let ignoreLink of ignoreList){
//  str 是不是在这个str 里面 js
    // str.includes('hello');
    // link 是长的呀 
    if(
        strIsIn(link,ignoreLink)
    ){
        return true
    }
   

    // strIsIn(ignoreLink,link)
// 
}
return false
}

// document.getElementsByClassName('middle')[0].

let  companys_doc=`
杭州浦联分公司杭州固恒能源科技有限公司
杭州微秦科技有限公司
华数传媒控股股份有限公司
浙江安澜工程技术有限公司
杭州超义实业有限公司
杭州哲达科技股份有限有限公司
东方通信股份有限公司
杭州志卓科技股份有限公司
杭州华海信息科技有限公司
杭州国电电力科技发展有限公司
杭州恒朴电子科技有限公司
浙江网新恒天软件有限公司
杭州大和热磁电子有限公司
杭州原创软件有限公司
浙江海拓环境技术有限公司
杭州万高科技股份有限公司
浙江诺益科技有限公司
浙江泰林生物技术股份有限公司
杭州智算科技有限公司
浙江环兴机械有限公司
高新兴创联科技有限公司
杭州宇树科技有限公司
杭州中谱科技有限公司
杭州玖欣物联科技有限公司
杭州联图科技有限公司
杭州旭展会展有限公司
杭州思太极工程咨询有限公司
浙江成功软件开发有限公司
杭州中立房地产土地评估规划咨询有限公司
杭州艾迪康医学检验中心有限公司
杭州诺辉健康科技有限公司
杭州一建保科技有限公司
杭州泽天春来科技有限公司
浙江安联检测技术服务有限公司
杭州艾诺半导体有限公司
苏州智康信息科技股份有限公司
杭州分公司浙江深大智能科技有限公司
杭州毫厘科技有限公司
杭州励德生物科技有限公司
浙江国正安全技术有限公司
杭州分公司中国空分工程有限公司
浙江省第一水电建设集团股份有限公司
浙江歌山品悦大酒店杭州咏柳科技有限公司
杭州佰邦房地产代理有限公司
杭州高谱成像技术有限公司
浙江科聪控制技术有限公司
杭州中赢生物医疗科技有限公司
浙江新博源生物科技有限公司
乙未 (杭州) 信息技术有限公司
7儿7T70号反实石月绿城农科检测技术有限公司
杭州先艺品牌管理有限公司
杭州滨江银泰喜来登大酒店杭州卓软科技有限公司
杭州梅清数码科技有限公司
杭州三个壹网络科技有限公司
杭州遇博科技有限公司
联碳新材料技术(杭州) 有限公司
智渡诺商业管理(杭州) 有限公司
科邦特化工(杭州)有限公司
杭州臣工医用空气净化技术有限公司
中天美好生活服务集团有限公司
杭州龙禧硅谷酒店有限公司
福朋喜来登酒店杭州滨江开元名都大酒店纳德世家股份公司
润泽园酒店广州天力物业发展有限公司
杭州分公司纳德世家股份公司浙江全通汽车维修有限公司
杭州日月电器股份有限公司
杭州宝盛道谷酒店有限公司
杭州灵山风情小镇旅游投资有限公司
杭州尚马智汇科技有限公司
杭州诺达国际旅行社有限公司
金碧物业有限公司杭州分公司
杭州冠寓投资管理有限公司
杭州万匠软件科技有限公司
杭州白马湖建国饭店杭州博物文化传播有限公司
杭州聚秀科技有限公司
杭州齐圣科技有限公司
杭州未来甄选生态农业开发有限公司
曙光信息产业股份有限公司
浙江融象数字科技有限公司
杭州和众科技管理有限公司
杰华特微电子股份有限公司
浙江哈尔斯真空器皿股份有限公司
浙江浙大网新图灵信息科技有限公司
杭州建设工程造价咨询有限公司
上海隧道工程有限公司
浙江分公司浙江汉林建筑设计有限公司
浙江喻利建筑工程有限公司
普蕊斯 (上海)医药科技开发股份有限公司
杭州柏嘉生物技术有限公司
杭州明仕医用技术有限公司
杭州月帆诗歌文化传播有限公司
杭州爱彼教育咨询有限公司
杭州拱墅区新航道专修学校杭州讲究文化创意有限公司
杭州焦点互联信息科技有限公司
杭州陆遥科技有限公司
杭州玛丽英语专修学校杭州她她文化创意有限公司
杭州下城区朗阁培训中心杭州优灿科技有限公司
浙江新东方培训学校有限公司
绿城物业服务集团有限公司
杭州第一分公司淘宝天下传媒有限公司
浙商食品集团有限公司
上海野舍酒店管理有限公司
杭州象外文旅发展有限公司
浙江游侠客国际旅行社有限公司
杭州友好饭店有限公司
君亭酒店集团股份有限公司
浙江皓石教育科技有限公司
康养旅千岛湖有限公司
逍遥洲际度假酒店北京安理(杭州) 律师事务所杭州橙愿文化策划有限公司
浙江六律律师事务所浙江浙商至樽酒业有限公司
浙江诚如律师事务所
国联证券股份有限公司
浙江分公司浙江建旅远成会展传媒有限公司
杭州翔天供应链管理有限公司
杭州问为广告有限公司
杭州艺景院文化创意有限公司
欧普照明股份有限公司
IFS Design杭州市邸璞装饰设计有限公司
浙江法易科技有限公司
小鹿会利士专限公司杭州圣域公关策划有限公司
杭州翎聚出海信息科技有限公司
杭州杭邸钟表有限公司
宁波银行股份有限公司
温州分行杭州益云益瞳教育科技有限公司
杭州亿恒科技有限公司
日华化学(中国)有限公司
绍兴柯桥最佑纺织品有限公司
良渚君澜度假酒店分公司
上海鹏龙兴元汽车销售服务有限公司
杭州分公司
西子电梯科技有限公司
杭州雅恩健康管理有限公司
杭州昱行暖通设备有限公司
杭州元尔艺术培训有限公司
京东方艺云科技有限公司
埃梯梯智慧水务科技有限公司
杭州汽轮铸锻有限公司
上海中电电子科技系统股份有限公司
浙江正大空分设备有限公司
杭州全盛机电科技有限公司
杭州华会通科技股份有限公司
浙江百诺数智环境科技股份有限公司
大华会计师事务所(特殊普通合伙) 浙江分所杭州市勘测设计研究院有限公司
航天科工广信智能技术有限公司
信雅达(杭州)计算机服务有限公司
杭州漫禾动漫有限公司
浙江方大通信有限公司
杭州市水务集团有限公司
杭州东忠科技股份有限公司
杭州松下马达有限公司
杭州中电安科现代科技有限公司
杭州全速网络技术有限公司
杭州万事利丝绸文化股份有限公司
杭州佑本动物疫苗有限公司
杭州金鱼电器集团有限公司
杭州联华华商集团有限公司
月ZDU/X_NTNI2浙江东南网架股份有限公司
耀华建设管理有限公司
浙江天煌科技实业有限公司
杭州博拓生物科技股份有限公司
立信会计师事务所(特殊普通合伙) 浙江分所南华期货股份有限公司
浙江同富特美刻家居用品股份有限公司
杭州得诚电力科技股份有限公司
杭州永磁集团有限公司
浙江爱生药业有限公司
浙江昌能规划设计有限公司
杭州吉网通信技术有限公司
浙江南方建筑设计有限公司
浙江江南工程管理股份有限公司
浙江手心制药有限公司
杭州智顺科技有限公司
杭州在信科技有限公司
宇航交通建设集团有限公司
杭州诗迈医药科技有限公司
浙江东南绿建集成科技有限公司
浙江绿能清洁能源有限公司
杭州嘉声视听科技有限公司
杭州市上城区大家艺术培训学校奥展实业股份有限公司
杭州新坐标科技股份有限公司
杭州长乔旅游投资集团股份有限公司
杭州西溪湿地运营管理有限公司
上海外服 (集团)有限公司
浙江分公司杭州文一教育发展有限公司
杭州市萧山区残疾人综合服务中心杭州小码教育科技有限公司
杭州上意文化艺术有限公司
杭州钱江养老服务中心杭州市中国旅行社集团有限公司
杭州龙砺智能科技有限公司
浙江华夏工程管理有限公司
浙江天平会计师事务所(特殊普通合伙)浙江奥通汽车有限公司
杭州广安汽车电器有限公司
滨江兄弟信息技术(杭州) 有限公司
招商局物业管理有限公司
杭州分公司浙江东风南方汽车销售服务有限公司
浙江之信汽车有限公司
杭州黄龙饭店有限公司
老百姓大药房连锁(浙江) 有限公司
杭州国电大力机电工程有限公司
浙江易时科技股份有限公司
杭州视芯科技股份有限公司
杭州中软安人网络通信股份有限公司
浙江吉利控股集团有限公司
杭州中恒电气股份有限公司
杭州奇书文化科技有限公司
浙江中控信息产业股份有限公司
浙江施强集团有限公司
银江技术股份有限公司
浙江甲骨文超级码科技股份有限公司
杭州精工技研有限公司
杭州宇称电子技术有限公司
中国联合工程有限公司
杭州迦智科技有限公司
杭州德同生物技术有限公司
贝因美股份有限公司
杭州朗迅科技股份有限公司
杭州五星网信息服务有限公司
浙江中南建设集团有限公司
税友软件集团股份有限公司
杭州山科智能科技股份有限公司
矽力杰半导体技术(杭州) 有限公司
广脉科技股份有限公司
明康汇生态农业集团有限公司
谦寻(杭州)文化传媒有限公司
浙江中控技术股份有限公司
杭州安恒信息技术股份有限公司
浙江明通科技有限公司
杭州紫驰网络科技有限公司
杭州慧智人工智能有限公司
正衡资产评估(杭州) 有限公司
杭州协能科技股份有限公司
金程科技有限公司
杭州易泰达科技有限公司
大化技术股份有限公司
浙中化蓝天集团有限公司
杭州和合医学检验实验室有限公司
杭州希科检测技术有限公司`


function to_lines(string,split_by='\n'){

    // string.strip()
    lines=string.trim().split(split_by)
    let resList=[]
    for(let o of lines){
        resList.push(o.trim())
    }
    // lines=[line.strip() for line in lines]
    resList=remove_none(resList)
    return resList

}


// # python 判断字符串是 空，空格
// # https://www.itranslater.com/qa/details/2127291587607659520
function remove_none(lst){
  
    ret_lst = []
    // js  判断一个 是空 字符串
    for (item of lst){
    
        if(!item||item==""){
            continue
        }
 
        ret_lst.push(item)
  
    }
       
    return ret_lst

}
   
let
companyList=
to_lines(companys_doc)
companys_doc.split('\n')

function getTextContent(dom){
  return  dom?.textContent?.trim()
}

// function getTextContentByClassName(className){
//     let dom= document.getElementsByClassName(className)[0]

//     return  dom?.textContent?.trim()
//   }
  
  function getTextContentByClassName(className,fatherDom=document){
    let dom= fatherDom.getElementsByClassName(className)[0]

    return  dom?.textContent?.trim()
  }
  


  function zhiHuGet(){
    // ContentItem-title
//    let title=   getTextContentByClassName('ContentItem-title')
//    let doc
let  titleDoms=
document.getElementsByClassName('ContentItem-title')
// ContentItem-title 

let  contentDoms=
document.getElementsByClassName('RichContent-inner')
let resList=[]
// Button ContentItem-more FEfUrdfMIKpQDJDqkjte Button--plain fEPKGkUK5jyc4fUuT0QP
let showMoreBtnDoms=
document.getElementsByClassName('Button ContentItem-more')
for(let i=0;i<showMoreBtnDoms.length;i++){
    showMoreBtnDoms[i].click()
}
setTimeout(() => {
    zhihuDownload()
}, 500);


function zhihuDownload(){

    for(let i=0;i<titleDoms.length;i++){
        let  titleDom=
        titleDoms[i]
        // ?.textContent.trim()
       let title= getTextContent(titleDom)
    
        let  contentDom=
        contentDoms[i]
        let content= getTextContent(contentDom)
        let  obj={
            title,
            content
        }
        resList.push(obj)
        
    
    }
    // https://www.zhihu.com/search?type=content&q=%E6%80%8E%E4%B9%88%E8%BF%9B%E5%A4%A7%E5%8E%82
    console.log("resList");
    console.log(resList);
    
    let searchWord=
    getSearchParamOfKey('q')
    
    downloadTxt(`zhiHuGet_${searchWord}.json`, JSON.stringify(resList))
    
    // console.log(href);
    // let nowIdx=
    // getNowIdx()
    
    
    // if(zhihuAskList.length<=nowIdx+1
    //     ){
    //         return
    //     }
    
    //     location.href=
    // `https://www.zhihu.com/search?type=content&q=${zhihuAskList[nowIdx+1]}&idx=${nowIdx+1}`
    // location.href=`https://www.kanzhun.com/search/?query=${companyList[nowIdx+1]}&type=0&idx=${nowIdx+1}`
    nextLink('https://www.zhihu.com/search?type=content&q=${word}&idx=${idx}'
    ,zhihuAskList)
  }


  }

  const getLinkMark=()=>{
    let   href=  location.href
    //  href. 
    let  linkMark="?"
    if(
        href.includes("?")
    ){
        linkMark="$"
    }
    return linkMark
  }

  function nextLinkReplace(lst){
    let nowIdx= getNowIdx()
    if(lst.length<=nowIdx+1){
         return
    }
    let  nextLink= lst[nowIdx+1]
    console.log("nextLink");
        console.log(nextLink);

     let   href=  location.href
    //  href. 
    let  linkMark="?"
    if(
        href.includes("?")
    ){
        linkMark="&"
    }
       
    let  nextAllLink=`${nextLink}${linkMark}idx=${nowIdx+1}`
    console.log("nextAllLink");
    console.log(nextAllLink);

        location.href=`${nextLink}${linkMark}idx=${nowIdx+1}`
  }
  
  function nextLink(linkTpl,lst,){
    let nowIdx=
    getNowIdx()
    
    
    if(lst.length<=nowIdx+1
        ){
            return
        }
    
        location.href=linkTpl.replace('${word}',lst[nowIdx+1]).replace('${idx}',nowIdx+1)
    // `https://www.zhihu.com/search?type=content&q=${lst[nowIdx+1]}&idx=${nowIdx+1}`
    // `https://www.zhihu.com/search?type=content&q=${word}&idx=${idx}`
  }
  function getSearchParamOfKey(key){
    // 获取 URL 中的查询字符串
const queryString = window.location.search;

// 创建一个 URLSearchParams 对象
const urlParams = new URLSearchParams(queryString);

// 获取参数 q 的值
// const q = urlParams.get('q');

const q = urlParams.get(key);
return q


// console.log(q); // 输出参数 q 的值

  }
function getKanZhunCompanyLink(){
// toli 

let  href=
document.getElementsByClassName('title')[0]?.href

// let titleDom= document.getElementsByClassName('title')[0]
// let   dd= titleDom?.textContent?.trim()
let   title=  getTextContentByClassName('title')
let   success=  getTextContentByClassName('tag success')
let   company_tags=  getTextContentByClassName('company-tags_1XW28')
let   business_info=  getTextContentByClassName('business-info')
let   bottom_item=  getTextContentByClassName('bottom-item')
// let   bottom_item=  getTextContentByClassName('right-block')
let  right_blocks=document.getElementsByClassName('right-block')

let  desc=getTextContentByClassName('desc')

// for(let i=0;i<right_blocks.length;i++){
//     // right_blocks[0]
// }
// right_blocks[0]?. 
let mianShiExperience=
getTextContent(right_blocks[0])
let salarySay=
getTextContent(right_blocks[1])
let danger=
getTextContent(right_blocks[2])

// getTextContent()
console.log(href);
let nowIdx=
getNowIdx()
if(companyList.length<=nowIdx
    ){
        return
    }

   let  companyName= companyList[nowIdx]
   let res={
    desc,
    href,
    companyName,
    title,
    success,
    company_tags,
    business_info,
    bottom_item,
    mianShiExperience,
    salarySay,
    danger
   }
   console.log("res KanZhunCompanyLink_ companyName");
   console.log(res);

  

    downloadTxt(`KanZhunCompanyLink_${companyName}.json`, JSON.stringify(res))
  

// setTimeout(() => {
//     location.href=`https://www.kanzhun.com/search/?query=${companyList[nowIdx+1]}&type=0&idx=${nowIdx+1}`
//     // getKanZhunCompanyLink()
// }, 4000);
// "https://www.kanzhun.com/firm/info/1nV-3N67.html"
location.href=`https://www.kanzhun.com/search/?query=${companyList[nowIdx+1]}&type=0&idx=${nowIdx+1}`
}

function question_select_list_get(question_select_dom){
    // question_select_dom
    if(!question_select_dom){
        return []
    }
   let   question_select_dom_list= question_select_dom?.getElementsByClassName('content')
   let res_list=[]
   for(let i=0;i<question_select_dom_list.length;i++){
    // question_select_dom_list[i] 
   
    res_list.push(
        getTextContent(question_select_dom_list[i] )
    )
   }
   return res_list
}

function getLi(fileName){
    let parts=location.href.split('/')
let  brach=parts[parts.length-1]
// let fileName=`pytorch_model.bin`
 let repoName= `${parts[2]}/${parts[3]}`
 let link=  `https://huggingface.co/${parts[3]}/${parts[4]}/resolve/${brach}/${fileName}`

}

function kaoBianLinkGet(){
    

let  default_pgContainer= document.getElementsByClassName('default_pgContainer')[0]

// default_pgContainer.getElementsByTagName('li')
let  aList=default_pgContainer.getElementsByTagName('a')

// let location
let location_href=
location.href

// default_pgContainer.length()
let  href_list=[]
for(let i=0;i<aList.length;i++){
    // default_pgContainer

    let  aDom=
    aList[i]
 let  href=   aDom.href
 console.log(href);
 href_list.push(href)
}

console.log(href_list);

let  default_pgCurrentPage=
document.getElementsByClassName('default_pgCurrentPage')[0]?.value
let res={
    href_list,
    location_href
}
downloadTxt(`kaoBianLinkGet_${default_pgCurrentPage}.json`, JSON.stringify(res))

// default_pgBtn default_pgNext ariaskiptheme

document.getElementsByClassName('default_pgBtn default_pgNext ariaskiptheme')[0]?.click()


setTimeout(() => {
    kaoBianLinkGet()
}, 3000);
// downloadTxt(`kaoBianLinkGet_${default_pgCurrentPage}.json`, JSON.stringify(href_list))
}

// content script 有个 hugDown 方法，我用插件在页面上加了一个按钮，按钮按下去怎么运行这个方法，谷歌插件

function hugDown(){
    
let  names= document.getElementsByClassName('group flex items-center truncate')
let parts=location.href.split('/')
let  brach=parts[parts.length-1]
// let  mdCmd=`md /${parts[3]}/${parts[4]}`
// let disk="d:"
let disk=""
let modelDir=`${disk}/j05025/model/${parts[3]}/${parts[4]}`
if(location.href.startsWith("https://huggingface.co/datasets")){
     modelDir=`${disk}/j05025/datasets/${parts[4]}/${parts[5]}`

}
// if("https://huggingface.co/datasets"){

// }
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
let downloadCmd=`${wgetSh} ${link} -c -P ${modelDir}  &`

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



function  nowCoderGet(){

// commonPaperHtml 
let  commonPaperHtmls=
document.getElementsByClassName('commonPaperHtml')

let  question_select_dom_list=
document.getElementsByClassName('question-select')
let question_list=[]
let coding_question_list=[]
let  coding_question_dom_list=
document.getElementsByClassName('coding-question')

for(let i=0;i<commonPaperHtmls.length;i++){
    // commonPaperHtmls
  let  question_title=   getTextContent( commonPaperHtmls[i])
  let  question_select_text=   getTextContent(   question_select_dom_list[i])
let  question_select_list= question_select_list_get(
    question_select_dom_list[i]
  )


  
//   content
  console.log(question_title);
  question_list.push({
    question_select_text,
    question_title,
    question_select_list
  })

}


for(let i=0;i<coding_question_dom_list.length;i++){
    let  coding_question=   getTextContent(  
        coding_question_dom_list[i]
      )
//   content
  coding_question_list.push(coding_question)


}



let  href=
location.href
let res={
    href,
    question_list,
    coding_question_list
}
console.log("res nowcode questions ");
console.log(res);

downloadTxt(`questionList_${href}.json`, JSON.stringify(res))



}

let questionList=['Java\xa0IO体系中，read方法从输入流中顺序读取源中的单个字节数据，如果到达源的末尾，该方法返回', '下面哪项不属于java的包装类', 'Java\xa0IO体系中，通常情况下以下哪一个类可用来读取文件且产生的系统调用可能是最少的', '为使对象可以保存到磁盘上或在网络上传输，需要首先经过如下什么操作(\xa0)将对象转换成字节数组', '使用Java\xa0IO流实现对文本文件的读写过程中，需要处理下列(\xa0)异常', '在Java的IO操作中，(\xa0)方法可以直接将缓冲中的数据立即发送到网络中', '下面代码的输出结果是?\xa0public\xa0void\xa0main(String[]\xa0args)\xa0{\n\n\tInteger\xa0num1\xa0=\xa0200;\xa0Integer\xa0num2\xa0=\xa0200;\xa0if\xa0(num1\xa0!=\xa0num2)\xa0{\n\n\tSystem.out.print(1);\xa0}\xa0else\xa0{\n\n\tSystem.out.print(2);\xa0}\n\n\tif\xa0(!num1.equals(num2))\xa0{\xa0System.out.print(3);\n\n\t}\xa0else\xa0{\xa0System.out.print(4);\n\n\t}\xa0}', '请指出下面程序的运行结果()\xa01.5分\xa0public\xa0class\xa0TryDemo\xa0{\n\n\tpublic\xa0static\xa0void\xa0main(String[]\xa0args)\xa0{\xa0System.out.println(test());\n\n\t}\n\n\tpublic\xa0static\xa0int\xa0test()\xa0{\xa0try\xa0{\n\n\treturn\xa01;\n\n\t}\xa0catch\xa0(Exception\xa0e)\xa0{\n\n\treturn\xa02;\xa0}\xa0finally\xa0{\n\n\tSystem.out.print("3");\xa0}\n\n\t}\xa0}', '整型分为:byte、short、int、long，整型常数默认为什么类型', 'char类型占(\xa0)个字节', '下列代码输出结果是()\xa0int\xa0i\xa0=\xa020;\n\n\twhile\xa0(\xa0i\xa0>\xa00\xa0){\xa0i++;\n\n\tif(i==21){\xa0break;\n\n\t}\xa0}', 'Java中允许使用转义字符(\xa0)，来将其 后的字符转变为其他含义', '以下关于HashMap的说法正确的是()', '以下初始化的方法错误的是', '以下哪个方法用于定义线程的执行 体?', '下列哪些对象的访问属于线程安全的', '下面这段程序的输出结果(\xa0)\xa0\xa0public\xa0static\xa0void\xa0main(String[]\xa0args)\xa0{\n\n\tString\xa0a\xa0="999";\n\n\tint\xa0b\xa0=1;\xa0System.out.println(a+b);\n\n\t}', '以下说法正确的是', 'Java\xa0new对象实例通常存在于以下哪个内存区域?', 'java中，下面关于this()和super()说法正确的是?', '哪种异常是需要显式捕获或者声明的', '在Java中，我们所讲的本地接口书写程序或者本地方法接口指的是', '以下代码运行输出是(\xa0)\xa01.5分\xa0public\xa0class\xa0Student{\n\n\tprivate\xa0String\xa0name="LiLei";\n\n\tint\xa0age=0;\xa0}\n\n\tpublic\xa0class\xa0StudentPlus\xa0extends\xa0Student{\xa0public\xa0String\xa0age;\n\n\tpublic\xa0static\xa0void\xa0main(String[]\xa0args){\xa0Student\xa0p\xa0=\xa0new\xa0StudentPlus();\xa0System.out.println(p.name);\n\n\t}\n\n\t}', '在interface定义中以下哪条是正确的?', '以下语句中关于Java构造方法的说法错误的是', '下面哪个不是Object类中所定义的public\xa0method?', '分析如下Java程序的代码所示，则编译运行后的输出结果是(\xa0)\xa0public\xa0class\xa0Test\xa0{\n\n\tint\xa0count=9;\n\n\tpublic\xa0void\xa0count1(){\n\n\tcount=10;\n\n\tSystem.out.print("count1="+count\xa0+\xa0";");\xa0}\n\n\tpublic\xa0void\xa0count2(){\xa0System.out.print("count2="+count);\n\n\t}\n\n\tpublic\xa0static\xa0void\xa0main(String[\xa0]\xa0args)\xa0{\n\n\tTest\xa0t=new\xa0Test();\xa0t.count1();\xa0t.count2();\n\n\t}\xa0}', '下列代码输出为(\xa0)\xa0\xa0public\xa0class\xa0ReferencesTest\n\n\t{\n\n\tstatic\xa0class\xa0Student\xa0{\n\n\tprivate\xa0String\xa0name;\xa0}\n\n\tpublic\xa0static\xa0void\xa0main(String[]\xa0args)\xa0{\n\n\tStudent\xa0studentA\xa0=\xa0new\xa0Student();\n\n\tstudentA.name\xa0=\xa0"aaa";\n\n\tStudent\xa0studentB\xa0=\xa0new\xa0Student();\n\n\tstudentB.name\xa0=\xa0"bbb";\n\n\tsetName(studentA.name,\xa0"ccc");\n\n\tsetName(studentB,\xa0"ccc");\xa0System.out.println(studentA.name\xa0+\xa0",\xa0"\xa0+\xa0studentB.name);\n\n\t}\n\n\tprivate\xa0static\xa0void\xa0setName(String\xa0name,\xa0String\xa0newName)\xa0{\n\n\tname\xa0=\xa0newName;\xa0}\n\n\tprivate\xa0static\xa0void\xa0setName(Student\xa0student,\xa0String\xa0newName)\xa0{\n\n\tstudent.name\xa0=\xa0newName;\xa0}\n\n\t}', ' 如下程序运行结果为:\xa0\xa0public\xa0class\xa0Test\xa0{\n\n\tpublic\xa0static\xa0void\xa0main(String\xa0[]\xa0args)\xa0{\xa0String\xa0projectA\xa0=\xa0"1122";\n\n\tString\xa0subProject1\xa0=\xa0"11";\n\n\tString\xa0subProject2\xa0=\xa0"22";\n\n\tString\xa0projectB\xa0=\xa0"11"\xa0+\xa0"22";\n\n\tString\xa0projectC\xa0=\xa0String.valueOf(1122);\n\n\tString\xa0projectD\xa0=\xa0subProject1\xa0+\xa0subProject2;\xa0System.out.println(projectA\xa0==\xa0projectB);\xa0System.out.println(projectB\xa0==\xa0projectC);\xa0System.out.println(projectC\xa0==\xa0projectD);\xa0System.out.println(projectC.equals(projectA));\n\n\t}\xa0}', '类定义源码如下:\xa0\xa0package\xa0com.lenovo.school.recruitment.project\n\n\tpublic\xa0class\xa0ClassFinder\xa0{\n\n\tpublic\xa0static\xa0void\xa0main(String[]\xa0args)\xa0{\n\n\tSystem.out.println("class\xa0finder");\xa0}\n\n\t}\n\n\t假设工程目录为\xa0D:\\\\workspace\\\\dome1\xa0，最有可能正确运行并输出"class\xa0finder"的是', 'Java系统的标准输出分别是标准输出(\xa0)和标准错误输出(\xa0)', '关于集合类的说法正确的是', '关于线程同步synchronized的说法 正确的是', '与Java访问权限有关并且具有包可访问的关键字是:', '关于线程同步synchronized的说法正确的是', '与Java访问权限有 关并且具有包可访问的关键字是:', '根据下面的代码\xa0String\xa0s\xa0=\xa0null;\n\n\t会抛出NullPointerException异常的有()', '标识符的声明需要遵循哪些规则', '以下哪些属于Java线程池的关注要素?', 'Java数据类型分为哪两大类?', '@SpringBootApplication注释包含了以下哪些注释', '以下选项中关于Java跨平台原理的说法正确的是', 'wait()\xa0和\xa0sleep()\xa0方法说法正确的是', '以下Java运算符中优先级别最低的两个选项是', '以下哪些关键字与Java面向对象的概念相关', 'Java\xa0静态变量和成员变量的区别', '下列选项中关于Java中类方法的说法错误的是', '问题描述:\n\n\tPlease implement KMP(Knuth-Morris-Pratt) pattern search algorithm using Java. The implementation should:\n\n\n\t\n\t\t\n\t\t\t\n\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t\tRead haystack from a file.\n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t\tRead pattern string from standard input\n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t\tPrint the LPS array like “[1,3,5,...], separated with “, ”(comma with a suffix space).\n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t\tPrint each position of pattern starting from position 0 for every comparison, until the first match is encountered\nsearching ends with no match, one index number per line.\n\t\t\t\t\t\nPrint the starting index of the match if found as “Found at {n}”, {n} should be the index, e.g. "Found at 12".\nPrint “Not found” if no match.\n\t\t\t\t\n\t\t\t\n\t\t\n\t\n\n输入描述:\nread 2 lines from stdin, line 1 is pattern, line 2 is haystack.\n输出描述:\nprint LPS array;\nprint pattern position for each comparison;\nprint result, "Found at: N" if pattern found or "Not found" if no matches found.\n输入样例:\nalbania alb1albanialbaalbaniarfgh\n输出样例:\n[0, 0, 0, 1, 0, 0, 1] 0\n1\n2\n0\n0\n1\n2\n3\n4\n5\n6\nFound at: 4']

// document.getElementById('txtArea').dispatchEvent(new Event('input', { bubbles: true }));
function setNativeValue(element, value) {
    const valueSetter = Object.getOwnPropertyDescriptor(element, 'value').set;
    const prototype = Object.getPrototypeOf(element);
    const prototypeValueSetter = Object.getOwnPropertyDescriptor(prototype, 'value').set;
    
    if (valueSetter && valueSetter !== prototypeValueSetter) {
        prototypeValueSetter.call(element, value);
    } else {
      valueSetter.call(element, value);
    }
  }

  function questionListQueryAll(){
    for( let i=0;i<questionList.length;i++){
        setTimeout(() => {
            questionListQuery(i)
        }, 40000*i);
    }
  }
// questionList
function questionListQuery(NowIdx){
    if(
        questionList.length<=NowIdx
    ){
        return
    }

    let textArea=
    document.getElementsByClassName('m-0 w-full resize-none border-0 bg-transparent p-0 pr-7 focus:ring-0 focus-visible:ring-0 dark:bg-transparent pl-2 md:pl-0')[0]
 
    // setNativeValue(textArea, questionList[0])
    // let 
    // NowIdx=getNowIdx()
   


    textArea.value=questionList[NowIdx]
    textArea.dispatchEvent(new Event('input', { bubbles: true }));


    let sendBtn= document.getElementsByClassName('absolute p-1 rounded-md text-gray-500 bottom-1.5 md:bottom-2.5 hover:bg-gray-100 enabled:dark:hover:text-gray-400 dark:hover:bg-gray-900 disabled:hover:bg-transparent dark:disabled:hover:bg-transparent right-1 md:right-2 disabled:opacity-40')[0]
    sendBtn.click()
    if(
        questionList.length<=NowIdx
    ){
        return
    }


    // let  wageLink=kanZhunLinks[NowIdx+1].replace('info','wage')
    // // location.href=`${wageLink}?ka=com-salary-module-expose#company-tab-fast&idx=${NowIdx+1}`
    // location.href=`${wageLink}?idx=${NowIdx+1}`
    
}
function onetonlineGet(){

// let  clickItems=    document.getElementsByClassName('page-item')

// for(let i=0;i<clickItems.length;i++){
//     setTimeout(() => {
//         clickItems[i].click()
//     }, 1000*i);
   
// }


  let  jobTitle=  getTextContentByClassName('main')
  let  id=  getTextContentByClassName('flex-grow-1')
//   let  id=  getTextContentByClassName('flex-grow-1')
let ps= document.getElementsByTagName('p')
// ps[0] 

let  para0=
getTextContent(ps[0])
let  href=
location.href

let res={
    jobTitle,
    id,
    para0,
    href
}


console.log("res onetonlineGet");
console.log(res);

   downloadTxt(`onetonlineGet_${href}.json`, JSON.stringify(res))


}
function OccupationKeywordSearch(){
    // occ-all occ-featured
//     Occupation Keyword Search
// https://www.onetonline.org/find/result?s=software+engineer
   let  jobRows= document.getElementsByClassName('occ-all occ-featured')
   let jobs=[]
   for(let i=0;i<jobRows.length;i++){
   let    jobRow= jobRows[i]
//    let  jobLinkDom= jobRow.getElementsByTagName('a')[0]
   let  jobLinkDom= jobRow.getElementsByTagName('a')[1]

//    jobLinkDom
   let  jobName= getTextContent(jobLinkDom)
   let  jobLink= jobLinkDom?.href
   jobs.push({
    jobLink,
    jobName
   })
   }
   let href=
   location.href
   let res={
    href,
    jobs
   }

   downloadTxt(`OccupationKeywordSearch_${href}.json`, JSON.stringify(res))
}

function kanZhunSalary(){
// https://www.kanzhun.com/firm/wage/1nFy3tq-FFFW.html?ka=com-salary-module-expose#company-tab-fast

let  href=
location.href
let  salary_item_content_dom_list=
document.getElementsByClassName('salary-item-content')
// base-title

let  salary_list=[]
for(let i=0;i<salary_item_content_dom_list.length;i++){
  let   salary_item_content_dom=  salary_item_content_dom_list[i]
//   salary_item_content_dom.getElementsByClassName('')
//   name
 let  job_name=getTextContentByClassName('name',salary_item_content_dom)
 let  contribution_quantity=getTextContentByClassName('extra',salary_item_content_dom)
//  贡献数量  contribution_quantity
 let  avg_salary=getTextContentByClassName('number',salary_item_content_dom)
 
 let  compare=getTextContentByClassName('compare',salary_item_content_dom)
 
 let  tootip=getTextContentByClassName('tootip',salary_item_content_dom)
//  在同行的 什么水平 
let  titleDom= salary_item_content_dom.getElementsByClassName('title')[0]
//  title
let  spans=titleDom.getElementsByTagName('span')
// spans[0]
  let  lowest_salary= getTextContent(spans[0])
  let  highest_salary= getTextContent(spans[1])

  salary_list.push({
    job_name,
    contribution_quantity,
    avg_salary,
    compare,
    tootip,
    lowest_salary,
    highest_salary,
    // href
  })
}

let title= getTextContentByClassName('base-title')

let desc= getTextContentByClassName('desc')
let company_tags= getTextContentByClassName('company-tags_1XW28')
let business_container= getTextContentByClassName('business-container')
let score_num= getTextContentByClassName('hlight')
let score= getTextContentByClassName('score')
// desc
// let desc= getTextContentByClassName('desc')

let  scorePart=
document.getElementsByClassName('bala-content')[0]
 let  great_than= getTextContentByClassName('desc',scorePart)
 let difficulty= getTextContentByClassName('item-content')
//  let difficulty= getTextContentByClassName('item-content')

 let company_tab=
 document.getElementById('company-tab')

let res={
    company_tags,
    desc,
    business_container,
    great_than,
    difficulty,
    score,
    score_num,
    title,
    href,
    salary_list
}

// kanZhunLinks


downloadTxt(`kanZhunSalary_${href}.json`, JSON.stringify(res))
// let  job_name_dom_list=
// document.getElementsByClassName('job-name')


let 
NowIdx=getNowIdx()
// let  kanZhunLink=
// kanZhunLinks[NowIdx]
if(
    kanZhunLinks.length<=NowIdx
){
    return
}

// let  job_name_list=
// document.getElementsByClassName('job-name')
// https://www.kanzhun.com/firm/wage/1n172tu4E1E~.html?ka=com-salary-module-expose
// "https://www.kanzhun.com/firm/info/1nV-3N67.html"
let  wageLink=kanZhunLinks[NowIdx+1].replace('info','wage')
// location.href=`${wageLink}?ka=com-salary-module-expose#company-tab-fast&idx=${NowIdx+1}`
location.href=`${wageLink}?idx=${NowIdx+1}`

// location.href=`${kanZhunLinks[NowIdx+1]}?ka=com-salary-module-expose&idx=${NowIdx+1}#company-tab-fast`
// location.href=`${kanZhunLinks[NowIdx+1]}?ka=com-salary-module-expose&idx=${NowIdx+1}#company-tab-fast`

// setTimeout(() => {
//     location.href=`https://www.kanzhun.com/search/?query=${companyList[nowIdx+1]}&type=0&idx=${nowIdx+1}`
//     // getKanZhunCompanyLink()
// }, 4000);

}

function getCurBrowser(){
    console.log(navigator)
		const explorer = navigator.userAgent;
		var Browser;
		// IE  判断浏览器是否支持ActiveX控件，如果浏览器支持ActiveX控件可以利用,
		if (!!window.ActiveXObject || "ActiveXObject" in window) {
		  Browser = 'ie';
		  console.log("当前浏览器为：IE");
		}
		//IE  documentMode是一个IE的私有属性，在IE8+中被支持。
		if (window.document.documentMode) {
		  Browser = 'ie';
		  console.log("当前浏览器为：IE");
		}
		//firefox 
		else if (explorer.indexOf("Firefox") >= 0) {
		  Browser = 'Firefox';
		  console.log("当前浏览器为：Firefox");
		}
        else if (explorer.indexOf("Edg") >= 0) {
            Browser = 'Edge';
            console.log("当前浏览器为：Edge");
          }
		//Chrome
		else if (explorer.indexOf("Chrome") >= 0) {
		  Browser = 'Chrome';
		  console.log("当前浏览器为：Chrome");
		}
		//Opera
		else if (explorer.indexOf("Opera") >= 0) {
		  Browser = 'Opera';
		  console.log("当前浏览器为：Opera");
		}
		//Safari
		else if (explorer.indexOf("Safari") >= 0) {
		  Browser = 'Safari';
		  console.log("当前浏览器为：Safari");
		}
		//Netscape
		else if (explorer.indexOf("Netscape") >= 0) {
		  Browser = 'Netscape';
		  console.log('当前浏览器为：Netscape');
		}
        return Browser
}
// 看准网-查工资|聊面试|评公司|搜职位|中国领先的职场信息平台
// https://www.kanzhun.com/search/?query=%E4%B8%89%E6%9B%BF%E9%9B%86%E5%9B%A2%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8&type=0