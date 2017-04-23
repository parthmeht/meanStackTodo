app.factory('Todos', ['$resource', function($resource){
    return $resource('/todos/:id', null, {
    'update': { method:'PUT' }
    });
}]);


/*{ 'get':    {method:'GET'},               // get individual record
  'save':   {method:'POST'},                // create record
  'query':  {method:'GET', isArray:true},   // get list all records
  'remove': {method:'DELETE'},              // remove record
  'delete': {method:'DELETE'} };            // same, remove record*/