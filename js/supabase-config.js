// Supabase configuration
// Replace these with your actual Supabase URL and Anon Key
const SUPABASE_URL = 'https://ophmounzjalqbmvaahzb.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9waG1vdW56amFscWJtdmFhaHpiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk3NTExMzYsImV4cCI6MjA5NTMyNzEzNn0.0gjH4FciSFybjUGphtxdhQel1oaQCOIoJTZb5JdqE-g';

const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

window.supabaseClient = _supabase;
