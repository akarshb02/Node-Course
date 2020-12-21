 const fs = require('fs')
 const chalk = require('chalk')

 const getNotes = function() {
     return "Your notes"
 }

debugger

 const addNote = function(title, description) {
     const notes = loadNotes()
     const duplicates = notes.filter((note) => {
         return note.title === title

     })
     if (duplicates.length === 0) {
         notes.push({
             title: title,
             description: description
         })
         saveNotes(notes)
     } else {

         console.log("Already taken");

     }
     saveNotes(notes)


 }

 const saveNotes = function(notes) {
     const dataJS = JSON.stringify(notes)
     fs.writeFileSync("note.json", dataJS)
 }


 const loadNotes = function() {

     try {
         const data = fs.readFileSync("note.json")
         const dataJson = data.toString();
         return JSON.parse(dataJson);
     } catch (e) {
         return []
     }
 }

 const removeData = function(title) {
     const load = loadNotes();
     const match = load.filter((rem) => {
         return rem.title !== title

     })
     if (load.length > match.length) {
         console.log(chalk.green.bold.inverse("Note removed"));

         saveNotes(match)

     } else {


         console.log(chalk.red.inverse("Note not removed"));
     }

     saveNotes(match)


 }

 const listNotes = function() {

     const notes = loadNotes();
     notes.forEach((element) => {
         console.log(element.title);

     });
 }




 exports.getNotes = getNotes;
 exports.addNote = addNote;
 exports.removeData = removeData;
 exports.listNotes = listNotes;
