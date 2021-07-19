function spinalCase(str) {
    return str.split(/(?=[A-Z])|[^a-zA-Z]/).join("-").toLowerCase();
}

spinalCase('This Is Spinal Tap');