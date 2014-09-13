
// var ipsum_endings = ['ē','ērum','uī','ua','uum','ia','ium','ēs','ibus','ōrum','ō','um','ārum','us','ae','īs','ās'];
var ipsumEndings = ['e','erum','ui','ua','uum','ia','ium','es','ibus','orum','o','um','arum','us','ae','is','as'];

function pick(array) {
  return array[getRandomNumber(0, array.length)];
}

function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1, word.length - 2);
}

function cleanParagraph(paragraph) {
  var normParagraph = paragraph.toLowerCase()
    .replace('"', '').replace("'", '')
    .replace('_', '').replace(';', '');
  var words = normParagraph.split(" ");
  var i = getRandomNumber(2, 10);

  words[0] = capitalize(words[0]);

  while (i < words.length - 1) {
    words[i] += '.';
    words[i + 1] = capitalize(words[i + 1]);
    i += getRandomNumber(2, 10);
  }

  return words.join(' ') + '.';
}

function renderIpsum() {
  var i, j;
  var numParagraphs = parseInt($('.numParagraphs').val());
  var output = $('.ipsum');
  var ipsumParagraph, cleanedParagraph, newP;

  if (Number.isNaN(numParagraphs)) {
    output.html('Please enter a valid integer');

  } else {
    for (i = 0; i < numParagraphs; i++) {

      ipsumParagraph = '';
      for (j = 0; j < getRandomNumber(75, 150); j++){
        ipsumParagraph += ipsumize(pick(urbanDictionaryArray)) + ' ';
      }

      cleanedParagraph = cleanParagraph(ipsumParagraph.slice(0, ipsumParagraph.length - 1));

      newP = document.createElement('p');
      newP.textContent = cleanedParagraph;
      output.append(newP);
    }
  }
}

function ipsumize(nonIpsumWord) {
  ipsumWord = nonIpsumWord + pick(ipsumEndings);

  return ipsumWord;
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

