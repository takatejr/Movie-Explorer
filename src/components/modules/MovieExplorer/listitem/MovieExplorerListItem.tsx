import React, { memo } from "react";
import { StyledMovie, StyledInfo, StyledTitle, StyledYear } from "./MovieExplorerListItem.styles";

type MovieExplorerListItemProps = {
  readonly title: string;
  readonly img: string;
  readonly year: string;
};


export const MovieExplorerItem = memo<MovieExplorerListItemProps>(
  ({ title, img, year}) => {
    return (
      <StyledMovie>
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
