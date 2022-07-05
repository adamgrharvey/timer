// get our arguments in order
 // get the starting list
let cmdArgs = process.argv.slice(2);
// turn all the entries into Numbers
cmdArgs = cmdArgs.map(str => {
  return Number(str);
});
// remove anything that isnt a number, (removes all the NaN);
cmdArgs = cmdArgs.filter(Number);

// removes all negative numbers
cmdArgs = cmdArgs.filter(number => number >= 0);

// only play if there was a number passed in
if (cmdArgs.length > 0) {
  // for all the arguments given
  for (const args of cmdArgs) {
    setTimeout(() => {
      // play the system sound
      process.stdout.write('\x07');
      // convert seconds to ms
    }, args*1000)
  }
}
