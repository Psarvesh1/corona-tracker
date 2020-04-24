import React from 'react';

import { Cards, CountryPicker, Chart } from './components';
import StickyFooter from 'react-sticky-footer';

import { fetchData } from './api/';
import styles from './App.module.css';

import image from './images/image.png';

class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <img className={styles.image} src={image} alt="COVID-19" />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} /> 
        <StickyFooter
    bottomThreshold={10}
    normalStyles={{
    backgroundColor: "#999999",
    padding: "0.2rem",
    marginTop: '5vh'
    }}
    stickyStyles={{
    backgroundColor: "rgba(255,255,255,.8)",
    padding: ".2rem"
    }}
>
    This page is made with precautions by <b><a href = "https://www.instagram.com/sarvesh_parab03/" target = "__blank">Sarvesh Parab</a></b>.
</StickyFooter>

      </div>
    );
  }
}

export default App;