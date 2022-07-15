import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function Paginate({clickPage, pagesQuant, isLoading}) {
    const [quant, setQuant] = React.useState(0)
    React.useEffect(()=> {
        if (pagesQuant) {
        async function bl() {
            let q = await pagesQuant.total_pages
            setQuant(q)
        }
        
            bl()
        }
        
    },[pagesQuant])
    
    const clicked = (num) => {
        clickPage(num)
        window.scrollTo(0, 0)
        console.log(num)
    }

    return (
        <div>
    <Stack spacing={2}>
      <Pagination count={quant} color="primary" onChange={(_, num) => clicked(num)}/>
    </Stack>
        {/* <button onClick={pageNum[0] > 1 ? prevPage : null}>prev</button>
        <span className="pageNum" onClick={()=>{clickPage(pageNum[0])}}>{pageNum[0]}</span>
        <span className="pageNum" onClick={()=>{clickPage(pageNum[1])}}>{pageNum[1]}</span>
        <span className="pageNum" onClick={()=>{clickPage(pageNum[2])}}>{pageNum[2]}</span>
        <button onClick={nextPage}>next</button> */}
        </div>
    )
}