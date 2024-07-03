export type ProductState = {
    productList: Array<Product>;
    productDetail:Product

};


export type Product = {
    _id: string;
    name:string;
    image:string;
    quantity:number;
    price:number;
    qrCode:string;
    category:number;
};