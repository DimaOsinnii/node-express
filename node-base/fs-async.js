const { readFile, writeFile } = require('fs').promises
const util = require('util')

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

const start = async () => {
    try {
        const first = await readFile('./content/first.txt', 'utf8');
        const second = await readFile('./content/second.txt', 'utf8');
        await writeFile(
            './content/result-mind-grenade.txt',
            `THIS IS AWSOME : ${first} ${second}`,
            { flag: 'a' })
        console.log(first, second);
    }
    catch (err) {
        console.log(err)
    }
}

start()

/*const getText = (path) => {
    return new Promise( (res, rej) => {
        readFile(path, 'utf8', (err, data) => {
            err ? rej(err) : res(data)
        })
    })
}*/