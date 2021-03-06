import { useCallback, useContext } from 'react';
import { Lang, SiteContext } from '../../lib/SiteContext';
import LinkText from '../LinkText';
import TextButton from '../TextButton';

const IndexEn = () => {
  const { setLang } = useContext(SiteContext);
  const setEn = useCallback(() => setLang(Lang.EN), []);
  const setEs = useCallback(() => setLang(Lang.ES), []);
  return (
    <main className="flex flex-col items-center justify-center w-full flex-1 px-4 text-center">
      <div className="md:w-1/2 lg:w-1/3">
        <p className="mt-3 text-2xl">
          Hi, <b>Luis</b> here
        </p>
        <p className="mt-3 text-2xl">
          I&apos;m a Software Engineer currently working at{' '}
          <LinkText
            href="https://www.linkedin.com/in/luismgonzalezb/"
            target="_blank"
            underline
          >
            Airbnb
          </LinkText>
          , I enjoy spending time with my wife and daughters and playing video
          games, as well as{' '}
          <LinkText href="/office" underline>
            helping
          </LinkText>{' '}
          others join and thrive on the software field in{' '}
          <TextButton onClick={setEn} underline>
            english
          </TextButton>{' '}
          and{' '}
          <TextButton onClick={setEs} underline>
            spanish
          </TextButton>
        </p>
      </div>
    </main>
  );
};

export default IndexEn;
