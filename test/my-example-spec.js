// Import the synctos test-fixture-maker module and the error message formatter to ease the process of writing test cases
var synctos = require('synctos');
var testFixtureMaker = synctos.testFixtureMaker;
var errorFormatter = synctos.validationErrorFormatter;

describe('my example document definitions', function() {
  // Need to initialize the test fixture with the document definitions under test before every test case
  var testFixture = testFixtureMaker.initFromDocumentDefinitions('src/my-example-doc-definitions.js');
  beforeEach(function() {
    testFixture.resetTestEnvironment();
  });

  it('should consider the document valid when all constraints are met', function() {
    var doc = {
      _id: 'my-document-id',
      type: 'exampleDoc',
      foo: 'bar'
    };

    testFixture.verifyDocumentCreated(doc, [ 'write-' + doc._id ]);
  });

  it('should consider a value of foo that is not three letters invalid', function() {
    var doc = {
      _id: 'my-document-id',
      type: 'exampleDoc',
      foo: 'invalid'
    };

    testFixture.verifyDocumentNotCreated(
      doc,
      doc.type,
      [ errorFormatter.regexPatternItemViolation('foo', /^[a-z]{3}$/) ],
      [ 'write-' + doc._id ]);
  });
});
