# isomorphic-crud-provider

Standard interfaces for runtime and tech agnostic CRUD operations.

## Semantics

Each interface member semantically mirrors the HTTP verb of the same name:

- GET: read one or more entities
- POST: create an entity
- PUT: upsert an entity
- PATCH: override parts of an entity
- DELETE: delete an entity
