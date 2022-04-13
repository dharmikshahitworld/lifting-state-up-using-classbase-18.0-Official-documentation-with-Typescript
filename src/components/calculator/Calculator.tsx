import { Component } from "react";
import { toCelsius, toFahrenheit, tryConvert } from "../../utils/functions";
import { BoilingVerdict } from "../boilingVerdict/BoilingVerdict";
import TemperatureInput from "../temperatureInput/TemperatureInput";

type CalculatorState = {
  temperature: string;
  scale: "c" | "f";
};

export default class Calculator extends Component<{}, CalculatorState> {
  constructor(props: {}) {
    super(props);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.state = { temperature: "", scale: "c" };
  }
  handleCelsiusChange(temperature: string): void {
    this.setState({ scale: "c", temperature });
  }

  handleFahrenheitChange(temperature: string): void {
    this.setState({ scale: "f", temperature });
  }
  render(): JSX.Element {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius =
      scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit =
      scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;
    return (
      <>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange}
        />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange}
        />
        <BoilingVerdict celsius={parseFloat(celsius)} />
      </>
    );
  }
}
