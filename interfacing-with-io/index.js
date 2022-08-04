process.stdin.on("data", (data) => {
  const name = data.toString().trim().toLocaleUpperCase();

  name !== "" ? process.stdout.write(`Hello ${name}`) : process.stderr.write("Input was empty!")
})

// Notes: 
// 1. If i put a process.stdout.write(`Hello ${name}`) on line 3, the application would
// override the expected result with Hello Input was empty!, like process.stderr is hoisted somehow