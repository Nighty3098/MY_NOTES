---
tags:
  - OWL
---
## [[Server DB]]

## Install:

```bash

git clone https://github.com/Nighty3098/OWL_BACKEND
cd OWL_BACKEND

docker-compose down -v
docker-compose up --build

docker-compose up

```


## API:

#### `GET /`

**Response:**
```json
{
  "message": "Welcome to OWL!"
}
```

---
#### `GET /api/version`

**Response:**
```json
{
  "version": "1.0.0"
}
```

---
#### `GET /api/health`

**Response:**
```json
{
  "status": "OK",
  "database": "CONNECTED"
}
```

---
#### `POST /api/register`

**Request:**
```json
{
  "email": "example@example.com",
  "name": "Name",
  "password_hash": "hashed_password"
}
```

**Response:**
```json
{
  "message": "Registration successful",
  "user": {
    "email": "example@example.com",
    "name": "Name"
  }
}
```

**Error Response:**
```json
{
  "message": "No data provided"
}
```
```json
{
  "message": "Missing fields: email, name, password_hash"
}
```
```json
{
  "message": "User already exists"
}
```

---
#### `POST /api/login`

**Request:**
```json
{
  "email": "example@example.com",
  "password_hash": "hashed_password"
}
```

**Response:**
```json
{
  "message": "Login successful",
  "user": {
    "email": "example@example.com",
    "name": "Name"
  }
}
```

**Error Response:**
```json
{
  "message": "No data provided"
}
```
```json
{
  "message": "Missing credentials"
}
```
```json
{
  "message": "Invalid credentials"
}
```

---
#### `POST /api/delete`

**Request:**
```json
{
  "email": "example@example.com",
  "password_hash": "hashed_password"
}
```

**Response:**
```json
{
  "message": "Account deleted successfully"
}
```

**Error Response:**
```json
{
  "message": "No data provided"
}
```
```json
{
  "message": "Missing credentials"
}
```
```json
{
  "message": "Invalid credentials"
}
```
```json
{
  "message": "Deletion failed"
}
```

---
#### `POST /api/get_projects`


**Request**
```json
{
  "email": "example@example.com",
  "password_hash": "hashed_password"
}
```

**Response:**
```json
[
  {
    "about": "Project Description",
    "created_at": "2023-01-01",
    "deadline": "2023-12-31",
    "estimated_time": "5 hours",
    "id": null,
    "link_to": "http://example.com",
    "priority": "high",
    "status": "In Progress",
    "title": "Project Title",
    "updated_at": "2023-01-01",
    "user_id": "4"
  },
  {
    "about": "Project Description",
    "created_at": "2023-01-01",
    "deadline": "2023-12-31",
    "estimated_time": "5 hours",
    "id": null,
    "link_to": "http://example.com",
    "priority": "high",
    "status": "In Progress",
    "title": "Project Title",
    "updated_at": "2023-01-01",
    "user_id": "4"
  }
]
```

**Error Response:**
```json
{
  "message": "Incorrect password"
}
```
```json
{
  "message": "No data provided"
}
```
```json
{
  "message": "Missing fields"
}
```
```json
{
  "message": "Missing credentials"
}
```

---
#### `POST /api/save_projects`

**Request**
```json
{
  "email": "example@example.com",
  "password_hash": "12345678",
  "title": "Project Title",
  "about": "Project Description",
  "deadline": "2023-12-31",
  "status": "In Progress",
  "priority": "high",
  "link_to": "http://example.com",
  "estimated_time": "5 hours",
  "created_at": "2023-01-01",
  "updated_at": "2023-01-01"
}
```

**Response:**
```json
{
  "message": "Saved project successfully"
}
```

**Error Response:**
```json
{
  "message": "Incorrect password"
}
```
```json
{
  "message": "No data provided"
}
```
```json
{
  "message": str
}
```
