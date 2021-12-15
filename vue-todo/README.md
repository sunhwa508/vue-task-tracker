# vue-crash-2021
![image](https://user-images.githubusercontent.com/61695175/144178335-177c8ed8-6b1d-4584-893e-49d2da12dcd9.png)

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).


### production server run

`npm run build`

`sudo npm i -g serve`

`serve -s dist`

### backend json-server

`npm i -g json-server`

## JSON Server
- get a full fask REST API with zero coding

```javascript
{
  "posts": [
    { "id": 1, "title": "json-server", "author": "typicode" }
  ],
  "comments": [
    { "id": 1, "body": "some comment", "postId": 1 }
  ],
  "profile": { "name": "typicode" }
}
```

- start JSON Server
json-server --watch db.json

Now if you go to http://localhost:3000/posts/1, you'll get

```javascript 
{ "id": 1, "title": "json-server", "author": "typicode" }
```

https://www.npmjs.com/package/json-server
