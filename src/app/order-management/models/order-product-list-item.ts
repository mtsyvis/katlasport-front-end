export class OrderProductListItem{
    constructor(
        public itemId: number,
        public productName: string,
        public amount: number,
        public productPrice: number
    ){}
}