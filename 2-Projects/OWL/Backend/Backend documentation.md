---
tags:
  - OWL
---
# API Documentation and Functional Extension

## Current API Endpoints

### 1. `GET /`

- **Description**: Redirects to an external website.
- **Response**: Redirect (HTTP 302) to `https://owl-gamma.vercel.app/`.
- **Example**:

```bash
curl http://localhost:5000/
```

---

### 2. `GET /api/health`

- **Description**: Checks the API status and database connection.
- **Response**:
  - `200 OK`: `{ "status": "OK", "database": "CONNECTED" }` or `{ "status": "OK", "database": "DISCONNECTED" }`
- **Example**:

```bash
curl http://localhost:5000/api/health
```

---

### 3. `GET /api/version`

- **Description**: Returns the API version.
- **Response**:
  - `200 OK`: `{ "version": "1.0.0" }`
- **Example**:

```bash
curl http://localhost:5000/api/version
```

---

### 4. `POST /api/register`

- **Description**: Registers a new user.
- **Request Body** (JSON):
  - `email` (string, required)
  - `name` (string, required)
  - `password_hash` (string, required)
- **Response**:
  - `201 Created`: `{ "message": "Registration successful", "user": { "id": <int>, "email": <string>, "name": <string> } }`
  - `400 Bad Request`: `{ "message": "Missing fields: <fields>" }`
  - `409 Conflict`: `{ "message": "<error_message>" }`
- **Example**:

```bash
curl -X POST -H "Content-Type: application/json" -d '{"email": "test@example.com", "name": "Test", "password_hash": "password123"}' http://localhost:5000/api/register
```

---

### 5. `POST /api/login`

- **Description**: Authenticates a user and issues a JWT token.
- **Request Body** (JSON):
  - `email` (string, required)
  - `password_hash` (string, required)
- **Response**:
  - `200 OK`: `{ "message": "Login successful", "token": <jwt_token>, "user": { "id": <int>, "email": <string>, "name": <string> } }`
  - `400 Bad Request`: `{ "message": "Missing fields: <fields>" }`
  - `401 Unauthorized`: `{ "message": "Invalid credentials" }`
- **Example**:

```bash
curl -X POST -H "Content-Type: application/json" -d '{"email": "test@example.com", "password_hash": "password123"}' http://localhost:5000/api/login
```

---

### 6. `POST /api/delete`

- **Description**: Deletes a user account (requires token).
- **Headers**:
  - `Authorization: <jwt_token>`
- **Request Body** (JSON):
  - `password_hash` (string, required)
- **Response**:
  - `200 OK`: `{ "message": "Account deleted successfully" }`
  - `400 Bad Request`: `{ "message": "Password is required" }`
  - `401 Unauthorized`: `{ "message": "Invalid password" }` or token errors
  - `500 Internal Server Error`: `{ "message": "Failed to delete account" }`
- **Example**:

```bash
curl -X POST -H "Authorization: <jwt_token>" -H "Content-Type: application/json" -d '{"password_hash": "password123"}' http://localhost:5000/api/delete
```

---

### 7. `POST /api/get_projects`

- **Description**: Retrieves a list of user projects (requires token).
- **Headers**:
  - `Authorization: <jwt_token>`
- **Response**:
  - `200 OK`: `{ "projects": [<project_data>] }`
  - Token errors: `401 Unauthorized` or `404 Not Found`
- **Example**:

```bash
curl -X POST -H "Authorization: <jwt_token>" http://localhost:5000/api/get_projects
```

---

### 8. `POST /api/save_projects`

- **Description**: Saves a new project (requires token).
- **Headers**:
  - `Authorization: <jwt_token>`
- **Request Body** (JSON):
  - `title` (string, required)
  - `about` (string, required)
  - `deadline` (string, format `YYYY-MM-DD`, required)
  - `status` (string, required)
  - `priority` (string, required)
  - `link_to` (string, required)
  - `board_id` (string, required)
  - `created_at` (string, required)
  - `updated_at` (string, required)
- **Response**:
  - `200 OK`: `{ "message": "<success_message>" }`
  - `400 Bad Request`: `{ "message": "Missing fields: <fields>" }` or `{ "message": "Invalid deadline format. Use YYYY-MM-DD" }` or `{ "message": "<error_message>" }`
  - Token errors: `401 Unauthorized`
- **Example**:

```bash
curl -X POST -H "Authorization: <jwt_token>" -H "Content-Type: application/json" -d '{"title": "Project", "about": "Test", "deadline": "2025-12-31", "status": "active", "priority": "high", "link_to": "http://example.com", "board_id": "abc123", "created_at": "2025-03-27", "updated_at": "2025-03-27"}' http://localhost:5000/api/save_projects
```

---

### 9. `POST /api/delete_project`

- **Description**: Deletes a specified project (requires token).
- **Headers**:
  - `Authorization: <jwt_token>`
- **Request Body** (JSON):
  - `project_id` (string, required) - The ID of the project to delete.
- **Response**:
  - `200 OK`: `{ "message": "<success_message>" }`
  - `400 Bad Request`: `{ "message": "Missing fields: project_id" }` or `{ "message": "<error_message>" }`
  - Token errors: `401 Unauthorized`
- **Example**:

```bash
curl -X POST -H "Authorization: <jwt_token>" -H "Content-Type: application/json" -d '{"project_id": "xyz789"}' http://localhost:5000/api/delete_project
```

---

### 10. `POST /api/create_board`

- **Description**: Creates a new board for the authenticated user (requires token).
- **Headers**:
  - `Authorization: <jwt_token>`
- **Request Body** (JSON):
  - `title` (string, required) - The title of the board.
- **Response**:
  - `201 Created`: `{ "message": "Board created successfully", "board_id": "<board_id>" }`
  - `400 Bad Request`: `{ "message": "Title is required" }`
  - Token errors: `401 Unauthorized`
- **Example**:

```bash
curl -X POST -H "Authorization: <jwt_token>" -H "Content-Type: application/json" -d '{"title": "New Board"}' http://localhost:5000/api/create_board
```

---

### 11. `POST /api/create_column`

- **Description**: Creates a new column within a specified board (requires token).
- **Headers**:
  - `Authorization: <jwt_token>`
- **Request Body** (JSON):
  - `board_id` (string, required) - The ID of the board to add the column to.
  - `title` (string, required) - The title of the column.
  - `color` (string, optional) - The color of the column (e.g., "var(--blur)").
- **Response**:
  - `201 Created`: `{ "message": "Column created successfully", "column_id": "<column_id>" }`
  - `400 Bad Request`: `{ "message": "Board ID and title are required" }`
  - `404 Not Found`: `{ "message": "Board not found" }`
  - Token errors: `401 Unauthorized`
- **Example**:

```bash
curl -X POST -H "Authorization: <jwt_token>" -H "Content-Type: application/json" -d '{"board_id": "abc123xyz", "title": "New Column", "color": "var(--blur)"}' http://localhost:5000/api/create_column
```

---

### 12. `POST /api/create_task`

- **Description**: Creates a new task within a specified column (requires token).
- **Headers**:
  - `Authorization: <jwt_token>`
- **Request Body** (JSON):
  - `column_id` (string, required) - The ID of the column to add the task to.
  - `content` (string, required) - The content/description of the task.
- **Response**:
  - `201 Created`: `{ "message": "Task created successfully", "task_id": "<task_id>" }`
  - `400 Bad Request`: `{ "message": "Column ID and content are required" }`
  - `404 Not Found`: `{ "message": "Column not found" }`
  - Token errors: `401 Unauthorized`
- **Example**:

```bash
curl -X POST -H "Authorization: <jwt_token>" -H "Content-Type: application/json" -d '{"column_id": "def456uvw", "content": "New Task"}' http://localhost:5000/api/create_task
```

---

### 13. `POST /api/delete_board`

- **Description**: Deletes a specified board and all its columns and tasks (requires token).
- **Headers**:
  - `Authorization: <jwt_token>`
- **Request Body** (JSON):
  - `board_id` (string, required) - The ID of the board to delete.
- **Response**:
  - `200 OK`: `{ "message": "Board deleted successfully" }`
  - `400 Bad Request`: `{ "message": "Board ID is required" }`
  - `404 Not Found`: `{ "message": "Board not found" }`
  - Token errors: `401 Unauthorized`
- **Example**:

```bash
curl -X POST -H "Authorization: <jwt_token>" -H "Content-Type: application/json" -d '{"board_id": "abc123xyz"}' http://localhost:5000/api/delete_board
```

---

### 14. `POST /api/rename_board`

- **Description**: Renames a specified board (requires token).
- **Headers**:
  - `Authorization: <jwt_token>`
- **Request Body** (JSON):
  - `board_id` (string, required) - The ID of the board to rename.
  - `new_title` (string, required) - The new title for the board.
- **Response**:
  - `200 OK`: `{ "message": "Board renamed successfully" }`
  - `400 Bad Request`: `{ "message": "Board ID is required" }`
  - `404 Not Found`: `{ "message": "Board not found" }`
  - Token errors: `401 Unauthorized`
- **Example**:

```bash
curl -X POST -H "Authorization: <jwt_token>" -H "Content-Type: application/json" -d '{"board_id": "abc123xyz", "new_title": "Updated Board"}' http://localhost:5000/api/rename_board
```

---

### 15. `POST /api/rename_column`

- **Description**: Renames a specified column (requires token).
- **Headers**:
  - `Authorization: <jwt_token>`
- **Request Body** (JSON):
  - `column_id` (string, required) - The ID of the column to rename.
  - `new_title` (string, required) - The new title for the column.
- **Response**:
  - `200 OK`: `{ "message": "Column renamed successfully" }`
  - `400 Bad Request`: `{ "message": "Column ID is required" }`
  - `404 Not Found`: `{ "message": "Column not found" }`
  - Token errors: `401 Unauthorized`
- **Example**:

```bash
curl -X POST -H "Authorization: <jwt_token>" -H "Content-Type: application/json" -d '{"column_id": "def456uvw", "new_title": "Updated Column"}' http://localhost:5000/api/rename_column
```

---

### 16. `POST /api/delete_column`

- **Description**: Deletes a specified column and all its tasks (requires token).
- **Headers**:
  - `Authorization: <jwt_token>`
- **Request Body** (JSON):
  - `column_id` (string, required) - The ID of the column to delete.
- **Response**:
  - `200 OK`: `{ "message": "Column deleted successfully" }`
  - `400 Bad Request`: `{ "message": "Column ID is required" }`
  - `404 Not Found`: `{ "message": "Column not found" }`
  - Token errors: `401 Unauthorized`
- **Example**:

```bash
curl -X POST -H "Authorization: <jwt_token>" -H "Content-Type: application/json" -d '{"column_id": "def456uvw"}' http://localhost:5000/api/delete_column
```

---

### 17. `POST /api/delete_task`

- **Description**: Deletes a specified task (requires token).
- **Headers**:
  - `Authorization: <jwt_token>`
- **Request Body** (JSON):
  - `task_id` (string, required) - The ID of the task to delete.
- **Response**:
  - `200 OK`: `{ "message": "Task deleted successfully" }`
  - `400 Bad Request`: `{ "message": "Task ID is required" }`
  - `404 Not Found`: `{ "message": "Task not found" }`
  - Token errors: `401 Unauthorized`
- **Example**:

```bash
curl -X POST -H "Authorization: <jwt_token>" -H "Content-Type: application/json" -d '{"task_id": "ghi789rst"}' http://localhost:5000/api/delete_task
```

---

### 18. `GET /api/get_boards`

- **Description**: Retrieves all boards, their columns, and tasks for the authenticated user (requires token).

- **Headers**:

  - `Authorization: <jwt_token>`

- **Request Body**: None

- **Response**:

  - `200 OK`: `{ "boards": [<board_data>] }` where `<board_data>` matches the provided JSON structure:

    ```json
    {
      "id": "pnbtm1v6s",
      "title": "OWL PROJECT",
      "columns": [
        {
          "id": "8rcx96kp2",
          "title": "UI",
          "tasks": [
            {
              "id": "x37zchdqe",
              "content": "Update the statistics display",
              "createdAt": "2025-02-05T13:36:57.104Z",
              "updatedAt": "2025-02-07T10:06:05.332Z",
              "completed": true,
              "boardId": "pnbtm1v6s"
            }
          ],
          "boardId": "pnbtm1v6s",
          "color": "var(--blur)"
        }
      ]
    }
    ```

- Token errors: `401 Unauthorized`

- **Example**:

```bash
curl -X GET -H "Authorization: <jwt_token>" http://localhost:5000/api/get_boards
```

---

### 19. `POST /api/change_password`

- **Description**: Changes the password for the authenticated user.
- **Headers**:
  - `Authorization: <jwt_token>` (required)
- **Request Body** (JSON):
  - `old_password` (string, required) — The user's current password.
  - `new_password` (string, required) — The new password to set.
- **Response**:
  - `200 OK`: `{ "message": "Password changed successfully" }`
  - `400 Bad Request`: `{ "error": "No data provided" }` or `{ "error": "Missing fields: <fields>" }` or `{ "error": "Incorrect old password" }` or `{ "error": "Error changing password: <error_message>" }`
  - `401 Unauthorized`: Token errors (e.g., `{ "message": "Token is missing" }`, `{ "message": "Token has expired" }`, `{ "message": "Token is invalid" }`)
  - `404 Not Found`: `{ "message": "User not found" }`
  - `500 Internal Server Error`: `{ "message": "Unexpected error: <error_message>" }`
- **Example**:

```bash
curl -X POST -H "Authorization: <jwt_token>" -H "Content-Type: application/json" -d '{"old_password": "old_password123", "new_password": "new_password123"}' http://localhost:5000/api/change_password
```

---

### 20. `GET /api/check_auth`

- **Description**: Checks if the user is authenticated and returns user information.
- **Headers**:
  - `Authorization: <jwt_token>` (required)
- **Response**:
  - `200 OK`:

    ```json
    {
      "authenticated": true,
      "token": "<jwt_token>",
      "user": {
        "email": "user@example.com",
        "name": "username"
      }
    }
    ```
  - `401 Unauthorized`: Token errors (missing/expired/invalid)
  - `404 Not Found`: User not found
- **Example**:

```bash
curl -X GET -H "Authorization: <jwt_token>" http://localhost:5000/api/check_auth
```

---

### 21. `GET /api/usage`

- **Description**: Provides information about server load (admin access only).
- **Headers**:
  - `Authorization: <jwt_token>` (required)
- **Response**:
  - `200 OK`:

    ```json
    {
        "cpu_usage": "float",
        "ram_usage": "float",
        "disk_usage": "float"
    }
    ```
  - `401 Unauthorized`: Token errors (missing/expired/invalid)
  - `403 Forbidden`: `{ "message": "Unauthorized access!" }` (non-admin token)
- **Example**:

```bash
curl -X GET -H "Authorization: <admin_jwt_token>" http://localhost:5000/api/usage
```

---

### 22. `POST /api/change_username`

- **Description**: Changes the username of the authenticated user.
- **Headers**:
  - `Authorization: <jwt_token>` (required)
- **Request Body** (JSON):
  - `new_username` (string, required) - New username (3-20 characters)
- **Response**:
  - `200 OK`: `{ "message": "Username changed successfully" }`
  - `400 Bad Request`:
    - `{ "message": "No data provided" }`
    - `{ "message": "New username is required" }`
    - `{ "message": "Username must be between 3 and 20 characters" }`
  - `401 Unauthorized`: Token errors
  - `409 Conflict`: `{ "error": "Username already taken" }`
- **Example**:

```bash
curl -X POST -H "Authorization: <jwt_token>" -H "Content-Type: application/json" -d '{"new_username": "new_username"}' http://localhost:5000/api/change_username
```

---

### 23. `POST /api/change_email`

- **Description**: Changes the email of the authenticated user.
- **Headers**:
  - `Authorization: <jwt_token>` (required)
- **Request Body** (JSON):
  - `new_email` (string, required) - New email address
- **Response**:
  - `200 OK`: `{ "message": "Email changed successfully" }`
  - `400 Bad Request`:
    - `{ "message": "No data provided" }`
    - `{ "message": "Missing fields: new_email" }`
  - `401 Unauthorized`: Token errors
  - `409 Conflict`: `{ "error": "Email already taken" }`
- **Example**:

```bash
curl -X POST -H "Authorization: <jwt_token>" -H "Content-Type: application/json" -d '{"new_email": "new_email@example.com"}' http://localhost:5000/api/change_email
```

---

### 24. `POST /api/reorder_board`

- **Description**: Reorders the boards for the authenticated user.
- **Headers**:
  - `Authorization: <jwt_token>` (required)
- **Request Body** (JSON):
  - Array of objects, each containing:
    - `board_id` (string, required) - The ID of the board.
    - `order` (integer, required) - The new order position.
- **Response**:
  - `200 OK`: `{ "messages": [<message_for_each_board>] }`
  - `400 Bad Request`: `{ "message": "Data is required" }`
  - Token errors: `401 Unauthorized`
- **Example**:

```bash
curl -X POST -H "Authorization: <jwt_token>" -H "Content-Type: application/json" -d '[{"board_id": "abc123", "order": 1}, {"board_id": "def456", "order": 2}]' http://localhost:5000/api/reorder_board
```

---

### 25. `POST /api/reorder_column`

- **Description**: Reorders the columns within boards for the authenticated user.
- **Headers**:
  - `Authorization: <jwt_token>` (required)
- **Request Body** (JSON):
  - Array of objects, each containing:
    - `column_id` (string, required) - The ID of the column.
    - `order` (integer, required) - The new order position.
- **Response**:
  - `200 OK`: `{ "messages": [<message_for_each_column>] }`
  - `400 Bad Request`: `{ "message": "Data is required" }`
  - Token errors: `401 Unauthorized`
- **Example**:

```bash
curl -X POST -H "Authorization: <jwt_token>" -H "Content-Type: application/json" -d '[{"column_id": "ghi789", "order": 1}, {"column_id": "jkl012", "order": 2}]' http://localhost:5000/api/reorder_column
```

---

### 26. `POST /api/reorder_task`

- **Description**: Reorders a task within its column for the authenticated user.
- **Headers**:
  - `Authorization: <jwt_token>` (required)
- **Request Body** (JSON):
  - `task_id` (string, required) - The ID of the task.
  - `new_order` (integer, required) - The new order position.
- **Response**:
  - `200 OK`: `{ "message": "<success_message>" }`
  - `400 Bad Request`: `{ "message": "Data is required" }`
  - `404 Not Found`: `{ "message": "<error_message>" }`
  - Token errors: `401 Unauthorized`
- **Example**:

```bash
curl -X POST -H "Authorization: <jwt_token>" -H "Content-Type: application/json" -d '{"task_id": "mno345", "new_order": 3}' http://localhost:5000/api/reorder_task
```

---

### 27. `POST /api/reorder_projects`

- **Description**: Reorders the projects for the authenticated user.
- **Headers**:
  - `Authorization: <jwt_token>` (required)
- **Request Body** (JSON):
  - Array of objects, each containing:
    - `project_id` (string, required) - The ID of the project.
    - `order` (integer, required) - The new order position.
- **Response**:
  - `200 OK`: `{ "messages": [<message_for_each_project>] }`
  - `400 Bad Request`: `{ "message": "Data is required" }`
  - Token errors: `401 Unauthorized`
- **Example**:

```bash
curl -X POST -H "Authorization: <jwt_token>" -H "Content-Type: application/json" -d '[{"project_id": "pqr678", "order": 1}, {"project_id": "stu901", "order": 2}]' http://localhost:5000/api/reorder_projects
```

---

### Login History

The system automatically records login history for security purposes:

- IP address of each login attempt
- Timestamp of the login
- User ID associated with the login

This data is stored in the `user_login` table and can be used for:

- Security auditing
- Detecting suspicious login patterns
- Tracking user activity

---

## Security Recommendations

1. **Password Policy**:

   - Minimum length: 8 characters
   - Should contain: uppercase, lowercase, numbers, special characters
   - Regular password change requirements

2. **Token Security**:

   - Tokens expire after 10 years
   - Store securely on client side
   - Clear on logout
   - Refresh mechanism for long-term sessions

3. **API Security**:

   - All endpoints except `/login` and `/register` require authentication
   - Use HTTPS in production
   - Rate limiting recommended
   - Input validation on all endpoints

4. **Data Protection**:

   - User passwords are hashed using `werkzeug.security`
   - Sensitive data encrypted in transit
   - Login history maintained for audit

---

## Functional Extension

### 1. Adding New Endpoints

To extend the API, add new resources using `api.add_resource`. Example of adding an endpoint to update a project:

```python
class UpdateProject(Resource):
    @token_required
    def put(self, current_user):
        data = request.get_json()
        if not data or "project_id" not in data:
            return {"message": "Project ID is required"}, 400
        
        # Logic to update the project in the database
        success, message = update_project(current_user.id, data["project_id"], data)
        if success:
            return {"message": message}, 200
        return {"message": message}, 400

api.add_resource(UpdateProject, "/api/update_project")
```

- Implement the `update_project` function in `db/db.py`.
- Add necessary field checks and validation.

---

### 2. Enhancing Authentication

- **Refresh Tokens**: Add support for refresh tokens to extend sessions without re-entering passwords.
  - New endpoint: `POST /api/refresh`.
  - Logic: Verify the old token and issue a new one with an updated `exp`.
- **User Roles**: Add a `role` field to the `User` model and check permissions in the `@token_required` decorator.

```python
def token_required(roles=None):
    @wraps(f)
    def decorated(self, *args, **kwargs):
        # Current token validation logic
        if roles and current_user.role not in roles:
            return {"message": "Insufficient permissions"}, 403
        return f(self, current_user, *args, **kwargs)
    return decorated
```

---

### 3. Extending the Project Model

Add new fields to the project model (e.g., `tags`, `assignees`) and update `SaveProject` and `GetProjects` to support them.

```python
# In db/db.py
class Project(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"))
    title = db.Column(db.String(100), nullable=False)
    about = db.Column(db.Text, nullable=False)
    deadline = db.Column(db.Date, nullable=False)
    status = db.Column(db.String(20), nullable=False)
    priority = db.Column(db.String(20), nullable=False)
    link_to = db.Column(db.String(200))
    estimated_time = db.Column(db.String(50))
    created_at = db.Column(db.DateTime, nullable=False)
    updated_at = db.Column(db.DateTime, nullable=False)
    tags = db.Column(db.String(200))  # New field
```

---

### 4. Pagination Support

Add `page` and `per_page` parameters to `GetProjects`:

```python
class GetProjects(Resource):
    @token_required
    def post(self, current_user):
        page = request.args.get("page", 1, type=int)
        per_page = request.args.get("per_page", 10, type=int)
        projects = get_projects(current_user.id, page, per_page)
        return {"projects": projects, "page": page, "per_page": per_page}, 200
```

- Update `get_projects` in `db/db.py` to support pagination using `paginate`.

---

### 5. Error Handling

Add more custom error handlers:

```python
@app.errorhandler(400)
def bad_request(error):
    logger.error(f"Error: 400 - {error}")
    return {"message": "Bad request"}, 400
```

---

### 6. Testing

Add unit tests using `unittest` or `pytest` to validate the API:

```python
import unittest
from app import app

class TestAPI(unittest.TestCase):
    def setUp(self):
        app.config["TESTING"] = True
        self.app = app.test_client()

    def test_health(self):
        response = self.app.get("/api/health")
        self.assertEqual(response.status_code, 200)
        self.assertIn("status", response.json)

if __name__ == "__main__":
    unittest.main()
```

---

## Notes

- **Security**: Replace `SECRET_KEY` in the configuration with a secure key from an environment variable (`os.getenv("SECRET_KEY")`).
- **Logging**: Configure log rotation in `logger` to prevent file overflow.
- **Documentation**: Use Swagger (e.g., via `flask-swagger-ui`) for automatic API documentation generation.
- **Password Security**: Ensure that password transmission occurs over a secure channel (HTTPS). If there are specific password complexity requirements (e.g., minimum length, special characters), consider adding them as a note or implementing server-side validation.