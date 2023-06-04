import styled from "styled-components";
import PageHero from "../components/PageHero";

const Blog = () => {
  return (
    <>
      <PageHero page="Our Recent" details="Blog" />
      <Wrapper></Wrapper>
    </>
  );
};
const Wrapper = styled.section``;

export default Blog;
