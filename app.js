// Iterator Example
function nameIterator() {
  let nextIndex = 0;

  return {
    next: function() {
      return nextIndex < names.length ? 
      { value: name[nextIndex++], done: false } :
      { done: true }
    }
  }
}

// Create an array of names
const namesArr = ['Mason', 'Darius', 'Liam'];
// Init iterator and pass in the names array
const names = nameIterator(namesArr);

console.log(names.next());