const EncryptParameters = {
  e: "enter",
  i: "imes",
  a: "ai",
  o: "ober",
  u: "ufat",
};

function displayMessage(message) {
  let sectionMessage = document.querySelector(".sectionMessage");
  let messageTextArea = document.querySelector(".message");
  let noMessage = document.querySelector(".noMessage");
  let copy = document.querySelector(".copy");
  let tablet = window.matchMedia("(max-width: 768px)")
  let smartphone = window.matchMedia("(max-width: 376px")

  
  if(tablet.matches){
    sectionMessage.style.height = "300px"
    sectionMessage.style.padding = "20px"
  }

  

  sectionMessage.style.alignItems = "flex-start";
  messageTextArea.value = message;
  messageTextArea.style.display = "block";
  copy.style.display = "block";
  noMessage.style.display = "none";
}

function copyText() {
  let messageTextArea = document.querySelector(".message");

  messageTextArea.select();
  messageTextArea.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(messageTextArea.value);
  alert("Texto Copiado: " + messageTextArea.value);
}

function encrypt() {
  let textToEncrypt = document
    .getElementById("textTo")
    .value.toLowerCase()
    .split("");

  for (let i = 0; i < textToEncrypt.length; i++) {
    let caracter = EncryptParameters[textToEncrypt[i]];
    if (caracter != undefined) {
      textToEncrypt[i] = caracter;
    }
  }
  let EncryptedText = textToEncrypt.toString().replace(/,/g, "");

  displayMessage(EncryptedText);
  console.log(EncryptedText);
}

function decrypt() {
  let textToDecrypt = document.getElementById("textTo").value.toLowerCase();

  if (textToDecrypt.includes("ai")) {
    textToDecrypt = textToDecrypt.replace(/ai/g, "a");
  }

  if (textToDecrypt.includes("enter")) {
    textToDecrypt = textToDecrypt.replace(/enter/g, "e");
  }

  if (textToDecrypt.includes("imes")) {
    textToDecrypt = textToDecrypt.replace(/imes/g, "i");
  }

  if (textToDecrypt.includes("ober")) {
    textToDecrypt = textToDecrypt.replace(/ober/g, "o");
  }

  if (textToDecrypt.includes("ufat")) {
    textToDecrypt = textToDecrypt.replace(/ufat/g, "u");
  }

  displayMessage(textToDecrypt);
  console.log(textToDecrypt);
}
