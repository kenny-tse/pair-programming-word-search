//pair programmed with Claudia Wong https://github.com/fltfx/ 

const wordSearch = (letters, word) => {
    //Stretch word: Searching backwards
    let wordBackwards = word.split('');
    //console.log("wordBackwards", wordBackwards);
    let arrayWordBackwards = wordBackwards.reverse();
    //console.log("arrayWordBackwards", arrayWordBackwards);
    wordBackwards = arrayWordBackwards.join('');
    //console.log(wordBackwards);

    //making one array of the 2D array and searches for the word horizontally
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word) || l.includes(wordBackwards)) return true
    }

    //transposing the 2D array (to account for vertical occurences of word), and making one array of the 2D array and searches for the word horizontally again
    let container = [];
    const rows = letters[0].length;
    const columns = letters.length;

    //intialize y axis for the new transposed matrix
    container.length = rows;
    //using the container array, initialize the columns of the container array, so that it's now a 2D array
    for (let i = 0; i < rows; i++) {
        container[i] = Array(columns);
    }

    //transpose the input 'letters' matrix and store that in 'containers' matrix
    for (let x = 0; x < letters.length; x++) {
        for (let y = 0; y < letters[x].length; y++) {

            container[y][x] = letters[x][y];
        }
    }

    const horizontalJoinTransposed = container.map(ls => ls.join(''))
    for (l of horizontalJoinTransposed) {
        if (l.includes(word) || l.includes(wordBackwards)) return true
    }

    return false;
}

wordSearch([
    ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
    ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
    ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
    ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
    ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
    ['O', 'D', 'E', 'L', 'P', 'P', 'A', 'S'],
    ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
], 'APPLE');

module.exports = wordSearch