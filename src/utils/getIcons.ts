import clear from '../assets/icons/clear.svg'
import clouds from '../assets/icons/clouds.svg'
import mist from '../assets/icons/mist.svg'
import heavyRain from '../assets/icons/moderate_heavy_rain.svg'
import noResult from '../assets/icons/no-result.svg'
import rain from '../assets/icons/rain.svg'
import snow from '../assets/icons/snow.svg'
import thunder from '../assets/icons/thunder.svg'
import thunderRain from '../assets/icons/thunder_rain.svg'

const conditionKeywords: Record<string, string> = {
	clear,
	sunny: clear,
	cloud: clouds,
	overcast: clouds,
	mist: mist,
	fog: mist,
	drizzle: rain,
	rain: rain,
	'heavy rain': heavyRain,
	'moderate rain': heavyRain,
	snow: snow,
	thunder: thunder,
	'thunder rain': thunderRain,
}

export function getWeatherIcon(condition: string): string {
	const lower = condition.toLowerCase()

	for (const keyword in conditionKeywords) {
		if (lower.includes(keyword)) {
			return conditionKeywords[keyword]
		}
	}

	return noResult
}
