function handleSubmit(event) {
    event.preventDefault()
    let formText = document.getElementById('name').value
    if (formText === "") {
        alert('Enter valid input')
        return
    }
    var userInputMode = Client.validateFormInput(formText)
    
    /* POST fetch call with user input text/URL and mode of user input - 'tweet' or 'document'.
    If user input is text, if length of text is betwen 1 and 140 mode is 'tweet' and if length of text is more than 140 mode is 'document'.
    If user input is URL, then mode is assumed to be 'document' */
    fetch('http://localhost:8081/test', {
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userInput: formText, modeOfUserInput: userInputMode })
    })
    .then(res => res.json())
    .then(function(res) {
        updateUI(res);
    })

    // Updates UI based on results from fetch() call.
    function updateUI(dataToBeUpdated) {
        let resultDiv = document.getElementById('results');
        resultDiv.innerHTML = '';
        let docFrag = document.createDocumentFragment();
        
        for(let prop in dataToBeUpdated) {
            let p = document.createElement('p');
            p.setAttribute('class', 'resultParam');
            p.setAttribute('id', `${prop}`);
            p.innerText = `${prop.charAt(0).toUpperCase()+prop.slice(1)}: ${dataToBeUpdated[prop]}`;
            docFrag.appendChild(p);
            console.log(p.outerHTML);
        }

        resultDiv.appendChild(docFrag);
    }
}

export { handleSubmit }
