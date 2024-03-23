import React from "react";
import { useProductContext } from "../context/productcontex";
import styled from "styled-components";
import { motion } from "framer-motion";
import Product from "./Product";

const FeatureProduct = () => {
  const { isLoading, featureProducts } = useProductContext();

  if (isLoading) {
    return <LoadingWrapper>Loading...</LoadingWrapper>;
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const productVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (

    
    <Wrapper className="section">
      <div className="container">
     

        <IntroData>Check Now!</IntroData>
        <CommonHeading>Our Feature Services</CommonHeading>
        <motion.div
          className="grid grid-three-column"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {featureProducts.map((curElem, index) => (
            <motion.div
              key={curElem.id}
              className="product"
              variants={productVariants}
            >
              <ProductCard>
                <ProductImage src={curElem.image} alt={curElem.title} />
                <ProductDetails>
                  <ProductName>{curElem.title}</ProductName>
                  <ProductPrice>${curElem.price}</ProductPrice>
                </ProductDetails>
              </ProductCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Wrapper>
  );
};

const LoadingWrapper = styled.div`
  text-align: center;
  padding: 20px;
  font-size: 1.5rem;
`;

const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};

  .container {
    max-width: 120rem;
  }
`;

const IntroData = styled.div`
  text-align: center;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
`;

const CommonHeading = styled.div`
  text-align: center;
  font-size: 2.5rem;
  margin-top: 2rem;
  margin-bottom: 4rem;
  color: ${({ theme }) => theme.colors.title};
`;

const ProductCard = styled.div`
  background-color: #fff;
  border-radius: 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  }
`;

const ProductImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 1rem 1rem 0 0;
`;

const ProductDetails = styled.div`
  padding: 1.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProductName = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const ProductPrice = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.25rem;
`;

export default FeatureProduct;


