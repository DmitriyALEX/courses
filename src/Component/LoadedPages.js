import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';
import { PagesItem } from '../Pages/PagesItem';

const src = "https://run.mocky.io/v3/5723d351-e450-4462-8274-ccc82562de19"

export const LoadedPages = () => {
	const params = useParams();
	const [articles, setArticles] = React.useState([]);
    React.useEffect(() => {
        axios
		.get(src)
        .then(data => {
            setArticles(data.data.courses)
        })
    }, []);
	const currentItem = articles.filter(item => String(item.id) === String(params.id));
	console.log(currentItem);

	if(currentItem.length > 0) {		
		return (
			<PagesItem currentItem={currentItem[0]} />
		);
	}
}