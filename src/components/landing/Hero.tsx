import { ButtonDown } from './ButtonDown';
import { TypeWriter } from './animates/TypeWriter';
import { WritingText } from './animates/WritingText';

export const Hero = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full bg-dark-purple-contrast shadow-md h-[100vh]">
        <div className="flex justify-center ">
          <TypeWriter />
        </div>
      </div>
    </>
  );
};
