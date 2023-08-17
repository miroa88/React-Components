import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAbilities } from './actions';

const PokemonAbilities = ({ pokemonId }) => {
  const dispatch = useDispatch();
  const abilities = useSelector((state) => state.abilities.abilities);
  const error = useSelector((state) => state.abilities.error);

  useEffect(() => {
    dispatch(fetchAbilities(pokemonId));
  }, [dispatch, pokemonId]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h2>Pokemon Abilities</h2>
      <ul>
        {abilities.map((ability, index) => (
          <li key={index}>{ability.ability.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonAbilities;