const http = require('http')
const url='http://www.w3schools.com/'
//const url='http://www.w3hools.com/' --for error

//with https, code works for https sites.
/*const http = require('https')
const url='https://www.google.com/'
*/

http.get(url,(response)=>{
    let c=0
    response.on('data', (chunk)=>{
        c++
        console.log(chunk.toString('utf8'))
    })
    response.on('end',()=>{
        console.log(`response has ended with ${c} chunk(s)`)
    })
}).on('error',(error)=>{
    console.error(`Got error: ${error.message}`)
})