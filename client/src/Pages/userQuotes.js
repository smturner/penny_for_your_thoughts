import React from 'react';
import { useQuery } from '@apollo/client';
import UserQuoteList from '../components/UserQuoteList';
import { QUERY_ME } from '../utils/queries'
import MainNav from '../components/navbar';

const UserQuotes = () => {
    const { loading, data } = useQuery(QUERY_ME);
    const quotes= data?.me.quotes || [];

   const username = data?.me.userName

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