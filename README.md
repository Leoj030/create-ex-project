# 🚀 Create Express Project

A simple, modern Express.js project boilerplate using Jest, Babel, and best practices for rapid backend development and easy integration, and can also be used with Typescript or just Javascript.

## ✨ Features

- **Express.js** as the backend framework
- **Javascript & Typescript** support
- **Jest** for testing
- **Babel** for transpilation
- **ESLint** and **Prettier** for code quality and formatting
- **Ready-to-use project structure** (controllers, routes, tests)
- **Common backend utilities**: dotenv, cors, cookie-parser, mongoose, jsonwebtoken, bcryptjs, uuid, and more

## 🗂️ Project Structure

```sh

src/
  index.ts                # Entry point
  config/
    limiter.config        # Rate limiter config
  controllers/
    getter.controller     # Controller
  routes/
    getter.route          # Route
tests/
  getHello.test           # Test
```

## 🏁 Getting Started

### 1. Install the package

```sh
npx create-ex-project <project-name>
```

Executing the package will automatically install all dependencies.

---

### 3. Development

Start the development server with hot-reloading:

```sh
npm run dev:start
```

Type-check in watch mode: for (Typescript only)

```sh
npm run dev:type-check
```

---

### 4. Build and Run

Build the project:

```sh
npm run build
```

Start the production server after build (for Typescript only. You can proceed with npm start if using Javascript):

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

- `GET /` — Returns `"Hello World"`

## 🛠️ Customization

- Add new routes in `src/routes/`
- Add new controllers in `src/controllers/`
- Add tests in `tests/`

## 📝 License

[`MIT`](LICENSE)
