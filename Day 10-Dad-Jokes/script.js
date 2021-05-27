const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke)

generateJoke()

// USING async and await
async function generateJoke() {
    const config = {
        headers: {
            Accept: 'application/json',
        },
    }

    // whenever their is promise we have to write await
    const res = await fetch('https://icanhazdadjoke.com/', config)
    
    const data = await res.json()

    jokeEl.innerHTML = data.joke
}

// USING .then()
// function generateJoke() {
//     const config = {
//         headers: {
//             Accept: 'application/json',
//         },
//     }

//     fetch('https://icanhazdadjoke.com/', config)
//     .then((res) => res.json())
//     .then((data) => {
//         jokeEl.innerHTML = data.joke
//     })
// }