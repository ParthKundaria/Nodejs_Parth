const fs=require('fs')
const path=require('path')

fs.writeFile(path.join(__dirname,'/ReadAndWriteFile/WriteMsg.txt'), "Hello, Parth! \r\nMy first write to file.", function(error){
    if(error) return console.error(error)
    console.log('Writing is Done!')
})