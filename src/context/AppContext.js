import { createContext, useEffect, useState } from "react";
import {baseUrl} from '../baseUrl';
export const AppContext=createContext();

function AppContextProvider({children}){
    const[loading,setLoading]=useState(false);
    const[page,setPage]=useState(1);
    // const[data,setData]=useState(null);
    const[totalPages,setTotalPages]=useState(null);
    // const[pageSize,setPageSize]=useState(null);
    const[posts,setPosts]=useState([]);

    



    async function fetchApi(page=1) {
        setLoading(true);
        const url=`${baseUrl}?page=${page}`;
        try{
            // console.log(url)
            const result = await fetch(url);
            const fetchData =await result.json();
            setPage(fetchData.page);
            setTotalPages(fetchData.totalPages);
            setPosts(fetchData.posts)
            
        }
        catch(e){
            setPage(1);
            setPosts([]);
            setTotalPages(null);
            console.log(e)
            
        }
        setLoading(false);
    }
    // console.log(page);
    // console.log(pageSize);
    // console.log(posts);

   
   useEffect(()=>{
        fetchApi(page);
   },[page])

    function handlePage(page){
        setPage(page);
        
        // fetchApi(page)
    }
    
    const value={
        page,
        setPage,
        posts,
        setPosts,
        loading,
        setLoading,
        totalPages,
        setTotalPages,
        fetchApi,
        handlePage
    }

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;

}



export default AppContextProvider;

