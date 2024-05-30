## Esercizio di oggi: Express TDD

Impariamo a ragionare in ottica TDD e a scrivere i nostri Unit Tests.

Creiamo i test per la nostra funzione createSlug che crea gli slug dei nostri post ricevendo come argomento il titolo da convertire e la lista di tutti i post.

Eseguiamo i seguenti test:

1. createSlug dovrebbe ritornare una stringa.

2. createSlug dovrebbe ritornare una stringa in lowercase.

3. createSlug dovrebbe ritornare una stringa con gli spazi sostituiti da -.

4. createSlug dovrebbe incrementare di 1 lo slug quando esiste già.

5. createSlug dovrebbe lanciare un errore in caso di titolo non presente o formato errato.

6. createSlug dovrebbe lanciare un errore se manca l'array dei post.

Lavoriamo in ottica TDD, quindi prima scriviamo il singolo test, e dopo scriviamo il codice necessario per far superare il nostro test.

### BONUS

1. Model dovrebbe essere una classe (crea un'istanza della classe Model).

2. L'istanza di model dovrebbe richiedere il nome del file json da usare in fase di creazione dell'istanza.

3. L'istanza di model dovrebbe avere il metodo read.

4. L'istanza di model dovrebbe avere il metodo add.