function addListItem() {
    const inputText = document.getElementById('userInput').value;

    if (inputText.trim() !== "") {
        const newListItem = document.createElement('li');
        
        newListItem.textContent = inputText;

        document.getElementById('myList').appendChild(newListItem);

        document.getElementById('userInput').value = '';
    } else {
        alert("Please enter some text!");
    }
}

document.getElementById('addButton').addEventListener('click', addListItem);
