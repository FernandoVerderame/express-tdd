## Esercizio di oggi: Express TDD

Impariamo a ragionare in ottica TDD e a scrivere i nostri Unit Tests.

Creiamo i test per la nostra funzione createSlug che crea gli slug dei nostri post ricevendo come argomento il titolo da convertire e la lista di tutti i post.

Eseguiamo i seguenti test:

1. CreateSlug dovrebbe ritornare una stringa.

2. CreateSlug dovrebbe ritornare una stringa in lowercase.

3. createSlug dovrebbe ritornare una stringa con gli spazi sostituiti da -.

4. createSlug dovrebbe incrementare di 1 lo slug quando esiste già.

5. createSlug dovrebbe lanciare un errore in caso di titolo non presente o formato errato.

6. createSlug dovrebbe lanciare un errore se manca l'array dei post.

Lavoriamo in ottica TDD, quindi prima scriviamo il singolo test, e dopo scriviamo il codice necessario per far superare il nostro test.