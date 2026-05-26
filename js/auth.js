async function signUp(email, password, nickname) {
    const { data, error } = await window.supabaseClient.auth.signUp({
        email,
        password,
        options: {
            data: {
                nickname: nickname
            }
        }
    });

    if (error) {
        throw error;
    }
    return data;
}

async function signIn(email, password) {
    const { data, error } = await window.supabaseClient.auth.signInWithPassword({
        email,
        password,
    });

    if (error) {
        throw error;
    }
    return data;
}

async function signOut() {
    const { error } = await window.supabaseClient.auth.signOut();
    if (error) throw error;
    window.location.href = '../index.html';
}

async function checkSession() {
    const { data: { session } } = await window.supabaseClient.auth.getSession();
    return session;
}
