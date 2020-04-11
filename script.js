// setup variables
let productBtn=document.getElementById('product_btn');
let productContainer=document.getElementById('product_container');
let data=[
    {id:1,name:'product 1',desc:'high quality'},
    {id:2,name:'product 2',desc:'high quality & delux'},
    {id:3,name:'product 3',desc:'high quality& quantaty'},
    {id:4,name:'product 4',desc:'high quality'},
    
]
//drawUI
function drawUi(items){
    product_container.innerHTML ='';
    items.forEach(function(ele){
    product_container.innerHTML +=
`<div onclick='deleteItem(${ele.id})'>
       ${ele.name}
    
</div>
    `
})
}
//load data
window.onload=function(){
    drawUi(data)
}
//add item
productBtn.addEventListener('click',addItem);

function addItem(){
productInput=document.getElementById('product_input');
if(productInput.value === '') alert('you should add item')
let lastId=data.length?data[data.length-1].id :0;
//add to array
     data.push({id:++lastId,name:productInput.value})

     let addedItem =data[data.length-1];

     product_container.innerHTML +=`<div onclick='deleteItem(${addedItem.id})'>
     ${addedItem.name}
  
  </div>
  `;

     productInput.value='';

}
function deleteItem(id){
 let index=data.map(function(i){
     return i.id;
 }).indexOf(id);
 if(index !== -1){
     data.splice(index,1);
     drawUi(data)
 }
 
 }

 console.log('mona')