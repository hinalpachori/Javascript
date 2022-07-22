// eadd event listner with bubbling and capturing the event.
/*const grandparent=document.querySelector(".grandparent");
const parent=document.querySelector(".parent");
const child=document.querySelector(".child");

/*grandparent.addEventListener('click',e=>
{
    console.log('grandparent1 capture');
},
{
    capture:true
})
*/

/*grandparent.addEventListener('click',e=>
{
    console.log('grandparent1 bubble');   
})

parent.addEventListener('click',printhi)

  setTimeout(()=>
  {
      parent.removeEventListener("click",printhi)
  },2000)

function printhi()
{
    console.log('hiii');
}

child.addEventListener('click',e=>
{
    console.log('child bubble');

})

document.addEventListener('click',e=>
{
    console.log('document bubble ');
})

/*parent.addEventListener('click',e=>
{
    console.log('parent1 capture');
    e.stopPropagation()
},
{
    capture:true
})
*/


/*child.addEventListener('click',e=>
{
    console.log('child1 capture');
},
{
    capture:true
})
*/


/*document.addEventListener('click',e=>
{
    console.log('document capture');
},
{
    capture:true
})
*/
//Delagate means to add dynamically elemnt in th 

const divs=document.querySelectorAll('div');
/*divs.forEach(div=>
    {
        div.addEventListener("click",()=>
        {
            console.log("hiii");
        })
    })
    */
   document.addEventListener("click",()=>
   {
       console.log("hii");
       
   })

    const newdiv=document.createElement('div')
    newdiv.style.width="200px";
    newdiv.style.height="200px";
    newdiv.style.background="purple";
    document.body.append(newdiv);

    newdiv.addEventListener("click",()=>
{
    console.log("hii");
})