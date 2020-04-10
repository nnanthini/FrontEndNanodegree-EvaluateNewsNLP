# Project Instructions

## About

This project uses the user input text (URL/text) and mode of the input (document/tweet) and analyses the sentiment of the input with Aylien API.
The Aylien API gives us the sentiment analyses of the user input based on the following fields,
	- Polarity
	- Subjectivity
	- Text
	- Polarity Confidence
	- Subjectivity Confidence

## Implementation Details

1. User input in the form is checked for the following,
	- When user doesnt enter anything in the input field and clicks elsewhere on the page, alert is displayed to enter something in the input field.
	- User input is checked prior to submit based on the following,
		- Whether user input is URL(if it starts with http) or text.
		- Mode of the user input is set to 'document' if user input is URL or text of length greater than 140 characters.
		- Mode of the user input is set to 'tweet' if user input is text of length between 1 and 140 characters in length. 

2. Browser sends the input and mode to server through POST call.

3. Server performs a GET on the Aylien API endpoint and receives the response and sends it to the browser.

4. In the browser, the information is dynamically updated in the webpage.

5. All style files are in .scss format.

## Configurations

1. The app runs successfully in both dev and production modes.

2. Scripts are configured for 
	- Starting the server : npm run start
	- Building production mode : npm run build-prod
	- Building and deploying dev mode : npm run buil-dev

3. The webpage will be loaded offline too.

## Unit Tests

1. Unit tests are done through Jest.

2. Script to run unit test
	- npm run test




