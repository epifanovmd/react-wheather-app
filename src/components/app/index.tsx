import * as React from "react";
import { IMapDispatchToAppProps, IMapStateToAppProps } from "./container";
import styles from "./styles.scss";
import { Wheather } from "../wheather";

type TAppProps = IMapStateToAppProps & IMapDispatchToAppProps;

export class App extends React.Component<TAppProps> {
    public componentDidMount(): void {
        const { onGetWheather } = this.props;
        onGetWheather("Moscow");
    }

    public render() {
        const {
            weatherMain,
            weatherClouds,
            weatherSys,
            city,
        } = this.props;
        // tslint:disable-next-line
        // const city = this.props.weather.name;

        console.log(weatherMain);
        console.log(weatherClouds);
        console.log(weatherSys);
        console.log(city);

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

        return (
            <div className={styles["app-container"]}>
                <Wheather
                    cityName={city}
                    windSpeed={getWindSpeed()}
                    windDeg={getWindDeg()}
                />
            </div>
        );

    }
}
