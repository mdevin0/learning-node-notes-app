const yargs = require('yargs');

const notes = require('./notes.js');


yargs.command({
    command: 'add',
    aliases: 'a',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            alias: 't',
            demandOption: true,
            type: 'string'
        },

        body: {
            describe: 'Note body',
            alias: 'b',
            demandOption: true,
            type: 'string'
        },
    },
    handler(argv){
        notes.addNote(argv.title, argv.body);
    }
});

yargs.command({
    command: 'delete',
    aliases: 'd',
    describe: 'Delete a note',
    builder: {
        title: {
            describe: 'Note title',
            alias: 't',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.deleteNote(argv.title);
    },
});

yargs.command({
    command: 'list',
    aliases: 'l',
    describe: 'List all notes',
    handler(){
        notes.listNotes();
    }
});

yargs.command({
    command: 'read',
    aliases: 'r',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            alias: 't',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title);
    }
});

yargs.parse();