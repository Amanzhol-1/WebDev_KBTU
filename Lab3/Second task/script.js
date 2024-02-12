const inputBox = document.getElementById("input-goal");
const listContainer = document.getElementById("list-container");

function addGoal() {
    const value = inputBox.value.trim();
    if (!value) {
        alert("You must write something!");
    } else {
        const li = document.createElement("li");
        li.innerHTML = `${value} <span class="close">\u00D7</span>`;
        listContainer.appendChild(li);
    }
    inputBox.value = "";
}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    } else if (e.target.classList.contains("close")) {
        e.target.parentElement.remove();
    }
});

document.getElementById("add-goal-btn").addEventListener("click", addGoal);