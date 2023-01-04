import style from './style.module.css';
import algoliasearch from 'algoliasearch/lite';

import {
	InstantSearch,
	Hits,
	SearchBox,
	Pagination,
	Highlight,
	ClearRefinements,
	RefinementList,
	Configure,
	connectHighlight,
	Stats,
} from 'react-instantsearch-dom';
import Link from 'next/link';

const algoliaClient = algoliasearch(
	'0HH2NP5QGO',
	'021e29f6312ca4582d6b9930a091551a'
);

export function Search() {
	function Hit({ hit }: any) {
		return (
			<Link
				href={`/${hit.href}`}
				className={style.items}>
				<h4>{hit.title}</h4>
				<span>{hit.subtitle}</span>
			</Link>
		);
	}

	return (
		<div className={style.container}>
			<InstantSearch
				indexName='jscode'
				searchClient={algoliaClient}>
				<SearchBox
					translations={{
						placeholder: 'Buscar artículos, tutoriales o recursos',
					}}
				/>
				<Hits hitComponent={Hit} />
			</InstantSearch>
		</div>
	);
}
