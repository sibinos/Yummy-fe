export interface FooterPropsInterface{
    items1:string[],
    items2:string[],
    getFooter : ()=>void
}
export interface ContentType{
    "productId": number,
    "productImage": string,
    "productPrice": string,
    "productAmount": number
}
export interface FeedbackProps{
    values:{comment:string}
}
export interface DropdownInterface    {
    "product_name": string,
    "price": number,
    "catagory_name": string,
    "imageurl": string
}
export   interface ItemInterface{
    productId : number,
    productImage: string,
    productPrice: string,
    productAmount: number,
    count : number,
    id : number
}
export interface ContentType{
    productId: number,
    productImage: string,
    productPrice: string,
    productAmount: number
}

