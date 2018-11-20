import * as React from "react";
import styles from "./styles.scss";

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
            <div className={styles["wheather-container"]}>
                <h2 className={styles["wheather-header"]}>Погода в городе: { cityName }, { country }</h2>
                <p className={styles["wheather-param"]}><b>Температура:</b> { temp } ℃</p>
                <p className={styles["wheather-param"]}><b>Влажность:</b> { clouds } %</p>
                <br/>
                <p className={styles["wheather-param"]}><b>Направление ветра:</b> {windDirection(windDeg)}</p>
                <p className={styles["wheather-param"]}><b>Скорость ветра:</b> { windSpeed } м/с</p>
            </div>
        );
    }
}
