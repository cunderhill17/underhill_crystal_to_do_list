document.querySelector(`#submit`).addEventListener('click', addListItem);

counter = 0;
myListArray = [];

//Function to add new list item to array
function addListItem(e) {
    e.preventDefault();

    itemValue = document.querySelector(`#new-list-item`).value;
    itemNumber = counter;

    myListArray.push({itemNumber, itemValue});

    document.querySelector(`#new-list-item`).value = '';    

    console.log(myListArray);

    counter++

    updateList();
}

//Function to display list contents
function updateList() {
    const container = document.querySelector(`#listContainer`);
    container.innerHTML = "";

    myListArray.forEach(item => {
        const li = document.createElement("li");
        const checkbox = document.createElement("input");

        checkbox.type = "checkbox";
        checkbox.id = `list-item-${item.itemNumber}`;
        checkbox.name = `list-item-${item.itemNumber}`;

        li.appendChild(checkbox);
        li.append(item.itemValue);

        container.appendChild(li);
    });
}