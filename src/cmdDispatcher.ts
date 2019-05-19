import { randomTeams } from './commands/randomTeams';

export const cmdDispatcher = (command: string, args: string[]) => {

  switch(command) {
    case 'randomTeams': {
      return randomTeams(args);
    }

    default: {
      return 'wat';
    }
  }
}