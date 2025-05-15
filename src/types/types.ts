export type WeatherAPIResponseProps = {
   location: {
      name: string;
      region: string;
      country: string;
   };
   current: {
      temp_c: number;
      condition: {
         text: string;
         icon: string;
      };
   };
};

export type WeatherCardHourProps = {
   weatherImg: string;
   weatherHour?: string;
   temperature?: number;
}

export type ForecastHourProps = {
   time: string;
   temp_c: number;
   condition: {
      text: string;
      icon: string;
      code: number;
   };
};

export type WeatherCardProps = {
   weatherImg: string;
   temperature: number | string;
   atmosphere: string;
   location: string;
};
