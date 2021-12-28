export class Product {
  name: string;
  category: string;
  unitPrice: number;
  constructor(_name: string, _category: string, _unitPrice: number) {
    this.name = _name;
    this.category = _category;
    this.unitPrice = _unitPrice;
  }
}
