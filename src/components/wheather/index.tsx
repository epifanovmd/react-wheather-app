import * as React from "react";

interface IProps {
    cityName: string | null;
    windSpeed: number | null;
    windDeg: number | null;
    country: string;
    clouds: number | null;
    temp: string;
}

export class Wheather extends React.Component<IProps> {
    public render() {
        const {
            cityName,
            windSpeed,
            windDeg,
            country,
            clouds,
            temp,
        } = this.props;

        const windDirection = (deg: number | null): string => {
            if (deg) {
                const numDestinations = 16;
                // tslint:disable-next-line:no-magic-numbers
                const val = Math.floor((deg / 22.5) + 0.5);
                const arr = [
                    "С", "ССВ", "СВ", "ВСВ", "В", "ВЮВ",
                    "ЮВ", "ЮЮВ", "Ю", "ЮЮЗ", "ЮЗ", "ЗЮЗ",
                    "З", "ЗСЗ", "СЗ", "ССЗ",
                ];

                return arr[(val % numDestinations)];
            } else { return ""; }
        };

        return (
            <div>
                <h2>Погода в городе: { cityName }, { country }</h2>
                <p><b>Температура:</b> { temp } ℃</p>
                <p><b>Влажность:</b> { clouds } %</p>
                <br/>
                <p><b>Направление ветра:</b> {windDirection(windDeg)}</p>
                <p><b>Скорость ветра:</b> { windSpeed } метр. в секунду</p>
            </div>
        );
    }
}
