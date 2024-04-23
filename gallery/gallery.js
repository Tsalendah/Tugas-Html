const images = document.querySelectorAll(".galery img");

for (const image of images) {
    image.addEventListener("click", () => {
    const imageUrl = image.getAttribute("src");
    const imageContainer = document.createElement("div");
    const imageElement = document.createElement("img");

    imageContainer.style.position = "fixed";
    imageContainer.style.top = "0";
    imageContainer.style.left = "0";
    imageContainer.style.width = "100%";
    imageContainer.style.height = "100%";
    imageContainer.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    imageContainer.style.display = "flex";
    imageContainer.style.justifyContent = "center";
    imageContainer.style.alignItems = "center";

    imageContainer.appendChild(imageElement);

    imageElement.setAttribute("src", imageUrl);
    imageElement.style.maxWidth = "80%";
    imageElement.style.maxHeight = "50rem";

    imageContainer.addEventListener("click", () => {
        imageContainer.remove();
    });

    document.body.appendChild(imageContainer);
    });
}