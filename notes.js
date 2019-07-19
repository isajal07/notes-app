const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
    return 'Your notes...'
}


const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNotes = notes.filter((note) => note.title === title)

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green('New note added!'))
    } else {
        console.log(chalk.red('Note title taken!'))
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title)

    if (notes.length > notesToKeep.length) {
        console.log(chalk.green('Note removed!'))
        saveNotes(notesToKeep)
    } else {
        console.log(chalk.red('No note found!'))
    }
}

const listNotes = (title,body) => {
  const notes = loadNotes()


  if (notes === null)
  {
    console.log(chalk.blue('Note is empty'))
  } else {
    console.log(chalk.green('Your notes...'))
    console.log(notes)
  }

}

const readNotes =(title) =>{
  const notes = loadNotes()
  const note = notes.find((note) => note.title === title)

  if(note){
    console.log(chalk.inverse(note.title))
    console.log(note.body)
  } else {
    console.log(chalk.red('Note not found!'))

  }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNotes: readNotes
}
