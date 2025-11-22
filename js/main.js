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
}