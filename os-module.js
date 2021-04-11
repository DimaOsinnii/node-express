const os = require('os');

//info about current user
const user = os.userInfo()
console.log(user)

//method returns the systems uptime in seconds
console.log(`The System Uptime ${os.uptime() / 120} seconds`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOS);