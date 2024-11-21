export function firstLetterToUpperCase (word) {
    const fl = word.charAt(0)
    const cap = fl.toUpperCase()
    const rl = word.slice(1)

    const cw = cap + rl

    return cw
}