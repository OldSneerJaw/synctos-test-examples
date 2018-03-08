// Import the synctos test-helper module and the error message formatter to ease the process of writing test cases
var testHelper = require('synctos').testHelper;
var errorFormatter = testHelper.validationErrorFormatter;

describe('my example document definitions', function() {
  // Need to initialize the test helper module with the sync function under test before every test case
  beforeEach(function() {
    testHelper.initDocumentDefinitions('src/my-example-doc-definitions.js');
  });

  it('should consider the document valid when all constraints are met', function() {
    var doc = {
      _id: 'my-document-id',
      type: 'exampleDoc',
      foo: 'bar'
    }

    testHelper.verifyDocumentCreated(doc, [ 'write-' + doc._id ]);
  });

  it('should consider a value of foo that is not three letters invalid', function() {
    var doc = {
      _id: 'my-document-id',
      type: 'exampleDoc',
      foo: 'invalid'
    }

    testHelper.verifyDocumentNotCreated(
      doc,
      doc.type,
      [ errorFormatter.regexPatternItemViolation('foo', /^[a-z]{3}$/) ],
      [ 'write-' + doc._id ]);
  });
});
