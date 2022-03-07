import React, { useState, useEffect } from 'react';
import PokiminList from './PokiminList';
import Pagination from './Pagination';
import axios from 'axios'


function App() {
    const [pokimin, setPokimin] = useState([])
    const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon")
    const [nextPageUrl, setnextPageUrl] = useState()
    const [prevPageUrl, setprevPageUrl] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      setLoading(true)
      let cancel
      axios.get(currentPageUrl, {
        cancelToken: new axios.CancelToken(c => cancel = c)
      }).then(res => {
        setLoading(false)
        setnextPageUrl(res.data.next)
        setprevPageUrl(res.data.previous)
        setPokimin(res.data.results.map(p => p.name))
      })

      return () => cancel()
    }, [currentPageUrl])

    function gotoNextPage() {
      setCurrentPageUrl(nextPageUrl)
    }

    function gotoPrevPage() {
      setCurrentPageUrl(prevPageUrl)
    }

    if (loading) return "Loading..."

  return (
    <>
      <PokiminList pokimin={pokimin} />
      <Pagination
        gotoNextPage={nextPageUrl ? gotoNextPage : null}
        gotoPrevPage={prevPageUrl ? gotoPrevPage : null}
    />
    </>
  );
}

export default App;
