---
tags:
  - OWL
---

![[drawSQL-image-export-2025-03-14.png]]

## Users table: 

```SQl

CREATE TABLE users (
    id VARCHAR(36) PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
);

```

## Boards table:

```SQL 

CREATE TABLE boards (
    id VARCHAR(36) PRIMARY KEY,
    user_id VARCHAR(36) NOT NULL,
    title VARCHAR(255) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

```

## Columns table:

```SQL 

CREATE TABLE columns (
    id VARCHAR(36) PRIMARY KEY,
    board_id VARCHAR(36) NOT NULL,
    title VARCHAR(255) NOT NULL,
    color VARCHAR(50) DEFAULT 'var(--blur)',
    FOREIGN KEY (board_id) REFERENCES boards(id) ON DELETE CASCADE
);

```

## Tasks table:

```SQL

CREATE TABLE tasks (
    id VARCHAR(36) PRIMARY KEY,
    column_id VARCHAR(36) NOT NULL,
    content TEXT NOT NULL,
    completed BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (column_id) REFERENCES columns(id) ON DELETE CASCADE
);

```

## Projects table:

```SQL 

CREATE TABLE projects (
    id VARCHAR(36) PRIMARY KEY,
    user_id VARCHAR(36) NOT NULL,
    title VARCHAR(255) NOT NULL,
    about TEXT,
    deadline DATE,
    status ENUM('Cancelled', 'In Progress', 'On Hold', 'Planned') DEFAULT 'Planned',
    priority ENUM('low', 'medium', 'high') DEFAULT 'medium',
    link_to VARCHAR(512),
    estimated_time INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

```

## Settings table:

```SQL 

CREATE TABLE settings (
    id VARCHAR(36) PRIMARY KEY,
    user_id VARCHAR(36) NOT NULL UNIQUE,
    theme VARCHAR(255) DEFAULT 'nord/nord.css',
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

```
