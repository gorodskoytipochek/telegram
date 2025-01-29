document.addEventListener("DOMContentLoaded", () => {
    const url = "https://t.me/softLuma_bot";

    // Automatically redirect after 5 seconds
    setTimeout(() => {
        window.location.href = url;
    }, 5000);

    // Copy URL to clipboard
    document.getElementById("copyButton").addEventListener("click", () => {
        navigator.clipboard.writeText(url).then(() => {
            alert("Ссылка скопирована в буфер обмена!");
        }).catch(err => {
            alert("Не удалось скопировать ссылку: " + err);
        });
    });

    // Redirect immediately
    document.getElementById("redirectButton").addEventListener("click", () => {
        window.location.href = url;
    });
});
