export class OrderListItem {
    constructor(
        public id: number,
        public orderStatus: string,
        public totalCost: string,
        public managerId: boolean,
        public description: string,
        public customerId: number
    ) { }
}