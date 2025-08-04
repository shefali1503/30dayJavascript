window.addEventListener("DOMContentLoaded", function () {//load already saved tasks in the loal storage
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => {
        addTaskToUI(task);//function that add li to ui
    });
});

document.getElementById("enter-task").addEventListener("click", function () {
    //takes the test givenin the input field
    const inputElement = document.getElementById("input-task");//targeting the input field for tasks
    const inputValue = inputElement.value.trim();//fetching the value entered by user and removing any extra space

    if (inputValue != "") {//we are checking if the entered data is not empty
        addTaskToUI(inputValue);//display whatever is entered on ui
        saveToLocalStorage(inputValue);
        inputElement.value = ""; // Clear the input box
    }
});//added an event listener that records whether the enter task button is clicked once click it calls function createlist

function addTaskToUI(taskText) {
    const listItem = document.createElement("li");//create  a li
    listItem.textContent = taskText;//adding the content

    const deleteBtn = document.createElement("button")//a delete button to delete the list item whenever required 
    deleteBtn.textContent = "✅";
    deleteBtn.style.cursor = "pointer";
    deleteBtn.style.marginLeft = "10px";

    listItem.appendChild(deleteBtn);//delete button in li
    document.querySelector(".task-list").appendChild(listItem);//li in ul

    deleteBtn.addEventListener("click", function () {
        listItem.remove();
        removeFromLocalStorage(taskText);
        // This adds a click event to the delete button.When clicked, it removes that specific list item(listItem.remove()).
    }); 

}


function saveToLocalStorage(task) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task)
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function removeFromLocalStorage(task) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks = tasks.filter((t) => {//we are setting the task array to a new array that we will not have the task that we have deleted here t is all the values of the taska that is included
        t !== task
    })
    localStorage.setItem("tasks", JSON.stringify(tasks));

}


