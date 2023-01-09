#!/usr/bin/env node
const algoliasearch = require('algoliasearch');
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const client = algoliasearch('0HH2NP5QGO', 'ad55dbb19a4fac0eeb2369631803caf5');
const index = client.initIndex('jscode');

function addIndexToAlgolia() {
	// export data
	const files = fs.readdirSync(path.join('posts'));

	const records = files.map((item) => {
		const markdownWithMeta = fs.readFileSync(
			path.join('posts', item),
			'utf-8'
		);

		let { data } = matter(markdownWithMeta);

		data.title = data.title.replace('<br>', ' ');
		data.href = item.replace('.md', '');

		return data;
	});

	index.saveObjects(records);
}

addIndexToAlgolia();
