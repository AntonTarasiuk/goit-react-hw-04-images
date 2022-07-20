import { useState, useEffect }  from "react";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
// import axios from 'axios';

import { AppEl } from "./App.styled";
import { SearchBar } from "components/Searchbar/Searchbar";
import { Loader } from "components/Loader/Loader";
// import { ErrorMessage } from "components/Error/Error";
import { Gallery } from "components/ImageGallery/ImageGallery";
import { LoadMore } from "components/Button/Button";
import * as API from "../../services/Api";

export const App = () => {
  const [searchValue, setSearchValue] = useState('');
  const [searchData, setSearchData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [perPage] = useState(12);
  const [error, setError] = useState(null);
  const [showLoadMore, setShowLoadMore] = useState(false);

  useEffect(() => {
    if (searchValue.trim() === '') {
      return
    }
    setLoading(true);
    setShowLoadMore(false);
    API.PictureDataFetch(searchValue, page)
      .then(picture => {
          if ((picture.totalHits - perPage * (page - 1)) > perPage) {
            setShowLoadMore(true);
          } else {
            setShowLoadMore(false);
          }
          setLoading(false);
          if (page === 1) {
            setSearchData([...picture.hits]);
          } else {
            setSearchData(prevData => [...prevData, ...picture.hits]);
          }
      })
      .catch(error => {
        setError(error);
        setLoading(false);       
          toast.error("Щось пішло не так !", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 3000,
            theme: "dark",
          });
      })
  }, [searchValue, page, perPage])

  const handleSearch = async (query) => {
    setSearchData([]);
    setSearchValue(query);
    setPage(1);
  }

  const handleLoadMore = () => {
    setPage(p => p + 1)
  }

  return (
    <AppEl>

      <SearchBar onSubmit={handleSearch}/>
      {error && <ToastContainer />}
      {searchData.length > 0 && <Gallery data={searchData} isSubmitting={loading}/>}
      {loading && <Loader />}
      {showLoadMore && <LoadMore onLoadMore={handleLoadMore}/>}
    </AppEl>
  );
};