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
    // phys - массив философов
    constructor(public phys: phy[]) {}

    equals(another: state) {
        let length = this.phys.length;
        if (length !== another.phys.length) {
            return false;
        }

        for(let i = 0; i < length; i++) {
            // ищем с i-м сдвигом полное совпадение состояния философов.
            // если на одном из сдвигов нашли - супер.
            if (this.phys.find(function(element, index) {
                    return !element.equals(another.phys[(index + i) % length]);
                }) === undefined // проверка, что не нашлось отличающегося философа
            ) { return true; }
        }
        return false;
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
