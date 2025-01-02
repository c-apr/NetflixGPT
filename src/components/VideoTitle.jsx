import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoIcon from '@mui/icons-material/Info';

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[15%] px-32 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="py-6 text-base w-1/4">{overview}</p>
      <div className="flex items-center gap-4">
        {/* Play Button */}
        <button
          className="bg-white text-black p-3 px-6 text-lg flex items-center gap-2 rounded-md shadow hover:opacity-80"
        >
          <PlayArrowIcon /> Play
        </button>

        {/* More Info Button */}
        <button
          className="bg-gray-800 text-white p-3 px-6 text-lg flex items-center gap-2 rounded-md shadow hover:opacity-80"
        >
          <InfoIcon /> More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;



