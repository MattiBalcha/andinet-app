import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  'https://gmqzmkzqcrepcqndejsv.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdtcXpta3pxY3JlcGNxbmRlanN2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMzMzk1MjAsImV4cCI6MjA4ODkxNTUyMH0.Br95PSiDinglUEBNYkDDhjfZMBp4s5b3OChRch5kdns'
)