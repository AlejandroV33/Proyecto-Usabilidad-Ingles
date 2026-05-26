async function getExercisesForLevel(levelId) {
    // In Supabase, the levels table id might match our levelId (1, 2, 3...)
    const { data, error } = await window.supabaseClient
        .from('levels')
        .select('exercises, xp_reward')
        .eq('id', levelId)
        .single();

    if (error) {
        console.error('Error fetching level data:', error);
        return null;
    }
    return data;
}

async function getAllLevels() {
    const { data, error } = await window.supabaseClient
        .from('levels')
        .select('id, section_number, level_number, title')
        .order('id', { ascending: true });

    if (error) {
        console.error('Error fetching levels:', error);
        return [];
    }
    return data;
}
