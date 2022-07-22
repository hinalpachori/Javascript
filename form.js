var myform=document.forms.myform;
var mymessage=document.getElementById("message");
myform.onsubmit=function()
{
            if(myform.txtname.value=="")
            {
                mymessage.innerHTML="please enter the name";
                return false;
            }
            else
            {
                    mymessage.innerHTML="";
                    return true;
            }
}