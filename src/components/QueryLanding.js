import React, { useState } from 'react'
import { useQuery } from 'react-query'

//components
import { getCoin } from '../services/api'
import Coin from './Coin'
import Loader from './Loader'

const QueryLanding = () => {
    const [pageNumber,setPageNumber]=useState(1)
    const {isLoading,isError,error,data,isFetching}=useQuery(
        ['coins',pageNumber],()=>getCoin(pageNumber),
        {keepPreviousData:true}
    )

    if(isLoading){
        return <Loader />
    }
    if(isError){
        return <p>Error! {error.message}</p>
    }
  return (
    <>
    <div>
        {
            data.map(coin=> <Coin key={coin.id} coin={coin} />)
        }
    </div>
    <button onClick={()=>setPageNumber(page=>page+1)}>next query</button>
    <button onClick={()=>setPageNumber(page=>page-1)} disabled={pageNumber===1}>previous query</button>
    </>
  )
}

export default QueryLanding