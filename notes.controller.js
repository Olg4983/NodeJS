const fs = require('fs/promises')
const path = require('path')
const chalk=require('chalk')

const notesPath = path.join(__dirname, 'db.json')

async function addNote(title){
 const notes = await getNotes()
const note={
    title,
    id:Date.now().toString()
}

notes.push(note)

   await fs.writeFile(notesPath, JSON.stringify(notes))
    console.log(chalk.bgGreen('Note was added!'))
}
async function removeNote(id){
    const notes = await getNotes()
if(notes.includes(notes.id===id)){
    return console.log("This ID is not")
}
   const newNotes= notes.filter(node=>node.id!==id.toString()
   )
    await fs.writeFile(notesPath, JSON.stringify(newNotes))
}

async function updateNote(id, newTitleNotes){
    const notes = await getNotes()
    if(notes.id===id){
        notes.title=newTitleNotes
    }
    await fs.writeFile(notesPath, JSON.stringify(notes))
}

async function getNotes(){
    const notes = await fs.readFile(notesPath, {encoding:'utf-8'})
return Array.isArray(JSON.parse(notes))?JSON.parse(notes):[]
}

async function printNotes(){
const notes = await getNotes()
    console.log(chalk.bgYellow('Here is the list of notes:'))
notes.forEach(note=>{
    console.log(chalk.bgBlue(note.id, note.title))
})
}

module.exports={
    addNote, getNotes, removeNote, updateNote
}