let myThoughts = [];
const inputEl = document.getElementById("thought-input");
const submitBtn = document.getElementById("thought-btn");
const thoughtsLocalStorage = JSON.parse( localStorage.getItem("myThoughts"));
const clearBtn = document.getElementById("clear-btn");
const countEl = document.getElementById("thought-counter");
 
submitBtn.addEventListener("click", function(){
    myThoughts.push(inputEl.value);
    inputEl.value = "";
    localStorage.setItem("myThoughts", JSON.stringify(myThoughts));
    
    renderCount()
    console.log(myThoughts);
})

inputEl.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("thought-btn").click();
    }
});

function renderCount() {
    let countStr = `thoughtCount: {${myThoughts.length}}`
    countEl.innerHTML = countStr;
    console.log("count rendered");
}

clearBtn.addEventListener("click", function(){
    localStorage.clear();
    console.log("local storage cleared");
})