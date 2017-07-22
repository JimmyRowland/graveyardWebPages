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

function voteBrady() {
    // click brady
    $('#PDI_answer44802685').trigger('click');
    // click vote
    eventFire(document.getElementById('pd-vote-button9793268'), 'click');
    console.log(counter++);

    // wait 2 seconds to give the request time to finish
    setTimeout(function(){
        // check it hasn't stopped counting the votes because they exceed the vote/time cap
        if ($('#PDI_container9793268 .pds-question .pds-question-top').text() !== " Thank you for voting! ") {
            // if the vote limit is exceeded, stop the interval and wait a few minutes
            console.log('vote limit exceeded, waiting 5 min');
            clearInterval(voteBradyInterval);
            setTimeout(function() {
                // after a few minutes, start voting again
                console.log('waited 5 min, restarting interval');
                voteBradyInterval = setInterval(voteBrady, 3000);
            }, (60*5*1000));
        }

        // trigger the function that returns you to the vote from the results
        PDV_go9793268();

    }, 2000);
}

// vote the first time
voteBrady();
// vote again every 3 seconds
voteBradyInterval = setInterval(voteBrady, 3000);