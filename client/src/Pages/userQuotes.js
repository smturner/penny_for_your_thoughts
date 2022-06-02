import React from 'react';
import { useQuery } from '@apollo/client';
// import UserQuoteList from '../components/QuoteList';
import { QUERY_QUOTES } from '../utils/queries';
import { QUERY_ME, QUERY_SINGLE_USER } from '../utils/queries'
import { Card, Form, Button} from 'react-bootstrap';
import MainNav from '../components/navbar/navbar';

const UserQuotes = () => {
    const { loading, data } = useQuery(QUERY_SINGLE_USER);
    const quotes= data?.user || [];
    
    console.log(quotes)

    return (
        <div>
            <MainNav />
           
            {/* <div className="col-12 col-md-8 mb-3">
                {loading ? (
                    <div>Loading...</div>
                ): (
                    // <UserQuoteList
                    // quotes={quotes}
                    // title="Your Quotes"
                    //  />

                )}
               
            </div> */}

          


        </div>

    )
}

export default UserQuotes;