const bookingForm = document.querySelector("#booking-form");

if (bookingForm) {
  const ticketCount = bookingForm.querySelector("#tickets");
  const sectionSelect = bookingForm.querySelector("#section");
  const total = bookingForm.querySelector("#booking-total");
  const message = bookingForm.querySelector("#booking-message");

  const updateTotal = () => {
    const option = sectionSelect.selectedOptions[0];
    const unitPrice = Number(option.dataset.price);
    const quantity = Number(ticketCount.value) || 0;
    total.textContent = new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(unitPrice * quantity);
  };

  ticketCount.addEventListener("input", updateTotal);
  sectionSelect.addEventListener("change", updateTotal);

  bookingForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!bookingForm.reportValidity()) return;

    const match = bookingForm.elements.match.value;
    const section = bookingForm.elements.section.value;
    const quantity = Number(bookingForm.elements.tickets.value);
    message.textContent = `Your ${quantity} ${section} ticket${quantity === 1 ? "" : "s"} for ${match} are selected. This is a demo; no booking or payment was made.`;
  });

  document.querySelectorAll("[data-match]").forEach((link) => {
    link.addEventListener("click", () => {
      bookingForm.elements.match.value = link.dataset.match;
    });
  });
}

document.querySelectorAll("[data-auth-form]").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;

    const message = form.querySelector(".form-message");
    message.textContent = "This demo form is ready, but account services are not connected yet.";
  });
});
