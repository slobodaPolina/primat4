// описывает философа
class phy {
    // взяты ли левая и правая вилки
    constructor(public left: boolean, public right: boolean) {}
    equals(another: phy) {
        return this.left === another.left && this.right === another.right;
    }
}

// состояние системы. определяется вилками в руках философов
class state {
    private length: number;

    // phys - массив философов
    constructor(public phys: phy[]) {
        this.length = this.phys.length;
    }

    equals(another: state) {
        let length = this.length;
        let phys = this.phys;
        if (length !== another.phys.length) {
            return false;
        }

        for(let i = 0; i < length; i++) {
            // ищем с i-м сдвигом полное совпадение состояния философов.
            // если на одном из сдвигов нашли - супер.
            if (phys.find(function(element, index) {
                    return !element.equals(another.phys[(index + i) % length]);
                }) === undefined // проверка, что не нашлось отличающегося философа
            ) { return true; }
        }
        return false;
    }

    right(i: number) { // индекс правого соседа
        return (i + 1) % this.length;
    }

    left(i: number) { // индекс левого соседа
        return (i + this.length - 1) % this.length;
    }

    copy() {
        let array = [];
        for (let i = 0; i < this.length; i++) {
            array.push(new phy(this.phys[i].left, this.phys[i].right));
        }
        return new state(array);
    }

    setPhy(index: number, phyToReplace: phy) {
        this.phys[index] = phyToReplace;
        return this;
    }

    becomes(another: state) {
        let length = this.length;

        var rec = (index: number, cur: state) => {
            if (cur.equals(another)) {
                return true;
            }
            if(index === length) {
                return false;
            }
            // решаем, что делать с философом номер index
            // у него нет вилок
            if (!cur.phys[index].left && !cur.phys[index].right) {
                if (!cur.phys[this.left(index)].right) { //левая свободна
                    if(rec(index + 1, cur.copy().setPhy(index, new phy(true, false)))) {
                        return true;
                    }
                }
            }
            // у него есть только левая
            if (cur.phys[index].left && !cur.phys[index].right) {
                if (!cur.phys[this.right(index)].left) { //правая свободна
                    if(rec(index + 1, cur.copy().setPhy(index, new phy(true, true)))) {
                        return true;
                    }
                }
            }
            // есть обе
            if (cur.phys[index].left && cur.phys[index].right) {
                if(rec(index + 1, cur.copy().setPhy(index, new phy(false, false)))) {
                    return true;
                }
            }
            // если не смогли взять вилку или если действие не привело ни к чему, попробуем ничего не делать
            return rec(index + 1, cur.copy());
        };

        return rec(0, this);
    }
}

var states = [
  new state([new phy(false, false), new phy(false, false), new phy(false, false), new phy(false, false), new phy(false, false)]),
  new state([new phy(true, false), new phy(false, false), new phy(false, false), new phy(false, false), new phy(false, false)]),
  new state([new phy(true, true), new phy(false, false), new phy(false, false), new phy(false, false), new phy(false, false)]),
  new state([new phy(true, false), new phy(true, false), new phy(false, false), new phy(false, false), new phy(false, false)]),
  new state([new phy(true, false), new phy(false, false), new phy(true, false), new phy(false, false), new phy(false, false)]),
  new state([new phy(true, false), new phy(true, true), new phy(false, false), new phy(false, false), new phy(false, false)]),
  new state([new phy(true, false), new phy(false, false), new phy(true, true), new phy(false, false), new phy(false, false)]),
  new state([new phy(true, true), new phy(false, false), new phy(true, false), new phy(false, false), new phy(false, false)]),
  new state([new phy(true, false), new phy(true, false), new phy(true, false), new phy(false, false), new phy(false, false)]),
  new state([new phy(true, false), new phy(false, false), new phy(true, false), new phy(true, false), new phy(false, false)]),
  new state([new phy(true, true), new phy(false, false), new phy(true, true), new phy(false, false), new phy(false, false)]),
  new state([new phy(true, false), new phy(true, false), new phy(true, true), new phy(false, false), new phy(false, false)]),
  new state([new phy(true, false), new phy(false, false), new phy(true, false), new phy(true, true), new phy(false, false)]),
  new state([new phy(true, false), new phy(true, false), new phy(false, false), new phy(true, true), new phy(false, false)]),
  new state([new phy(true, false), new phy(true, false), new phy(true, false), new phy(true, false), new phy(false, false)]),
  new state([new phy(true, false), new phy(true, false), new phy(true, false), new phy(true, false), new phy(true, false)]),
  new state([new phy(true, false), new phy(true, false), new phy(true, false), new phy(true, true), new phy(false, false)]),
  new state([new phy(true, false), new phy(true, true), new phy(false, false), new phy(true, true), new phy(false, false)])
];

// создадим матрицу, описывающую сеть - из какого состояния в какое возможен переход
var matrix = [];
for(let i = 0; i < states.length; i++) {
    matrix[i] = [];
    for(let j = 0; j < states.length; j++) {
        matrix[i][j] = states[i].becomes(states[j]);
    }
}
console.log(matrix);
