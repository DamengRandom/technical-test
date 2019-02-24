import React from 'react';
import styled from 'styled-components';

const BrandCard = styled.div`
  text-align: center;
  @media only screen and (max-width: 900px) {
    min-height: 100%;
    margin-bottom 28px;
  }
`;

const BrandCardInner = styled.div`
  background-color: #fff;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  grid-gap: 1rem;
  grid-auto-flow: dense;
  min-height: 320px;
  margin-bottom 28px;
  padding: 16px;
  @media only screen and (max-width: 900px) {
    height: 100%;
    margin-bottom 0;
  }
`;

const BrandTextBox = styled.div`
  height: 120px;
  p {
    display: flex;
    height: 100%;
    align-items: center;
    font-size: 14px;
    padding: 0px 16px;
  }
  @media only screen and (max-width: 900px) {
    height: 100%;
  }
`;

const ReadMoreTextBox = styled.div`
  color: #1674bf;
`;

const ReadTimeTextBox = styled.div`
  font-size: 12px;
  text-transform: uppercase;
  margin-top: -12px;
  font-weight: 300;
`;

const Image = styled.img`
  width: 120px;
  display: block;
  margin: 0 auto;
  padding: 12px 0 0;
`;

export const SingleBrand = ({ brand }) => {
  const readMoreText = 'Read more '; 
  const wpm = 100; // wpm means words per minute
  // reference link: http://www.speechinminutes.com/
  const minuteReadText = 'min read';
  const handleDisplayReadTime = (words) => {
    const readTime = parseInt(words / wpm);
    return ` ${readTime} ${minuteReadText}`;
  }

  return (
    <BrandCard className="col-md-4 col-sm-6 col-xs-12">
      <BrandCardInner>
        <Image src={brand.image_url} alt={brand.company_name} />
        <BrandTextBox>
          <p>{brand.excerpt}</p>
        </BrandTextBox>
        <ReadMoreTextBox>
          <span>{readMoreText}</span>
          <i className="fas fa-long-arrow-alt-right"></i>
        </ReadMoreTextBox>
        <ReadTimeTextBox>
          <i className="far fa-clock"></i>
          <span>{handleDisplayReadTime(brand.word_count)}</span>
        </ReadTimeTextBox>
      </BrandCardInner>
    </BrandCard>
  )
}

export default SingleBrand;
