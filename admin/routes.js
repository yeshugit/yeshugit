const express = require('express')
const router = express.Router()
const hexoFS = require('hexo-fs')

hexoFS.listDir('./source').then((files) => {
  files.forEach((file) =>{
    console.log(file)
  })
})

router.get('/',(req,res) =>{
  const content = ''
  const html = ''
  res.render('index',{content, html})
})

module.exports = router