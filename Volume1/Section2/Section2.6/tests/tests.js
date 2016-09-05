var assert = require('assert'),
    math = require('../math');

describe('math tests', function(){
  it('should add', function(done){
    assert.strictEqual(math.add(1, 1), 2);
    assert.strictEqual(math.add(0, 10), 10);
    assert.strictEqual(math.add(-1, 1), 0);
    done();
  });

  it('should subtract', function(done){
    assert.strictEqual(math.subtract(1,1), 0);
    assert.strictEqual(math.subtract(10,5), 5);
    assert.strictEqual(math.subtract(1,-1), 2);
    done();
  });
});
