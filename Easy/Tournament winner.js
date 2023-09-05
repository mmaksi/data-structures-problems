function compWinner(competitions, results) {
  const scores = {};
  let bestTeam = '';
  // Loop over each competition array
  for (let i = 0; i < competitions.length; i++) {
    // See who wins and increase his score
    const comp = competitions[i];
    const winner = results[i] === 0 ? comp[1] : comp[0];
    scores[winner] = (scores[winner] || 0) + 3;
    // Check if the current winner has a higher score than the best team
    if (bestTeam.length === 0) bestTeam = winner;
    if (scores[winner] > scores[bestTeam]) {
      bestTeam = winner;
    }
  }
  return bestTeam;
}

const res = compWinner(
  [
    ['HTML', 'C#'],
    ['C#', 'Python'],
    ['Python', 'HTML'],
  ],
  [0, 0, 1]
);
console.log(res);
