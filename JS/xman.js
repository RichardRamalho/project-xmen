const personagens = document.querySelectorAll(".mutante");
console.log(personagens);

personagens.forEach((mutante) => {
  mutante.addEventListener("mouseenter", () => {
    if (window.innerWidth < 450) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    removeSelectionCharacter();

    mutante.classList.add("selecionado");

    alteractionCharacterSelection(mutante);

    alteractionCharacterName(mutante);

    alteractionCharacterDescription(mutante);
  });
});

function alteractionCharacterDescription(mutante) {
  const description = document.getElementById("text-character");
  description.innerText = mutante.getAttribute("data-description");
}

function alteractionCharacterName(mutante) {
  const nameCharacter = document.getElementById("name-character");
  nameCharacter.innerText = mutante.getAttribute("data-name");
}

function alteractionCharacterSelection(mutante) {
  const imagemPersonagemGrande = document.querySelector(".personagem-grande");

  const idCharacter = mutante.attributes.id.value;
  imagemPersonagemGrande.src = `./src/imagens/card-${idCharacter}.png`;
}

function removeSelectionCharacter() {
  const characterSelection = document.querySelector(".selecionado");
  characterSelection.classList.remove("selecionado");
}
