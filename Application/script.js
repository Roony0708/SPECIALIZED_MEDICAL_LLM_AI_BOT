document.addEventListener("DOMContentLoaded", () => {
    const sendBtn = document.getElementById("sendBtn");
    const userInput = document.getElementById("userInput");
    const chatMessages = document.getElementById("chatMessages");

    function appendMessage(text, sender) {
        const messageDiv = document.createElement("div");
        messageDiv.classList.add("message", sender);
        messageDiv.textContent = text;
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
        return messageDiv;
    }

    async function sendMessage() {
        const prompt = userInput.value.trim();
        if (!prompt) return;

        appendMessage(prompt, "user");
        userInput.value = "";
        userInput.disabled = true;
        sendBtn.disabled = true;

        // Loading message
        const loadingMsg = appendMessage("⏳ Thinking...", "bot");

        try {
            const res = await fetch("/generate", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ prompt })
            });
            const data = await res.json();

            // Remove "Thinking..."
            loadingMsg.remove();

            if (data.response) {
                appendMessage(data.response, "bot");
            } else {
                appendMessage("⚠️ Error: " + (data.error || "Unknown error"), "bot");
            }
        } catch (err) {
            loadingMsg.remove();
            appendMessage("❌ Failed to connect to server.", "bot");
        } finally {
            userInput.disabled = false;
            sendBtn.disabled = false;
            userInput.focus();
        }
    }

    sendBtn.addEventListener("click", sendMessage);
    userInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") sendMessage();
    });
});
