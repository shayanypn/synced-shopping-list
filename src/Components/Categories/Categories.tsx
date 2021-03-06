import React, { FC } from 'react';
import { List, ListItem, ListItemText, makeStyles } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import { useDB } from '../../Hooks/useDB';
import { Header } from '../Header/Header';
import { addCategory } from '../../Services/db';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export const CategoriesList: FC = () => {
  const classes = useStyles();
  const { categories } = useDB();

  function onSubmit(name: string) {
    addCategory({
      name,
      color: 'fff',
    });
  }

  return (
    <>
      <Header
        input={{ placeholder: 'Category Name' }}
        submit={{ icon: Add, label: 'Add' }}
        onSubmit={onSubmit}
      />
      <List className={classes.root}>
        {categories.map(({ id, name }) => (
          <ListItem dense button key={id}>
            <ListItemText id={id} primary={name} />
          </ListItem>
        ))}
      </List>
    </>
  );
};
