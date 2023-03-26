class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = this.items.length; 
  }

  add(item) {
   this.items.push(item);
   this.items.sort((a, b) => a - b);
   this.length = this.items.length; 
  }

  get(pos) {
    if(pos > this.items.length) throw new Error('OutOfBounds');
    else return this.items[pos];
  }

  max() {
    if(!this.length) throw new Error('EmptySortedList');
    else return this.items[this.length - 1];
  }

  min() {
    if(!this.length) throw new Error('EmptySortedList');
    else return this.items[0];
    }

  sum() {
    if(!this.length) return 0;
    return this.items.reduce((acc, curr) =>
    acc + curr, 0);
  }

  avg() {
    if(!this.length) throw new Error('EmptySortedList');
    let sum = this.items.reduce((acc, curr) =>
    acc + curr, 0);
    let averg = sum / this.length;
    return averg;
  }
}

module.exports = SortedList;
