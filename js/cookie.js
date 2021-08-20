function setCookie(name, value) {
    var Days = 30;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
}

// http://blog.sina.com.cn/s/blog_5d6c3a1f0100vtvh.html

function getCookie(name) {
    var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
    if (arr != null) {
        return (arr[2]);
    } else {
        return "";
    }
}

function getCookieWithoutPercentSimple(name) {
    return parseCookie(getCookie(name));
}


function delCookie(name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = getCookie(name);
    if (cval != null) document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
}


//delcookie("GD-cms");

// if (document.cookie != "") {
//     setcookie("GD-cms", "gae-django-cms");
// }
// alert(getcookie("GD-cms"));

function parseCookie(cookie) {
    return decodeURIComponent(unescape(cookie));
}

function test() {
    bbRecordObj =
        {
            title: "title",
            description: "description",
            questions:
                [
                    {
                        queText: "queText",
                        scoreStr: "1:1",
                        type: "choose",
                        answers:
                            [
                                {
                                    text: "ans",
                                    choose: true
                                }
                            ]
                    }
                ]
        };
    setCookie("bbRecordObj", JSON.stringify(bbRecordObj));
    let cookie = getCookieWithoutPercentSimple("bbRecordObj");
    console.log("cookie: " + cookie);

}

// test();

// https://www.cnblogs.com/kenwoo/p/10230270.html

function createObjectStore(name, callback) {
    var db;

    // var request = window.indexedDB.open('info');
    var request = window.indexedDB.open(name);
    request.onsuccess = function (event) {
        db = request.result;
        callback(db);
    };

    request.onupgradeneeded = function (event) {
        db = event.target.result;
        // https://www.softwhy.com/article-10221-1.html
        var objectStore = db.createObjectStore('user', {keyPath: 'id'});

        objectStore.createIndex("name", "name", {unique: false});
    };
    // return db;

}

function create(name, obj, database) {
    // 交易
    // 'user'                                                   'user'
    // var store = database.transaction('user', 'readwrite').objectStore('user');
    var store = database.transaction(name, 'readwrite').objectStore(name);
    // { id: 1, name: 'Ken', email: 'ken@example.com' }
    // var request = store.add(obj);
    // var request = store.add({ id: 1, name: 'Ken', email: 'ken@example.com' });
    var request = store.add(obj);
}

function update(name, obj, database) {
    // var store= db.transaction('user', 'readwrite').objectStore('user');
    var store = database.transaction(name, 'readwrite').objectStore(name);
    // var request = store.put({ id: 1, name: 'Ken', email: 'ken@sample.com' });
    var request = store.put(obj);
}

// update()

function query(name, database) {
    var store = database.transaction(name, 'readonly').objectStore(name);
    // var store = db.transaction('user', 'readonly').objectStore('user');
    var request = store.get(1);
    request.onsuccess = function (event) {
        console.log(request.result);
        return request.result;
    }
}

function testDatabase() {
    let database;
// https://www.imooc.com/wenda/detail/420795
    createObjectStore("mqp", function (db) {
        database = db;

    });
    create("ok", {name: "mqp", age: 1}, database);
    query("ok", database);

// query()

// create("wife",{name:"fufu",sex:"women"},db);
// query("wife",db) ;


    var db;

// var request = window.indexedDB.open('info');
    var request = window.indexedDB.open('mqp');
    request.onsuccess = function (event) {
        db = request.result;
    };
// 需要升级时
    request.onupgradeneeded = function (event) {
        db = event.target.result;

        var objectStore = db.createObjectStore('bbRecordObj', {keyPath: 'id'});

        objectStore.createIndex("name", "name", {unique: false});
    }

    var store = db.transaction('star', 'readwrite').objectStore('star')
    var request = store.add({id: 1, name: 'Ken', email: 'ken@example.com'});

    var store = db.transaction('star', 'readonly').objectStore('star')
    var request = store.get(1)
    request.onsuccess = function (event) {
        console.log(request.result)
    }
}
function testDb() {
    var db;
    var request = window.indexedDB.open("bb",3);

    request.onsuccess = function (event) {
        db = request.result;
        console.log('数据库打开成功');

    };
// indexedDB onsuccess 没反应
    request.onupgradeneeded = function (event) {
        db = event.target.result;
        var objectStore;
        if (!db.objectStoreNames.contains('bbRecordObj')) {
            objectStore = db.createObjectStore('bbRecordObj', { keyPath: 'id' });
            console.log("objectStore");
            console.log(objectStore);
        }
        console.log("objectStore");
        console.log(objectStore);

        console.log("db");
        console.log(db);
        console.log(db.objectStoreNames.contains('bbRecordObj'));
    }
// console.log("db");
// console.log(db);
// console.log(db.objectStoreNames.contains('bbRecordObj'));
}


function add() {

    console.log("db:");
    console.log(db);
    // VM80:32 Uncaught DOMException: Failed to execute 'transaction' on 'IDBDatabase':
    // One of the specified object stores was not found.
    //     at add (<anonymous>:32:22)
    // at <anonymous>:67:1
    // https://blog.csdn.net/qiqingjin/article/details/53263261
    bbRecordObj =
        {
            title: "title",
            description: "description",
            questions:
                [
                    {
                        queText: "queText",
                        scoreStr: "1:1",
                        type: "choose",
                        answers:
                            [
                                {
                                    text: "ans",
                                    choose: true
                                }
                            ]
                    }
                ]
        };
    var request = db.transaction(['bbRecordObj'], 'readwrite')
        .objectStore('bbRecordObj')
        .add({id: 1, content: bbRecordObj});

    request.onsuccess = function (event) {
        console.log('数据写入成功');
    };

    request.onerror = function (event) {
        console.log('数据写入失败');
    }
}

function read() {
    var transaction = db.transaction(['bbRecordObj']);
    var objectStore = transaction.objectStore('bbRecordObj');
    var request = objectStore.get(1);

    request.onerror = function (event) {
        console.log('事务失败');
    };

    request.onsuccess = function (event) {
        if (request.result) {
            console.log(request.result);
            // console.log('Name: ' + request.result.name);
            // console.log('Age: ' + request.result.age);
            // console.log('Email: ' + request.result.email);
        } else {
            console.log('未获得数据记录');
        }
    };
}

//
// add();
//
// read();