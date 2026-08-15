(function () {
  var toggle = document.querySelector("[data-nav-toggle]");
  var nav = document.querySelector("[data-nav]");
  var offers = document.querySelector("[data-offers]");

  function setOpen(open) {
    if (!toggle || !nav) return;
    nav.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    if (!open && offers) offers.removeAttribute("open");
  }

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      setOpen(!nav.classList.contains("is-open"));
    });
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () { setOpen(false); });
    });
  }

  if (offers) {
    document.addEventListener("click", function (event) {
      if (!offers.open) return;
      if (!offers.contains(event.target)) offers.removeAttribute("open");
    });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && offers.open) offers.removeAttribute("open");
    });
  }

  var agentDock = document.querySelector("[data-enquiry-agent]");
  var agentClose = document.querySelector("[data-enquiry-close]");
  if (agentDock && agentClose) {
    agentClose.addEventListener("click", function () {
      var widget = agentDock.querySelector("elevenlabs-convai");
      if (widget) widget.remove();
      agentDock.remove();
    });
  }

  var form = document.getElementById("enquiry");
  if (!form) return;
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    var name = (form.name.value || "").trim();
    var business = (form.business.value || "").trim();
    var email = (form.email.value || "").trim();
    var phone = (form.phone.value || "").trim();
    var message = (form.message.value || "").trim();
    var lines = [
      "Name: " + name,
      "Business: " + business,
      "Email: " + email,
      "Telephone: " + phone,
      "",
      message
    ];
    window.location.href = "mailto:hello@thetechnologyframework.com"
      + "?subject=" + encodeURIComponent("Conversation with The Technology Framework")
      + "&body=" + encodeURIComponent(lines.join("\n"));
  });
})();
