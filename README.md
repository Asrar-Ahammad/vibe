# Vibe

Generate full-stack applications from simple prompts using programmable AI agents powered by Inngest.

---

Vibe is a powerful tool that leverages AI to generate full-stack applications from simple prompts. It uses models like OpenAI, Anthropic, and Grok for code generation and executes everything inside secure cloud sandboxes with E2B and Docker. This project provides a complete solution from code generation to deployment, including agent architecture, background job orchestration, a project dashboard, authentication, billing, and a full Git workflow with AI-assisted PR reviews.

## Key Features

-   **Next.js 15 + React 19**: Built with the latest features of Next.js and React.
-   **Tailwind v4 + Shadcn/ui**: Modern and beautiful UI components.
-   **tRPC for full-stack type safety**: End-to-end typesafe APIs.
-   **Inngest background jobs**: Reliable background job orchestration.
-   **Inngest agent toolkit**: Programmable AI agents for code generation.
-   **Clerk authentication**: Secure and easy-to-use authentication.
-   **Clerk billing**: Integrated billing and subscription management.
-   **Component and app generation from AI prompts**: Generate code from natural language prompts.
-   **Live project preview with URL access**: Get a live preview of the generated application.
-   **E2B cloud sandboxes for runtime execution**: Secure and isolated runtime environments.
-   **Docker-based sandbox templating**: Customizable sandbox environments.
-   **AI model support (OpenAI, Anthropic, Grok)**: Choose from a variety of AI models.
-   **Prisma + Neon for database integration**: Serverless Postgres database.
-   **CodeRabbit AI-powered PR reviews**: Automated AI-powered code reviews.
-   **Built-in credit system with usage tracking**: Track your usage and manage credits.
-   **Preview + code explorer toggle**: Easily switch between live preview and code explorer.

## Tech Stack

-   **Framework**: [Next.js 15](https://nextjs.org/)
-   **UI**: [React 19](https://react.dev/), [Tailwind CSS v4](https://tailwindcss.com/), [Shadcn/ui](https://ui.shadcn.com/)
-   **API**: [tRPC](https://trpc.io/)
-   **Background Jobs**: [Inngest](https://www.inngest.com/)
-   **Authentication & Billing**: [Clerk](https://clerk.com/)
-   **Database**: [Prisma](https://www.prisma.io/), [Neon](https://neon.tech/)
-   **Sandboxing**: [E2B](https://www.e2b.dev/), [Docker](https://www.docker.com/)
-   **AI**: [OpenAI](https://openai.com/), [Anthropic](https://www.anthropic.com/), [Grok](https://x.ai/)
-   **Code Review**: [CodeRabbit](https://coderabbit.ai/)

## Getting Started

To get started with Vibe, you'll need to set up the following services:

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/vibe.git
    cd vibe
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Set up environment variables:**

    Create a `.env.local` file in the root of the project and add the necessary API keys and environment variables for Clerk, Neon, OpenAI, Anthropic, and Grok.

4.  **Run the development server:**

    ```bash
    npm run dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## How It Works

1.  A user provides a prompt to generate a full-stack application.
2.  Inngest triggers a series of background jobs to handle the request.
3.  AI agents, powered by models like OpenAI, Anthropic, or Grok, generate the code.
4.  The generated code is executed in a secure cloud sandbox using E2B and Docker.
5.  The user gets a live preview of the application with a public URL.
6.  The code is committed to a Git repository, and a pull request is created.
7.  CodeRabbit performs an AI-powered code review on the pull request.

## Contributing

Contributions are welcome! Please feel free to open an issue or submit a pull request.
