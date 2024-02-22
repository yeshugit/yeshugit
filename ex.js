const fs = require('fs');
const express = require('express');
const app = express();
const jsYaml = require('js-yaml');

var filePth = 'data.md';

app.set('view engine','ejs');
app.use(express.static('srcs'));
app.use(express.urlencoded({extended: true}));

app.get('/', (req,res)=>{
  fs.readFile(filePth, 'utf-8', (err,data)=>{
    if(err){
      console.error(err);
      return;
    }
    const parts = data.split('---\n');
    const dataJson = jsYaml.load(parts[1].trim());
    
    res.render('tmp',{data: dataJson});
  });
});
app.post('/',(req,res)=>{
  const fm = jsYaml.dump(req.body);
  const finalData = '---\n'+fm+'---\n'
  console.log(finalData);
  fs.writeFileSync(filePth,finalData);
  res.render('tmp2',{data:"Saved"});
});

app.listen(3000,()=>{
  console.log('http://0.0.0.0:3000');
});


function saveData(data){
  
    const ymlData = jsYaml.dump(dataJson);
    
    const finalData = '---\n' + ymlData + '---\n' + parts[2].trim();
    fs.writeFileSync(filePth,finalData);
}


