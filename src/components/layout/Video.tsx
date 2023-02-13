import YouTube from 'react-youtube';

interface Props {
  embedLink: string | undefined;
}

const VideoApp = ({ embedLink }: Props) => {
  const EmbedID = embedLink?.split('?v=');

  const opts = {
    height: '100%',
    width: '100%',
  };

  return (
    <YouTube videoId={`${EmbedID?.[1]}`} opts={opts} className="aspect-video" />
  );
};

export default VideoApp;
