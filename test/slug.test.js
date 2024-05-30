const { test, expect } = require("@jest/globals");

// Importo i Posts
const posts = require("../db/posts.json");

// Funzione da testare
const createSlug = (title, posts) => {
    return title;
}

// 1. createSlug dovrebbe ritornare una stringa
test('createSlug dovrebbe ritornare una stringa', () => {

    expect(typeof createSlug('Carbonara', posts)).toBe('string');
});