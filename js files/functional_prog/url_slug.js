var globalTitle = "Winter Is Coming";

function urlSlug(title) {
    return title.toLowerCase()
    .split(" ")
    .filter(elem => elem != '')
    .join("-")
}
  
console.log(urlSlug(globalTitle));

// or

// function urlSlug(title) {
//   return title
//     .toLowerCase()
//     .trim()
//     .split(/\s+/)
//     .join("-");
// }

// console.log(urlSlug(globalTitle));