import React from 'react'
import Layout from '../components/layout';
import styled from 'styled-components';

const FeaturedImage = styled.img`
  max-width: 300px;
  margin: 16px 0;
`

export default ({pageContext}) => (
  <Layout>
  {console.log(pageContext)}
    <h1>
      {pageContext.title}
    </h1>
    <strong>
      Website url:
    </strong>
    <a href={pageContext.acf.portfolio_url} target="_blank">
      {pageContext.acf.portfolio_url}
    </a>
    <FeaturedImage src={pageContext.featured_media.source_url} />
    <div dangerouslySetInnerHTML={{__html: pageContext.content}} />
    {pageContext.acf.flexible_content_portfolio.map((section, index) => (
      <div id={index}>{section.content}</div>))}
  </Layout>
);