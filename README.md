An AI Platform built with Next.js 13, React, Tailwind using external API from OpenAI and Replicate AI. Clerk is used for authenticating users.

The Ui can be accessed here: https://simple-mwvvlzdtl-godbless-umukoros-projects.vercel.app/

Features:

- Tailwind design
- Tailwind animations and effects
- Full responsiveness
- Clerk Authentication (Email, Google, Github, Linkedin)
- Client form validation and handling using react-hook-form
- Image Generation Tool (Open AI)
- Conversation Generation Tool (Open AI)
- Music Generation Tool (Replicate AI)
- Page loading state

```shell
git clone 
```

### Install packages

```shell
npm i
```

### Setup .env file


```js
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

OPENAI_API_KEY=
REPLICATE_API_TOKEN=

NEXT_PUBLIC_APP_URL="http://localhost:3000"
```
