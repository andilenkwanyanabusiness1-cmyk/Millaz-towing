-- =====================================================
-- SUPABASE SQL FOR QUOTE REQUESTS TABLE
-- =====================================================

-- 1. Create the quote_requests table
CREATE TABLE IF NOT EXISTS quote_requests (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT,
  service_type TEXT NOT NULL,
  preferred_contact TEXT NOT NULL DEFAULT 'phone',
  message TEXT,
  submitted_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  status TEXT DEFAULT 'pending'
);

-- 2. Enable Row Level Security (RLS)
ALTER TABLE quote_requests ENABLE ROW LEVEL SECURITY;

-- 3. Allow public INSERT (anyone can submit a quote request)
CREATE POLICY "Allow public insert" ON quote_requests
  FOR INSERT WITH CHECK (true);

-- 4. Allow admin to SELECT (optional - for viewing in dashboard)
-- Note: You'll need to set up authentication for admin access
-- For now, let's also allow public read so you can test
CREATE POLICY "Allow public read" ON quote_requests
  FOR SELECT USING (true);

-- 5. Enable UUID extension if not already enabled
-- (Run this separately if you get an error about uuid extension)
-- CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- =====================================================
-- HOW TO RUN THIS SQL IN SUPABASE
-- =====================================================

-- Step 1: Go to https://supabase.com and sign in to your dashboard

-- Step 2: Select your project (ygrsuwvumbdbacbpagfb)

-- Step 3: Click on "SQL Editor" in the left sidebar

-- Step 4: Copy the entire SQL above and paste it into the SQL Editor

-- Step 5: Click "Run" or press Ctrl+Enter to execute

-- Step 6: You should see "Success. No rows returned" message

-- Step 7: To verify, click on "Table Editor" in the left sidebar
--          You should see "quote_requests" in the list

-- =====================================================
-- TESTING THE FORM
-- =====================================================

-- After running this SQL:
-- 1. Open your website and go to the Services section
-- 2. Fill out the Quote Request Form
-- 3. Submit the form
-- 4. Go back to Supabase Dashboard
-- 5. Click on "Table Editor" → "quote_requests"
-- 6. You should see your submitted quote request!

-- =====================================================
-- ALTERNATIVE: USING SUPABASE UI
-- =====================================================

-- If you prefer using the UI instead of SQL:

-- 1. Go to "Table Editor" in Supabase Dashboard
-- 2. Click "New Table" and name it "quote_requests"
-- 3. Add these columns:
--    - id (UUID, primary key, default: uuid_generate_v4())
--    - name (text, not null)
--    - phone (text, not null)
--    - email (text, nullable)
--    - service_type (text, not null)
--    - preferred_contact (text, default: 'phone')
--    - message (text, nullable)
--    - submitted_at (timestamp with time zone, default: now())
--    - status (text, default: 'pending')
-- 4. Click "Save"
-- 5. Go to "Settings" → "API" for the table
-- 6. Enable RLS and add policies as shown above
