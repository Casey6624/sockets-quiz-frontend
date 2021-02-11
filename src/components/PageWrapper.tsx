import React from "react";
import styled from "styled-components";
import { COLOURS } from "../common/styles";
const MainBody = styled.div<{ pageSplit?: string; bgImage?: string }>`
  display: grid;
  grid-template-columns: ${(props) =>
    props.pageSplit ? props.pageSplit : "0.75fr 1fr"};
  height: 100%;
  width: 100%;
  background-image: url(${(props) =>
    props.bgImage ? "/assets/" + props.bgImage : "/assets/retro-tv.jpg"});
  background-position: center;
  background-size: cover;
  border-radius: 15px;
`;

const Container = styled.div`
  min-height: 100%;
  position: relative;
  display: grid;
  place-items: center;
  height: 100%;
  width: 100%;
  border: solid 15px ${COLOURS.RED};
  background: ${COLOURS.RED};
`;

const Overlay = styled.div`
  border: 15px solid ${COLOURS.CREAM};
  background: ${COLOURS.CREAM};
  border-radius: 15px;
  width: 100%;
  height: 100%;
  border-radius: 15px;
`;

const PageWrapper: React.FC<{ pageSplit?: string; bgImage?: string }> = ({
  children,
  pageSplit,
  bgImage,
}) => {
  return (
    <Container>
      <Overlay>
        <MainBody bgImage={bgImage} pageSplit={pageSplit}>
          {children}
        </MainBody>
      </Overlay>
    </Container>
  );
};

export default PageWrapper;
