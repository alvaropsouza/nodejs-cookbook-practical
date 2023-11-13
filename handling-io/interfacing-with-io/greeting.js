process.stdin.on('data', (data) => {
    const name = data.toString().trim().toUpperCase();

    name
        ? process.stdout.write(`Hello ${name}!`)
        : process.stderr.write('Input empty');
});
