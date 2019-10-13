export class Manager {
    constructor(
        public id: number,
        public phone: string,
        public name: string,
        public parentId: number,
        public isDeleted: boolean,
        public photoUrl: string
    ) { }
}
