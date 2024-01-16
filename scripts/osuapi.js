document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('auth-test').addEventListener('click', function() {
        const url = new URL(
            "https://osu.ppy.sh/oauth/authorize"
        );
    
        const params = {
            "client_id": "29626",
            "redirect_uri": "https://sunchul.moe",
            "response_type": "code",
            "scope": "public identify",
            "state": "randomval",
        };
        Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
    
        fetch(url, {
            method: "GET",
        }).then(response => response.json());

        window.open(url);
    })
})