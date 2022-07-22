/*const varbody=document.body;
varbody.append("HIII I AM HINAL","GOOD BYE");/* append method is used 
to append multiple things at once*/
/*varbody.appendChild("djs sdj dshj ");
/*appendchild method is used to append elemeent */
/*var div=document.createElement("div");//create an element div*/

/*varbody.append(div);//add div inside the body element//
//Add some text in the div tag

/*div.innerText="Hello world 1";
/*div.textContent="hello world 2";*/
/*console.log(div.innerText);
*/

//const div=document.querySelector('div');
/*console.log(div.textContent);
console.log(div.innerText);*/

//Create an element in javascript
/*const body=document.body;
const div=document.createElement('div');
div.innerHTML="<strong>Hiiii how are your</strong>";
//div.innerText="<strong>Hii who are you</strong>"
body.append(div);
*/


var body=document.body;
var ul=document.createElement('ul');
body.append(ul);
var li=document.createElement('li');
ul.append(li);
li.innerHTML="hinal";
var li2=document.createElement('li');
ul.append(li2);
li2.innerHTML="coffee";

ul.setAttribute("id","unlistid");
console.log(ul.getAttribute("id"));


li.setAttribute("id","list1id");
console.log(li.id);

li.removeAttribute('id');
li.removeAttribute("id");

const spanhi=document.querySelector('#hi');
console.log(spanhi.dataset);
console.log(spanhi.dataset.longerName);
spanhi.dataset.newname='hii';

//Add new class in the span tag
const spanja=document.querySelector('#jj');
spanja.classList.add('new class');



/*//remove an element in javascript
const body=document.body;
const div=document.querySelector('div');
const spanhi=document.querySelector('#hi');
const spanby=document.querySelector('#by');
spanby.remove()
div.append(spanby)
spanhi.remove()
div.append(spanhi)
*/



