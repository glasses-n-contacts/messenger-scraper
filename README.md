# Messenger Scraper

A Chrome extension that scrapes messenger messages

## Features

Right now the messages are only printed in the devtools window of the devtools window (there are no typos here) of the messenger page.

In the near future they will be saved locally to a json file.

## Usage

1. With CHROME, click on the top right option button -> More Tools -> Extensions.
2. Click on "Load Unpacked" and select this repo's folder.
3. Open up a messenger window with the person whose messages you would like to scrape.
  
It is important that you put in the url that corresponds to the chat with that person directly. For example, `https://www.messenger.com/t/kowaretaSekai` rather than `https://www.messenger.com`.

4. `Option + Command + J` to open the devtools window.
5. Click on the option button on the top right to "Undock into separate window".
6. `Option + Command + J` again to open up a devtools window of the devtools window you just opened.
7. You might need to refresh the messenger page here. Don't worry, you won't get duplicate messages.
8. Raw data of the messages will be printed in the console.
