 const fs = require('fs')
 const chalk = require('chalk')

 const getNotes = function() {
     return "Your notes"
 }



 const addNote = function(title, description) {
     const notes = loadNotes()
     const duplicates = notes.find((note) => {
         return note.title === title

     })
     if (!duplicates) {
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
     if (load.title === match.title) {
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


 const readNote = function(title) {
     const noteFind = loadNotes();
     const search = noteFind.find((note) => {

         return note.title === title

     })

     if (!search) {

         console.log("No match");
     } else {
         console.log("matched " + title);
     }



 }



 exports.getNotes = getNotes;
 exports.addNote = addNote;
 exports.removeData = removeData;
 exports.listNotes = listNotes;
 exports.readNote = readNote;
