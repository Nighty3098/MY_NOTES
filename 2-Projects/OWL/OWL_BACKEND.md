---
tags:
  - OWL
---
## Table of Contents

- [OWL\_BACKEND](#owl_backend)
  - [Table of Contents](#table-of-contents)
  - [`Install`](#install)
  - [`Run the Service`](#run-the-service)
    - [`Run with SQLite DB`](#run-with-sqlite-db)
    - [`Run with Docker and SQLite`](#run-with-docker-and-sqlite)
  - [`Configuration`](#configuration)
  - [`API Endpoints`](#api-endpoints)
    - [Authentication Required for Marked Endpoints 🔒](#authentication-required-for-marked-endpoints-)
    - [Projects Management 🔒](#projects-management-)
    - [Boards System 🔒](#boards-system-)
    - [Columns Management 🔒](#columns-management-)
    - [Tasks System 🔒](#tasks-system-)
    - [User Management 🔒](#user-management-)

---

## `Install`<a name="install"></a>

```bash
git clone https://github.com/Nighty3098/OWL_BACKEND
cd OWL_BACKEND
```

---

## `Run the Service`<a name="run-the-service"></a>

### `Run with SQLite DB`<a name="run-with-sqlite-db"></a>
```bash
pip3 install -r requirements.txt
cd src
python3 app.py
```

### `Run with Docker and SQLite`<a name="run-with-docker-and-sqlite"></a>
```bash
docker-compose build --no-cache
docker-compose up

# To stop:
docker-compose down
```

> [!warning]
> MariaDB support is currently in development

---

## `Configuration`<a name="configuration"></a>
Create `src/.env` file with these variables:

```ini
SECRET_KEY=my_secret_key
DATABASE_URL=sqlite:///owl.db  # Default SQLite configuration
# For MySQL/MariaDB (in development):
# DATABASE_URL=mysql+pymysql://owl_user:owl_password@mysql:3306/owl_db
FLASK_ENV=development
SERVICE_PORT=5000
ADMIN_TOKEN=your_admin_token_here
```

---

## `API Endpoints`<a name="api-endpoints"></a>

### Authentication Required for Marked Endpoints 🔒

| Method | Endpoint                | Description                             |
|--------|-------------------------|-----------------------------------------|
| POST   | `/api/register`         | User registration                       |
| POST   | `/api/login`            | User login (JWT token generation)       |
| POST   | `/api/delete` 🔒        | Delete user account                     |
| GET    | `/api/health`           | Service health check                    |
| GET    | `/api/version`          | Get service version                     |
| GET    | `/api/usage` 🔒         | Server metrics (Admin only)             |

### Projects Management 🔒
| Method | Endpoint                | Description                             |
|--------|-------------------------|-----------------------------------------|
| POST   | `/api/get_projects`     | Get all user projects                   |
| POST   | `/api/save_projects`    | Create/update project                   |
| POST   | `/api/delete_project`   | Remove project                          |
| POST   | `/api/reorder_projects` | Update projects order                   |

### Boards System 🔒
| Method | Endpoint                | Description                             |
|--------|-------------------------|-----------------------------------------|
| POST   | `/api/create_board`     | Create new board                        |
| POST   | `/api/delete_board`     | Delete board                            |
| POST   | `/api/rename_board`     | Update board title                      |
| GET    | `/api/get_boards`       | Get all user boards                     |
| POST   | `/api/reorder_board`    | Update boards order                     |

### Columns Management 🔒
| Method | Endpoint                | Description                             |
|--------|-------------------------|-----------------------------------------|
| POST   | `/api/create_column`    | Create new column                       |
| POST   | `/api/delete_column`    | Delete column                           |
| POST   | `/api/rename_column`    | Update column title                     |
| POST   | `/api/reorder_column`   | Update columns order                    |

### Tasks System 🔒
| Method | Endpoint                | Description                             |
|--------|-------------------------|-----------------------------------------|
| POST   | `/api/create_task`      | Create new task                         |
| POST   | `/api/delete_task`      | Delete task                             |
| POST   | `/api/reorder_task`     | Update tasks order                      |

### User Management 🔒
| Method | Endpoint                | Description                             |
|--------|-------------------------|-----------------------------------------|
| POST   | `/api/change_password`  | Update user password                    |
| POST   | `/api/change_email`     | Update user email                       |
| POST   | `/api/change_username`  | Update username                         |
| GET    | `/api/check_auth`       | Validate authentication token           |