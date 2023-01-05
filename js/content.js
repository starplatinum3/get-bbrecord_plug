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

function searchWordListAllDownload(searchWordList){
   
    // searchWordAndDownloadPage(searchWordList[i],searchWordAndDownloadPage,searchWordList[i+1])

    searchWordAndDownloadPage(searchWordList,0)

    
}

// searchWord,
// callback,
function searchWordAndDownloadPage(searchWordList,idx){
    if(idx>=searchWordList.length){
        return
    }
    // let searchWord=searchWordList[i];
    let searchWord=searchWordList[idx];
    let searchWordInput = J_searchForm.getElementsByTagName("input")[0]
    console.log("searchWord");
    console.log(searchWord);
    searchWordInput.value=searchWord

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

function delayDownloadPage(){
    setTimeout(()=>{
        downloadPage()
    })
   
}

function getQueryString(name) {

var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)","i");

var result = window.location.search.substr(1).match(reg);

if (result!=null) {

return result[2];

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

   let  date= new Date()
//    keywo

    for (let i = 0; i < itemNames.length; i++) {
       let  pc_items_item_li= pc_items_item_lis[i]
       let  coupon_price_old=    coupon_price_olds[i]
        // itemNames[i]
        let  sell_info=    sell_infos[i]
        let  seller_name=    seller_name_list[i]
        res.push({
            itemName: itemNames[i].innerText,
            afterCoupon: afterCouponList[i].innerText,
            date: date,
            "data_itemid":pc_items_item_li.getAttribute("data-itemid"),
            coupon_price_old:coupon_price_old.innerText,
            sell_info:sell_info.innerText,
            // 卖出了100 
            seller_name:seller_name.innerText,
            searchWord:searchWord,
        })
        // console.log(itemNames[i].innerText,afterCouponList[i].innerText)
    }

    let NowTimeStr = getNowTimeStr()
    let answerListStr = JSON.stringify(res)
    let txtName = `taobao_${searchWord}_${NowTimeStr}.json`

    downloadTxt(txtName, answerListStr)
    // callback()

   
    let  idx=     getQueryString("idx")
    console.log("idx");
    console.log(idx);
    if(!idx){
        idx="0"
    }
   let idxInt=  parseInt(idx)
   let  idxIntNext= idxInt+1
   if(idxIntNext>=searchWordList.length){
    return
   }

 let   searchWordNext= searchWordList[idxIntNext]
//  location.href.replace 

window.location.href=`https://uland.taobao.com/sem/tbsearch?keyword=${searchWordNext}&idx=${idxIntNext}`
    
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

function initClick(){


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


let  searchWordList=["手机","面包","泡面",
"男装","帽子","内裤","java","python","饼干","矿泉水",
"手表","项链","保温杯","热水器","空调","电脑","电视","洗衣机",
"马桶","抽水马桶","士力架","脉动",
"可乐","雪碧","芬达","联想","华为手机",
"优衣库","连衣裙","零食","床","女套装","男士t恤","充电宝","洗面奶","iphone",
"泡面","香肠","寿司","手撕面包","感冒药","止泻药","薯片","止疼药",
"发烧药","防窥膜","防晒霜","手套","床垫","床单","被子","电热毯","电热水壶",
"运动鞋","洗发水","剃须刀","即热食品","热干面","热狗","紫菜",
"即时","凤爪","棉拖鞋","麻花","手套","酒精","巧克力","蛋糕",
"烤鸭","烤鸡","马桶坐垫","不锈钢脸盆","洗脚盆","电饭煲","洗衣液",
]
let fruits=['樱桃', '西瓜', '葡萄', "橘子",
"香蕉",'水蜜桃', '芒果', '石榴', '李子', '柚子', '橄榄', '荔枝', '柠檬', 
'龙眼', '椰子', '甘蔗', '山楂', '栗子', '柿子', '番石榴', '杏仁', ]

// 零食 
let snacks=["薯片","玉米片","坚果"," 杏仁","腰果","核桃","开心果","爆米花","牛油果酱","洋葱","番茄",
"奶黄包","肉包","速冻饺子","肉干","猪肉干","香肠","火鸡","小熊软糖","士力架","糖豆","棒棒糖"
,"牙膏","牙刷","蜜饯","话梅"]
let chinese_snacks
['瓜子', '剝壳嗑瓜子', '鱼片干', '鱿鱼丝', '内脏', '鸭舌头', '鸭翅膀', '辣条', '海苔']
// +fruits
// js 列表 相加 
snacks=
addAll(snacks,chinese_snacks)



function removeSame(arr){

    // var a = [1,2,3,4,5,2,3,5,5,5,5]
    let list = [...new Set(arr)]
    // console.log(list); // 输出结果 [1, 2, 3, 4, 5]
    return list
}
function addAll(srcList,addList){
    for (let i = 0; i < addList.length; i++) {
        srcList.push(addList[i])
    }
    return srcList
}


searchWordList=
addAll(searchWordList,fruits)
// 水果 fruit

searchWordList=addAll(searchWordList,snacks)
searchWordList=
removeSame(searchWordList)
if (location.host == "uland.taobao.com") {
    console.log("uland.taobao.com");



//  searchWordListAllDownload(searchWordList)
    setTimeout(() => {
        downloadPage()
        // searchWordListAllDownload(searchWordList)
    // let  idx=     getQueryString("idx")
    // console.log("idx");
    // console.log(idx);
    // https://uland.taobao.com/sem/tbsearch?keyword=橘子&idx=3
    }, 5000);
    // 7000
    // 11000

    // let downloadPageInterval = setInterval(() => {
    //     downloadPage()
    // }, 4000)

}
