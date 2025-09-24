<h1 align="center">Technology Stack</h1>
<div align="center">
<img title="nodejs" alt="nodejs" height=48 src="https://tinyurl.com/y6suenee"/>
<img title="nestjs" alt="nestjs" height=48 src="https://tinyurl.com/4nwu8a4e"/>
<img title="typescript" alt="typescript" height=48 src="https://tinyurl.com/kctcy2an"/>
<img title="prisma-orm" alt="prisma-orm" height=48 src="https://tinyurl.com/4nwnb4e9"/>
<img title="postgresql" alt="postgresql" height=48 src="https://tinyurl.com/4cj52e8y"/>
<img title="redis" alt="redis" height=48 src="https://tinyurl.com/4x4663ef"/>
<img title="docker" alt="docker" height=48 src="https://tinyurl.com/4p53a2nm"/>
<img title="oauth2" alt="oauth2" height=48 src="https://tinyurl.com/33u9vxje"/>
<img title="nextjs" alt="nextjs" height=48 src="https://tinyurl.com/378x8jjt"/>
<img title="shadcn" alt="shadcn" height=48 src="https://tinyurl.com/5djybs8j"/>
<img title="tailwindcss" alt="tailwindcss" height=48 src="https://tinyurl.com/2v6fr5ve"/>
<img title="prettier" alt="prettier" height=48 src="https://prettier.io/icon.png"/>
<img title="zod" alt="zod" height=48 src="https://tinyurl.com/yxkyb5ev"/>
<img title="react-hook-forms" alt="react-hook-forms" height=48 src="https://tinyurl.com/579xapsu"/>
<img title="feature-sliced-design" alt="feature-sliced-design" height=48 src="https://tinyurl.com/yd6thayc"/>
</div>

<br />
<br />

<h1 align="center">Fullstack Authorization</h1>

### Fullstack Authorization using Nest.js (Node Framework), Postgresql (DB), Redis (Sessions), Prisma (ORM), Docker Compose, Oauth2 (Google | Github), 2FA (Email Verification), Google Captcha. Frontend - Next.js, Tailwind, ShadCN, Zod, React-hook-form.

## Features

**User Authentication**: Register and log in with email and password or via OAuth2 providers (Google, GitHub).

**Two-Factor Authentication (2FA)**: Optional 2FA via email-based one-time codes.

**Email Verification**: Mandatory email verification upon registration.

**Password Recovery**: Secure password reset functionality via email.

**Google reCAPTCHA**: Protects registration and login forms from bots.

**User Profile Management**: Update name, email, and 2FA settings.

**Session Management**: Secure session handling with Redis and logout functionality.

**Dockerized Deployment**: Backend and frontend are containerized with Docker and orchestrated using Docker Compose.

## Technologies

### Backend

**Node.js**: JavaScript backend runtime.

**NestJS**: Framework for building scalable applications.

**Prisma ORM**: Database toolkit for PostgreSQL to manage data.

**PostgreSQL**: Relational database.

**Redis**: Session management.

**OAuth2**: Authentication via Google and GitHub.

**Argon2**: Password hashing algorithm.

**TypeScript**: Strongly typed JavaScript for better maintainability.

**Docker**: Containerization for consistent environments.

**Docker Compose**: Multi-container orchestration for local development.

<br />

### Frontend

**Next.js**: React framework for server-side rendering.

**TypeScript**: Type-safe JavaScript for robust frontend code.

**Tailwind CSS**: Utility-first CSS framework for styling.

**ShadCN**: Component library for accessible and customizable UI.

**Zod**: Schema validation for form data.

**React Hook Form**: Performant and flexible form handling.

## How It Works

### The application provides a secure authentication flow with the following steps:

### Registration:

Users can register using an email and password or via OAuth2 (Google or GitHub). Google reCAPTCHA is required to prevent
automated registrations. After registration, a verification email is sent. Users must click the link to verify their
email before accessing the profile page.

### Login:

Registered users can log in with their credentials or OAuth2 providers. If 2FA is enabled, a one-time code is sent to
the user's email, which must be entered to complete the login. Sessions are managed securely using Redis.

### Profile Management:

Users can update their name, email, or enable/disable 2FA. Changes are validated and securely stored in the PostgreSQL
database.

### Password Recovery:

Users can request a password reset link via email if they forget their password. The link allows secure password reset.

### Logout:

Users can log out by clicking the user icon and selecting "Logout," which terminates the session.

<br />

# Setup and Installation

## Prerequisites:

-  you need to have `docker` and `docker-compose` installed. Follow the
   [docker documentation](https://docs.docker.com/compose/install/) on how to do this. Node.js (optional for local
   development without Docker).

## Quickstart:

-  create a new directory (e.g. `fullstack-auth`) and navigate into it.
-  download the [fullstack-auth](https://github.com/Liknox/fullstack-auth) repo.
-  create an `.env` file, you can copy the content from the
   [.env.example](https://github.com/Liknox/fullstack-auth/blob/master/.env.example).
-  run `docker compose up -d`

Access the **Application**:

**Frontend**: http://localhost:3000

**Backend API**: http://localhost:4000

## Usage

-  Register: Navigate to `/auth/register`, complete the form with reCAPTCHA, and verify your email.

-  Login: Go to `/auth/login`, enter credentials or use OAuth2, and input 2FA code if enabled.

-  Profile: Access `/dashboard/settings` to update user details or enable 2FA.

-  Password Recovery: Use `/auth/password-recovery` to request a reset link.

-  Logout: Click the user icon and select "Logout."

## Security

### The application is designed to be secure against common vulnerabilities:

**Password Hashing**: Uses Argon2 for secure password storage.

**Session Management**: Redis ensures secure, scalable session handling.

**Input Validation**: Zod and Prisma enforce strict data validation.

**reCAPTCHA**: Prevents automated attacks on forms.

**OAuth2**: Secure third-party authentication with Google and GitHub.

**2FA**: Adds an extra layer of security via email-based codes.

**Email Verification**: Ensures only verified users access protected routes.

**Docker**: Isolates services for consistent and secure deployment.
