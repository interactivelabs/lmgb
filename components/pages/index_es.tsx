import { useCallback, useContext } from 'react';
import { Lang, SiteContext } from '../../lib/SiteContext';
import LinkText from '../LinkText';
import TextButton from '../TextButton';

const IndexEs = () => {
  const { setLang } = useContext(SiteContext);
  const setEn = useCallback(() => setLang(Lang.EN), []);
  const setEs = useCallback(() => setLang(Lang.ES), []);
  return (
    <main className="flex flex-col items-center justify-center w-full flex-1 px-4 text-center">
      <div className="md:w-1/2 lg:w-1/3">
        <p className="mt-3 text-2xl">
          Hola, soy <b>Luis</b>
        </p>
        <p className="mt-3 text-2xl">
          Actualmente soy un Ingeniero de Software colaborando en{' '}
          <LinkText
            href="https://www.linkedin.com/in/luismgonzalezb/"
            target="_blank"
            underline
          >
            Airbnb
          </LinkText>
          , Lo que más disfruto es pasar el tiempo con mis hijas y esposa, video
          juegos y{' '}
          <LinkText href="/office" underline>
            ayudar
          </LinkText>{' '}
          a todos que quieran entrar y crecer en la industria de Software tanto
          en{' '}
          <TextButton onClick={setEn} underline>
            inglés
          </TextButton>{' '}
          como{' '}
          <TextButton onClick={setEs} underline>
            español
          </TextButton>
        </p>
      </div>
    </main>
  );
};

export default IndexEs;
