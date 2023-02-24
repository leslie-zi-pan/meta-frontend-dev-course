import { Intro1Props } from "../types/types";

const Intro1 = (props: Intro1Props) => {
  const { introName, introAge, programmingLanguage } = props;
  return (
    <div className="blog-post-intro">
      <h2>I've gained skills in React.TS!</h2>
      <div>
        <p>
          My name is {introName} I am {introAge} years old and I am currently
          learning {programmingLanguage}.
        </p>
        <p className="link">Read more...</p>
      </div>
    </div>
  );
};

export default Intro1;
