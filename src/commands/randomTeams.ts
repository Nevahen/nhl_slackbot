export const randomTeams = (data: string[]) => {
    // Lazy paste https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
    for (let i = data.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [data[i], data[j]] = [data[j], data[i]];
    }
    
    return niceText(data);
}

const niceText = (data) => {
    const half = Math.floor(data.length / 2);
    const teamOne = data.slice(0, half);
    const teamTwo = data.slice(half, data.length);

    return `Randomized:\n${teamOne.join(' ')} *VS* ${teamTwo.join(' ')}`;
}