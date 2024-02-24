import { useState } from 'react';
import { Helmet } from 'react-helmet';

import ComicsList from '../comicsList/ComicsList';
import AppBanner from '../appBanner/AppBanner';

const ComicsPage = () => {
    const [selectedComics, setComics] = useState(null);

    const onComicsSelected = (id) => {
        setComics(id)
    }
    
    return (
        <>
        <Helmet>
            <meta
                name="description"
                content="Page with list of our comics"
                />
            <title>Comics pages</title>
        </Helmet>
            <AppBanner/>
            <ComicsList onComicsSelected={onComicsSelected}/>
        </>
    );
};

export default ComicsPage;