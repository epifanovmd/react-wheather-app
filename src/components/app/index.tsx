import * as React from "react";
import { IMapDispatchToAppProps, IMapStateToAppProps } from "./container";
import styles from "./styles.scss";
import { Wheather } from "../wheather";
import { SelectCity } from "../selectCity";

type TAppProps = IMapStateToAppProps & IMapDispatchToAppProps;

export class App extends React.Component<TAppProps> {
    public render() {
        const {
            city,
        } = this.props;

        const getWindDeg = (): number | null => {
                const { weatherWind } = this.props;
                if (weatherWind !== undefined) {
                    return weatherWind.deg;
                }

                // tslint:disable-next-line:no-null-keyword
                return null;
            };

        const getWindSpeed = (): number | null => {
            const { weatherWind } = this.props;
            if (weatherWind !== undefined) {
                return weatherWind.speed;
            }

            // tslint:disable-next-line:no-null-keyword
            return null;
        };

        const getCountry = (): string => {
            const { weatherSys } = this.props;
            if (weatherSys !== undefined) {
                return weatherSys.country;
            }

            // tslint:disable-next-line:no-null-keyword
            return "";
        };

        const getClouds = (): number | null => {
            const { weatherClouds } = this.props;
            if (weatherClouds !== undefined) {
                return weatherClouds.all;
            }

            // tslint:disable-next-line:no-null-keyword
            return null;
        };

        const getTemp = (): string => {
            const { weatherMain } = this.props;
            if (weatherMain !== undefined) {
                const tmp = 273.15;
                const temperature: number = (weatherMain.temp - tmp);

                // tslint:disable-next-line
                return (temperature.toFixed(2));
            }

            // tslint:disable-next-line:no-null-keyword
            return "";
        };

        return (
            <div className={styles["app-container"]}>
                <SelectCity
                    selectCity={this.props.onGetWheather}
                />
                <Wheather
                    cityName={city}
                    temp={getTemp()}
                    windSpeed={getWindSpeed()}
                    windDeg={getWindDeg()}
                    country={getCountry()}
                    clouds={getClouds()}
                />
            </div>
        );

    }
}
