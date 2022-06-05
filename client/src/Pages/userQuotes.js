import React from 'react';
import { useQuery } from '@apollo/client';
import UserQuoteList from '../components/UserQuoteList';
import { QUERY_QUOTES } from '../utils/queries';
import { QUERY_ME, QUERY_SINGLE_USER } from '../utils/queries'
import { Card, Form, Button} from 'react-bootstrap';
import MainNav from '../components/navbar/navbar';

const UserQuotes = () => {
    const { loading, data } = useQuery(QUERY_ME);
    const quotes= data?.me.quotes || [];
console.log(data)
   const username = data?.me.userName
   console.log(username)

   
    
    // console.log(quotes)

    return (

        
        <div>
            <MainNav />
           <div className="space"></div>
            <div className="col-md-10 mb-3">
                {loading ? (
                    <div>Loading...</div>
                ): (
                    <UserQuoteList
                    username={username}
                    quotes={quotes}
                    title="``Your Quotes``"
                     />

                )}
               
            </div>

          


        </div>

    )
}

export default UserQuotes;