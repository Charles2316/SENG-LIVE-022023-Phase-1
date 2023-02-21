function loadPage() {
    console.log("page has loaded, run the program")

}
loadPage()

function renderPokemon(character){
console.log(`Rendering ${character}`)
}

renderPokemon("Mewtwo")



function compareFunctions(firstFunction, secondFunction) {
const first = firstFunction()
const second = secondFunction()

if (first > second) {
    return "First funtion is higher!"
} else if (second > first) {
    return "Second Function is higher!"}
    else {
        return "Draw!"
    }


}
console.log(compareFunctions(()=> 1, () =>10))
