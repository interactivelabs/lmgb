import Image from 'next/image';
import LinkText from '../LinkText';
import PageLangLayout from './PageLangLayout';
import desk from '../../public/img/desk.jpeg';
import fall from '../../public/img/fall.jpeg';

const AboutEn = () => (
  <PageLangLayout>
    <div className="md:w-1/2 lg:w-1/2">
      <h1 className="mt-3 text-2xl">About me</h1>
      <p className="mt-4">
        I&apos;m originally from Zacatecas, Mexico, I graduated from{' '}
        <LinkText href="https://zacatecas.tecnm.mx" target="_blank" underline>
          Instituto Tecnológico de Zacatecas
        </LinkText>{' '}
        with a bachelor&apos;s in computer science with a major in Software
        Engineering. I&apos;ve been working in the field for 10+ years.
      </p>
      <p className="mt-4">
        My goal was always to be able to work at the top companies in the
        industry and I&apos;ve been fortunate enough to join some of them. (for
        more resume details please visit my{' '}
        <LinkText
          href="https://www.linkedin.com/in/luismgonzalezb/"
          underline
          target="_blank"
        >
          LinkedIn
        </LinkText>
        )
      </p>
      <div className="mt-4 flex justify-center">
        <Image src={desk} alt="Picture of my current desk at home" />
      </div>
      <p className="mt-4">
        Even before joining my college degree I had tremendous passion for
        software, my first programming language was{' '}
        <LinkText
          href="https://el.media.mit.edu/logo-foundation/index.html"
          target="_blank"
          underline
        >
          Logo.
        </LinkText>{' '}
        I also learned Pascal and ASP, after that .Net and finally Web, mainly
        doing Javascript.
      </p>
      <p className="mt-4">
        I also really enjoy playing video games, currently my main game is{' '}
        <LinkText
          href="https://www.ea.com/games/apex-legends"
          target="_blank"
          underline
        >
          Apex Legends
        </LinkText>{' '}
        (a free to play game I thoroughly recommend), in general I really like
        the shooter genre, but I also really enjoy games like{' '}
        <LinkText
          href="https://www.ageofempires.com/"
          target="_blank"
          underline
        >
          Age of Empires.
        </LinkText>
      </p>
      <p className="mt-4">
        The music I like the most is Metal, my faves are Metallica, Disturbed,
        System of a Down, Lamb of God, etc, thankfully I&apos;ve seen them all
        live and if you can you should totally see your favs also live,
        it&apos;s really special.
      </p>
      <div className="mt-4">
        <div className="w-full md:w-1/2 pr-4 float-left">
          <Image src={fall} alt="Picture of me and my girl walking" />
        </div>
        <p>
          Also I&apos;m a father of 2 girls, so we always do what the ladies say
          at home, that didn&apos;t happened before, my wife is quite an
          accomplished leader, I owe to her being able to cease some of the
          opportunities that have come my way, the best formula for growth is to
          have a partner that supports and encourages you. We moved to near
          Seattle, WA about 1 year ago and we&apos;ve enjoyed quite a lot around
          here.
        </p>
        <p className="mt-4">
          Finally something I&apos;ve always loved is to be able to help people
          that might be interested in entering or growing in the Software
          Development field, unfortunately I think latin@s we are severely
          underrepresented specially on the top companies and I&apos;m sure is
          not a lack of talent but just the need of a bit more preparation and
          have someone to lend you a hand, so if you are interested please
          contact me.
        </p>
      </div>
    </div>
  </PageLangLayout>
);

export default AboutEn;
