//pobranie elementu formularza o klasie login-form
const loginForm = document.querySelector(".login-form");
//funkcja nasłuchuje zdarzenie na przycisku i blokuje jego domyślne działnie
loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // pobranie email i password
  const emailInput = loginForm.elements.email;
  const passwordInput = loginForm.elements.password;

  // sprawdzanie czy email i password nie są puste
  if (emailInput.value === "" || passwordInput.value === "") {
    //   jeśli są puste to wyświetlany jest alert
    alert("Proszę o uzupełnienie wszystkich pól");
  } else {
    const formData = {
      email: emailInput.value,
      password: passwordInput.value,
    };
    console.log(formData);

    loginForm.reset(); // czyszczenie pól formularza
  }
});
