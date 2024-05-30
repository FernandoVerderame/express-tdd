const { test, expect } = require("@jest/globals");

// Importo i Posts
const posts = require("../db/posts.json");

// Funzione da testare
const createSlug = (title, posts) => {
    return title.toLowerCase();
}

// 1. createSlug dovrebbe ritornare una stringa
test('createSlug dovrebbe ritornare una stringa', () => {

    expect(typeof createSlug('Carbonara', posts)).toBe('string');
});

// 2. createSlug dovrebbe ritornare una stringa in lowercase
test('createSlug dovrebbe ritornare una stringa in lowercase', () => {

    expect(createSlug('Carbonara', posts) === createSlug('Carbonara', posts).toLowerCase()).toBe(true);
});