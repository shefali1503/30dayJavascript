//  Promises + await with Node’s fs module
import fs from "fs/promises"

let a = await fs.readFile("abc.txt")

let b = await fs.appendFile("abc.txt", "\n\n\n\nthis is amazing promise")
console.log(a.toString(), b)