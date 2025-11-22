document.querySelector('#submit').addEventListener('click', addListItem);

let counter = 0;
let myListArray = [];

//Function to add new list item to array
function addListItem(e) {
    e.preventDefault();

    let itemValue = document.querySelector('#new-list-item').value;
    let itemNumber = counter;

    myListArray.push({itemNumber, itemValue});

    document.querySelector('#new-list-item').value = '';    

    //console check to make sure items are being added to the array correctly
    console.log(myListArray);

    counter++;

    updateList();
}

//Function to display list contents
function updateList() {
    const container = document.querySelector('#listContainer');
    container.innerHTML = "";

    myListArray.forEach(item => {
        const li = document.createElement("li");
        const checkbox = document.createElement("input");

        checkbox.type = "checkbox";
        checkbox.id = `list-item-${item.itemNumber}`;
        checkbox.classList = "checkbox"
        checkbox.name = `list-item-${item.itemNumber}`;

        //Adds event listen for when the boxes are checked
        checkbox.addEventListener('change', tasksInProgress);

        li.appendChild(checkbox);
        li.append(item.itemValue);

        container.appendChild(li);
    });
}

//Function to move tasks from initial list to In Progress List
let inProgressArray = [];

function tasksInProgress() {
    if (this.checked) {
        const itemNumber = parseInt(this.id.replace('list-item-', ''), 10);

        const index = myListArray.findIndex(item => item.itemNumber === itemNumber);
        if (index!== -1) {
            const [item] = myListArray.splice(index, 1);
            inProgressArray.push(item);
        }

        //console check to make sure items are being added to the array correctly
        console.log(inProgressArray);

        updateList();
        updateInProgress();
    }
}

//Function to display list items in the In Progress List
function updateInProgress() {
    const container = document.querySelector('#inProgressContainer');
    container.innerHTML = "";

    inProgressArray.forEach(item => {
        const li = document.createElement("li");
        const checkbox = document.createElement("input");

        checkbox.type = "checkbox";
        checkbox.id = `list-item-${item.itemNumber}`;
        // checkbox.classList = "checkbox"
        checkbox.name = `list-item-${item.itemNumber}`;

        li.appendChild(checkbox);
        li.append(item.itemValue);

        container.appendChild(li);
    });
}