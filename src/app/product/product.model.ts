export class ProductModel{
    constructor(
        public id:number=0,
        public name:string="",
        public price:number=0,
        public quantity:number=0,
        public pic:string="",
        public favStatus:boolean=false,
        public likes:number=0,
        public points:number=0
    ){

    }
}