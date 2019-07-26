const message = document.querySelector("#message")
const articleOne = document.querySelector("#border--blue")
const articleTwo = document.querySelector("#border--red")
message.addEventListener("keyup", () => {
    articleOne.textContent = message.value
    articleTwo.textContent = message.value
})

