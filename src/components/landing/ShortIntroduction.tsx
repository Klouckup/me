import { Profile } from './Profile';

export const ShortIntroduction = () => {
  const calculateAge = (birthday: Date) => {
    // birthday is a date
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };

  return (
    <>
      <div className="mx-auto flex max-w-lg flex-col px-4 py-20 lg:max-w-screen-xl lg:flex-row h-[80vh]">
        <div className="mb-10 max-w-lg lg:mb-0 lg:pr-16 xl:pr-20">
          <Profile />
        </div>
        <div className="mr-10 mb-6 lg:mb-0">
          <div className="w-full bg-white sm:px-4 xl:px-12">
            <div className="z-10 mx-auto w-full">
              <div className="-mx-2 flex flex-wrap font-bold">
                <div className="mb-4 w-full px-2 lg:w-3/5">
                  <div className="h-full w-full bg-bright-purple p-6">
                    <div className="z-10 flex flex-col justify-between">
                      <h1 className="text-4xl text-white sm:text-8xl">5</h1>
                      <h6 className="mt-12 text-xl text-white sm:text-3xl">
                        Azure Certifications
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="mb-4 w-full px-2 lg:w-2/5">
                  <div className="h-full w-full bg-dark-purple-contrast p-6">
                    <div className="z-10 flex flex-col justify-between">
                      <h1 className="text-4xl text-white sm:text-8xl">10+</h1>
                      <h6 className="mt-12 text-xl text-white sm:text-3xl">
                        Long-Term Projects
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="mb-4 w-full px-2 lg:w-1/3">
                  <div className="h-full w-full bg-bright-purple-contrast p-6">
                    <div
                      className="absolute z-0 opacity-0 hover:opacity-50"
                      //style="mix-blend-mode:multiply"
                    ></div>
                    <div className="z-10 flex flex-col justify-between">
                      <h1 className="text-3xl text-white sm:text-4xl">
                        10.000+
                      </h1>
                      <h6 className="mt-12 text-xl text-white sm:text-3xl">
                        Hours of Developing
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="mb-4 w-full px-2 lg:w-1/3">
                  <div className="h-full w-full bg-blue-400 p-6">
                    <div className="z-10 flex flex-col justify-between">
                      <h1 className="text-4xl text-white sm:text-6xl">12k+</h1>
                      <h6 className="mt-12 text-xl text-white sm:text-3xl">
                        Coffees
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="mb-4 w-full px-2 lg:w-1/3">
                  <div className="h-full w-full bg-red-200 p-6">
                    <div className="z-10 flex flex-col justify-between">
                      <h1 className="text-4xl text-blue-900 sm:text-8xl">
                        {calculateAge(new Date(1999, 12, 12))}
                      </h1>
                      <h6 className="mt-12 text-xl text-blue-900 sm:text-3xl">
                        Years old
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
