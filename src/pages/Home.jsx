import React from 'react';
import '../App.css';
import Cards from '../Cards';
import Pagination from '../Pagination';
import Search from '../Search';
import Spinner from '../Spinner'
import Limit from '../Limit';

function Home() {
  const [page, setPage] = React.useState(1)
  const [limit, setLimit] = React.useState(12)
  const [data, setData] = React.useState(false)
  const [search, setSearch] = React.useState('')
  const defUrl = `https://api.artic.edu/api/v1/artworks?page=${page}&limit=${limit}`
  const searchUrl = `https://api.artic.edu/api/v1/artworks/search?q=${search}&page=${page}&limit=${limit}&fields=id,image_id,title`
  let url
  let typeOfUrl
  if (search === '') {
    url = defUrl
    typeOfUrl = 'default'
    console.log(typeOfUrl)
  }
  else {
    url = searchUrl
    typeOfUrl = 'search'
    console.log(typeOfUrl)
  }
  
  const clickPage = (page) => {
    setPage(page)
  }

  const clickLimit = (limit) => {
    setLimit(limit)
  }

  React.useEffect(()=>{(async function getInfo() {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data)
    setData(data)
  })()
}, [url])

return(

  <div className="app" style={{margin: '3%'}}>
    <p>{search}</p>
    <Search setSearch={setSearch}/>
    <Pagination pagesQuant={data.pagination} clickPage={clickPage}></Pagination>
    <Limit clickLimit={clickLimit} clickPage={clickPage}></Limit>
  <Cards typeOfUrl={typeOfUrl} results={data ? data : false}></Cards>
  </div>
)
}

export default Home;