const input = document.querySelector("#inputTask");
const taskBtn = document.querySelector("#inputBtn");
const task_el = document.querySelector(".task");
taskBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const task = input.value;
    const errorText = document.querySelector(".errorText");
    function errorMsg(taskInput, errorElement)
    {
        const taskText = taskInput.value.trim();
        if (taskText === '') {
            errorElement.textContent = "Task cannot be empty.";
            return;
        } else {
            errorElement.textContent = "";
        }
    }

    errorMsg(input, errorText);

    if (task) {
        //To hide task list before any task is added to the list
        const taskHeading = document.querySelector("#taskHeading");
        taskHeading.removeAttribute("hidden");

        const task_Item = document.createElement("div");
        task_Item.classList.add("task-list");
        task_el.appendChild(task_Item);

       

        const task_input_el = document.createElement("input");
        task_input_el.setAttribute("readonly", "readonly");
        task_input_el.classList.add("task-list-el");
        task_input_el.value = task;
        task_Item.appendChild(task_input_el);

        const editBtn = document.createElement("button");
        editBtn.classList.add("edit");
        editBtn.textContent = "Edit";
        task_Item.appendChild(editBtn);

        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("delete");
        deleteBtn.textContent = "Delete";
        task_Item.appendChild(deleteBtn);

        const errorElement = document.createElement("div");
        errorElement.classList.add("errorContainer");
        task_Item.appendChild(errorElement);

        const errorHeading = document.createElement("p");
        errorHeading.classList.add("errorText");
        errorHeading.textContent = '';
        errorElement.appendChild(errorHeading);

        input.value = '';

        editBtn.addEventListener('click', () => {
            if (editBtn.textContent === "Edit") {
                task_input_el.removeAttribute("readonly");
                task_input_el.focus();
                editBtn.textContent = "Save";
            } else {
                errorMsg(task_input_el, errorHeading);
                task_input_el.setAttribute("readonly", "readonly");
                editBtn.textContent = "Edit";
            }
        });

        deleteBtn.addEventListener('click', () => {
            task_el.removeChild(task_Item);
        });
    }
});


