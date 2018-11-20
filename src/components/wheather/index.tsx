import * as React from "react";

interface IProps {
    cityName: string | null;
    windSpeed: number | null;
    windDeg: number | null;
}

export class Wheather extends React.Component<IProps> {
    public render() {
        const {
            cityName,
            windSpeed,
            windDeg,
        } = this.props;

        const windDirection = (deg: number | null): string => {
            if (deg) {
                const numDestinations = 16;
                // tslint:disable-next-line:no-magic-numbers
                const val = Math.floor((deg / 22.5) + 0.5);
                const arr = [
                    "N", "NNE", "NE", "ENE", "E", "ESE",
                    "SE", "SSE", "S", "SSW", "SW", "WSW",
                    "W", "WNW", "NW", "NNW",
                ];

                return arr[(val % numDestinations)];
            } else { return ""; }
        };

        return (
            <div>
                <h2>Погода в городе: { cityName }</h2>
                <p>Скорость ветра: { windSpeed }</p>
                <p>Направление ветра: {windDirection(windDeg)}</p>
            </div>
        );
    }
}
