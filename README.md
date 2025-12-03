# 🚀 Generate Express App

Express.js boilerplate with a clean, layered architecture designed for rapid backend development. Built with flexibility in mind, supporting both **TypeScript** and **JavaScript** to match your preferences.

## ✨ Features

### 🎯 Core Framework

-   **Express.js** — Fast, minimalist web framework for Node.js
-   **TypeScript & JavaScript Support** — Choose your preferred language or switch between them seamlessly

### 🧪 Testing & Quality

-   **Jest** — Comprehensive testing framework with built-in mocking and coverage
-   **Babel Integration** — Pre-configured for seamless Jest compatibility, ensuring tests always work reliably
-   **ESLint** — Strict linting rules for consistent code quality
-   **Prettier** — Opinionated code formatting for unified style across your team

### 🏗️ Architecture

-   **Layered Architecture** — Clean separation of concerns with dedicated layers:
    -   **Controllers** — Handle request/response logic
    -   **Routes** — Define API endpoints and middleware
    -   **Configs** — Centralized configuration management
    -   **Services** — Business logic layer (ready to extend)
-   **Production-Ready Structure** — Organized for scalability and maintainability

### 🔧 Built-in Utilities

-   **dotenv** — Environment variable management
-   **cors** — Cross-Origin Resource Sharing
-   **express-rate-limit** — Rate limiting
-   **helmet** — Security headers

## 🗂️ Project Structure

```sh
src/
  ├── index                    # Application entry point
  ├── config/                  # Configuration layer
  │   └── limiter.config       # Rate limiting configuration
  │   └── cors.config          # CORS configuration
  ├── controllers/             # Controller layer
  │   └── getter.controller    # Example controller
  └── routes/                  # Routing layer
      └── getter.route         # Example route definition

tests/
  └── getHello.test            # Example test suite
```

## 🏁 Getting Started

### 1. Creating the project

**This creates the directory and install the package**

```sh
npx gen-ex-app <project-name>
```

or

**This uses the current directory and install the package**

```sh
npx gen-ex-app .
```

---

### 3. Development

Start the development server with hot-reloading:

```sh
npm run dev
```

Type-check in watch mode: for (Typescript only)

```sh
npm run dev:type-check
```

---

### 4. Build and Run

Build the project (Only if using Typescript, you can proceed to 'npm start' if using Javascript):

```sh
npm run build
```

Start the server:

```sh
npm start
```

Or build and start in one step: (Typescript only)

```sh
npm run build-start
```

---

### 5. Linting and Formatting

Check linting errors:

```sh
npm run lint
```

Fix linting errors:

```sh
npm run lint:fix
```

Format code with Prettier:

```sh
npm run format
```

Check formatting:

```sh
npm run format:check
```

---

### 6. Testing

Run all tests:

```sh
npm test
```

## 📡 Example Endpoint

-   `GET /` — Returns `"Hello World"`

## 🛠️ Customization

-   Add new routes in `src/routes/`
-   Add new controllers in `src/controllers/`
-   Add tests in `tests/`

## 📝 License

[`MIT`](LICENSE)
