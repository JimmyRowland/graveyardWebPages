/**
 * Created by toor on 7/21/17.
 */
let vote = function(){
    let iter = 0;
    let start = function(){
        setTimeout(()=>{
            console.log(iter);
            if(iter){
                $(".pds-return-poll")[0].click();
                iter=0;


            }else{
                $(".pds-answer-span")[1].click();
                iter++;
                $(".pds-vote-button")[0].click();
            }
            start();
        },1000);
    };
    start();
};
var voteBradyInterval;
var counter=0;

// the vote button doesn't work using $.trigger() so using this custom function
function eventFire(el, etype){
    if (el.fireEvent) {
        el.fireEvent('on' + etype);
    } else {
        var evObj = document.createEvent('Events');
        evObj.initEvent(etype, true, false);
        el.dispatchEvent(evObj);
    }
}
window.alert = function(msg) {
    console.log(msg);
};
function voteBrady() {
    // click brady
    $('#PDI_answer44811670').trigger('click');
    // click vote
    let voteButton = function(){
        setTimeout(()=>{
            if(document.getElementById('pd-vote-button9794855')){
                try{
                    $('#PDI_answer44811670').trigger('click');
                    eventFire(document.getElementById('pd-vote-button9794855'), 'click');
                }
                catch(e){console.log(e);}
                voteButton();
            }else{
                console.log(counter++);

                // wait 2 seconds to give the request time to finish
                setTimeout(function(){


                    // trigger the function that returns you to the vote from the results
                    try{PDV_go9794855();}
                    catch(e){console.log(e);}


                }, 1000+Math.random()*1000);

            }
        },1000+Math.random()*2000)
    };
    voteButton();


}

// vote the first time
// voteBrady();
// vote again every 3 seconds
voteBradyInterval = setInterval(voteBrady, 12000+Math.random()*6000);