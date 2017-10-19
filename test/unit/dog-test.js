const Dog = require('../../lib/model/dog');
const assert = require('chai').assert;

describe('DOG TEST', () => {

    const dog = new Dog ({
        name: 'Rosie',
        powers: {
            swimming: true
        }
    });

    it('should validate', () => {
        assert.equal( dog.validateSync(), undefined );
    });

});