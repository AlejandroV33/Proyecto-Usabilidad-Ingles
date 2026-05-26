-- Table for user profiles
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID REFERENCES auth.users NOT NULL PRIMARY KEY,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
  nickname TEXT,
  age INTEGER,
  daily_time TEXT,
  current_level TEXT DEFAULT 'Beginner',
  xp INTEGER DEFAULT 0,
  completed_levels INTEGER[] DEFAULT '{}',

  CONSTRAINT nickname_length CHECK (char_length(nickname) >= 2)
);

-- Table for Exercises and Level Info
CREATE TABLE IF NOT EXISTS public.levels (
  id SERIAL PRIMARY KEY,
  section_number INTEGER NOT NULL,
  level_number INTEGER NOT NULL,
  title TEXT,
  description TEXT,
  xp_reward INTEGER DEFAULT 10,
  exercises JSONB NOT NULL, -- Contains the array of exercises [{}, {}, {}]
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- Enable RLS for levels
ALTER TABLE public.levels ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Levels are viewable by everyone." ON public.levels FOR SELECT USING (true);

-- Insert sample B1 level data
INSERT INTO public.levels (section_number, level_number, title, xp_reward, exercises) VALUES 
(5, 1, 'Business Phrasal Verbs', 10, '[
    {
        "type": "vocabulary",
        "instruction": "Choose the best phrase to complete the context",
        "question": "The company had to __________ the meeting until next week because the CEO was ill.",
        "options": ["A. call off", "B. put off", "C. look for", "D. take after"],
        "correct": 1
    },
    {
        "type": "speaking",
        "instruction": "Read the following sentence aloud",
        "question": "I would have traveled more if I had saved enough money last year."
    },
    {
        "type": "grammar",
        "instruction": "Arrange the words to form a correct sentence",
        "words": ["hardly", "had", "we", "started", "when", "it", "began", "to", "snow"],
        "correct": "hardly had we started when it began to snow"
    }
]'),
(5, 2, 'Professional Resilience', 15, '[
    {
        "type": "vocabulary",
        "instruction": "Choose the best phrase to complete the context",
        "question": "It took him a long time to __________ the shock of losing his job.",
        "options": ["A. get over", "B. get through", "C. get by", "D. get on"],
        "correct": 0
    },
    {
        "type": "speaking",
        "instruction": "Read the following sentence aloud",
        "question": "If you want to succeed in business, you must be prepared to take risks."
    },
    {
        "type": "grammar",
        "instruction": "Arrange the words to form a correct sentence",
        "words": ["not", "only", "is", "he", "smart", "but", "also", "kind"],
        "correct": "not only is he smart but also kind"
    }
]');

-- Enable Row Level Security
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Policies
CREATE POLICY "Public profiles are viewable by everyone." ON public.profiles
  FOR SELECT USING (true);

CREATE POLICY "Users can update their own profile." ON public.profiles
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Users can insert their own profile." ON public.profiles
  FOR INSERT WITH CHECK (auth.uid() = id);

-- Trigger to create profile on signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.profiles (id, nickname)
  VALUES (new.id, new.raw_user_meta_data->>'nickname');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE OR REPLACE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();
