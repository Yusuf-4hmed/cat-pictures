let images


fetch(`https://api.thecatapi.com/v1/images/search?limit=20&api_key=live_zD282jAU3lwE2CldZLy6MHNh7jUMZlPEviuaPz5P2Ul8SXqIETQM1ZBzFXh1Umwo`)
.then(res => res.json())
.then(data => images = data)
.then(images => console.log(images))

const picture = document.getElementById("picture");
const nextButton = document.getElementById("next-button");
const backButton = document.getElementById("back-button")
const img = document.getElementById("img");
const p = document.querySelectorAll("p");

let index = 0;

nextButton.addEventListener("click", () => {
    index++;
    img.src = images[index].url
    console.log(index)
    p.style.display = "none"
})

backButton.addEventListener("click", () => {
    index = index - 1;
    img.src = images[index].url
    console.log(index)
})
