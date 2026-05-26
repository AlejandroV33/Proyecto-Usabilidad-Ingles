async function getProfile() {
    const { data: { user } } = await window.supabaseClient.auth.getUser();
    if (!user) return null;

    const { data, error } = await window.supabaseClient
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();

    if (error) {
        console.error('Error fetching profile:', error);
        return null;
    }
    return data;
}

async function updateProfile(updates) {
    const { data: { user } } = await window.supabaseClient.auth.getUser();
    if (!user) throw new Error('No user logged in');

    const { data, error } = await window.supabaseClient
        .from('profiles')
        .update({
            ...updates,
            updated_at: new Date().toISOString(),
        })
        .eq('id', user.id);

    if (error) {
        throw error;
    }
    return data;
}

async function addXP(amount) {
    const profile = await getProfile();
    if (!profile) return;
    
    const newXP = (profile.xp || 0) + amount;
    return await updateProfile({ xp: newXP });
}

async function completeLevel(levelId) {
    const profile = await getProfile();
    if (!profile) return;
    
    let completed = profile.completed_levels || [];
    if (!completed.includes(levelId)) {
        completed.push(levelId);
        return await updateProfile({ completed_levels: completed });
    }
}
