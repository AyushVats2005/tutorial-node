const { readFileSync, writeFileSync } = require('fs')
console.log('start')
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

writeFileSync(
    './content/result-sync.txt',
    `Here is the result : ${first}, ${second}`,
    { flag: 'a'}//it append for a and if flag is not mentioned then the default value takes place and that is w which means write it over the file data i.e., replace the data
)
console.log('done with this task')
console.log('starting the next one')