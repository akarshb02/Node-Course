const yargs = require("yargs")
const notes = require("./data")

//customize yargs version

yargs.version("1.2.0")

//add,remove,read,list

yargs.command({
    command: "add",
    desc: "Add a new note",
    builder: {
        title: {
            desc: "Note Title",
            demandOption: true
        },
        description: {
            desc: "This is the description",
            demandOption: true


        }
    },
    handler: function(argv) {
        // console.log("Titlle :" + argv.title + " Description :" + argv.description);
        notes.addNote(argv.title, argv.description)
    }
});

yargs.command({
    command: "remove",
    desc: "Removing a note",
    handler: function() {
        console.log(("Removing a note"));

    }

})
yargs.command({
    command: "Reading",
    desc: "reading a data ",
    handler: function() {
        console.log("reading data");

    }

})
yargs.command({
    command: "List",
    desc: "Listing contents",
    handler: function() {
        console.log("Listing contents");
    }
})

console.log(yargs.argv);



//Json

// const pen = {
//     brand: "Hero",
//     type: "ink"
// }

// const penJson = JSON.stringify(pen);
// fs.writeFileSync("1-json.js", penJson)

// console.log(penJson);

// const par = JSON.parse(penJson);
// console.log(par.brand);
