# learnbuildteach.com

## Running Locally
To run locally, fork the repository and install the required dependancies:

```bash
npm i
```

Run by using the following command:

```bash
npm run dev
```

### Supabase Credentials
You will need access to the test Supabase instance for local development. For access, please send James (jamesqquick) a message on Discord!
Once you have them, create a `.env` file in the root directory and add the credentials to the file. (See `env.example` for what that would look like)

### Accessing Admin Area
- navigate to `/signup` and create an account 
- use your actual email address, use the link in the email from Supabase to confirm your account
- you can now sign in at `/login`

## Contributing
Thank you for wanting to contribute to learnbuildteach.com! You may want to start by looking at some existing issues. If you notice something that needs improvement
please create an issue outlining the probelm and then go ahead and start working on a PR.

Linting and formatting are handled via the following commands:
- Lint: `npm run lint`
- Format: `npm run format`