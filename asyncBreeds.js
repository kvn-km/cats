const fs = require('fs');

const breedDetailsFromFile = function(breed, callbackFunction) {
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    if (error) {
      return "blah blah blah";
    }
    return data;
  });
};

module.exports = breedDetailsFromFile;


/**
 *
 * describe('Test on I/O', function() {
  it('write test', function(done) {
    fs.writeFile('./text.txt', "Hello Node.js" + os.EOL, function(err) {
      if (err) {
        throw "Unable to read file";
      }
      expect(3).to.equal(4); // Should fail
      done();
    });
  });
 */