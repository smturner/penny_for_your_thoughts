import React from 'react';
import { useQuery } from '@apollo/client';
import QuoteList from '../components/QuoteList';
import { QUERY_QUOTES } from '../utils/queries';
import { Card, Form, Button} from 'react-bootstrap';
import MainNav from '../components/navbar/navbar';

const UserQuotes = () => {
    const { loading, data } = useQuery(QUERY_QUOTES);
    const quotes= data?.quotes || [];

    return (
        <div>
            <MainNav />
           
            <div className="col-12 col-md-8 mb-3">
                <QuoteList
                 />
            </div>

          


        </div>

    )
}

export default UserQuotes;