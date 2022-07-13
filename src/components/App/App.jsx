import React, { Component }  from "react";
// import axios from 'axios';

import { AppEl } from "./App.styled";
import { Loader } from "components/Loader/Loader";
import { SearchBar } from "components/Searchbar/Searchbar";
import { Gallery } from "components/ImageGallery/ImageGallery";
import * as API from "../../services/Api"

// const BaseURL = 'https://pixabay.com/api/'
// const API_KEY = '28606386-da43ad70a5a9d48305ac13b2f';

export class App extends Component {
  state = {
    searchData: [],
    loading: false,
    page: 1,
    error: null
  }

  handleSearch = async (searchValue) => {
    try {
      this.setState({ loading: true })
      const picture = await API.PictureDataFetch(searchValue)
      console.log(picture)

      this.setState(state => ({
        searchData: [...state.searchData, ...picture.hits],
        loading: false,
      }))
    } catch (error) {
      console.log(error)
      const message = "Щось пішло не так";
      this.setState({loading: false, error: message})
    } 
  }

  handleLoadMore = () => {
    
  }

  render() {
    const { searchData, loading, error } = this.state;
    return (
      <AppEl
        style={{
          height: '100vh',
          // display: 'flex',
          // justifyContent: 'center',
          // alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
      >
        <SearchBar onSubmit={this.handleSearch}/>
        {error && <p>{error}</p>}
        {loading && <Loader />}
        {searchData.length > 0 && <Gallery data={searchData} isSubmitting={loading}/>}

      </AppEl>
    );
  }
};
