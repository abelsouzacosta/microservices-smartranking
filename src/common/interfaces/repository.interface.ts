export interface IRepository {
  create?(data: any): Promise<any>;

  list?(): Promise<Array<any>>;

  findById?(id: string): Promise<any>;

  update?(data: any): Promise<any>;

  delete?(): Promise<any>;
}
