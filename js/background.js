// chrome.runtime.onMessage.addListener(
//     function(req,sender,sendreq){
//         if(req.type==="req"){
//             var domain = getDomainFromUrl(req.url);
//             if(alert_list.indexOf(domain)>=0)
//                 sendreq({type:"alert",url:domain,cnt:getCntByDomain(domain)});
//             return true;
//         }
//     });


chrome.runtime.onMessage.addListener(function (request,sender,callback) {
    // request {action: 'getBBRecord'},
    console.log("request.action");
    console.log(request.action);
    callback('hi!');
});