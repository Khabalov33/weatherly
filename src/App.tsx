import { Crosshair, LoaderCircle, Search } from 'lucide-react'
import { useEffect, useState } from 'react'
import Clouds from './assets/clouds.png'
import WeatherCard from './components/WeatherCard'
import { WeatherCardHour } from './components/WeatherCardHour'
import './index.css'
import { ForecastHourProps, WeatherAPIResponseProps } from './types/types'
import { getWeatherIcon } from './utils/getIcons'

const API_KEY = import.meta.env.REACT_APP_WEATHER_API_KEY

console.log('API Key:', API_KEY)

const now = new Date()
const currentHour = now.getHours()

function App() {
	const [query, setQuery] = useState<string>('')
	const [weather, setWeather] = useState<WeatherAPIResponseProps | null>(null)
	const [nextHoursWeathers, setNextHoursWeathers] = useState<
		ForecastHourProps[] | null
	>([])
	const [notFound, setNotFound] = useState<boolean>(false)
	const [loading, setLoading] = useState<boolean>(false)

	async function fetchWeather(location: string) {
		try {
			setWeather(null)
			setLoading(true)
			const response = await fetch(
				`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${location}&days=1`
			)

			if (!response.ok) {
				setNotFound(true)
				return
			}
			const data = await response.json()
			const forecastHours = data.forecast.forecastday[0].hour.slice(
				currentHour + 1,
				currentHour + 6
			)

			// необходимо зафиксировать прогнозируемые часы, когда текущий час равен 20:00, массив заканчивается
			console.log(data.forecast.forecastday[0].hour)

			console.log(data)
			setNotFound(false)
			setNextHoursWeathers(forecastHours)
			setWeather(data)
			console.log(nextHoursWeathers)
		} catch (e) {
			console.error('[Error] так, так, так, какая-то ошибка 🤔 ', e)
		} finally {
			setLoading(false)
		}
	}

	useEffect(() => {
		fetchWeather('Alagir')
	}, [])

	return (
		<>
			<main className='absolute top-1/2 left-1/2 -translate-1/2 container max-w-[400px] bg-gradient-to-b from-[#352163] to-[#33143C] rounded-md sm:rounded-xl '>
				<div className='relative z-20 p-6 pb-4'>
					<div className='relative z-1 flex gap-2 w-full'>
						<input
							className='w-full pl-10 pr-4 py-2 bg-white/20 text-white rounded-md border border-gray-200/30'
							type='text'
							placeholder='Enter a city name'
							onChange={e => setQuery(e.target.value)}
						/>
						<Search size={22} className='absolute top-2.5 left-2 text-white' />
						<button
							onClick={() => fetchWeather(query)}
							className='bg-white/20 px-2.5 border border-white/20 rounded-md cursor-pointer'
						>
							<Crosshair size={22} color='white' />
						</button>
					</div>
				</div>
				<div>
					<div className='relative z-20 flex justify-center items-center border-b border-white/20 h-70 pb-4'>
						{loading && (
							<LoaderCircle
								size={80}
								color='white'
								className='absolute bottom-50 animate-spin'
							/>
						)}
						{weather !== null && (
							<WeatherCard
								location={`${weather.location.name}, ${weather.location.region}`}
								atmosphere={weather.current.condition.text}
								temperature={weather.current.temp_c}
								weatherImg={getWeatherIcon(weather.current.condition.text)}
							/>
						)}

						{notFound && (
							<WeatherCard
								location=''
								atmosphere=''
								temperature='not found'
								weatherImg={getWeatherIcon('none')}
							/>
						)}
					</div>
					<div
						className='absolute z-0 inset-0 bg-cover bg-center blur-xs'
						style={{ backgroundImage: `url(${Clouds})` }}
					/>
					<div className='relative z-20 flex items-center justify-center gap-2 app:gap-3 h-[140px]'>
						{nextHoursWeathers &&
							nextHoursWeathers.map((hour, index) => (
								<WeatherCardHour
									key={index}
									weatherImg={hour.condition.icon}
									weatherHour={hour.time.slice(-5)}
									temperature={hour.temp_c}
								/>
							))}
					</div>
				</div>
			</main>
		</>
	)
}

export default App
