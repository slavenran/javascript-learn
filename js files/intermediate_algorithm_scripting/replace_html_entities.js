function convertHTML(str) {
    let encoding = {
      "&": "amp",
      "<": "lt",
      ">": "gt",
      '"': "quot",
      "'": "apos"
    }
    // Find matching regex chars on global level, take all chars in put them in function for replacing
    let converted = str.replace(/["'<>&]/g, char => "&" + encoding[char] + ";");
    console.log(converted);
    return converted;
}

convertHTML('Stuff in "quotation marks"');



// No regex
function convertHTMLArr(str) {
    let encoding = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&apos;"
    }
    // Find matching regex chars on global level, take all chars in put them in function for replacing
    let converted = str.split("").map(char => encoding[char] || char).join("");
    console.log(converted);
    return converted;
}

convertHTMLArr('Stuff in "quotation marks"');