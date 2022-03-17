interface Smartphone {
  saldo: number;
  numeroChiamate: number;
  ricarica(unaRicarica: number): number;
  chiamata(unaChiamata: number): number;
  numero404(): any;
  getNumeroChiamate(): any;
  azzeraChiamate(): number;
}

class FirstUser implements Smartphone {
  saldo: number;
  numeroChiamate: number;
  constructor(saldo: number, numeroChiamate: number) {
    this.saldo = saldo;
    this.numeroChiamate = numeroChiamate;
  }
  ricarica(unaRicarica: number) {
    return (this.saldo = this.saldo + unaRicarica);
  }
  chiamata(unaChiamata: number) {
    return (this.saldo = this.saldo - 0.2 * unaChiamata);
  }

  numero404() {
    return this.saldo;
  }
  getNumeroChiamate() {
    return this.numeroChiamate;
  }
  azzeraChiamate() {
    return (this.numeroChiamate = 0);
  }
}

let pippo = new FirstUser(50, 15);
console.log(pippo);
console.log(pippo.ricarica(20));
console.log(pippo.chiamata(100));
console.log(pippo.numero404());
console.log(pippo.getNumeroChiamate());
console.log(pippo.azzeraChiamate());
