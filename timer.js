var Mymessage=document.getElementById("message");
var colorChanger=document.getElementById("color-image");
var colorarray=["red","blue","green","yellow"];
var counter=0;
function showmessage()
{
    Mymessage.className="show";

}
setTimeout(showmessage,3000);

function changecolor()
{
    if(counter>=colorarray.length)
    {
        counter=0;
    }
    colorChanger.style.background=colorarray[counter];
    counter++;

}
var mytimer=setInterval(changecolor,3000);

colorChanger.onclick=function()
{
    clearInterval(mytimer);
    colorChanger.innerHTML="TimerOut";
}