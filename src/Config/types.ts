export interface WeatherData {
    main: {
        temp: number;
        humidity: number;
    };
    weather: {
        description: string;
        icon: string;
    }[];
    wind: {
        speed: number;
    };
    name: string;
    sys: {
        country: string;
    };
}