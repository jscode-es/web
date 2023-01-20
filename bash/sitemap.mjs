#!/usr/bin/env node
import path from 'path';
import fs from 'fs/promises';

console.log('=======================');
console.log('👾 Generar sitemap');
console.log('=======================');
console.log('');

const generate = async () => {
	const publicPath = path.join(process.cwd(), 'public', 'sitemap.xml');
	const postPath = path.join(process.cwd(), 'posts');

	const baseUrl = 'https://jscode.es';
	let urls = '';

	const files = await fs.readdir(postPath);

	for await (let file of files) {
		const absolutePath = path.join(postPath, file);

		const stats = await fs.stat(absolutePath);

		urls += `
        <url>
            <loc>${baseUrl}/${file.replace('.md', '')}</loc>
            <lastmod>${stats.mtime}</lastmod>
        </url>`;
	}

	const content = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${urls}</urlset>`;

	fs.writeFile(publicPath, content, { encoding: 'utf8', flag: 'w' });
};

generate();
