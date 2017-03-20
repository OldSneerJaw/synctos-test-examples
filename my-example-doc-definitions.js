{
  exampleDoc: {
    typeFilter: simpleTypeFilter,
    channels: function(doc, oldDoc) {
      return {
        write: [ 'write-' + doc._id ]
      }
    },
    propertyValidators: {
      foo: {
        type: 'string',
        required: true,
        regexPattern: new RegExp('^[a-z]{3}$')
      }
    }
  }
}
