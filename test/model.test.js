const { test, expect } = require("@jest/globals");

// Classe Model
class Model {

}

// 1. Model dovrebbe essere una classe (crea un'istanza della classe Model)
test('Model dovrebbe essere una classe (crea un\'istanza della classe Model)', () => {
    const model = new Model();
    expect(model).toBeInstanceOf(Model);
});