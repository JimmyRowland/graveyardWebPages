/**
 * Created by toor on 3/9/17.
 */
var array=[];
array.push(setTimeout(() => $(".randomText").css("color","green"),200));
array.push(setTimeout(() => $(".randomText").css("background-color","blue"),2000));
array.push(setTimeout(() => $(".randomText").css("margin","auto"),500));
//array.push(setTimeout(function(){$(".randomText").css("color","green")},200));
console.log(array);

//get header
// var xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function() {
//     if (xhr.readyState == XMLHttpRequest.DONE) {
//         console.log(xhr.responseText);
//     }
// }
// xhr.open('GET', 'https://online.smc.edu/files/863668/download?download_frd=1', true);
// xhr.send(null);
function fetchSimilarHeaders (callback) {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState === 4) {
            //
            // The following headers may often be similar
            // to those of the original page request...
            //
            if (callback && typeof callback === 'function') {
                callback(request.getAllResponseHeaders());
            }
        }
    };


    request.open('HEAD', 'https://online.smc.edu/files/863668/download?download_frd=1', true);
    request.send(null);
}
// try{fetchSimilarHeaders()}
// catch(err){
//     console.log(err);
// }
var store = [];
var oldf = console.log;
console.log = function(){
    store.push(fetchSimilarHeaders());
    oldf.apply(console, fetchSimilarHeaders());
}