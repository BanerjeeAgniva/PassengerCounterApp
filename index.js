// document.getElementById("count-el").innerText = 5
// The above is known as Document Object Model (DOM)
// change the count-el in the HTML to reflect the new count

// camelCase
/*
<h1>People entered:</h1>
<h2 id="count-el">0</h2>
*/
// 1. Grab the save-el paragrah and store it in a variable called saveEl
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let count = 0;
function increment() {
  count += 1;
  countEl.innerText = count;
}

function save() {
  let countt = "" + count + " -";
  // 3. Render the variable in the saveEl using innerText
  saveEl.textContent += countt;
  countEl.innerText = 0;
  count = 0;
}
