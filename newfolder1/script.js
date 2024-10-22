// Event listener to add a new task
document.getElementById("addTaskBtn").addEventListener("click", function() {
    addTask();
});

// Function to add task
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    if (taskInput.value.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    const taskItem = document.createElement("li");
    taskItem.textContent = taskInput.value;

    // Add click event for marking the task as completed
    taskItem.addEventListener("click", function() {
        taskItem.classList.toggle("completed");
    });

    // Create remove button for each task
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.classList.add("removeBtn");

    // Add click event for removing the task
    removeBtn.addEventListener("click", function() {
        taskList.removeChild(taskItem);
    });

    taskItem.appendChild(removeBtn);
    taskList.appendChild(taskItem);

    taskInput.value = ""; // Clear the input field after adding the task
}

// Add 'Enter' key functionality to add a task
document.getElementById("taskInput").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});
