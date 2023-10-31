import { Column, Model, Table } from 'sequelize-typescript';


interface IDescription {
  title: string;
  text: string[];
}

@Table({
  tableName: 'product-info-in-detail',
  modelName: 'ProductInfoInDetail',
})

export class ProductInfoInDetail extends Model {
  @Column
  namespaceId: string;
  @Column
  name: string;
  @Column
  capacityAvailable: string[];
  @Column
  capacity: string;
  @Column
  priceRegular: number;
  @Column
  priceDiscount: number;
  @Column
  colorsAvailable: string[];
  @Column
  color: string;
  @Column
  images: string[];
  @Column
  description: IDescription[];
  @Column
  screen: string;
  @Column
  resolution: string;
  @Column
  processor: string;
  @Column
  ram: string;
  @Column
  camera: string;
  @Column
  zoom: string;
  @Column
  cell: string[];
}