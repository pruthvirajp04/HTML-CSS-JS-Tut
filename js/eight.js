
    //    function say(){
    //        alert("It's been 4 seconds you have been on this page");
    //    }
    //    setTimeout(say,4000);
    //    function sayDiff()
    //    {
    //        console.log("Hey! You know this is going to be in SetInterval.Excited to see!!");
    //    }
    //  setInterval(sayDiff,2000);
    //  clearInterval(intervalId);
    //Now here I'm going to put date and time live on the page


    function displayTime(){
        time = new Date();
        // console.log(time);
        document.getElementById('time').innerHTML = time;
    }
    setInterval(displayTime,  1000);
       
