import { ChangeEvent, Component } from "react";

type TemperatureInputProps = {
  scale: string;
  onTemperatureChange: (arg0: string) => void
  temperature: number | string;
};

const scaleNames = {
  c: "Celsius",
  f: "Fahrenheit",
};

export default class TemperatureInput extends Component<TemperatureInputProps> {
  constructor(props: TemperatureInputProps) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e: ChangeEvent<HTMLInputElement>) {
    this.props.onTemperatureChange(e.target.value);
  }
  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>
          Enter temperature in {scale === "c" ? scaleNames.c : scaleNames.f}:
        </legend>
        <input type="text" value={temperature} onChange={this.handleChange} />
      </fieldset>
    );
  }
}
