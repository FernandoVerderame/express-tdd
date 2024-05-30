const createSlug = (title, posts) => {

    // Controllo del titolo
    if (!title) {
        throw new Error('Il titolo è obbligatorio');
    }
    if (typeof title !== 'string') {
        throw new Error('Il titolo deve essere una stringa');
    }

    // Controllo se manca l'array dei Posts
    if (!posts) {
        throw new Error('Inserisci la lista dei posts')
    }

    let baseSlug = '';

    // Setup slug
    if (title.includes(' ')) {
        baseSlug = title.toLowerCase().replaceAll(' ', '-');
    } else {
        baseSlug = title.toLowerCase();
    }

    const slugs = posts.map(p => p.slug);
    let counter = 1;
    let slug = baseSlug;

    // Evito gli slug duplicati
    while (slugs.includes(slug)) {
        slug = `${baseSlug}-${counter}`;
        counter++;
    }
    return slug;
}

module.exports = createSlug;