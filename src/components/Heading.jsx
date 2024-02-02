import AnimatedElement from "./AnimatedElement";

const Heading = ({ children }) => {
  return (
    <AnimatedElement>
      <h1 className="font-bold text-2xl mb-4 font-gentium">{children}</h1>
    </AnimatedElement>
  );
};

export default Heading;

