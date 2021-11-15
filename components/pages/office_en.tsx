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
        if there is no agenda just join and ask your question live.
      </p>
      <p>
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
          Zoom (Actual link to be posted on the day of)
        </LinkText>
      </p>
      <h2 className="mt-8 text-xl">Rules:</h2>
      <ul className="mt-4 list-disc ml-4">
        <li>
          As I mentioned be prepared to be streamed and recorded if you join the
          zoom call, you have to agree to that.
        </li>
        <li>
          This is going to be a bilingual space so be prepared for some Spanish.
        </li>
        <li>
          There will be ZERO tolerance for disrespectful or abusive behavior, I
          want to be welcoming to all. You will be kicked out and banned
        </li>
      </ul>
      <h2 className="mt-8 text-xl">Cancellations:</h2>
      <p className="mt-4">
        I&apos;ll not be available on the dates listed below (Holidays,
        vacations, family events, etc):
      </p>
      <ul className="mt-4 list-disc ml-4">
        <li>Dec 22</li>
      </ul>
    </div>
  </PageLangLayout>
);

export default OfficeEs;
