import { readdir, readFile, writeFile } from 'fs'
import path from 'path'
import fm from 'front-matter'

const __dirname = path.resolve(path.dirname(''))
const postsDir = path.join(__dirname, './contents/posts')
const result = []

readdir(postsDir, { withFileTypes: true }, (err, dirents) => {
  if (err) {
    console.log(err)
    return
  }
  const filesNames = dirents
    .filter((dirent) => !dirent.isDirectory())
    .map((dirent) => dirent.name)

  filesNames.map((file) => {
    readFile(path.join(postsDir, file), 'utf8', (err, data) => {
      if (err) {
        console.log(err)
        return
      }
      const { categories, date } = fm(data).attributes
      const dateParsed = new Date(date)
      // Now you need to add the URL and file path to a file "/manifest.json"
      const url =
        (typeof categories === 'string' && categories.split(' ').join('/')) +
        '/' +
        dateParsed.getFullYear() +
        '/' +
        dateParsed.toISOString().split('-')[1] +
        '/' +
        dateParsed
          .toISOString()
          .split('-')[2]
          .split('T')[0] +
        '/' +
        file
          .replace(/\d{4}-\d{2}-\d{2}-/g, '')
          .replace(/(.md)|(.markdown)/g, '')
      result.push({
        url,
        dateParsed,
        fileName: file.replace(/(.md)|(.markdown)/g, ''),
        file
      })
      writeFile('manifest.json', JSON.stringify(result), (err) => {
        // In case of a error throw err.
        if (err) throw err
      })
    })
  })
})
