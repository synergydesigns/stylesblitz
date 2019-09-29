import React, { useEffect } from 'react';
import NextHead from 'next/head';
import GlobalStyle from './HeadStyle';

import 'react-id-swiper/lib/styles/css/swiper.css';

const defaultDescription = '';
const defaultOGURL = '';
const defaultOGImage = '';

interface Props {
  title: string,
  description?: string,
  url?: string,
  ogImage?: string
}

const Head: React.FC<Props> = (props: any) => {
  useEffect(() => {
    if ('addEventListener' in document) {
      document.addEventListener('DOMContentLoaded', () => {
        (window as any).FastClick.attach(document.body);
      }, false);
    }
    if (!(window as any).Promise) {
      document.writeln('<script src="https://as.alipayobjects.com/g/component/es6-promise/3.2.2/es6-promise.min.js"></script>');
    }
  });

  return (
    <>
      <NextHead>
        <meta charSet="UTF-8" />
        <title>{props.title || ''}</title>
        <meta
          name="description"
          content={props.description || defaultDescription}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no" />
        <link rel="icon" sizes="192x192" href="/static/touch-icon.png" />
        <link rel="apple-touch-icon" href="/static/touch-icon.png" />
        <link rel="mask-icon" href="/static/favicon-mask.svg" color="#49B882" />
        <link rel="icon" href="/static/favicon.ico" />
        <link rel="stylesheet" href="/static/css/reset.css" />
        <link href="https://fonts.googleapis.com/css?family=Lato:300,400|Source+Sans+Pro:200,300,400" rel="stylesheet" />
        <script src="https://as.alipayobjects.com/g/component/fastclick/1.0.6/fastclick.js" />
        <meta property="og:url" content={props.url || defaultOGURL} />
        <meta property="og:title" content={props.title || ''} />
        <meta
          property="og:description"
          content={props.description || defaultDescription}
        />
        <meta name="twitter:site" content={props.url || defaultOGURL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={props.ogImage || defaultOGImage} />
        <meta property="og:image" content={props.ogImage || defaultOGImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </NextHead>
      <GlobalStyle />
    </>
  );
};


export default Head;
