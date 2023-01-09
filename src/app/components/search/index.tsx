import style from './style.module.css';
import Image from 'next/image';
import algoliasearch from 'algoliasearch/lite';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { TbListSearch } from 'react-icons/tb';

const APPLICATION_ID = '0HH2NP5QGO';
const SEARCH_API_KEY = '021e29f6312ca4582d6b9930a091551a';
const ALGOLIA_INDEX = 'jscode';

const client = algoliasearch(APPLICATION_ID, SEARCH_API_KEY);
const index = client.initIndex(ALGOLIA_INDEX);

export function Search() {
	const ref = useRef<any>(null);

	const [results, setResults]: any = useState([]);
	const [search, setSearch]: any = useState('');
	const [showStyleResult, setShowStyleResult] = useState('');

	const performSearch = async (value: any) => {
		const { hits } = await index.search(value, {
			hitsPerPage: 5,
		});

		const results = hits.map((hit: any) => {
			const {
				objectID: key,
				href,
				subtitle,
				_highlightResult,
				icon,
			} = hit;
			const {
				title: { value: title },
			} = _highlightResult;
			return { key, href, title, subtitle, icon };
		});

		setResults(results);
		setShowStyleResult(hits.length ? style.show : '');
	};

	const handleChange = (e: any) => {
		const { value } = e.target;

		setSearch(value);

		value === '' ? setResults([]) : performSearch(value);
	};

	const onClick = () => {
		setResults([]);
		setSearch('');
	};

	useEffect(() => {
		/**
		 * Alert if clicked on outside of element
		 */
		function handleClickOutside(event: Event) {
			if (ref.current && !ref.current.contains(event.target)) {
				setShowStyleResult('');
			}
		}
		// Bind the event listener
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			// Unbind the event listener on clean up
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [ref]);

	return (
		<div className={style.container}>
			<div className={style.searchBox}>
				<TbListSearch className={style.icon} />
				<input
					placeholder='Busca aquí lo que quieras...'
					onChange={handleChange}
					type='search'
					value={search}
				/>
			</div>
			<div
				ref={ref}
				className={`${style.result} ${showStyleResult}`}>
				{results.map((item: any) => {
					return (
						<Link
							href={`/${item.href}`}
							key={item.objectID}
							legacyBehavior>
							<a
								href={`/${item.href}`}
								onClick={onClick}
								className={style.link}>
								<div>
									<Image
										src={`/assets/icons/${item.icon}.png`}
										alt={item.href}
										width={50}
										height={50}
									/>
								</div>
								<div>
									<h4
										dangerouslySetInnerHTML={{
											__html: item.title,
										}}
									/>
									<span
										dangerouslySetInnerHTML={{
											__html: item.subtitle,
										}}
									/>
								</div>
							</a>
						</Link>
					);
				})}
			</div>
		</div>
	);
}
