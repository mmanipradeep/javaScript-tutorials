const Promise = require('bluebird');

function doSomething(action) {
  return Promise.try(action)
    .then((result) => console.log(result))
    .catch((error) => console.error(error))
    .finally(() => console.log('Done'));
}

doSomething(() => 'Sync result');

doSomething(() => {
  throw new Error('Sync error');
});

doSomething(async () => 'Async result');

doSomething(async () => {
  throw new Error('Async error');
});
