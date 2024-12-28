---
tags:
  - JavaScript
---
### 1. **Locache**

**Locache** is a client-side data caching library that allows you to store strings, arrays, and objects. It supports both session and persistent caching.

**Usage example:**

```javascript
// Set cache lifetime
var seconds = 60;

// Write data to cache
locache.set("key", { 'user': 1, 'books': ['a', 'b', 'c'] }, seconds);

// Get data from cache
var data = locache.get("key"); // {'user': 1, 'books': ['a', 'b', 'c']}

// Data will be unavailable after 60 seconds
```

Locache also supports session caching:

```javascript
// Store data only for the current session
locache.session.set("private", { 'likes': ['kittens', 'JavaScript'] });
```

[1]

### 2. **MemoryCacher (Moleculer)**

**MemoryCacher** is a built-in caching module in the Moleculer framework that stores records in memory. It allows you to set the cache lifetime and the maximum number of items.

**Configuration example:**

```javascript
const broker = new ServiceBroker({
cacher: {
type: "Memory",
options: {
ttl: 60, // Time to live in seconds
max: 100 // Maximum number of items in the cache
}
}
});
```

This library also allows you to use custom key generation functions and control data cloning when returning from the cache.

[3]

### 3. **RedisCacher (Moleculer)**

**RedisCacher** is a distributed caching module based on Redis, which is ideal for applications with high load and the need for scalability.

**Usage example:**

```javascript
const broker = new ServiceBroker({
cacher: {
type: "Redis",
options: {
host: "localhost",
port: 6379,
password: "yourpassword"
}
}
});
```

RedisCacher uses parameter hashing to generate cache keys, which allows for efficient data management.

[3]

### 4. **Lru-cache**

**Lru-cache** is a library for implementing the LRU (Least Recently Used) caching algorithm. It is great for storing temporary data with limited memory.

**Usage example:**

``javascript
const LRU = require('lru-cache');

const options = {
max: 500, // Maximum number of items in the cache
maxAge: 1000 * 60 * 60 // Lifetime in milliseconds
};

const cache = new LRU(options);

// Write data to the cache
cache.set('key', 'value');

// Read data from the cache
const value = cache.get('key');
```

This library is useful for memory management and fast access to frequently used data.

Citations:
[1] https://habr.com/ru/articles/207884/
[2] https://habr.com/ru/companies/tensor/articles/737432/
[3] https://moleculer.services/ru/docs/0.14/caching.html
[4] https://timeweb.cloud/tutorials/redis/kak-kehshirovat-prilozheniya-node-js-s-redis
[5] https://habr.com/ru/articles/140338/
[6] https://tproger.ru/translations/javascript-code-caching-for-devs
[7] https://vc.ru/dev/813665-kratko-o-keshirovanie-statiki-js-css
[8] https://sky.pro/wiki/javascript/keshirovanie-dannyh-kak-nastroit-upravlyat-i-reshat-problemy/