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
        var text = turnContext.activity.text || "";
      turnContext.sen
        if (turnContext.activity.type === ActivityTypes.Message) {
            if ( text.toLowerCase().includes('help')) {
                await turnContext.sendActivity(`Here's some help!\n\nPress 1 for an incorrectly encoded OpenUrl on iOS`);
            }
            else if (text.includes('1')) {
              var attachment = {
                "contentType": "application/vnd.microsoft.card.adaptive",
                "content": {
                  "type": "AdaptiveCard",
                  "version": "1.0",
                  "body": [
                      {
                          "type": "TextBlock",
                          "size": "Medium",
                          "weight": "Bolder",
                          "text": "Here is the adaptive card body"

                      }],
                  "actions": [
                  {
                      "type": "Action.OpenUrl",
                      "url": "https://www.singlewire.com#/that-percent-23-should-be-a-hash",
                      "title": "OpenUrl"
                  }]
                }};
                await turnContext.sendActivity({"type": "message", "attachments" : [attachment]});
            }
            else if (text.includes('2')) {
                var attachment = {
                  "contentType": "application/vnd.microsoft.card.adaptive",
                  "content": {
                    "type": "AdaptiveCard",
                    "version": "1.0",
                    "body": [
                        {
                            "type": "TextBlock",
                            "size": "Medium",
                            "weight": "Bolder",
                            "text": "Here is the adaptive card body"

                        },
                        {
                            "type": "Input.ChoiceSet",
                            "id": "CompactSelectVal",
                            "style": "compact",
                            "value": "1",
                            "choices": [
                              {
                                "title": "Red",
                                "value": "1"
                              },
                              {
                                "title": "Green",
                                "value": "2"
                              },
                              {
                                "title": "Blue",
                                "value": "3"
                              }
                            ]
                          }],
                    "actions": [
                    {
                        "type": "Action.Submit",
                        "title": "Submit",
                        "data":  {"msteams": {"type": "task/fetch"}}
                    }]
                  }};
                  await turnContext.sendActivity({"type": "message", "attachments" : [attachment]});
              }
            else if (turnContext.activity.value != null) {
              await turnContext.sendActivity("Value Submitted: " + JSON.stringify(turnContext.activity.value));
            }
            else {
                console.log("activity", turnContext.activity);
                await turnContext.sendActivity(`You said '${ turnContext.activity.text }'`);
            }
        } else {
            await turnContext.sendActivity(`[${ turnContext.activity.type } event detected]`);
        }
    }
}

module.exports.MyBot = MyBot;