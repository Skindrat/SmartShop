export class Product {

  constructor(
    public name: string,
    public description: string,
    public imageUrl: string,
    public price: number,
    public quantity: number,
    public isCounted: boolean,
    public isFeatured: boolean,
  ) { }

}
