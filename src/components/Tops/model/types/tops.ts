export interface Gainer {
  symbol: string;
  name: string;
  change: number;
  price: number;
  changesPercentage: number;
}


export interface Looser extends Gainer {}
export interface Active extends Gainer {}
export interface IndexesInfo extends Gainer{}

export interface SectorPerformance{
	sector: string,
	changesPercentage: string
}
