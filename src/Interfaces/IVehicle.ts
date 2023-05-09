interface ICar {
  id?: string | undefined;
  model: string;
  year: number;
  color: string;
  status?: boolean | false;
  buyValue: number;
}

export default ICar;
