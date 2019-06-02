export const gameRecord = (args) => {
  if (validate(args) === true) {
    const gameData = processGame(args);
    return message(gameData)
  }
  else {
    return 'Bad syntax use `[team1] [team2] 5-1` seperate player names with comma';
  }
}

const message = (data) => {

let winType = 'regulation time';

switch(data.special) {
  case 'ot': {
    winType = 'overtime';
    break;
  }

  case 'so': {
    winType = 'shootouts';
    break;
  }
}

return `
*Game recorded!*\n
*Team 1*: ${data.team1}
*Team 2*: ${data.team2}
*Winner*: ${data.winner} won the game in *${winType}* with a score of *${data.score}*
`
} 

const processGame = (args) => {
  const data = regex.exec(args.join(' ').match(regex));
  const team1 = normalizeNames(data[1]);
  const team2 = normalizeNames(data[2]);
  const score = data[3].split('-');

  return {
    team1,
    team2,
    score: data[3],
    winner: score[0] > score[1] ? 'Team 1' : 'Team 2',
    special: data[4] !== undefined ? data[4] : null
  }
}

const normalizeNames = (team: string) => {

  const names = team.split(',');
  const replace = /[\[\]]/gm;

  const normalized = names.map((name) => {
    name = name.replace(replace, '').trim().toLocaleLowerCase()
    name = name.charAt(0)
      .toUpperCase() + name.slice(1);
    return name;
  });

  console.log(normalized);
  return normalized;
}

const validate = (args) => {
  let terms = args.join(' ');
  console.log('terms', terms);
  const valid = regex.test(terms)
  return valid;
}

const regex = /(\[.+\])\s(\[.+\])\s(\d+-\d+)\s?(ot|so)?/;
