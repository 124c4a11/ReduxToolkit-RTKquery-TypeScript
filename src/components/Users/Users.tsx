import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks/redux.hooks';
import { fetchUsers } from '../../store/actions/user.actions';


export function Users(): JSX.Element {
  const dispatch = useAppDispatch();
  const { users, isLoading, error } = useAppSelector((state) => state.userReducer);

  useEffect(() => {
    dispatch(fetchUsers());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {isLoading && <h2>Loading...</h2>}
      {error && <h2>{`Error: ${error}`}</h2>}
      {!isLoading && !error && JSON.stringify(users)}
    </>
  );
}
