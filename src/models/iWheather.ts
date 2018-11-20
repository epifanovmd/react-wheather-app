export interface IWheather {
    main: {
        "temp": number;
        "pressure": number;
        "humidity": number;
        "temp_min": number;
        "temp_max": number;
    };
    wind: {
        "speed": number;
        "deg": number;
    };
    clouds: {
        "all": number;
    };
    sys: {"country": string };
    name?: string;
}
