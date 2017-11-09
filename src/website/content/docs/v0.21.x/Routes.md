---
title: Routes
layout: docs_page.html
path: /docs/v0.21.x/Routes
version: v0.21.x


---

## Routes
<a name="full-declaration"></a>
### Full declaration
```js
fastify.route(options)
```
* `method`: currently it supports `'DELETE'`, `'GET'`, `'HEAD'`, `'PATCH'`, `'POST'`, `'PUT'` and `'OPTIONS'`.

* `url`: the path of the url to match this route (alias: `path`).
* `schema`: an object containing the schemas for the request and response.
They need to be in
  [JSON Schema](http://json-schema.org/) format, check [here](/docs/v0.21.x/Validation-And-Serialize) for more info.

  * `body`: validates the body of the request if it is a POST or a
    PUT.
  * `querystring`: validates the querystring. This can be a complete JSON
  Schema object, with the property `type` of `object` and `properties` object of parameters, or
  simply the values of what would be contained in the `properties` object as shown below.
  * `params`: validates the params.
  * `response`: filter and generate a schema for the response, setting a
    schema allows us to have 10-20% more throughput.
* `handler(request, reply)`: the function that will handle this request.

  `request` is defined in [Request](/docs/v0.21.x/Request).

  `reply` is defined in [Reply](/docs/v0.21.x/Reply).

The routing is handled by [find-my-way](https://github.com/delvedor/find-my-way), so you can refer its documentation for the url building.

Example:
```js
fastify.route({
  method: 'GET',
  url: '/',
  schema: {
    querystring: {
      name: {
        type: 'string'
      },
      excitement: {
        type: 'integer'
      }
    },
    response: {
      200: {
        type: 'object',
        properties: {
          hello: {
            type: 'string'
          }
        }
      }
    }
  },
  handler: function (request, reply) {
    reply.send({ hello: 'world' })
  }
})
```

<a name="shorthand-declaration"></a>
### Shorthand declaration
The above route declaration is more *Hapi*-like, but if you prefer an *Express/Restify* approach, we support it as well:
`fastify.get(path, [schema], handler)`  
`fastify.head(path, [schema], handler)`  
`fastify.post(path, [schema], handler)`  
`fastify.put(path, [schema], handler)`  
`fastify.delete(path, [schema], handler)`  
`fastify.options(path, [schema], handler)`  
`fastify.patch(path, [schema], handler)`  
