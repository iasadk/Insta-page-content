// This function will add the Span tag into our div having class of .fancy dynamically.
// We can do same by adding each letter individually in a span tag but it will take time.
// And it's not a good practice to do repeat code.
const spanAdder = (text) => {
    const element = document.querySelector(".fancy");
    text = text.split("");
    text.forEach(letter => {
        const span = document.createElement("span");
        span.innerText = letter;
        span.className = "letter"
        element.append(span)
    })
}

spanAdder("@iasad.dev") // Calling the above function