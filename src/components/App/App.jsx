import React, { Component }  from "react";
// import axios from 'axios';

import { AppEl } from "./App.styled";
import { SearchBar } from "components/Searchbar/Searchbar";
import { Loader } from "components/Loader/Loader";
import { Gallery } from "components/ImageGallery/ImageGallery";
import { LoadMore } from "components/Button/Button";
import * as API from "../../services/Api"

// const BaseURL = 'https://pixabay.com/api/'
// const API_KEY = '28606386-da43ad70a5a9d48305ac13b2f';

export class App extends Component {
  state = {
    searchValue: '',
    searchData: [],
    loading: false,
    page: 1,
    error: null,
    showLoadMore: false,
  }

  async componentDidUpdate(_, prevState) {
    
    console.log(prevState.searchValue)
    console.log(this.state.searchValue)
    console.log(prevState.page)
    console.log(this.state.page)
    console.log(prevState.searchData.length)
    console.log(this.state.searchData.length)
    if (this.state.searchValue !== prevState.searchValue) {
      try {
        this.setState({ searchData: [], loading: true, page: 1 })
        const picture = await API.PictureDataFetch(this.state.searchValue, this.state.page)
        if (picture.totalHits !== picture.hits.length && picture.totalHits / (picture.hits.length * this.state.page) > prevState.page) {
          this.setState({showLoadMore: true})
        }
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

    if (this.state.page !== prevState.page) {
      try {
        this.setState({ loading: true })
        const picture = await API.PictureDataFetch(this.state.searchValue, this.state.page)
        if ((picture.totalHits - this.state.searchData.length) <= picture.hits.length) {
          this.setState({showLoadMore: false})
        }
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
  }

  handleSearch = async (searchValue) => {
    this.setState({ searchValue })
  }
  // try {
  //   this.setState({ loading: true, searchValue, page: 1 })
  //   const picture = await API.PictureDataFetch(searchValue, this.state.page)
  //   if (picture.totalHits / (picture.hits.length * this.state.page) > 1) {
  //     this.setState({showLoadMore: true})
  //   }
  //   console.log(picture)
  //   this.setState(state => ({
  //     searchData: [...state.searchData, ...picture.hits],
  //     loading: false,
  //   }))
  // } catch (error) {
  //   console.log(error)
  //   const message = "Щось пішло не так";
  //   this.setState({loading: false, error: message})
  // } 

  handleLoadMore = () => {
    this.setState(prevState => ({page: prevState.page + 1}))
  }

  render() {
    const { searchData, loading, error, showLoadMore } = this.state;
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
        {showLoadMore && <LoadMore onLoadMore={this.handleLoadMore}/>}
      </AppEl>
    );
  }
};
