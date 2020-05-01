const fs = require('fs');
const log = require('./logging.js');

const NOTES_FILE = process.env.NOTES_FILE || 'notes.json';
console.log(process.env.NOTES_FILE);
console.log(`NOTES_FILE: ${NOTES_FILE}`);

const loadData = () => {
    if(fs.existsSync(NOTES_FILE)) {
        return JSON.parse(fs.readFileSync(NOTES_FILE).toString());
    } else {
        log.fail(`File ${NOTES_FILE} not found. Returning empty database.`);
        return [];
    }

}

const saveData = (data) => {
    fs.writeFileSync(NOTES_FILE, JSON.stringify(data));
}

const addNote = (title, body) => {
    let notes = loadData();
    const duplicatesCount = notes.filter((note) => title === note.title);
    if(duplicatesCount.length !== 0){
        log.fail(`Note titled ${title} already exists. Doing nothing.`);
    } else {
        notes.push({
            title,
            body
        });
        saveData(notes);
        log.success(`Note ${title} created successfully.`);
    }
}

const deleteNote = (title) => {
    let notes = loadData();
    const noteToDelete = notes.find((note) => title === note.title);
    if(noteToDelete){

        notes = notes.filter((note) => {
            if(title !== note.title)
                return note;
        });
        saveData(notes);        
        log.success(`Note ${noteToDelete.title} deleted.`);

    } else {
        log.fail(`Note ${title} not found. Doing nothing.`);
    }
}

const listNotes = () => {
    const notes = loadData();
    log.info(`Your notes:`);
    for(let i = 0; i < notes.length; i++){
        log.info(`${i} - ${notes[i].title}`);
    }
}

const readNote = (title) => {
    const notes = loadData();
    const note = notes.find((note) => note.title === title);

    if(note){
        log.emphasize(note.title);
        log.info(note.body);
    } else {
        log.fail(`Note ${title} not found.`);
    }
}



module.exports = {
    addNote,
    deleteNote,
    listNotes,
    readNote
}