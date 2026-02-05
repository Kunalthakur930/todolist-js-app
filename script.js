
    
  function addtask() {
    const task = document.getElementById("task").value;
    const date = document.getElementById("taskdate").value;

    if (task === "" || date === "") {
      alert("Please enter task and date");
      return;
    }

    // create li row
    const li = document.createElement("li");
    li.className = "task-row";

    // column 1 - task
    const taskDiv = document.createElement("div");
    taskDiv.className = "task-col";
    taskDiv.innerText = task;

    // column 2 - date
    const dateDiv = document.createElement("div");
    dateDiv.className = "date-col";
    dateDiv.innerText = date;
    
    // delete button column
    const deleteDiv = document.createElement("div");
    deleteDiv.className = "btn-col";

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.className = "delete-btn";

    // delete functionality
    deleteBtn.onclick = function () {
      li.remove();
    };

    deleteDiv.appendChild(deleteBtn);
    
    // append columns to row
    li.appendChild(taskDiv);
    li.appendChild(dateDiv);
    li.appendChild(deleteDiv);

    // add row to list
    document.getElementById("list").appendChild(li);

    // clear inputs
    document.getElementById("task").value = "";
    document.getElementById("taskdate").value = "";
  }
  

