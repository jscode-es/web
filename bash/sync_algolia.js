#!/usr/bin/env node
const algoliasearch = require('algoliasearch');
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const client = algoliasearch('0HH2NP5QGO', 'ad55dbb19a4fac0eeb2369631803caf5');
const index = client.initIndex('jscode');

function addIndexToAlgolia() {
	// export data
	const files = fs.readdirSync(path.join('data/posts'));

	const records = files.map((item) => {
		const markdownWithMeta = fs.readFileSync(
			path.join('data/posts', item),
			'utf-8'
		);

		let { data } = matter(markdownWithMeta);

		data.title = data.title
			.replace(/<br>/g, ' ')
			.replace(/\s+/g, ' ')
			.trim();
		data.href = item.replace('.md', '');

		return data;
	});

	index.saveObjects(records);
}

function addIndexToAlgoliaProject() {
	// export data
	const files = fs.readdirSync(path.join('data/projects'));

	const records = files.map((item) => {
		const markdownWithMeta = fs.readFileSync(
			path.join('data/projects', item),
			'utf-8'
		);

		let { data } = matter(markdownWithMeta);

		data.title = data.title
			.replace(/<br>/g, ' ')
			.replace(/\s+/g, ' ')
			.trim();
		data.href = item.replace('.md', '');

		return data;
	});

	index.saveObjects(records);
}

addIndexToAlgolia();
addIndexToAlgoliaProject();