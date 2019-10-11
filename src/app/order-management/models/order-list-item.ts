export class OrderListItem {
    constructor(
        public id: number,
        public orderStatus: string,
        public totalCost: string,
        public managerId: number,
        public description: string,
        public customerId: number,
        public productAmount: number,
        public productId: number
    ) { }
}