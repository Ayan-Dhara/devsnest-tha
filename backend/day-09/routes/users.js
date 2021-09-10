var express = require('express');
const path = require("path");
const fs = require("fs");
var router = express.Router();

/* GET users listing. */
router.get('/file/download/:name(*$)', (req, res) => {
  const filePath = path.join(__dirname, "../public/images")
  const fileName = req.params.name
  console.log(fileName)
  const fileFullPath = path.join(filePath, fileName)
  if (fs.existsSync(fileFullPath)) {
    res.download(fileFullPath, (err) => {
      if (err)
        res.send(500)
    })
  } else
    res.status(404).send("File not found");
})

router.get('/file/:name(*$)', (req, res) => {
  const filePath = path.join(__dirname, "../public/images")
  const fileName = req.params.name
  console.log(fileName)
  const fileFullPath = path.join(filePath, fileName)
  if (fs.existsSync(fileFullPath)) {
    res.sendFile(fileFullPath, (err) => {
      if (err)
        res.send(500)
    })
  } else
    res.status(404).send("File not found");
})

const listFiles = (dirPath) => {
  const list = []

  fs.readdirSync(dirPath).map(filePath => {
    const fullPath = path.join(dirPath, filePath)
    if (fs.statSync(fullPath).isFile())
      list.push(filePath)
    else
      for(const file of listFiles(fullPath)) {
        list.push(path.join(filePath, file))
      }
  })
  return list
}

router.get('/file', (req, res) => {
  const filePath = path.join(__dirname, "../public/images")
  let images = listFiles(filePath).map(file => {
    return {
      path: path.join("/users/file", file),
      download: path.join("/users/file/download", file)
    }
  })
  res.render("fileList", {
    images
  })
})

router.get('/', function (req, res) {
  res.send('specify resource type and name');
})

module.exports = router;
