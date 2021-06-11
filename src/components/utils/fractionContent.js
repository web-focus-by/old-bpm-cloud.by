export const fractionContent = content => {
  const testArr = [
    {
      title: "",
      content: [],
    },
  ]
  let counter = 0
  content.split("\n").map(elem => {
    if (elem.includes("h2")) {
      testArr.push({
        title: elem,
        content: [],
      })
      counter++
    } else {
      testArr[counter].content.push(elem)
    }
  })
  testArr.map(e => {
    e.content.join("\n")
  })
  return testArr
}
