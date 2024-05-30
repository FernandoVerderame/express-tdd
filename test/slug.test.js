const { test, expect } = require("@jest/globals");

// Importo i Posts
const posts = require("../db/posts.json");

// Funzione da testare
const createSlug = (title, posts) => {
    if (!title) {
        throw new Error('Il titolo è obbligatorio');
    }
    if (typeof title !== 'string') {
        throw new Error('Il titolo deve essere una stringa');
    }
    let baseSlug = '';
    if (title.includes(' ')) {
        baseSlug = title.toLowerCase().replaceAll(' ', '-');
    } else {
        baseSlug = title.toLowerCase();
    }
    const slugs = posts.map(p => p.slug);
    let counter = 1;
    let slug = baseSlug;
    while (slugs.includes(slug)) {
        slug = `${baseSlug}-${counter}`;
        counter++;
    }
    return slug;
}

// 1. createSlug dovrebbe ritornare una stringa
test('createSlug dovrebbe ritornare una stringa', () => {

    expect(typeof createSlug('Carbonara', posts)).toBe('string');
});

// 2. createSlug dovrebbe ritornare una stringa in lowercase
test('createSlug dovrebbe ritornare una stringa in lowercase', () => {

    expect(createSlug('Carbonara', posts) === createSlug('Carbonara', posts).toLowerCase()).toBe(true);
});

// 3. createSlug dovrebbe ritornare una stringa con gli spazi sostituiti da "-"
test('createSlug dovrebbe ritornare una stringa con gli spazi sostituiti da -', () => {

    expect(createSlug('Carbonara Di Pesce', posts)).toMatch('-');
});

// 4. createSlug dovrebbe incrementare di 1 lo slug quando esiste già
test('createSlug dovrebbe incrementare di 1 lo slug quando esiste già', () => {

    const slugs = posts.map(p => p.slug);
    const slug = createSlug('Cracker alla barbabietola', posts);
    expect(slugs.includes(slug)).toBe(false);
});

// 5. createSlug dovrebbe lanciare un errore in caso di titolo non presente o formato errato
test('createSlug dovrebbe lanciare un errore in caso di titolo non presente o formato errato', () => {

    expect(() => createSlug(24, posts)).toThrow;
    expect(() => createSlug(undefined, posts)).toThrow;
    expect(() => createSlug('', posts)).toThrow;
});