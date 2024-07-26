function checkISP() {
  const phoneNumber = document.getElementById("phone").value;

  let ispResult;
  let ispMessage; // New variable for the message

  if (
    phoneNumber.startsWith("071") ||
    phoneNumber.startsWith("065") ||
    phoneNumber.startsWith("067")
  ) {
    ispResult = "Tigo Mobile";
    ispMessage = "The phone number is associated with Tigo Mobile.";
  } else if (
    phoneNumber.startsWith("074") ||
    phoneNumber.startsWith("075") ||
    phoneNumber.startsWith("076") ||
    phoneNumber.startsWith("077")
  ) {
    ispResult = "Vodacom Mobile";
    ispMessage = "The phone number is associated with Vodacom Mobile.";
  } else if (
    phoneNumber.startsWith("068") ||
    phoneNumber.startsWith("069") ||
    phoneNumber.startsWith("078")
  ) {
    ispResult = "Airtel Mobile";
    ispMessage = "The phone number is associated with Airtel Mobile.";
  } else if (phoneNumber.startsWith("062") || phoneNumber.startsWith("061")) {
    ispResult = "Halotel Mobile";
    ispMessage = "The phone number is associated with Halotel Mobile.";
  } else if (phoneNumber.startsWith("073")) {
    ispResult = "TTCl Mobile";
    ispMessage = "The phone number is associated with TTCl Mobile.";
  } else {
    ispResult = "Number is not from Tanzania";
    ispMessage = "The provided number is not from Tanzania.";
  }

  const ispResultElement = document.getElementById("isp-result");
  ispResultElement.innerHTML = `<p class="text-gray-700">${ispResult}</p>`;
  // Display the message
  const ispMessageElement = document.createElement("p");
  ispMessageElement.className = "text-gray-500 text-sm";
  ispMessageElement.textContent = ispMessage;
  ispResultElement.appendChild(ispMessageElement);
}
