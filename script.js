function addTask() {
  let taskName = document.getElementById("task").value;
  let assigned = document.getElementById("assignedTo").value;

  let taskDiv = document.createElement("div");
  taskDiv.className = "task";

  taskDiv.innerHTML = `
    <h3>🛠 ${taskName}</h3>
    <p>👨‍🚀 Assigned to: ${assigned}</p>
    <button onclick="this.parentElement.style.opacity='0.3'">
      ✔ Mark as Completed
    </button>
  `;

  document.getElementById("taskList").appendChild(taskDiv);
}