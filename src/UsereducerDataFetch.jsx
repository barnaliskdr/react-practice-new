import React, { useState,useEffect, useReducer } from 'react'
import axios from 'axios'; 

// const UsereducerDataFetch = () => {
//     const [loading,setLoading] = useState(true);
//     const [error,setError] = useState('');
//     const [post,setPost] = useState({});    

//     useEffect(()=>
//     {
//         try{
//             axios.get('https://jsonplaceholder.typicode.com/posts/1')
//             .then(response =>
//             {
//                 setLoading(false);
//                 setPost(response.data);
//                 setError('');
//             }
//             )
//         }
//         catch(error)
//         {
//             setLoading(false);
//             setError(true);
//             setPost({});
//         }
//     },[])
//     console.log(post);
//   return (
//     <div>
//       <p>
//         {loading ? 'Loading' : post.title}
//         {error ? 'Error' : null}
//       </p>
//     </div>
//   )
// }

const initialState = {
    loading: true,
    error: '',
    post: {}
}

const reducer = (state,action)=>
{
    switch(action.type)
    {
        case 'FETCH_SUCCESS':
            return{
                loading: false,
                post: action.payload,
                error: ''
            };
        case 'FETCH_ERROR':
            return{
                loading: false,
                post: {},
                error: 'Something went wrong'
            };
        default:
            return state;
    }
}

const UsereducerDataFetch = () => {

    const [data,dispatch] = useReducer(reducer,initialState);
    useEffect(()=>{
       
            axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(response=> {dispatch({type:'FETCH_SUCCESS',payload: response.data})})
            .catch(dispatch({type:'FETCH_ERROR'}))

    },[])
    return (
        <div>
            <p>
                {data.loading ? 'Loading' : data.post.title}
                {data.error ? 'Error' : null}
            </p>
        </div>
    )
}

export default UsereducerDataFetch
