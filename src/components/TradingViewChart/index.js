import React, { Component } from "react";
import binanceAPI from "../../services/api";
import "./index.scss";
export default class TradingViewChart extends Component {
  constructor({ chartProperties }) {
    super();
    this.state = {
      customeResolution: null,
    };
    this.bfAPI = new binanceAPI({ debug: false });
    this.widgetOptions = {
      container_id: "chart_container",
      datafeed: this.bfAPI,
      library_path: "/charting_library/",
      disabled_features: [],
      ...chartProperties,
    };
    this.tradingViewWidget = null;
    this.chartObject = null;
  }

  chartReady = () => {
    if (!this.tradingViewWidget) return;
    this.tradingViewWidget.onChartReady(() => {
      this.chartObject = this.tradingViewWidget.activeChart();
      // ()
    });
  };

  componentDidMount() {
    this.tradingViewWidget = window.tvWidget = new window.TradingView.widget(
      this.widgetOptions
    );
    this.chartReady();
  }

  componentDidUpdate() {
    if (!this.tradingViewWidget) return;
  }

  handleInputChange = (e) => {
    this.setState({ customeResolution: e.target.value });
  };

  handleKeyDown = (e) => {
    if (e.which === 13) {
      this.chartObject.setResolution(this.state.customeResolution);
    }
  };

  render() {
    return (
      <>
        <input
          onChange={this.handleInputChange}
          onKeyDown={this.handleKeyDown}
          value={this.state.customeResolution}
          placeholder="Input your resolution"
        />
        <div id="chart_container"></div>;
      </>
    );
  }
}
