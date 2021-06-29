import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import i18n from 'i18next';
import { getFilteredMoviesRequested, filteredMovies } from '../store';
import { getMoviesUrl } from '../../../API';
import { FilteredMoviesListProps } from '../';

export const FilteredMoviesList: React.FC<FilteredMoviesListProps> = ({ genre, startDate, endDate }) => {
  const dispatch = useDispatch();
  const movies = useSelector(filteredMovies);
  const language = i18n.language;
  const path = getMoviesUrl(language, genre, startDate, endDate);

  useEffect(() => {
    dispatch(getFilteredMoviesRequested(path));
  }, [genre, dispatch, path]);

  return (
    <List>
      {movies.map(({ title, id }: any) => (
        <ListItem key={id}>{title}</ListItem>
      ))}
    </List>
  );
};