-- ============================================================
-- MIGRATION: Add timer_enabled field to profiles
-- Run this in your Supabase SQL Editor
-- ============================================================

-- 1. Add the column with default TRUE (all new and existing users get timer ON)
ALTER TABLE public.profiles
  ADD COLUMN IF NOT EXISTS timer_enabled BOOLEAN DEFAULT TRUE NOT NULL;

-- 2. Make sure ALL existing users already in the table also have it set to TRUE
UPDATE public.profiles
  SET timer_enabled = TRUE
  WHERE timer_enabled IS NULL;

-- 3. Update the trigger function so NEW users also get timer_enabled = TRUE automatically
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.profiles (id, nickname, timer_enabled)
  VALUES (
    new.id,
    new.raw_user_meta_data->>'nickname',
    TRUE
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- ============================================================
-- VERIFICATION QUERY (run after migration to confirm)
-- ============================================================
-- SELECT id, nickname, timer_enabled FROM public.profiles LIMIT 10;
