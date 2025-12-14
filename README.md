# Vibe

Vibe is a web application that allows you to create projects and interact with an AI assistant to generate code and manage your projects.

## 🖼️ Screenshots

<img src="./screenshots/home.png" alt="Screenshot 1" width="100%">
<img src="./screenshots/webpreview.png" alt="Screenshot 2" width="100%">
<img src="./screenshots/codeview.png" alt="Screenshot 2" width="100%">

## ✨ Features

-   **User Authentication**: Secure sign-up and sign-in functionality using Clerk.
-   **Project Management**: Create, view, and manage your projects.
-   **AI Assistant**: Interact with an AI assistant to get help with your code.
-   **Code Generation**: The AI assistant can generate code snippets and files in a sandboxed environment.
-   **Usage Tracking**: The application tracks your usage of the AI assistant.
-   **Modern UI**: A modern and responsive user interface built with Next.js, shadcn/ui, and Radix UI.

## 🚀 Tech Stack

-   **Framework**: [Next.js](https://nextjs.org/)
-   **Authentication**: [Clerk](https://clerk.com/)
-   **ORM**: [Prisma](https://www.prisma.io/)
-   **Database**: [PostgreSQL](https://www.postgresql.org/)
-   **API**: [tRPC](https://trpc.io/)
-   **Background Jobs**: [Inngest](https://www.inngest.com/)
-   **UI Components**: [shadcn/ui](https://ui.shadcn.com/), [Radix UI](https://www.radix-ui.com/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **Language**: [TypeScript](https://www.typescriptlang.org/)

## 🏁 Getting Started

### Prerequisites

-   [Node.js](https://nodejs.org/en/) (v20 or higher)
-   [npm](https://www.npmjs.com/)
-   [PostgreSQL](https://www.postgresql.org/)

### Installation

1.  Clone the repository:

    ```bash
    git clone https://github.com/your-username/vibe.git
    ```

2.  Install the dependencies:

    ```bash
    pnpm install
    ```

3.  Set up the environment variables:

    Create a `.env` file in the root of the project and add the following environment variables:

    ```env
    DATABASE_URL="postgresql://user:password@host:port/database"

    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your-clerk-publishable-key"
    CLERK_SECRET_KEY="your-clerk-secret-key"

    NEXT_PUBLIC_CLERK_SIGN_IN_URL="/sign-in"
    NEXT_PUBLIC_CLERK_SIGN_UP_URL="/sign-up"
    NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL="/"
    NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL="/"
    ```

4.  Run the database migrations:

    ```bash
    npm prisma migrate dev
    ```

5.  Run the development server:

    ```bash
    npm run dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.