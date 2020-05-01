const fs = require('fs');

const notes = require('notes.js');

const NOTES_FILE = process.env.NOTES_FILE || 'notes.json';
const testNote = {
    title: 'Test title',
    body: 'Test body'
};
console.log(`NOTES_FILE=${NOTES_FILE}`);


// Gotta figure out a way to access non-exported values to test loadData() 
// and saveData(). I've tried the rewired package but it didn't Work.
describe('loadData()', () => {
    test('Should load data if file exists', () => {

    });

    test('Should load empty data if file does not exist', () => {

    });
});

describe('saveData()', () => {
    test('Should save data if file exists', () => {
        
    });

    test('Should save data if file does not exist', () => {
        
    });
});

describe('addNote()', () => {
    test('Should add note', () => {
        
    });

    test('Should not add duplicate note', () => {
    });
});

describe('deleteNote()', () => {
    test('Should delete note', () => {
        
    });

    test('Should not delete unexisting note', () => {
        
    });
});

describe('listNotes()', () => {
    test('Should list notes', () => {
        
    });

    test('Should list empty notes', () => {
        
    });
});

describe('readNotes()', () => {
    test('Should read existing note', () => {
        
    });

    test('Should not read unexisting note', () => {
        
    });
});