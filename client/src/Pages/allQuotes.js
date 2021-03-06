import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_QUOTES,QUERY_USERS } from '../utils/queries';
import { QUERY_ME, QUERY_SINGLE_npUSER } from '../utils/queries'
import { Card, Form, InputGroup, FormControl, Button} from 'react-bootstrap';
import MainNav from '../components/navbar';
import QuoteList from '../components/QuoteList';

const AllQuotes = () => {
    const { loading, data } = useQuery(QUERY_QUOTES);
    const quotes= data?.quotes || [];
// console.log(quotes)

    return (
        <div>
            <MainNav />
            {/* <InputGroup className="mb-3">
                <FormControl
                    placeholder="Search by User"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                />
                <Button variant="outline-secondary" id="button-addon2">
                    Get Quotes
                </Button>
            </InputGroup> */}


           
            <div className="allQuotes mb-3">
                {loading ? (
                    <div>Loading...</div>
                ): (
                    <QuoteList
                    quotes={quotes}
                    title="``All Quotes``"
                     />

                )}
            </div>
        </div>
    )
}

export default AllQuotes;