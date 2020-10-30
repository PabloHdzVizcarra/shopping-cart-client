export function generateLetters(firstValue, secondValue, length = 8) {
  const val1 = firstValue.charCodeAt()
  const val2 = secondValue.charCodeAt()
  let arrayLetters = []

  for (let i = 0; i < length / 2; i++) {
    const randomNumberWithRange = Math.floor(Math.random() * (val2 - val1 + 1)) + val1
    const character = String.fromCharCode(randomNumberWithRange)
    arrayLetters.push(character)
  
  }

  return arrayLetters.join('')

}


export const generateID = (lenthg = 8) => {
  const data = generateLetters('a', 'z', lenthg)
  const data2 = generateLetters('A', 'Z', lenthg)
  
  return data.concat(data2)
}