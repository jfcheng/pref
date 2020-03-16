import { Company } from './company'

export class Security {
	id: number;
	companyTicker: string;
	series: string;
	seriesTicker: string;

	get ticker() {
		return this.companyTicker+".pr."+this.seriesTicker;

	}
}



