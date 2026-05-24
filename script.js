const yearElement = document.querySelector("#year");
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

const notifyForm = document.querySelector("#notify-form");
const contactInput = document.querySelector("#contact");
const formStatus = document.querySelector("#form-status");

notifyForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const contact = contactInput?.value.trim();

  if (!contact) {
    formStatus.textContent = "Enter an email or phone number first.";
    return;
  }

  const subject = encodeURIComponent("Tishkbase early access");
  const body = encodeURIComponent(`Please notify me when Tishkbase is ready.\n\nContact: ${contact}`);
  window.location.href = `mailto:support@tishkbase.com?subject=${subject}&body=${body}`;
  formStatus.textContent = "Opening your email app with the early access request.";
});
