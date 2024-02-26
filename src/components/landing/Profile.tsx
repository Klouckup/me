import Image from 'next/image';

export const Profile = () => {
  return (
    <div>
      <div className="rounded-md border border-gray-100 bg-white px-4 py-3 shadow-lg">
        <div className="flex justify-center">
          <Image
            className="h-40 w-40 rounded-full object-cover"
            src="/rsz_kalcher_image_cropped.png"
            alt="Simon Lewis"
            width={100}
            height={100}
          />
        </div>
        <p className="m-auto">
          <strong className="block text-lg font-medium">Daniel Kalcher</strong>
          <span className="text-xs text-gray-400">
            {' '}
            Has been our client for 4 years{' '}
          </span>
        </p>
      </div>
      <div className="mt-2 flex flex-col items-start rounded-md border border-gray-100 bg-white px-4 pt-3 pb-6 shadow-lg">
        <strong className="block text-lg font-medium">Soft Skills</strong>
        <div className="w-full mt-4 flex justify-between gap-4 items-center text-xs text-gray-400">
          <p>Social Skills</p>
          <div className="ml-4 h-4 w-36 overflow-hidden rounded-md bg-gray-100 sm:w-56">
            <div className="h-full w-4/5 bg-bright-purple"></div>
          </div>
        </div>
        <div className="w-full mt-4 flex items-center gap-4 text-xs text-gray-400">
          Engagement
          <div className="ml-4 h-4 w-36 overflow-hidden rounded-md bg-gray-100 sm:w-56">
            <div className="h-full w-2/5 bg-gray-800"></div>
          </div>
        </div>
        <div className="w-full mt-4 flex justify-between gap-4 items-center text-xs text-gray-400">
          <p>Erfahrung</p>
          <div className="ml-4 h-4 w-36 overflow-hidden rounded-md bg-gray-100 sm:w-56">
            <div className="h-full w-4/5 bg-bright-purple"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
