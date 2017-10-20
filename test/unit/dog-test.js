const Dog = require('../../lib/model/dog');
const assert = require('chai').assert;

describe('DOG TEST', () => {
    
    it('should validate', () => {
        const dog = new Dog ({
            name: 'Rosie',
            stats: {
                HP: 11,
                MP: 25,
                swims: true
            }
        });
        assert.equal( dog.validateSync(), undefined );
    });

    it('should return error if no name', () => {
        const namelessDog = new Dog ({
            stats: {
                swims: true
            }
        });
        const { errors }  = namelessDog.validateSync();
        assert.equal(errors.name.kind, 'required');
    });

    it('should return error if invalid HP', () => {
        const invalidDog = new Dog ({
            name: 'Partario',
            stats: {
                HP: -24,
                MP: 5,
            }
        }, {strict: true});

        const error = invalidDog.validateSync();
        assert.equal(error.errors['stats.HP'].kind, 'min');
        
    });

});