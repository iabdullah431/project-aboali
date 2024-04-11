import Head from 'next/head';

function PagesMetaHead({ title, keywords, description }) {
	return (
		<Head>
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1"
			/>
			<meta name="keywords" content={keywords} />
			<meta name="description" content={description} />
			<meta charSet="utf-8" />
			<link rel="icon" href="../images/logo-dark.png" />
			<title>{title}</title>
		</Head>
	);
}

PagesMetaHead.defaultProps = {
	title: 'RAYID ALANAZI',
	keywords: 'RAYID ALANAZI',
	keywords: 'RAYID ALANAZI',
};

export default PagesMetaHead;
