import fs from 'fs'

fs.appendFile('my-file.txt', 'fil created Node.js', (err) =>  {
  if (err) throw err
  console.log('file saved')
})

setTimeout(() => console.log('end'), 30000)
    