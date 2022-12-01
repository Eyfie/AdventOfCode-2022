import fs from 'fs'

fs.readFile('./day1.txt', (err, data) => {

  const input = String(data).replace(/(.*)(\r\n|\n|\r)/gm, '$1,');
  const elfStashes = input.split(',,');

  let elfAmounts = elfStashes.map(stash => {
    return stash.split(',').reduce((acc, curr) => acc + Number(curr), 0);
  });

  let orderedElfAmounts = elfAmounts.sort((a, b) => b - a);

  console.log(orderedElfAmounts[0]);
  console.log(orderedElfAmounts[0] + orderedElfAmounts[1] + orderedElfAmounts[3])
});

