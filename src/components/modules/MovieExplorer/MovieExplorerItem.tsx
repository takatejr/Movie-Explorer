import { memo } from "react";
import styled from "styled-components";

type MovieExplorerItemProps = {
  readonly title: string;
  readonly img: string;
  readonly year: string;
};

const StyledMovie = styled.div`
  background-color: rgba(200, 200, 100, 0.5);
  border: 1px solid #a1b1c1;
  margin: 3% 1%;
  order: 1;
`;

const StyledInfo = styled.div`
  margin: 1%;
`;

const StyledTitle = styled.p`
  font-size: 16px;
  border-bottom: 1px solid #114111;
  margin: 1%;
`;

const StyledYear = styled.p`
  margin: 1%;
  font-size: 12px;
`;

export const MovieExplorerItem = memo<MovieExplorerItemProps>(
  ({ title, img, year }) => {
    return (
      <StyledMovie key={title}>
        <img src={img} alt={title} />
        <StyledInfo>
          <StyledTitle>{title}</StyledTitle>
          <StyledYear>({year})</StyledYear>
        </StyledInfo>
      </StyledMovie>
    );
  },
);

MovieExplorerItem.displayName = "MovieExplorerList";
