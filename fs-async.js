const { readFile, writeFile } = require('fs')

console.log('start')

readFile('./content/first.txt', 'utf8', (err, res) => {
    if (err) {
        console.log(err)
    }

    const first = res;

    readFile('./content/second.txt', 'utf8', (err, res) => {
        if (err) {
            console.log(err)
        }
        writeFile(
            './content/result-async.txt',
            `Here is the result: ${first}, ${res}`,
            (err, res) => {
                if (err) {
                    console.log(err)
                }
                console.log('finish')
            }
        )
    })
})

console.log('next step')