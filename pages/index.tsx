import Head from 'next/head';
import { Character } from '../components/Character';
import type { IRickAndMortyApiResponse } from '../interfaces/rickandmorty';

interface Props {
  characters: IRickAndMortyApiResponse;
}

export default function Home({ characters }: Props) {
  return (
    <div>
      <Head>
        <title>Rick And Morty Characters</title>
        <meta name='description' content='Rick and morty characters app' />
        <link
          rel='icon'
          href='https://rickandmortyapi.com/icons/icon-144x144.png?v=1538abef51e33ef514e8fe1ab9aeab4e'
        />
      </Head>

      <div className='header'>
        <h1>The Rick And Morty Characters</h1>
      </div>

      <div className='characters'>
        {characters.results?.map((character) => (
          <Character key={character.id} {...character} />
        ))}
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const data: IRickAndMortyApiResponse = await fetch(
    'https://rickandmortyapi.com/api/character'
  ).then((res) => res.json());

  const { info, results } = data;

  const characters = {
    info,
    results,
  };

  return {
    props: {
      characters,
    },
  };
};
