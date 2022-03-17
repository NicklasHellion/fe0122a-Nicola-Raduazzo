fetch("./Abbigliamento.json")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((item: any) => {});
  });

class Abbigliamento {
  id: number;
  codprod: number;
  collezione: string;
  capo: string;
  modello: number;
  quantita: number;
  colore: string;
  prezzoivaesclusa: number;
  prezzoivainclusa: number;
  disponibile: string;
  saldo: number;

  constructor(
    id: number,
    codprod: number,
    collezione: string,
    capo: string,
    modello: number,
    quantita: number,
    colore: string,
    prezzoivaesclusa: number,
    prezzoivainclusa: number,
    disponibile: string,
    saldo: number
  ) {
    this.id = id;
    this.codprod = codprod;
    this.collezione = collezione;
    this.capo = capo;
    this.modello = modello;
    this.quantita = quantita;
    this.colore = colore;
    this.prezzoivainclusa = prezzoivainclusa;
    this.prezzoivaesclusa = prezzoivaesclusa;
    this.disponibile = disponibile;
    this.saldo = saldo;
  }
  getsaldocapo(): number {
    return this.prezzoivainclusa - this.saldo;
  }
  getacquistocapo(): number {
    return this.getsaldocapo();
  }
}

let capoUno = new Abbigliamento(
  1,
  2121,
  "primavera",
  "cardigan",
  1231,
  5,
  "nero",
  18.5,
  22,
  "negozio",
  45
);
let capoDue = new Abbigliamento(
  2,
  4111,
  "estate",
  "t-shirt",
  1251,
  6,
  "rosso",
  5.5,
  6.71,
  "magazzino",
  30
);
let capoTre = new Abbigliamento(
  3,
  1181,
  "inverno",
  "felpa",
  1229,
  8,
  "beige",
  17.5,
  21.35,
  "negozio",
  50
);

console.log(capoUno);
console.log(capoDue);
console.log(capoTre);
