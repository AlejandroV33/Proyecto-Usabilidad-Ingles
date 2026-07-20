/* ──────────────────────────────────────────────────────────────────
   auth.js  —  Shimi authentication helpers
   emailRedirectTo must point to pages/confirm.html so Supabase
   redirects there after the user clicks the confirmation link.
   ──────────────────────────────────────────────────────────────── */

/** Derive the correct base URL at runtime (works for localhost AND production) */
function getBaseUrl() {
    // window.location.origin = e.g. "http://localhost:5500" or "https://mysite.com"
    // We strip any trailing /pages/… segment so we always get the project root.
    const origin = window.location.origin;
    const path   = window.location.pathname; // e.g. /pages/register.html

    // Go up to the project root (one directory above /pages/)
    const root = path.includes('/pages/')
        ? path.substring(0, path.indexOf('/pages/'))
        : '';

    return origin + root;
}

async function signUp(email, password, nickname) {
    const redirectTo = getBaseUrl() + '/pages/confirm.html';

    const { data, error } = await window.supabaseClient.auth.signUp({
        email,
        password,
        options: {
            // Supabase appends this as redirect_to in the confirmation URL
            emailRedirectTo: redirectTo,
            data: {
                nickname: nickname,
            },
        },
    });

    if (error) throw error;
    return data;
}

async function signIn(email, password) {
    const { data, error } = await window.supabaseClient.auth.signInWithPassword({
        email,
        password,
    });

    if (error) throw error;
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
