const seeFace = document.querySelector(".see")
const hearFace = document.querySelector(".hear")
const speakFace = document.querySelector(".speak")

seeFace.addEventListener("click", () => {
    if(hearFace.classList.contains("hear")) {
        hearFace.classList.add("active");
        seeFace.classList.remove("active");
    }
})

hearFace.addEventListener("click", () => {
    if(hearFace.classList.contains("active")) {
        speakFace.classList.add("active");
        hearFace.classList.remove("active");
    }
})

speakFace.addEventListener("click", () => {
    if(speakFace.classList.contains("active")) {
        seeFace.classList.add("active");
        
    }
})