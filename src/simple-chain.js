const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  c: [],
  getLength() {
    return this.c.length;
  },
  addLink(l) {
    var e = '( ' + l + ' )';
    this.c.push(e);
    return this;
  },
  removeLink(p) {
    if (p < 1 || !Number.isInteger(p) || p > this.getLength()) {
      this.c = [];
      throw new Error("You can't remove incorrect link!");
    }
    else {
      this.c = this.c.filter((value) => value !== this.c[p - 1]);
      return this;
    }
  },
  reverseChain() {
    this.c.reverse();
    return this;
  },
  finishChain() {
    var cc = this.c.join('~~');
    this.c = [];
    return cc;
  }
};

module.exports = {
  chainMaker
};
