# learnbuildteach.com

## Contribution

### Bypassing Supabase

The production website fetches data from a [Supabase](https://supabase.com/)
instance. To bypass this, set the following variable in your `.env` file:

```
PUBLIC_BYPASS_SUPABASE=true
```

This should allow you to run the static parts of the website without server
errors.
