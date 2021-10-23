import LinkText from '../LinkText';
import PageLangLayout from './PageLangLayout';

const OfficeEs = () => (
  <PageLangLayout>
    <div className="md:w-1/2 lg:w-1/2">
      <h1 className="mt-3 text-2xl">Asesorías</h1>
      <p className="mt-4">
        Estaré disponible una vez cada semana para tratar de contestar tus
        preguntas relacionadas con el desarrollo de software, algunos de los
        temas que podríamos cubrir son como entrar al campo de desarrollo de
        software, prepararte para entrevistas de trabajo, preguntas específicas
        sobre algún código (advertencia, he trabajado mayormente con JavaScript
        los últimos años así que si tu pregunta es muy específica sobre Java o
        C# o Ruby, etc, quizá no sepa la respuesta inmediatamente pero estoy
        seguro que juntos podemos encontrarla). Quizá hagamos algunos proyectos
        divertidos, en realidad mi objetivo es informarte y ayudarte lo mas que
        pueda.
      </p>
      <h2 className="mt-8 text-xl">Calendario:</h2>
      <p className="mt-4">Cada Viernes de 9:00 a 10:00 am CST</p>
      <h2 className="mt-8 text-xl">Formato:</h2>
      <p className="mt-4">
        La manera de unirse será a través de la aplicación Zoom y también
        trataré de hacer stream en Youtube y guardarlo para que quizá alguien
        más se pueda beneficiar del contenido, así que prepárate para ser
        grabado.
      </p>
      <p className="mt-4">
        Trataré de publicar una agenda con las preguntas que me hayan llegado de
        antemano. Me gustaría poder hacer preparaciones para la entrevista (si
        estás interesado contactame al menos 24 horas antes para poder
        prepararme).
      </p>
      <h2 className="mt-8 text-xl">Cómo unirse:</h2>
      <p className="mt-4">
        Si solo quieres escuchar unete en el canal de{' '}
        <LinkText
          href="https://www.youtube.com/channel/UCJhitTFGzsZJdSflM63T3mA"
          target="_blank"
          underline
        >
          Youtube
        </LinkText>
        , para hacer preguntas y participar entra en el link de{' '}
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
          Este va a ser un espacio bilingüe, así que prepárate para un poco de
          inglés.
        </li>
        <li>
          No habrá NINGUNA tolerancia a comportamiento grosero o abusivo, quiero
          que este espacio sea abierto y seguro para todos. Serás inmediatamente
          removido y bloqueado.
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
