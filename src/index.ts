require('dotenv').config();
import { createEventAdapter } from '@slack/events-api';
import { WebClient } from '@slack/web-api';
import { cmdDispatcher } from './cmdDispatcher';


const slack = new WebClient(process.env.SLACK_APIKEY);
const slackEvents = createEventAdapter(process.env.SLACK_SIGNINGSECRET);
const port = process.env.PORT || 8080;

slackEvents.on('app_mention', message => {
  const args = message.text.split(' ');
  // [0] = User id [1] = 'Command' 
  const response = cmdDispatcher(args[1], args.slice(2));

  slack.chat.postMessage({ channel: message.channel, text: response });
})

slackEvents.start(port)
  .catch(err => console)