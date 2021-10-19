import LinkText from '../LinkText';
import PageLangLayout from './PageLangLayout';

const OfficeEs = () => (
  <PageLangLayout>
    <div className="md:w-1/2 lg:w-1/2">
      <h1 className="mt-3 text-2xl">Office Hours</h1>
      <p className="mt-4">
        I&apos;ll be available once a week to answer your questions regarding
        software engineering, some topics that we might cover are general
        questions about how to get into the software field, interview prep,
        specific questions about some code you might have (disclosure I&apos;ve
        been working mostly as a Javascript engineer, so if you have very
        specific Java, C# Ruby, etc questions I might not have the answer
        immediately but I&apos;m sure we can find out together). We might start
        doing some projects, the sky&apos;s the limit, my goal is to inform and
        help you as much as I can.
      </p>
      <h2 className="mt-8 text-xl">Schedule:</h2>
      <p className="mt-4">Every Friday at 9:00 - 10:00 am CST</p>
      <h2 className="mt-8 text-xl">Format:</h2>
      <p className="mt-4">
        The format would be a Zoom call and I&apos;ll try to stream to youtube
        and save it in case someone else might benefit from it, so if you join
        the office hours be prepared to be streamed and recorded.
      </p>
      <p className="mt-4">
        I&apos;ll try to publish an agenda if there are pre-submitted questions,
        I would love to do some interview prep (if you are interested, contact
        me at least 24 hours to prepare this).
      </p>
      <h2 className="mt-8 text-xl">How to join:</h2>
      <p className="mt-4">
        To simply listen you can tune in to the{' '}
        <LinkText
          href="https://www.youtube.com/channel/UCJhitTFGzsZJdSflM63T3mA"
          target="_blank"
          underline
        >
          Youtube
        </LinkText>{' '}
        stream, to ask a question and/or participate join the{' '}
        <LinkText href="https://zoom.com" target="_blank" underline>
          Zoom
        </LinkText>
      </p>
      <h2 className="mt-8 text-xl">Reglas:</h2>
      <ul className="mt-4 list-disc ml-4">
        <li>
          Como ya lo mencione si te unes seguramente serás grabado y puesto en
          el internet en youtube, así que tienes que estar de acuerdo.
        </li>
        <li>
          No habrá ninguna tolerancia a comportamiento grosero o abusivo, quiero
          que este espacio sea abierto y seguro para todos.
        </li>
        <li>
          Nuevamente, no habrá ninguna tolerancia a comportamiento grosero o
          abusivo, este espacio debe ser alentador para todos, de otra manera
          serás inmediatamente removido y no te aceptaré en ningún evento que
          organice en el futuro.
        </li>
      </ul>
      <h2 className="mt-8 text-xl">Cancelaciones:</h2>
      <p className="mt-4">
        No estaré disponible en las fechas listadas a continuación (vacaciones,
        eventos familiares, etc):
      </p>
      <ul className="mt-4 list-disc ml-4">
        <li>Diciembre 22</li>
      </ul>
    </div>
  </PageLangLayout>
);

export default OfficeEs;
