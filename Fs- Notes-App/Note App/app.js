const { string } = require("yargs");
const yargs = require("yargs");
const not = require("./data");
//console.log(`data:${ not.addNote() }`);

//customize yargs version

yargs.version("1.2.0")

//add,remove,read,listclear


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



        }
    },
    handler: function(argv) {
        // console.log("Titlle :" + argv.title + " Description :" + argv.description);
        not.addNote(argv.title, argv.description)
    }
});

yargs.command({
    command: "remove",
    desc: "Removing a note",
    builder: {
        title: {
            dessc: "Note Title",
            type: string
        }
    },
    handler: function(argv) {
        not.removeData(argv.title)

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
    handler: function(argv) {
        not.listNotes(argv.notes)

    }
})

console.log(yargs.argv);



