var basepath = ''; // base URL or directory path
var books = ['abc', 'def', 'ghi', 'pqr', 'xyz'];
var page = 1; // can be 1, 2, 3, 4, 5 etc.
var url = basepath + books[index] + '/' + page + '.jpg';
const NO_OF_PAGES_AT_A_TIME = 5; // we will keep this configurable from settings later.
// show NO_OF_PAGES_AT_A_TIME pages at a time of one book. 11
// loop through all books show 5 pages of each book in first itereation. 
// then again loop through all books show 5 pages each from 6th page of first book.
// e.g. order given below.

abc/1.jpg
abc/2.jpg
abc/3.jpg
abc/4.jpg
abc/5.jpg
def/1.jpg
def/2.jpg
def/3.jpg
def/4.jpg
def/5.jpg
ghi/1.jpg
ghi/2.jpg
ghi/3.jpg
ghi/4.jpg
ghi/5.jpg
pqr/1.jpg
pqr/2.jpg
pqr/3.jpg
pqr/4.jpg
pqr/5.jpg
xyz/1.jpg
xyz/2.jpg
xyz/3.jpg
xyz/4.jpg
xyz/5.jpg
abc/6.jpg
abc/7.jpg
abc/8.jpg
abc/9.jpg
abc/10.jpg
def/6.jpg
def/7.jpg
def/8.jpg
def/9.jpg
def/10.jpg
ghi/6.jpg
ghi/7.jpg
ghi/8.jpg
ghi/9.jpg
ghi/10.jpg
pqr/6.jpg
pqr/7.jpg
pqr/8.jpg
pqr/9.jpg
pqr/10.jpg
xyz/6.jpg
xyz/7.jpg
xyz/8.jpg
xyz/9.jpg
xyz/10.jpg


// and it will again continue like that from 11th page of abc.