// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

const { ActivityTypes } = require('botbuilder');

class MyBot {
    /**
     *
     * @param {TurnContext} on turn context object.
     */
    async onTurn(turnContext) {
        // See https://aka.ms/about-bot-activity-message to learn more about the message and other activity types.
        if (turnContext.activity.type === ActivityTypes.Message) {
            if ( turnContext.activity.text.toLowerCase().includes('help')) {
                await turnContext.sendActivity(`Here's some help!\n\nPress 1 for an incorrectly encoded OpenUrl on iOS`);
            }
            else if (turnContext.activity.text.includes('1')) {
              var attachment = {
                "contentType": "application/vnd.microsoft.card.adaptive",
                "content": {
      "type": "AdaptiveCard",
      "body": [
          {
              "type": "TextBlock",
              "size": "Medium",
              "weight": "Bolder",
              "text": "Publish Adaptive Card schema"
          }],
                    "actions": [
                      {
                          "type": "Action.Submit",
                          "title": "OK"
                      }
                  ]}};
                await turnContext.sendActivity({"type": "message", "text": "number one!", "attachments" : [attachment]});
            }
            else {
                await turnContext.sendActivity(`You said '${ turnContext.activity.text }'`);
            }
        } else {
            await turnContext.sendActivity(`[${ turnContext.activity.type } event detected]`);
        }
    }
}

module.exports.MyBot = MyBot;
