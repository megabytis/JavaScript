'use strict';

const books = [
  {
    title: 'Algorithms',
    author: ['Robert Sedgewick', 'Kevin Wayne'],
    publisher: 'Addison-Wesley Professional',
    publicationDate: '2011-03-24',
    edition: 4,
    keywords: [
      'computer science',
      'programming',
      'algorithms',
      'data structures',
      'java',
      'math',
      'software',
      'engineering',
    ],
    pages: 976,
    format: 'hardcover',
    ISBN: '9780321573513',
    language: 'English',
    programmingLanguage: 'Java',
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.41,
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13,
      },
    },
    highlighted: true,
  },
  {
    title: 'Structure and Interpretation of Computer Programs',
    author: [
      'Harold Abelson',
      'Gerald Jay Sussman',
      'Julie Sussman (Contributor)',
    ],
    publisher: 'The MIT Press',
    publicationDate: '2022-04-12',
    edition: 2,
    keywords: [
      'computer science',
      'programming',
      'javascript',
      'software',
      'engineering',
    ],
    pages: 640,
    format: 'paperback',
    ISBN: '9780262543231',
    language: 'English',
    programmingLanguage: 'JavaScript',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.36,
        ratingsCount: 14,
        reviewsCount: 3,
        fiveStarRatingCount: 8,
        oneStarRatingCount: 0,
      },
    },
    highlighted: true,
  },
  {
    title: "Computer Systems: A Programmer's Perspective",
    author: ['Randal E. Bryant', "David Richard O'Hallaron"],
    publisher: 'Prentice Hall',
    publicationDate: '2002-01-01',
    edition: 1,
    keywords: [
      'computer science',
      'computer systems',
      'programming',
      'software',
      'C',
      'engineering',
    ],
    pages: 978,
    format: 'hardcover',
    ISBN: '9780130340740',
    language: 'English',
    programmingLanguage: 'C',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 1010,
        reviewsCount: 57,
        fiveStarRatingCount: 638,
        oneStarRatingCount: 16,
      },
    },
    highlighted: true,
  },
  {
    title: 'Operating System Concepts',
    author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
    publisher: 'John Wiley & Sons',
    publicationDate: '2004-12-14',
    edition: 10,
    keywords: [
      'computer science',
      'operating systems',
      'programming',
      'software',
      'C',
      'Java',
      'engineering',
    ],
    pages: 921,
    format: 'hardcover',
    ISBN: '9780471694663',
    language: 'English',
    programmingLanguage: 'C, Java',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 3.9,
        ratingsCount: 2131,
        reviewsCount: 114,
        fiveStarRatingCount: 728,
        oneStarRatingCount: 65,
      },
    },
  },
  {
    title: 'Engineering Mathematics',
    author: ['K.A. Stroud', 'Dexter J. Booth'],
    publisher: 'Palgrave',
    publicationDate: '2007-01-01',
    edition: 14,
    keywords: ['mathematics', 'engineering'],
    pages: 1288,
    format: 'paperback',
    ISBN: '9781403942463',
    language: 'English',
    programmingLanguage: null,
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.35,
        ratingsCount: 370,
        reviewsCount: 18,
        fiveStarRatingCount: 211,
        oneStarRatingCount: 6,
      },
    },
    highlighted: true,
  },
  {
    title: 'The Personal MBA: Master the Art of Business',
    author: 'Josh Kaufman',
    publisher: 'Portfolio',
    publicationDate: '2010-12-30',
    keywords: ['business'],
    pages: 416,
    format: 'hardcover',
    ISBN: '9781591843528',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.11,
        ratingsCount: 40119,
        reviewsCount: 1351,
        fiveStarRatingCount: 18033,
        oneStarRatingCount: 1090,
      },
    },
  },
  {
    title: 'Crafting Interpreters',
    author: 'Robert Nystrom',
    publisher: 'Genever Benning',
    publicationDate: '2021-07-28',
    keywords: [
      'computer science',
      'compilers',
      'engineering',
      'interpreters',
      'software',
      'engineering',
    ],
    pages: 865,
    format: 'paperback',
    ISBN: '9780990582939',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.7,
        ratingsCount: 253,
        reviewsCount: 23,
        fiveStarRatingCount: 193,
        oneStarRatingCount: 0,
      },
    },
  },
  {
    title: 'Deep Work: Rules for Focused Success in a Distracted World',
    author: 'Cal Newport',
    publisher: 'Grand Central Publishing',
    publicationDate: '2016-01-05',
    edition: 1,
    keywords: ['work', 'focus', 'personal development', 'business'],
    pages: 296,
    format: 'hardcover',
    ISBN: '9781455586691',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.19,
        ratingsCount: 144584,
        reviewsCount: 11598,
        fiveStarRatingCount: 63405,
        oneStarRatingCount: 1808,
      },
    },
    highlighted: true,
  },
];

// 13.1
// Take the ISBN property of the first book from the books array, and log to the console characters at index 6, 4, 9 and 8.
// Use bracket notation to access individual characters.
const ISBN = books[0].ISBN;
console.log(ISBN[6]);
console.log(ISBN[4]);
console.log(ISBN[9]);
console.log(ISBN[8]);

// 13.2
// Below is the quote variable that stores a string. Find the index of the word 'chess', and log it to the console.
const quote =
  'A computer once beat me at chess, but it was no match for me at kick boxing';
console.log(quote.indexOf('chess'));

// 13.3
// Extract the word "boxing" from the same quote string, and log it to the console.
console.log(quote.slice(quote.indexOf('boxing')));
//-----or-----
console.log(quote.slice(quote.lastIndexOf(' ') + 1));

// 13.4
// Some authors are noted as "(Contributor)", for example "Julie Sussman (Contributor)".
// Create a function called isContributor that takes an author's name as an argument, and returns either true (if he's a contributor) of false (if he's not a contributor).
// The string "(Contributor)" is always the last part of the author's name string.
const isContributor = (author) => {
  //   console.log(author.includes('Contributor') !== false);
  // ------or----
  console.log(author.lastIndexOf('Contributor') !== -1);
};

isContributor('Julie Sussman (Contributor)');
isContributor('Robert Sedgewick');

// 13.5
// Write a function called normalizeAuthorName that takes an author's name (string) as an argument,
// and returns the same string, but the first name and last name are capitalized,
// and the "(Contributor)" part is removed (if exists).
function normalizeAuthorName(author) {
  if (author.includes('(Contributor)')) {
    var deContributerName = author.slice(0, author.indexOf('(Contributor)'));
  }
  const trimmedName = deContributerName.trim().toLowerCase();
  //   console.log(trimmedName);

  const nameSlices = trimmedName.split(' ');
  //   console.log(nameSlices);

  let finalName = '';
  for (const names of nameSlices) {
    // console.log(names);
    finalName += names[0].toUpperCase() + names.slice(1);
    finalName += ' ';
  }
  console.log(finalName);
}
normalizeAuthorName('  JuliE sussMan (Contributor)');

// 13.6
// Take the title of the second book (books[1]) from the books array, and replace the word "Programs" with "Software". Assign the new string to the newBookTitle variable.
const newBookTitle = books[1].title.replace('Programs', 'Software');
console.log(newBookTitle);

// 13.7
// Write a function called logBookTheme that takes book's title (string), and logs to the console:
// "This book is about computers" if the title starts with the word "computer",
// "This book is about algorithms and data structures" if the title includes both the "algorithms" and "structures" words,
// and, "This book is about some systems, but definitely not about operating systems" if the title ends with the word "system" or "systems", but doesn't include the word "operating".
const logBookTheme = function (booksTitle) {
  if (booksTitle.startsWith('computer'))
    console.log("yes it starts with 'computer'");
  else if (
    booksTitle.includes('algorithms') &&
    booksTitle.includes('structures')
  )
    console.log("it includes both 'algorithms & 'structures'");
  else if (booksTitle.endsWith('system') || booksTitle.endsWith('systems'))
    console.log("it ends with 'systems' or 'operating'");
};
logBookTheme('This book is about computer structures & algorithms');

// 13.8
// Below is the bookCategories variable that stores a string of categories.
// Each category is separated with a semicolon, for example, in a string "science;computing", 'science' and 'computing' are separate categories.
// Write a function called logBookCategories that takes a string of categories separated with semicolons, and logs each category to the console (as separate strings).

function logBookCategories(bookCategories) {
  const separateStrings = bookCategories.split(';');
  for (const words of separateStrings) console.log(words);
}

const bookCategories =
  'science;computing;computer science;algorithms;business;operating systems;networking;electronics';
logBookCategories(bookCategories);

// 13.9 // UNFINISHED
// Now, the opposite. Each book from the books array has the keywords property.
// Write a function called getKeywordsAsString that takes the books array as an argument, collects keywords from each book, removes duplicates,
// and then joins them to create a single string where keywords are separated by a semicolon.

function getKeywordsAsString(books) {
  const keywords = [];

  for (const book of books) {
    keywords.push(...book.keywords);
  }

  const uniqueKeywords = [...new Set(keywords)];

  return uniqueKeywords.join(';');
}
console.log(getKeywordsAsString(books));

// 13.10
// Below is the bookChapters array that contains inner arrays. Each inner array consists of a chapter's title,
// and the number of a page, for example, in ['The Basics', 14], 'The Basics' is the chapter's title, and 14 is the number of a page.
// Write a function called logBookChapters that takes an array of arrays (like bookChapters) as an argument,
// and logs each chapter's name to the console together with the page number.
// The page number should be separated from the chapter's name with underscores (take a look at the example below).
/* Expected output:
The Basics__________ 14
Sorting_____________ 254
Searching___________ 372
Graphs______________ 526
Strings_____________ 706
*/
// Use the padEnd method.
const bookChapters = [
  ['The Basics', 14],
  ['Sorting', 254],
  ['Searching', 372],
  ['Graphs', 526],
  ['Strings', 706],
];

function logBookChapters(chapters) {
  for (const [chapterName, pageNum] of chapters) {
    console.log(chapterName.padEnd(20, '_') + ' ' + pageNum);
  }
}

logBookChapters(bookChapters);
