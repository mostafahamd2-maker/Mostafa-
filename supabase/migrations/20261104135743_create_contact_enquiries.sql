/*
# Create contact_enquiries table

1. New Tables
- `contact_enquiries`: stores enquiries submitted from the website contact form.
  - `id` (uuid, primary key)
  - `name`, `company`, `email`, `phone`, `service`, `message` (text, length-limited)
  - `created_at` (timestamptz)
2. Security
- Enable RLS on `contact_enquiries`.
- Visitors (anon and signed-in) may only INSERT new enquiries; they cannot read, update or delete anything.
- Reading enquiries is done from the Supabase dashboard.
3. Notes
- Length checks keep submissions within reasonable sizes.
*/

CREATE TABLE IF NOT EXISTS contact_enquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL CHECK (char_length(name) BETWEEN 1 AND 200),
  company text NOT NULL CHECK (char_length(company) BETWEEN 1 AND 200),
  email text NOT NULL CHECK (char_length(email) BETWEEN 3 AND 320),
  phone text CHECK (phone IS NULL OR char_length(phone) <= 40),
  service text NOT NULL CHECK (char_length(service) BETWEEN 1 AND 200),
  message text NOT NULL CHECK (char_length(message) BETWEEN 1 AND 5000),
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE contact_enquiries ENABLE ROW LEVEL SECURITY;

GRANT INSERT ON contact_enquiries TO anon, authenticated;

DROP POLICY IF EXISTS "anon_insert_contact_enquiries" ON contact_enquiries;
CREATE POLICY "anon_insert_contact_enquiries" ON contact_enquiries FOR INSERT
TO anon, authenticated WITH CHECK (true);
