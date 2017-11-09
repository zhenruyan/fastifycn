---
title: Server Methods
layout: docs_page.html
path: /docs/v0.27.x/Server-Methods
version: v0.27.x


---

## Server Methods

<a name="server"></a>
#### server
`fastify.server`: The Node core [server](https://nodejs.org/api/http.html#http_class_http_server) object

<a name="ready"></a>
#### ready
Function called when all the plugins has been loaded.  
It takes an error parameter if something went wrong.
```js
fastify.ready(err => {
  if (err) throw err
})
```

<a name="listen"></a>
#### listen
Starts the server on the given port after all the plugins are loaded, internally waits for the `.ready()` event. The callback is the same as the Node core.
```js
fastify.listen(3000, err => {
  if (err) throw err
})
```

Specifying an address is also supported:

```js
fastify.listen(3000, '127.0.0.1', err => {
  if (err) throw err
})
```

<a name="route"></a>
#### route
Method to add routes to the server, it also have shorthands functions, check [here](/docs/v0.27.x/Routes).

<a name="routes-iterator"></a>
#### routes iterator
The Fastify instance is an Iterable object with all the registered routes.  
The route properties are the same the developer has declared [here](/docs/v0.27.x/Routes).
```js
fastify.get('/route', opts, handler)

fastify.ready(() => {
  for (var route of fastify) {
    console.log(route)
    /* will output:
    {
      '/route': {
        get: {
          method: String,
          ulr: String,
          schema: Object,
          handler: Function,
          Request: Function,
          Reply: Function
        }
      }
    }
    */
  }
})
```

<a name="close"></a>
#### close
`fastify.close(callback)`: call this function to close the server instance and run the [`'onClose'`](/docs/v0.27.x/Hooks#on-close) hook.

<a name="decorate"></a>
#### decorate*
Function useful if you need to decorate the fastify instance, Reply or Request, check [here](/docs/v0.27.x/Decorators).

<a name="register"></a>
#### register
Fastify allows the user to extend its functionalities with plugins.
A plugin can be a set of routes, a server decorator or whatever, check [here](/docs/v0.27.x/Plugins).

<a name="use"></a>
#### use
Function to add middlewares to Fastify, check  [here](/docs/v0.27.x/Middlewares).

<a name="addHook"></a>
#### addHook
Function to add a specific hook in the lifecycle of Fastify, check  [here](/docs/v0.27.x/Hooks).

<a name="logger"></a>
#### logger
The logger instance, check  [here](/docs/v0.27.x/Logging).

<a name="inject"></a>
#### inject
Fake http injection (for testing purposes)  [here](/docs/v0.27.x/Testing#inject).
