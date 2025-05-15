import { ICategory } from "./icategory";
export interface IService {
    _id: string,
    title: string,
    description: string,
    quantity: number,
    price: number,
    imageCover: string,
    category: ICategory,
    brand: any,
    subcategory: any,
    images: any,
    ratingsAverage: number,
    ratingsQuantity: number,
    updatedAt: string,
    files: any,
  }