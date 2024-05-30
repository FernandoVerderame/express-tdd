const { test, expect } = require("@jest/globals");

// Importo i Posts
const posts = require("../db/posts.json");

// Funzione da testare
const createSlug = (title, posts) => {
    if (title.includes(' ')) {
        return title.toLowerCase().replaceAll(' ', '-');
    } else {
        return title.toLowerCase();
    }
}

// 1. createSlug dovrebbe ritornare una stringa
test('createSlug dovrebbe ritornare una stringa', () => {

    expect(typeof createSlug('Carbonara', posts)).toBe('string');
});

// 2. createSlug dovrebbe ritornare una stringa in lowercase
test('createSlug dovrebbe ritornare una stringa in lowercase', () => {

    expect(createSlug('Carbonara', posts) === createSlug('Carbonara', posts).toLowerCase()).toBe(true);
});

// 3. createSlug dovrebbe ritornare una stringa con gli spazi sostituiti da "-".
test('createSlug dovrebbe ritornare una stringa con gli spazi sostituiti da -', () => {

    expect(createSlug('Carbonara Di Pesce', posts)).toMatch('-');
});