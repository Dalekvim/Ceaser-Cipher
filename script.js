var chars = [" ", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", ",", ".", "!", "?", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

function main() {

    if (document.getElementById("shift").value == "") {
        document.getElementById("shift").value = "1";
    }

    while (document.getElementById("shift").value > chars.length) {
        document.getElementById("shift").value = document.getElementById("shift").value - chars.length;
    }

    shift = Number(document.getElementById("shift").value);

    var message = document.getElementById("message").value;

    var splitMessage = message.split("");

    if (document.title = "Encryptor") {
        var encryptedMessage = [];

        var shiftedIndex;

        for (var i = 0; i < splitMessage.length; i++) {
            if (chars.indexOf(splitMessage[i]) !== "-1") {
                shiftedIndex = chars.indexOf(splitMessage[i]) + shift;
                while (shiftedIndex >= chars.length) {
                    shiftedIndex = shiftedIndex - chars.length;
                }
                while (shiftedIndex < 0) {
                    shiftedIndex = shiftedIndex - chars.length;
                }
                encryptedMessage.push(chars[shiftedIndex]);
            }
        }
    
        document.getElementById("encryptedMessage").value = encryptedMessage.join("");

    }

}

var loop = setInterval(main, 100);