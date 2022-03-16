abstract class Tasse {
  abstract getUtileTasse(): number;
  abstract getTasseInps(): number;
  abstract getTasseIrpef(): number;
  abstract getRedditoAnnuoNetto(): number;
  redditoannuolordo: number;
  codredd: number;
  constructor(codredd:number, redditoannuolordo: number) {
    this.redditoannuolordo = redditoannuolordo;
    this.codredd: number;
  }
}

/*abstract class CodiceRedditivitaUno extends Tasse {
  protected codredd: number = 1;
  tasseinps: number = 20;
  tasseirpef: number = 15;
}

abstract class CodiceRedditivitaDue extends Tasse {
  protected codredd: number = 2;
  tasseinps: number = 30;
  tasseirpef: number = 20;
}

abstract class CodiceRedditivitaTre extends Tasse {
  protected codredd: number = 3;
  tasseinps: number = 35;
  tasseirpef: number = 25;
}*/

class Artigiani extends Tasse {
  getUtileTasse() {
    return this.getTasseInps() + this.getTasseIrpef();
  }
  getTasseInps() {
    return (this.redditoannuolordo / 100) * this.tasseinps;
  }
  getTasseIrpef() {
    return (this.redditoannuolordo / 100) * this.tasseirpef;
  }
  getRedditoAnnuoNetto() {
    return this.redditoannuolordo - this.getUtileTasse();
  }
}

Artigiani.prototype.codredd = 1;

class Impiegati extends Tasse {
  getUtileTasse() {
    return this.getTasseInps() + this.getTasseIrpef();
  }
  getTasseInps() {
    return (this.redditoannuolordo / 100) * this.tasseinps;
  }
  getTasseIrpef() {
    return (this.redditoannuolordo / 100) * this.tasseirpef;
  }
  getRedditoAnnuoNetto() {
    return this.redditoannuolordo - this.getUtileTasse();
  }
}

class Operai extends Tasse {
  getUtileTasse() {
    return this.getTasseInps() + this.getTasseIrpef();
  }
  getTasseInps() {
    return (this.redditoannuolordo / 100) * this.tasseinps;
  }
  getTasseIrpef() {
    return (this.redditoannuolordo / 100) * this.tasseirpef;
  }
  getRedditoAnnuoNetto() {
    return this.redditoannuolordo - this.getUtileTasse();
  }
}

let lavoratoreUno = new Artigiani(35000);
let lavoratoreDue = new Impiegati(35000);
let lavoratoreTre = new Operai(35000);

console.log(lavoratoreUno);
console.log(lavoratoreUno.getUtileTasse());
console.log(lavoratoreUno.getTasseInps());
console.log(lavoratoreUno.getTasseIrpef());
console.log(lavoratoreUno.getRedditoAnnuoNetto());

console.log(lavoratoreDue);
console.log(lavoratoreDue.getUtileTasse());
console.log(lavoratoreDue.getTasseInps());
console.log(lavoratoreDue.getTasseIrpef());
console.log(lavoratoreDue.getRedditoAnnuoNetto());

console.log(lavoratoreTre);
console.log(lavoratoreTre.getUtileTasse());
console.log(lavoratoreTre.getTasseInps());
console.log(lavoratoreTre.getTasseIrpef());
console.log(lavoratoreTre.getRedditoAnnuoNetto());
