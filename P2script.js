const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // This is the 'x' character
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData(); // Save after adding
}

// Event listener for click events on the list
listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData(); // Save after toggling
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData(); // Save after removing
    }
}, false);

// Function to save data to localStorage
function saveData() {
    localStorage.setItem("todoData", listContainer.innerHTML);
}

// Function to load data from localStorage
function loadTasks() {
    listContainer.innerHTML = localStorage.getItem("todoData");
}

// Load tasks when the page loads
loadTasks();