const sentence = "\|/-\|/"
let delay = 0;
const increment  = 250;

for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(`\r  ${char}  `);
  }, delay);
  delay += increment;
};
