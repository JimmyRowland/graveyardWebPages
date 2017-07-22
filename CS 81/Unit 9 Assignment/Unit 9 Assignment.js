/**
 * Created by toor on 7/10/17.
 */
// All <strong> change color to red
(()=>{
    let $wordItems = document.getElementsByTagName('strong');

    let changeAllColor=function (element,HTMLCollection,color) {
        for(let x of HTMLCollection){
            x.style.color=color;
        }
        let colorToBlack = function(){
            changeAllColor(element,$wordItems,'');
        };
        if(color ==='red') element.addEventListener('mouseout',colorToBlack);
        else element.removeEventListener("mouseout",changeAllColor)
    };
    let colorListenner = function(element){
        element.addEventListener('mouseover',()=>{changeAllColor(element,$wordItems,'red')});
    };
    for(let x of $wordItems){
        colorListenner(x);
    }

})();

// individual <strong> changes color to red
// (()=>{
//     let $wordItems = document.getElementsByTagName('strong');
//
//     let colorListenner = function(element){
//
//         element.addEventListener('mouseover',()=>{element.style.color='red';});
//         element.addEventListener('mouseout',()=>{element.style.color='';});
//
//     };
//     for(let x of $wordItems){
//         colorListenner(x);
//     }
//
// })();