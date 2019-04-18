// описывает философа
class phy {
  // взяты ли левая и правая вилки
  constructor(public left: boolean, public right: boolean) {}
}

// состояние системы. определяется вилками в руках философов
class state {
  // phys - массив философов
  constructor(public phys: phy[]) {}
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
