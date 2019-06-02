import { randomTeams } from './commands/randomTeams';
import { gameRecord } from './commands/game';

export const cmdDispatcher = (command: string, args: string[]) => {

  switch(command) {
    case 'randomTeams': {
      return randomTeams(args);
    }
    case 'game': {
      return gameRecord(args);
    }

    default: {
      return 'wat';
    }
  }
}