async.Require
==
~~Yet another~~ Asynchronous module loader
--

**Example**

Import module loader

```js
const load = require('@dx-libs/async.require');
```

Load resource

```js
load('./resource1').then(resource => {
  console.log(resource);
});
```
or 

```js
(async () => {
  const value1 = await load('./resource1');
  const value2 = await load('./resource2');
  const value3 = await load('./resource3');

  console.log('value1:', value1);
  console.log('value2:', value2);
  console.log('value3:', value3);
})();
```

You can __load multiple__ resources:

```js
load(['./resource1', './resource2', './resource3'])
  .then(arr => {
    console.log('resources:', arr);
  });
```