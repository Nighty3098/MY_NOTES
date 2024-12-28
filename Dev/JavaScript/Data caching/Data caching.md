---
tags:
  - JavaScript
---
### **** Why do we need caching?

Caching allows us to:

- Reduce the number of requests to the server.
- Reduce page load time.
- Improve user experience by providing quick access to frequently used data.

### **** JavaScript Caching Methods

#### 1. Caching using objects and maps

One of the simplest ways to cache data in JavaScript is to use objects or maps. Let's look at an example where we will cache query results:

```javascript
const cache = new Map();

function fetchData(url) {
if (cache.has(url)) {
console.log('Data from cache');
return Promise.resolve(cache.get(url));
}

return fetch(url)
.then(response => response.json())
.then(data => {
cache.set(url, data);
return data;
});
}

// Usage
fetchData('https://api.example.com/data')
.then(data => console.log(data));
```

In this example, we check if the data is in the cache before making the request. If the data is already cached, we simply return it.

#### 2. Caching with LocalStorage

LocalStorage allows you to persist data between user sessions. This is useful for storing settings or application state:

```javascript
function saveToLocalStorage(key, value) {
localStorage.setItem(key, JSON.stringify(value));
}

function getFromLocalStorage(key) {
const value = localStorage.getItem(key);
return value ? JSON.parse(value) : null;
}

// Usage example
saveToLocalStorage('userSettings', { theme: 'dark' });
const settings = getFromLocalStorage('userSettings');
console.log(settings);
```

#### 3. Caching using Service Workers

Service Workers allow you to implement more complex caching strategies, including offline access. Here is an example of a simple Service Worker:

```javascript
self.addEventListener('install', event => {
event.waitUntil(
caches.open('my-cache').then(cache => {
return cache.addAll([
'/',
'/index.html',
'/styles.css',
'/script.js'
]);
})
);
});

self.addEventListener('fetch', event => {
event.respondWith(
caches.match(event.request).then(response => {
return response || fetch(event.request);
})
);
});
```

This code creates a cache when the Service Worker is installed and processes requests by first checking if the cache contains the data.

### **** HTTP Header Caching

You can also control caching at the HTTP header level. The `Cache-Control` and `Expires` headers help the browser decide which resources should be cached and for how long:

```http
Cache-Control: public, max-age=3600
Expires: Wed, 21 Oct 2025 07:28:00 GMT
```

These headers tell the browser to keep the resource in the cache for one hour.

### **** Examples of using caching

1. **Caching static files (CSS/JS)**

When loading static files, it is important to use the correct headers to cache them:

```javascript
// PHP example
header("Cache-Control: public, max-age=86400");
header("Expires: " . gmdate("D, d M Y H:i:s", time() + 86400) . " GMT");
```

2. **File versioning**

To prevent caching issues when updating files, you can use versioning:

```html
<script src="script.js?v=1"></script>
```

When changing a file, simply increase the version number.

[1] https://habr.com/ru/companies/tensor/articles/737432/
[2] https://vc.ru/dev/813665-kratko-o-keshirovanie-statiki-js-css
[3] https://professorweb.ru/my/html/html5/level6/6_3.php
[4] https://code.mu/ru/javascript/book/prime/basis/files-caching/
[5] https://habr.com/ru/articles/140338/
[6] https://sky.pro/wiki/javascript/keshirovanie-dannyh-kak-nastroit-upravlyat-i-reshat-problemy/
[7] https://tproger.ru/translations/javascript-code-caching-for-devs
[8] https://learn.javascript.ru/task/caching-decorator