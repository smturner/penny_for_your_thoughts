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
           <div className="userQuotes space"></div>
            <div className>
                {loading ? (
                    <div>Loading...</div>
                ): (
                    <UserQuoteList
                    username={username}
                    quotes={quotes}
                    title="``My Quotes``"
                     />

                )}
               
            </div>

          


        </div>

    )
}

export default UserQuotes;