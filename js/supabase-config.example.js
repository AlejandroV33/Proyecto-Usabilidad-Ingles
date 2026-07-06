// Supabase configuration — EXAMPLE FILE
// Copy this file to js/supabase-config.js and fill in your real values.
// NEVER commit js/supabase-config.js to the repository.
const SUPABASE_URL = 'https://YOUR_PROJECT_ID.supabase.co';
const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY_HERE';

const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

window.supabaseClient = _supabase;
