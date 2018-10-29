
export class Card {
  value: number;
  color: string;
  image: string;
  str: string;
  toggled: boolean;


  constructor(value: string);
  constructor(value: number , color: string)
  constructor(value: number | string, color?: string) {
    let str2: string;
    if (typeof value === 'number') {
      this.value = value;
      this.color = this.colorToColorNumber(color);
      str2 = value.toString().concat(color);
      this.str = this.value.toString().concat(this.color);
    } else {
      if (value === '000') {
        this.image = '/assets/cards/FC.jpg';
        this.value = -1;
        this.color = '';
        this.str = 'FC';
        return;
      }
      this.value = Number(value.substring(0, value.length - 1));
      this.color = value.substring( value.length - 1);
      str2 = this.value.toString().concat(this.colorToColorLetter(value.substring( value.length - 1)));
      this.str = this.value.toString().concat(this.color);
    }
    this.image = '/assets/cards/' + str2 + '.jpg';
  }

  colorToColorLetter(c: string): string {
    if (c === '0') {
      return 'G';
    }
    if (c === '1') {
      return 'Y';
    }
    if (c === '2') {
      return 'R';
    }
    if (c === '3') {
      return 'M';
    }
    return 'ERROR';
  }

  colorToColorNumber(c: string): string {
    if (c === '0') {
      return 'G';
    }
    if (c === '1') {
      return 'Y';
    }
    if (c === '2') {
      return 'R';
    }
    if (c === '3') {
      return 'M';
    }
    return 'ERROR';
  }
}



