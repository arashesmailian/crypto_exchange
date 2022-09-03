import React, { useEffect, useState } from 'react'
import { useQuery, useQueryClient } from 'react-query'
import {usePaginatedQuery} from 'react-query'
//components
import { getCoin } from '../services/api'
import Coin from './Coin'
import Loader from './Loader'

const QueryLanding = () => {
    const [pageNumber,setPageNumber]=useState(1)
    const {isLoading,isError,error,data,isFetching,isPreviousData}=useQuery(
        ['coins',pageNumber],()=>getCoin(pageNumber),
        {keepPreviousData:true}
    )

// useEffect(()=>{
//     if(data?.hasMore){
//         await queryClient.prefetchQuery(['coins',pageNumber + 1],
//         ()=>{getCoin(pageNumber+1)
//         console.log("fetch")},
//         )
//     }
// },[data,pageNumber,queryClient])

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
    <button onClick={()=>setPageNumber(page=>page+1)}
    >next query</button>
    {pageNumber}
    <button onClick={()=>setPageNumber(page=>page-1)}
     disabled={pageNumber===1}
     >previous query</button>
    </>
  )
}

export default QueryLanding