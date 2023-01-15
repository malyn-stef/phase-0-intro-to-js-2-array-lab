const cats = [

    'Milo',
    'Otis',
    'Garfield'

]

function removeFirstCat(name) {
    return cats.slice(1)
}

function removeLastCat(name) {
    return cats.slice(0, cats.length - 1)
}

function appendCat(name) {
    const moreCats = [...cats, 'Broom']
    return moreCats
}


function prependCat(name) {
    const moreCats = ['Arnold', ...cats]
    return moreCats
}

function destructivelyAppendCat(name) {
    return cats.push("Ralph")
}

function destructivelyPrependCat(name) {
    return cats.unshift("Bob")
}

function destructivelyRemoveLastCat(name) {
    return cats.pop()
}

function destructivelyRemoveFirstCat(name) {
    return cats.shift()
}



