export interface IServiceDetails {
  governorateId: number,
  governorateNameAr:string,
  services: IServiceInfo[]
}

export interface IServiceInfo {
  descAr:string,
  detailAr:string,
  id:number,
  nameAr:string,
  images: ImageService[]
}
interface ImageService {
  id : number,
  imagePath:string,
}
