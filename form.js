const usernameEl = document.querySelector("#username");
const firstnameEl = document.querySelector("#firstname");
const emailEl = document.querySelector("#email");
const telephoneEl = document.querySelector("#telephone");
const passwordEl = document.querySelector("#password");
const confirmPasswordEl = document.querySelector("#confirmPassword");
const addresseEl = document.querySelector("#addresse");
const form = document.querySelector("#final");
const envoiCommande = document.querySelector("#submit");

let form_group = document.querySelectorAll(
  "input[type=text]",
  "input[type=email]",
  "input[type=password]"
);

var regMin = /[a-z]/;
var regMaj = /[A-Z]/;
var regSpec = /[@$!%*#?&]/;
var regNum = /\d/;
var regLen = /^(?=.{8,13})/;

//   valeurs constante à utiliser pour les nombres de caratères dans les champs inputs
const min = 3,
  max = 200;

//fonction de vérification des champs vides
function EmptyCheck() {
  let valid = false;
  form_group.forEach((element) => {

    if (!isRequired(element.value.trim())) {
      showError(element, element.name + " ne peut pas être vide");
    } else if (!isBetween(element.value.trim().length, min, max)) {
      showError(
        element,
        `${element.name} doit être compris entre ${min} et ${max} caractères.`
      );
    } else {
      showSuccess(element);
      valid = true;
    }
  });
  return valid;
}

//verification des champs
form_group.forEach((index) => {
  index.addEventListener("keyup", function () {
    if ((index.type = "text")) {
      EmptyCheck();
    //  } else  if ((index.type = "email")) {
    //   checkEmail();
    // } else if ((index.type = "password")) {
    //   checkPassword();
    // } else if ((index.name = "confirmPassword")) {
    //   checkConfirmPassword();
    // } else if ((index.name ='telephone')) {
    //   checkPhone();
    } else {
      showSuccess(index);
    }
  });
});

//Fonction de verification du numéro de téléphone
const checkPhone = () => {
  let valid = false;
  const telephone = telephoneEl.value.trim();
if(!regNum.test(telephone)){
  showError(telephoneEl, "Le numéro de téléphone est composé de chiffres")
}else if (!isPhoneValid(telephone)) {
    showError(telephoneEl, "Numéro téléphone non valide");
  } else {
    showSuccess(telephoneEl);
    valid = true;
  }
  return valid;
};

//Fonction de verification de l'email
const checkEmail = () => {
  let valid = false;
  const email = emailEl.value.trim();
  if (!isEmailValid(email)) {
    showError(emailEl, "Email est non valide.");
  } else {
    showSuccess(emailEl);
    valid = true;
  }
  return valid;
};

//Fonction de verification du mot de passe
const checkPassword = () => {
  let valid = false;
  const password = passwordEl.value.trim();
  if (!regMin.test(password)) {
    showError(
      passwordEl,
      "Le mot de passe doit conteneir au moins un caractère miniscule,"
    );
  } else if (!regMaj.test(password)) {
    showError(
      passwordEl,
      "Le mot de passe doit conteneir au moins un caractère majuscule!"
    );
  } else if (!regNum.test(password)) {
    showError(passwordEl, "Le mot de passe doit contenir au moins un chiffre!");
  } else if (!regSpec.test(password)) {
    showError(
      passwordEl,
      "Le mot de passe doit conteneir au moins un caractère spécial!"
    );
  } else if (!regLen.test(password)) {
    showError(
      passwordEl,
      "Le mot de passe doit comporter au moins huit caractères ou plus!"
    );
  } 
  //on check si le mot de passe est gloablement robuste
  else if (!isPasswordSecure(password)) {
    showError(
      passwordEl,
      "Le mot de passe doit avoir au moins 8 caractères  comprenant au moins 1 caractère miniscule, "
       +" une majuscule, un chiffre et un caractère spécial (!@#$%^&*)"
    );
  } else {
    showSuccess(passwordEl);
    valid = true;
  }
  return valid;
};

//Fonction de de verification du mot de passe confirmé
const checkConfirmPassword = () => {
  let valid = false;
  //check confirm password
  const confirmPassword = confirmPasswordEl.value.trim();
  const password = passwordEl.value.trim();

  if (!isRequired(confirmPassword)) {
    showError(confirmPasswordEl, "Veuillez ressaisir le mot de passe");
  } else if (password !== confirmPassword) {
    showError(confirmPasswordEl, "Le mot de passse de correspond pas");
  } else {
    showSuccess(confirmPasswordEl);
    valid = true;
  }
  return valid;
};

//fonction de verification de la validité de l'email
const isEmailValid = (email) => {
  const regEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regEmail.test(email);
};

//Fonction de contrôle globale du mot passe
const isPasswordSecure = (password) => {
  const regPassword = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
  );
  return regPassword.test(password);
};

// fonction de contrôle globale du numéro de téléphone
const isPhoneValid = (telephone) => {
const regPhone = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/;
  return regPhone.test(telephone);
};

//Fonction de verification de l'existence
const isRequired = (value) => (value === "" ? false : true);

//Fonction pour la gestion de l'interval
const isBetween = (length, min, max) =>
  length < min || length > max ? false : true;

//Gestion  de l'affichage des messages d'erreur
const showError = (input, message) => {
  // on récupére le form-field element div parent de l'input
  const formField = input.parentElement;

  // ajouter la class error
  formField.classList.remove("success");
  formField.classList.add("error");

  // afficher message
  const error = formField.querySelector("small");
  error.textContent = message;
};

//Gestion de l'affichage des messages de success
const showSuccess = (input) => {
  // on récupère la classe form-field de la div parent de l'input
  const formField = input.parentElement;

  // supprime l'erreur et affiche le succès
  formField.classList.remove("error");
  formField.classList.add("success");

  // cacher le message d'erreur
  const error = formField.querySelector("small");
  error.textContent = "";
};

form.addEventListener("submit", function (e) {
  // empêcher la soumission automatique du formaire au lancement
  e.preventDefault();

  // validation du formulaire formulaire
  let isEmailValid = checkEmail(),
    isPasswordValid = checkPassword(),
    isPhoneValid = checkPhone(),
    isConfirmPasswordValid = checkConfirmPassword();

  let isFormValid =
    isEmailValid && isPhoneValid && isPasswordValid && isConfirmPasswordValid;

  // submit to the server if the form is valid
  if (isFormValid) {
    envoiCommande.setAttribute('data-bs-toggle','modal');
    envoiCommande.setAttribute('data-bs-target','#ModalValidationCommande');
  }
});

//Fonction debounce pour limiter le nombre d'appel des fonctions
const debounce = (fn, delay = 500) => {
  let timeoutId;
  return (...args) => {
    // Annulation du timer précédent
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    // setup un nouveau timer
    timeoutId = setTimeout(() => {
      fn.apply(null, args);
    }, delay);
  };
};
//
form.addEventListener("input", debounce(function (e) {
    switch (e.target.name) {
      case "email":
        checkEmail();
        break;
      case "telephone":
        checkPhone();
      case "password":
        checkPassword();
        break;
      case "confirmPassword":
        checkConfirmPassword();
        break;
    }
  })
);
