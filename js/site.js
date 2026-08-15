(function () {
  var toggle = document.querySelector("[data-nav-toggle]");
  var nav = document.querySelector("[data-nav]");
  if (toggle && nav) {
    function setOpen(open) {
      nav.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    }
    toggle.addEventListener("click", function () {
      setOpen(!nav.classList.contains("is-open"));
    });
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () { setOpen(false); });
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
