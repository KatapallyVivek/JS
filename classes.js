// class -->> Blueprint of an object
// syntax class calssname {
//
//      block of codes
//
// }

class Rectangle {
    width = 10;
    height = 15;
    color = "Blue";

    calArea() {
        const area = this.width * this.height;
        return area;
    }
    calPer() {
        const perimeter = 2 * (this.width + this.height);
        return perimeter;
    }
}

const r = new Rectangle();
const ans = r.calArea()
const ans1 = r.calPer()
console.log(ans1);