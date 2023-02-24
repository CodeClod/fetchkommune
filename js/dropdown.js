console.log("Jeg er i dropdown");

const fruits = [];
fruits.push({"id" : 1,"name": "Pineapple", "style":"fruit"});
fruits.push({"id" : 2,  "name": "apple", "style": "fruit"});
fruits.push({"id" : 3,"name": "orange", "style": "fruit"});
fruits.push({"id" : 4,"name": "banana", "style": "fruit"});
fruits.push({"id" : 5,"name": "peanut", "style": "nut"});
console.log(fruits);

const pbFillDropdown = document.getElementById("pbFillDropDown");
const ddFruits = document.getElementById("ddFruits");

function addFruitToDropDown(item) {
    console.log(item);
    const el = document.createElement("option");
    el.textContent = item.name;
    ddFruits.appendChild(el);
    // el.value = item.id; put primary key i value
    el.value = item; // why not put object in value?

}

function fillDropDown() {
    fruits.forEach(addFruitToDropDown);
}

function selectFruit() {
    const selindex = ddFruits.selectedIndex;
    const selectedFruit = ddFruits.options[selindex];
    console.log(selindex);
    console.log(selectedFruit);
    console.log(selectedFruit.value)
}


pbFillDropdown.addEventListener('click', fillDropDown);
ddFruits.addEventListener('change', selectFruit);