import styled from "styled-components";
import PageHero from "../components/PageHero";
import FeaturedPage from "../components/FeaturedPage";

const Services = () => {
  return (
    <Wrapper>
      <PageHero page="Services" details="Services -All Services" />
      <FeaturedPage />
    </Wrapper>
  );
};
const Wrapper = styled.section``;

export default Services;
