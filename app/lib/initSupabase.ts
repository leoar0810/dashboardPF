import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://fdwvncmldoespcxiccgj.supabase.co" ;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZkd3ZuY21sZG9lc3BjeGljY2dqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA3OTUzMjMsImV4cCI6MjAxNjM3MTMyM30.gvMXJDDUnZsRohxTvP7BXzJ1YuJQcpIUE1U9N3RXXjA";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);