// ----- API CONFIG -----
const API_BASE = "https://YOUR_API_GATEWAY_URL";
const token = window.location.hash.split("id_token=")[1]?.split("&")[0];

// ----- Common GET -----
async function apiGet(path) {
    const res = await fetch(API_BASE + path, {
        headers: { "Authorization": token }
    });
    return res.json();
}

// ----- Common POST -----
async function apiPost(path, body) {
    const res = await fetch(API_BASE + path, {
        method: "POST",
        headers: { 
            "Content-Type": "application/json",
            "Authorization": token 
        },
        body: JSON.stringify(body)
    });
    return res.json();
}
