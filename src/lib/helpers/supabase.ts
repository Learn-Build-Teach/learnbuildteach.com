import { createClient } from '@supabase/supabase-js';
import { PUBLIC_BYPASS_SUPABASE, PUBLIC_SUPABASE_PROJECT_URL, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public';

export const supabase = PUBLIC_BYPASS_SUPABASE === "true" ? null : createClient(PUBLIC_SUPABASE_PROJECT_URL, PUBLIC_SUPABASE_ANON_KEY);
