import { Column, Model, Table } from 'sequelize-typescript';



@Table({
  tableName: 'product-info',
  modelName: 'ProductInfo',
})


export class ProductInfo extends Model {
  @Column
  category: string;
  @Column
  itemId: string;
  @Column
  name: string;
  @Column
  fullPrice: number;
  @Column
  price: number;
  @Column
  screen: string;
  @Column
  capacity: string;
  @Column
  color: string;
  @Column
  ram: string;
  @Column
  year: number;
  @Column
  image: string;
}
