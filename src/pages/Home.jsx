import React from 'react';
import '../App.css';
import Cards from '../Cards';
import Pagination from '../Pagination';
import Search from '../Search';
import Spinner from '../Spinner'
import Limit from '../Limit';
import { DataContext } from '../App';

function Home() { 
  const [isLoading, setIsLoading] = React.useState(false)
  const [page, setPage] = React.useState(1)
  const [limit, setLimit] = React.useState(12)
  const [data, setData] = React.useState([])
  const [search, setSearch] = React.useState('')
  const defUrl = `https://api.artic.edu/api/v1/artworks?page=${page}&limit=${limit}`
  const searchUrl = `https://api.artic.edu/api/v1/artworks/search?q=${search}&page=${page}&limit=${limit}&fields=id,image_id,title,date_display,artist_title`
  let url
  let typeOfUrl
  if (search === '') {
    url = defUrl
    typeOfUrl = 'default'
  }
  else {
    url = searchUrl
    typeOfUrl = 'search'
  }
  
  const clickPage = (page) => {
    setPage(page)
  }

  const clickLimit = (limit) => {
    setLimit(limit)
  }
  
  React.useEffect(()=>{
      async function getInfo(url) {
        const res = await fetch(url);
        const data = await res.json();
        setData(data)
        setIsLoading(true)
        console.log('Loading...', isLoading)
    }
    getInfo(url)
}, [url])

return(
  <div className="app" style={{margin: '3%'}}>
    <p>{search}</p>
    <Search setSearch={setSearch}/>
    <Limit clickLimit={clickLimit} clickPage={clickPage}></Limit>
    {isLoading ? (<><Cards typeOfUrl={typeOfUrl} results={data ? data : null}></Cards>
    <Pagination isLoading={setIsLoading} pagesQuant={data.pagination} clickPage={clickPage}></Pagination></>) : <Spinner/>}
  </div>
)
}

export default Home;