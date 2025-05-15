import { WeatherCardProps } from '../types/types'

export default function WeatherCard({
	weatherImg,
	atmosphere,
	temperature,
	location,
}: WeatherCardProps) {
	return (
		<>
			<div className='flex flex-col gap-4 items-center justify-center'>
				<p className='text-white font-semibold text-lg'>{location}</p>
				<img className='w-30' src={weatherImg} alt='текущая погода' />
				<h3 className='relative right-2 text-5xl text-white font-bold'>
					{temperature == 'not found' ? ' ' : Number(temperature).toFixed(0)}{' '}
					<span className='absolute top-0 left-14 text-xl font-normal'>
						{temperature == 'not found' ? ' ' : '°C'}
					</span>
				</h3>
				<p className='text-lg text-white'>{atmosphere}</p>
			</div>
		</>
	)
}
