import { Security } from '../model/security';

export const SECURITIES: Security[] = [
  { id: 11, companyTicker: 'bpo', series: 'x', seriesTicker: 'x' },
  { id: 12, companyTicker: 'bpo', series: 'y', seriesTicker: 'y' },
  { id: 13, companyTicker: 'bpo', series: 'w', seriesTicker: 'w' },
  { id: 14, companyTicker: 'bpo', series: 'n', seriesTicker: 'n' },
  { id: 15, companyTicker: 'bce', series: 'r', seriesTicker: 'r' },
  { id: 16, companyTicker: 'bce', series: 'g', seriesTicker: 'g' },
  { id: 17, companyTicker: 'bpo', series: 'n', seriesTicker: 'n' },
].map(obj => {
	var security = new Security();
	security.id = obj.id;
	security.companyTicker = obj.companyTicker;
	security.series = obj.series;
	security.seriesTicker = obj.seriesTicker;
	return security;
});
