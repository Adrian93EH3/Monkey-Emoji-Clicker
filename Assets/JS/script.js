const seeFace = document.querySelector(".see")
const hearFace = document.querySelector(".hear")
const speakFace = document.querySelector(".speak")

seeFace.addEventListener("click", () => {
    if(hearFace.classList.contains("hear")) {
        hearFace.classList.add("active");
    }
})