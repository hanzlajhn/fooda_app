import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://jkyquvzwdwdataggskyi.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpreXF1dnp3ZHdkYXRhZ2dza3lpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ0OTE2NTEsImV4cCI6MjA1MDA2NzY1MX0.Mo75WGfoQcLjXeC9TL50_b4hT4_xG4rEybbIs7J8604"

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})