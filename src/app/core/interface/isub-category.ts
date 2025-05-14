export interface ISubCategory {
  images:Img[],
  category: ICategory,
  locationIds: any [],
  nameAr:string,
  descAr: string,
  detailAr:string,
  categoryId:number,
  showHome:boolean,
  videoUrl:string,
  id:number
}

interface Img {
  id: number,
  imagePath: string
}
interface ICategory {
  nameAr:string,
  descriptionAr: string,
  showNavBar: boolean,
  id: number
}
