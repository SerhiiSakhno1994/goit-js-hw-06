const refLi= document.querySelectorAll('.item');   
console.log(`Number of categories: ${refLi.length}`);
console.log("");


[...refLi].map(item => { 
  
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
  console.log("");
});
