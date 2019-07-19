# notes-app
Command line Note Application to Add, Remove, List, Read, Save and Load using Node.js 

## Installation 
Install [File-System](https://www.npmjs.com/package/file-system), [yarg](https://www.npmjs.com/package/yargs) and [chalk](https://www.npmjs.com/package/chalk)

```bash
$ npm install file-system --save

$ npm i yargs@12.0.2

$ npm install chalk

```
## Usages
To add the note:
```bash
node app.js add --title="_TitleName_" --body=" *BodyName* "
```
To remove the note:
```bash
node app.js remove --title=" *TitleName* "
```
To list the note:
```bash
node app.js list 
```

To read the note:
```bash
node app.js read --title=" *TitleName* "
```


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
