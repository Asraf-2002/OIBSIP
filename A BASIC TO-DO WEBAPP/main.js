document.addEventListener("click", function () {
    const addButton = document.getElementById("add-button");
    const titleInput = document.getElementById("todo-title");
    const descriptionInput = document.getElementById("todo-description");
    const list = document.getElementById("todo-list");

    addButton.addEventListener("click", function (event) {
        event.preventDefault();
        const title = titleInput.value;
        const description = descriptionInput.value;
        if (title.trim() !== "") {
            addTodoItem(title, description);
            titleInput.value = "";
            descriptionInput.value = "";
        }
    });

    function addTodoItem(title, description) {
        const li = document.createElement("li");
        const spanTitle = document.createElement("span");
        spanTitle.textContent = title;
        spanTitle.classList.add("title");
        const spanDescription = document.createElement("span");
        spanDescription.textContent = description;
        spanDescription.classList.add("description");
        const button = document.createElement("button");
        button.textContent = "Delete";

        button.addEventListener("click", function () {
            li.remove();
        });

        li.appendChild(spanTitle);
        li.appendChild(spanDescription);
        li.appendChild(button);
        list.appendChild(li);
    }
});
