import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://rebzihogadyemecgicha.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJlYnppaG9nYWR5ZW1lY2dpY2hhIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4NTM0MDY3MCwiZXhwIjoyMTAwOTE2NjcwfQ.gJxO5X250RR0TaTxkBX4YJ5YmAXk_qv4XDW7vNWU3aY";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);