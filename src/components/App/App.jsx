import React, { Component }  from "react";
// import axios from 'axios';

import { AppEl } from "./App.styled";
import { SearchBar } from "components/Searchbar/Searchbar";
import { Loader } from "components/Loader/Loader";
import { ErrorMessage } from "components/Error/Error";
import { Gallery } from "components/ImageGallery/ImageGallery";
import { LoadMore } from "components/Button/Button";
import * as API from "../../services/Api"

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
    if (this.state.searchValue === prevState.searchValue && this.state.page !== prevState.page) {
      this.setState({ loading: true })
      await this.fetchPicture()
    }
    if (this.state.searchValue !== prevState.searchValue) {
      this.setState({ searchData: [], loading: true });
      await this.fetchPicture()
    }    
  }

  fetchPicture = async () => {
    try {
      const picture = await API.PictureDataFetch(this.state.searchValue, this.state.page)
      if ((picture.totalHits - this.state.searchData.length) > picture.hits.length) {
        this.setState({showLoadMore: true})
      } else {
        this.setState({showLoadMore: false})
      }
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

  handleSearch = async (searchValue) => {
    this.setState({ searchValue, page: 1 })
  }

  handleLoadMore = () => {
    this.setState(prevState => ({page: prevState.page + 1}))
  }

  render() {
    const { searchData, loading, error, showLoadMore } = this.state;
    return (
      <AppEl>

        <SearchBar onSubmit={this.handleSearch}/>
        {error && <ErrorMessage error={error} />}
        {searchData.length > 0 && <Gallery data={searchData} isSubmitting={loading}/>}
        {loading && <Loader />}
        {showLoadMore && <LoadMore onLoadMore={this.handleLoadMore}/>}
      </AppEl>
    );
  }
};
