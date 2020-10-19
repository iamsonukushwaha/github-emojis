//  Made with love by Sonu kumar kushwaha 


async function getEmojis() {
    clear();

    const Url = "https://api.github.com/emojis"
    const response = await fetch(Url)
    const result = await response.json()

    // console.log(result);
    // console.log(result["a"]);

    for (const key in result) {
        if (result.hasOwnProperty(key)) {
            const element = result[key];
            // console.log(element);
            const img = document.createElement("img")
            img.src = element;
            img.style.width = "300px"
            img.style.height = "250px"
            divResult.appendChild(img)

            // divResult.appendChild(document.createElement("br"))

        }
    }

}

function clear() {
    while (divResult.firstChild)
        divResult.removeChild(divResult.firstChild)
}
