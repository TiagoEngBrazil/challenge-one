// Capturando elementos
const textArea = document.getElementById("input__mensagem");
const sectionResult = document.getElementById("section-result");
const btnCriptografar = document.getElementById("btn-code");
const btnDescriptografar = document.getElementById("btn-decode");

// Declaração de funções
function textCode() {
  const text = textArea.value;
  const result = encryptText(text);

  displayResult(result);
}

function textDecode() {
  const encryptedText = textArea.value;
  const result = decryptText(encryptedText);

  displayResult(result);
}

function encryptText(text) {
  const encryptedText = text
    .replaceAll("a", "*")
    .replaceAll("e", "#")
    .replaceAll("i", "&")
    .replaceAll("o", "$")
    .replaceAll("u", "@");

  return encryptedText;
}

function decryptText(text) {
  const decryptedText = text
    .replaceAll("*", "a")
    .replaceAll("#", "e")
    .replaceAll("&", "i")
    .replaceAll("$", "o")
    .replaceAll("@", "u");

  return decryptedText;
}

function displayResult(result) {
  sectionResult.innerHTML = `<textarea class="textarea-section-result" id="textarea-section-result">${result}</textarea>
                              <button class="btn-copiar" id="btn-copiar" onclick="btnCopiar()">Copiar</button>
                              <button class="btn-copiar" id="btn-voltar" onclick="btnVoltar()">Reiniciar</button>`;
}

// Função para copiar texto
function btnCopiar() {
  const textToCopy = document.getElementById('textarea-section-result');
  textToCopy.select();
  document.execCommand('copy');
  alert("Texto Copiado!");
}

// Função para reiniciar
function btnVoltar() {
  textArea.value = "";
  sectionResult.innerHTML = '<img class="img_busca" src="./assets/img_busca.png" alt=""><img class="img_menssagem" src="./assets/img_menssagem.png" alt="">';
}

// Evento de clique dos botões
btnCriptografar.addEventListener("click", textCode);
btnDescriptografar.addEventListener("click", textDecode);
