import * as React from "react";

interface IProps {
    // tslint:disable-next-line:prefer-method-signature
    selectCity: (city: string) => void;
}

export class SelectCity extends React.Component<IProps> {
    // tslint:disable-next-line:no-null-keyword
    private input: HTMLInputElement | null = null;
    private onSelectCity = () => {
        if (this.input !== null && this.input.value.length !== 0) {
            this.props.selectCity(this.input.value);
        }
    }
    public render() {

        return (
            <div>
                <input ref={(input) => this.input = input} type="text"/>
                <button onClick={this.onSelectCity}>Загрузить</button>
            </div>
        );
    }
}
