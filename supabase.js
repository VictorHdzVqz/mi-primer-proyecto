import { createClient } from '@supabase/supabase-js'


const supabaseUrl = "https://pkmtoowukormgkujxaax.supabase.co"


const supabaseKey = "TU_PUBLISHABLE_KEY"


export const supabase = createClient(
  supabaseUrl,
  supabaseKey
)