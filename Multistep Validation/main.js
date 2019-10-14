// Form
const form = document.getElementById("stepped");
const innerContent = document.getElementById("innerContent");
const nextButton = document.getElementById("btnNext");
const previousButton = document.getElementById("btnPrev");

const steps = {
  step1: {
    fields: {
      firstName: {
        name: "firstName",
        type: "text",
        label: "FIRST NAME",
        value: "",
        validation: /^[a-zA-Z]+$/,
        errorText: "Only letters allowed"
      },

      lastName: {
        name: "lastName",
        type: "text",
        label: "LAST NAME",
        value: "",
        validation: /^[a-zA-Z]+$/,
        errorText: "Only letters allowed"
      }
    }
  },
  step2: {
    fields: {
      email: {
        name: "email",
        type: "text",
        label: "EMAIL",
        value: "",
        validation: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        errorText: "Must be a valid email address"
      },
      username: {
        name: "username",
        type: "text",
        label: "USERNAME",
        value: "",
        validation: /^[a-zA-Z]+$/,
        errorText: "Only letters allowed"
      },
      password: {
        name: "password",
        type: "password",
        label: "PASSWORD",
        value: "",
        validation: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/,
        errorText:
          "Must contain at least one uppercase, one lowercase letter, one number and one special character"
      }
    }
  },
  step3: {
    bio: {
      name: "bio",
      type: "text",
      label: "BIO",
      value: "",
      validation: /^[a-zA-Z]+$/,
      errorText: "Only letters allowed"
    }
  }
};

function determinateCurentStep(counter) {
  return Object.values(steps)[counter];
}

let counter = 0;
let currentStep = determinateCurentStep(counter);
console.log("current", currentStep);

form.addEventListener("input", validateStep);
renderCurrentStep(currentStep);
function validateStep(event) {
  validateField(event);
  if (checkIfComplete(currentStep) === 0) {
    nextButton.disabled = false;
  } else if (checkIfComplete(currentStep) > 0) {
    nextButton.disabled = true;
  }
}

// Validation colors
const green = "#4CAF50";
const red = "#F44336";

//VALIDATIONS

function validateField(event) {
  const fieldValue = event.target.value;
  const currentFieldName = event.target.name;
  const validate = currentStep.fields[currentFieldName].validation;
  const errorMessage = currentStep.fields[currentFieldName].errorText;
  const error = document.getElementById(`${event.target.id}_error`);
  const valid = validate.test(fieldValue);

  if (valid) {
    currentStep.fields[currentFieldName].value = fieldValue;

    error.innerText = "";
  } else {
    const errorMSG = fieldValue !== "" ? errorMessage : "";
    currentStep.fields[currentFieldName].value = "";
    error.innerText = errorMSG;
    error.style.color = red;
  }
}
function checkIfComplete(step) {
  const invalidFields = Object.values(step.fields).filter(field => {
    return field.value === "";
  });

  return invalidFields.length;
}

function renderCurrentStep(step) {
  innerContent.innerHTML = "";
  const fields = Object.values(step.fields).map((field, index) =>
    createField(
      `field${index}`,
      field.label,
      field.name,
      field.value,
      field.type
    )
  );

  innerContent.insertAdjacentHTML("afterbegin", fields.join(""));
}

function createField(id, label, name, value, type) {
  const newField = `
      <div class="row steps">
     <div class="input-field col s12">
     <label for="${id}">${label}</label>
     <input type="${type}" value="${value}"  name="${name}" id="${id}" />
       <span class="helper-text" id="${id}_error"></span>
     </div>
      </div>
  `;
  return newField;
}

nextButton.addEventListener("click", nextStep);
function nextStep() {
  if (checkIfComplete(currentStep) === 0) {
    nextButton.disabled = false;
  } else if (checkIfComplete(currentStep) > 0) {
    nextButton.disabled = true;
  }
  counter++;
  currentStep = determinateCurentStep(counter);

  renderCurrentStep(determinateCurentStep(counter));

  previousButton.disabled = false;
}
previousButton.addEventListener("click", previousStep);
function previousStep() {
  counter--;
  currentStep = determinateCurentStep(counter);
  renderCurrentStep(determinateCurentStep(counter));
}
