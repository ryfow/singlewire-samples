// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

const { ActivityTypes } = require('botbuilder');

class MyBot {
    /**
     *
     * @param {TurnContext} on turn context object.
     */
    async onTurn(turnContext, req, res) {
      
        if (turnContext.activity.type === ActivityTypes.Message) {
          
            var text = turnContext.activity.text || "";
            if (true) {
              var attachments = [{
                "contentType": "application/vnd.microsoft.card.adaptive",
                "content": {
                  "type": "AdaptiveCard",
                  "version": "1.0",
                  "body": [
                      {
                          "type": "TextBlock",
                          "size": "Medium",
                          "wrap": true,
                          "text": "This example shows how Action.OpenUrl percent encodes urls on iOS. "+
                                  "If you click on the button on desktop or android, a browser pops up with " + 
                        "the correct url of: https://www.singlewire.com#/that-percent-23-should-be-a-hash"

                      },
                  {
                          "type": "TextBlock",
                          "size": "Medium",
                          "wrap": true,
                          "text": "If you click on this button in iOS, you end up at the incorrect url of: https://www.singlewire.com%23/that-percent-23-should-be-a-hash"

                      }],
                  "actions": [
                  {
                      "type": "Action.OpenUrl",
                      "url": "https://www.singlewire.com#/that-percent-23-should-be-a-hash",
                      "title": "OpenUrl"
                  }]
                }},
                 {
                  "contentType": "application/vnd.microsoft.card.adaptive",
                  "content": {
                    "type": "AdaptiveCard",
                    "version": "1.0",
                    "body": [
                        {
                            "type": "TextBlock",
                            "size": "Medium",
                            "wrap": true,
                            "text": "In this example, on iOS, CompactSelectVal is not getting sent in the task/fetch invoke message."

                        },
                        {
                            "type": "TextBlock",
                            "size": "Medium",
                            "wrap": true,
                          
                            "text": "Additionally, on Android, the Action.Submit in the module, does not close the module, even though the server returns an empty 200 response."

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
                  }}];
                await turnContext.sendActivity({"type": "message", "attachments" : attachments});
            }
            
            
            else {
                //console.log("activity", turnContext.activity);
                await turnContext.sendActivity(`You said '${ turnContext.activity.text }'`);
            }
        } else {
            await turnContext.sendActivity(`[${ turnContext.activity.type } event detected]`);
        }
    }
}

module.exports.MyBot = MyBot;