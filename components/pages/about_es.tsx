import Image from 'next/image';
import LinkText from '../LinkText';
import PageLangLayout from './PageLangLayout';
import desk from '../../public/img/desk.jpeg';
import fall from '../../public/img/fall.jpeg';

const AboutEs = () => (
  <PageLangLayout>
    <div className="md:w-1/2 lg:w-1/2">
      <h1 className="mt-3 text-2xl">Acerca de mí</h1>
      <p className="mt-4">
        Originario de Zacatecas, México, estudié la carrera de Ingeniería de
        Software en el{' '}
        <LinkText href="https://zacatecas.tecnm.mx" target="_blank" underline>
          Instituto Tecnológico de Zacatecas
        </LinkText>{' '}
        y he trabajado en el área de Software por más de 10 años.
      </p>
      <p className="mt-4">
        Mi meta siempre fue poder trabajar dentro de las empresas líderes en el
        ramo, y he tenido la fortuna de poder entrar en algunas de ellas. (Si
        gustas más detalles sobre mi carrera ve mi{' '}
        <LinkText
          href="https://www.linkedin.com/in/luismgonzalezb/"
          underline
          target="_blank"
        >
          LinkedIn
        </LinkText>
        ).
      </p>
      <div className="mt-4 flex justify-center">
        <Image src={desk} alt="Picture of my current desk at home" />
      </div>
      <p className="mt-4">
        Desde antes de entrar a la universidad siempre tuve una pasión por el
        desarrollo de software, mi primer lenguaje fue{' '}
        <LinkText
          href="https://el.media.mit.edu/logo-foundation/index.html"
          target="_blank"
          underline
        >
          Logo
        </LinkText>{' '}
        en la secundaria, aprendí Pascal y ASP después trabajé en .Net y
        finalmente Web, principalmente en Javascript.
      </p>
      <p className="mt-4">
        Otra cosa que me encanta son los videojuegos, actualmente el que más
        juego es{' '}
        <LinkText
          href="https://www.ea.com/games/apex-legends"
          target="_blank"
          underline
        >
          Apex Legends
        </LinkText>{' '}
        (un juego gratuito que te recomiendo), en general me gusta el género de
        “shooters” pero también me gustan mucho los de estrategia como{' '}
        <LinkText
          href="https://www.ageofempires.com/"
          target="_blank"
          underline
        >
          Age of Empires
        </LinkText>
      </p>
      <p className="mt-4">
        Mi música predilecta es Metal, mis bandas favoritas son Metallica,
        Disturbed, System of A Down, Ill Niño, etc. Afortunadamente, he tenido
        la oportunidad de verlos a todos en vivo y es algo que le recomendaría a
        cualquiera.
      </p>
      <div className="mt-4">
        <div className="w-full md:w-1/2 pr-4 float-left">
          <Image src={fall} alt="Picture of me and my girl walking" />
        </div>
        <p>
          También, soy padre dos niñas, así que siempre en mi casa se hará lo
          que las mujeres quieran, en realidad siempre ha sido así, mi esposa es
          una mujer sumamente capaz con un gran liderazgo, a ella le debo mucho
          de las oportunidades que he podido capturar, no hay mejor fórmula que
          una pareja que te apoye y te impulse. Nos mudamos hace 1 año a
          Seattle, WA, y hemos disfrutado mucho el área.
        </p>
        <p className="mt-4">
          Finalmente algo que siempre me ha gustado es ayudar a las personas que
          estén interesadas en entrar o crecer en la ingeniería en sistemas y el
          desarrollo de software. Creo que desafortunadamente los latin@s
          estamos muy poco representados en software en las empresas de más alto
          nivel y estoy seguro de que no es falta de talento, es solo un poco
          más de preparación y alguien que te dé un empujoncito, así que si tu
          eres una persona interesada por favor no dudes en ponerte en contacto.
        </p>
      </div>
    </div>
  </PageLangLayout>
);

export default AboutEs;
