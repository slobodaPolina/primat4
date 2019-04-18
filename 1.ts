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
