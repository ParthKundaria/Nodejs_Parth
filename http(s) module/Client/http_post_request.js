const http = require('http')
const postData= JSON.stringify({ foo: 'bar'})

const options={
    hostname: 'mockbin.com',
    port: 80,
    path: '/request?foo=bar&foo=baz',
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(postData)
    }
}

const req=http.request(options, (res)=>{
    res.on('data',(chunk)=>{
        console.log(`BODY: ${chunk}`)
    })
    res.on('end',()=>{
        console.log('No more data in Response!')
    })
})

req.on('error', (error)=>{
    console.error(`Problem with request: ${error.message}`)
})

req.write(postData)
req.end()