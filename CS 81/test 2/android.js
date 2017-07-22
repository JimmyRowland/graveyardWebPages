/**
 * Created by toor on 7/15/17.
 */
let $android = document.getElementById("svgWrapper");
let $svg = document.getElementById("android");
let $switch = document.getElementById('switch');
let animate;
let move=function(HTMLelement,svg){

    let elementWidth=svg.getBBox().width;
    // console.log(elementWidth);
    if(!HTMLelement.style.left) HTMLelement.style.left='0px';
    let moveToRight=function () {
        HTMLelement.style.left=parseInt(HTMLelement.style.left) + 6+'px';
        // console.log(parseInt(window.innerWidth),parseInt(HTMLelement.style.left),parseInt(HTMLelement.style.left)>parseInt(window.innerWidth));
        if(parseInt(HTMLelement.style.left)>parseInt(window.innerWidth)){
            // console.log(- elementWidth+'px');
            HTMLelement.style.left= - elementWidth+'px';
        }
        if($switch.value==='stop') animate = setTimeout(moveToRight,20);
    };
    let stop=function(){
        clearTimeout(animate);
    };
    if($switch.value==='start'){
        $switch.value='stop';
        moveToRight();
    }else{
        $switch.value='start';
        stop();

    }

};
$switch.addEventListener('click',()=>{move($android,$svg)});
