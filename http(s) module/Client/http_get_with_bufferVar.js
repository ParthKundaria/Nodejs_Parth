const http = require('http')
const url='http://www.theplantlist.org/'
//const url='http://www.w3hools.com/'  --for error

//with https, code works for https sites.
/*const http = require('https')
const url='https://www.google.com/'
*/

http.get(url,(response)=>{
    let buffVar=''
    let count=0
    response.on('data', (chunk)=>{
        buffVar+=chunk
        ++count
    })
    response.on('end',()=>{
        console.log(buffVar,`\nno of chunks ${count}`)
        console.log(`Length of response: ${buffVar.length}`)
    })
}).on('error',(error)=>{
    console.error(`Got error: ${error.message}`)
})