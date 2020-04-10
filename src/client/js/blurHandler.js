function onBlur() {
    var inputText = document.getElementById('name').value;
    if (inputText === "") {
        alert('Enter valid input')
    }
}

export { onBlur }