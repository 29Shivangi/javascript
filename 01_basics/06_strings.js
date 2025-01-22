const name = "shivangi"
const repoCount = 3

console.log(name + " has " +  repoCount + " " + "repocount")

const gameName = new String ('Shivangi-sb-com')

console.log(gameName[0]);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2)); //it get letter on particular index
console.log(gameName.indexOf('g')); // to get index

// const newStr = gameName.substring(0, 4)
// console.log(newStr);

const anStr = gameName.slice(2, 4)
console.log(anStr);

const trimStr = "     shivangi        "
console.log(trimStr);
console.log(trimStr.trim());//removes starting and ending whitespaces

const repStr = "https://shivangi.com/shivangi%20bangar"
console.log(repStr.replace('%20', '-'));

console.log(repStr.includes('shiv'))//to check if it is present in your url or not

console.log(gameName.split('-')); //splits the string on the basis of given character
