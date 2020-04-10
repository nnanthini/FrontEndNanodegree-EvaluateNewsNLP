function validateFormInput(inputText) {
    
    /*Validates form input to check if it is URL or text and assigns mode.
    If user input is text, if length of text is betwen 1 and 140 mode is 'tweet' and if length of text is more than 140 mode is 'document'.
    If user input is URL, then mode is assumed to be 'document' */
    var regEx = /^http/; 
    var mode = '';
    if(regEx.test(inputText)) {
        //If input starts with http then it is URL.
        console.log(`${inputText} is a URL`);
        mode = 'document';
    }
    else {
        if ((0 < inputText.length) && (inputText.length <= 140)) {
            console.log(`${inputText} is tweet`);
            mode = 'tweet';
        }
        else if (inputText.length > 140){
            console.log(`${inputText} is document`);
            mode = 'document';
        }

    }
    return mode;
}

export { validateFormInput }
