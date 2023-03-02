import { gql } from '@apollo/client';

export const QUERY_SPEEDRUNS = gql`
  query allSpeedruns {
    speedruns {
      _id
      category
      current_placement
      date_played
      main_category
      personal_best
      video
      game {
        _id
        image
        platform
        release_year
        title
      }
    }
  }
`;