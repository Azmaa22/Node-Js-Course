const fs = require("fs");

//^ To read data from file
// var data = fs.readFileSync('./message.txt');
// console.log(data.toString());

// fs.readFile('./message.txt','utf-8',function (error, data){
// if(error)
// console.log('error occurred ', error);
// else
// console.log(data);
// })

//^ To Write data in the file
// fs.writeFile('./newFile.txt', 'This is my new file', function(error){
// if(error)
// console.log('error ocurred', error);
// });

// fs.appendFile('./newFile.txt', ' This is my appended file', function(error){
//     if(error)
//     console.log('error ocurred', error);
//     });

// var jsonObj = {
//     "secondary": "#00BBB0",
//         "primary": "#582C83"
// };
// var jsonContent = JSON.stringify(jsonObj);
// fs.writeFile('./theme.json', jsonContent, function(error){
// if(error)
// console.log('error ocurred', error);
// });

//^ to delete file
// fs.unlink('./newFile.txt', (error)=>{
//     if(error){
//         console.log('error occurred', error);
//     }
// });

//^ to create directory
fs.mkdir("./newDir", (error) => {
  if (error) console.log("error occurred while making directory", error);
  else {
    fs.writeFile("./newDir/child.txt", "My Child File", (error, data) => {
      if (error) console.log("error occurred", error);
      else console.log("data will be written ", data);
    });
  }
});
