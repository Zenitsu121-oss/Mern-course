let asselt=document.querySelectorAll(".list-le")[3]

console.log(asselt);

let projects=asselt.parentNode;

console.log(projects);

let second=document.querySelectorAll(".bad")[2];

console.log(second);

let death=second.parentNode;
console.log(death);

let God=document.querySelector("#class-list1");
console.log(God);

console.log("first",God.firstChild);
console.log(God.lastChild);
console.log(God.children);
console.log(God.textContent);


for(let mode of God.children){
    console.log(mode);
    
}









