export class ManagerListItem {
    constructor(
        public id: number,
        public phone: string,
        public name: string,
        public isDeleted: boolean,
        public photoUrl: string
    ) { }
}