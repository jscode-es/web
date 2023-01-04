import style from './style.module.css';
import algoliasearch from 'algoliasearch/lite';
import { useState } from 'react';
import Link from 'next/link';
import { TbListSearch } from 'react-icons/tb';

const APPLICATION_ID = '0HH2NP5QGO';
const SEARCH_API_KEY = '021e29f6312ca4582d6b9930a091551a';
const ALGOLIA_INDEX = 'jscode';

const client = algoliasearch(APPLICATION_ID, SEARCH_API_KEY);
const index = client.initIndex(ALGOLIA_INDEX);

export function Search() {
	const [results, setResults]: any = useState([]);

	const performSearch = async (value: any) => {
		const { hits } = await index.search(value, {
			hitsPerPage: 5,
		});

		const results = hits.map((hit: any) => {
			console.log(hit);
			const { objectID: key, href, subtitle, _highlightResult } = hit;
			const {
				title: { value: title },
			} = _highlightResult;
			return { key, href, title, subtitle };
		});

		console.log({ results });

		setResults(results);
	};

	const handleChange = (e: any) => {
		const { value } = e.target;

		value === '' ? setResults([]) : performSearch(value);
	};

	return (
		<div className={style.container}>
			<div className={style.searchBox}>
				<TbListSearch className={style.icon} />
				<input
					placeholder='Busca aquí lo que quieras...'
					onChange={handleChange}
					type='search'
				/>
			</div>
			<div
				className={`${style.result} ${
					results.length ? style.show : ''
				}`}>
				{results.map((item: any) => {
					return (
						<Link
							href={`/${item.href}`}
							key={item.objectID}
							className={style.link}>
							<h4
								dangerouslySetInnerHTML={{ __html: item.title }}
							/>
							<span
								dangerouslySetInnerHTML={{
									__html: item.subtitle,
								}}
							/>
						</Link>
					);
				})}
			</div>
		</div>
	);
}
