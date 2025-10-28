const shortenBtn = document.getElementById("shorten-btn");
const copyBtn = document.getElementById("copy-btn");
const longUrlInput = document.getElementById("long-url-input");
const shortUrlOutput = document.getElementById("short-url-output");
const resultArea = document.getElementById("result-area");

shortenBtn.addEventListener("click", function() {
    const longUrl = longUrlInput.value;
    
    // 1. Basic Validation
    if (!longUrl || !isValidHttpUrl(longUrl)) {
        alert("Please enter a valid URL (e.g., https://example.com)");
        return;
    }
    
    // 2. Simulate URL Shortening
    // Generate a random 7-character string
    const randomString = Math.random().toString(36).substring(2, 9);
    const shortUrl = `https://short.ly/${randomString}`;
    
    // 3. Display the result
    shortUrlOutput.value = shortUrl;
    resultArea.classList.add("show");
});

copyBtn.addEventListener("click", function() {
    // 4. Use Clipboard API to copy
    navigator.clipboard.writeText(shortUrlOutput.value).then(() => {
        // Success!
        copyBtn.innerText = "Copied!";
        // Reset button text after 2 seconds
        setTimeout(() => {
            copyBtn.innerText = "Copy";
        }, 2000);
    }).catch(err => {
        console.error("Failed to copy text: ", err);
        alert("Failed to copy text.");
    });
});

// Helper function for basic URL validation
function isValidHttpUrl(string) {
    let url;
    try {
        url = new URL(string);
    } catch (_) {
        return false;
    }
    return url.protocol === "http:" || url.protocol === "httpsS:";
}