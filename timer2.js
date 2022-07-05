const stdin = process.stdin;

stdin.setRawMode(true);
stdin.setEncoding('utf8');


stdin.on('data', (key) => {
  // if you press Ctrl-C, send the msg and exit.
  if (key === '\u0003') {
    console.log("Thanks for using me, ciao!\n");
    process.exit();
  }
  // press b, Shift B, or Ctrl B for a boom boom sound
  else if (key === 'b' || key === 'B' || key === '\u0002') {
    process.stdout.write('\x07');
    
  }
  // pressing 1-9 starts a timer for that amount of time.
  else if (key === '1' || key === '2' || key === '3' || key === '4' || key === '5' || key === '6' || key === '7' || key === '8 ' || key === '09') {
    console.log(`Setting timer for ${key} seconds...`);
    setTimeout(() => {
      // play the system sound
      process.stdout.write('\x07');
      // convert seconds to ms
    }, key*1000)
  }
  else {
    // if any other key is pressed, output to press the right button.
    process.stdout.write(`Press number 1-9!\n`);
  }
});