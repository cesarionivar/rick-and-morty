import { IRickAndMortyResult } from '../interfaces/rickandmorty';

type Props = Pick<
  IRickAndMortyResult,
  'name' | 'status' | 'species' | 'location' | 'image' | 'gender'
>;

export const Character = ({
  name,
  status,
  species,
  location,
  image,
  gender,
}: Props) => {
  return (
    <div className='character'>
      <img src={image} alt={name} className='character__img' />
      <div className='character__info'>
        <h2 className='character__name'>{name}</h2>
        <p className='character__status'>
          <span className={`character__status--${status.toLowerCase()}`}></span>{' '}
          {`${status} - ${species}`}
        </p>
        <div className='character__episode'>
          <p className='character__title'>Gender:</p>
          <p className='character__description'>{gender}</p>
        </div>

        <div className='character__location'>
          <p className='character__title'>Last known location:</p>
          <p className='character__description'>{location.name}</p>
        </div>
      </div>
    </div>
  );
};
