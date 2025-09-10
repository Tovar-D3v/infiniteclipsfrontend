import React from 'react';
import {
  FaYoutube, FaFacebook, FaTwitter, FaInstagram, FaTiktok, FaVimeoV,
  FaDailymotion, FaTwitch, FaSoundcloud, FaImdb, FaTed, FaErt as FaRt
} from 'react-icons/fa';
import { SiBilibili, SiBandcamp, SiKhanacademy, SiEspn } from 'react-icons/si';

// This is a simple fallback icon for platforms without a specific logo in the libraries
const Globe = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M12 2a14.5 14.5 0 0 0 0 20"></path>
    <path d="M2 12h20"></path>
  </svg>
);

const platformIcons = {
  youtube: FaYoutube,
  facebook: FaFacebook,
  twitter: FaTwitter,
  instagram: FaInstagram,
  tiktok: FaTiktok,
  vimeo: FaVimeoV,
  dailymotion: FaDailymotion,
  bilibili: SiBilibili,
  twitch: FaTwitch,
  periscope: Globe,
  bbc: Globe,
  cnn: Globe,
  'the new york times': Globe,
  rt: FaRt,
  soundcloud: FaSoundcloud,
  bandcamp: SiBandcamp,
  imdb: FaImdb,
  ted: FaTed,
  'khan academy': SiKhanacademy,
  espn: SiEspn,
};

const platformColors = {
  youtube: 'text-red-600',
  facebook: 'text-blue-600',
  twitter: 'text-sky-500',
  instagram: 'bg-gradient-to-br from-purple-600 to-pink-500 text-white rounded-md',
  tiktok: 'text-white',
  vimeo: 'text-sky-500',
  dailymotion: 'text-blue-700',
  bilibili: 'text-pink-500',
  twitch: 'text-purple-600',
  periscope: 'text-blue-400',
  bbc: 'text-red-700',
  cnn: 'text-red-600',
  'the new york times': 'text-white',
  rt: 'text-green-600',
  soundcloud: 'text-orange-500',
  bandcamp: 'text-cyan-500',
  imdb: 'text-yellow-500',
  ted: 'text-red-500',
  'khan academy': 'text-green-500',
  espn: 'text-red-600',
};

const PlatformIcon = ({ platform }) => {
  const NormalizedIcon = platformIcons[platform.toLowerCase()];
  const color = platformColors[platform.toLowerCase()];

  if (!NormalizedIcon) {
    return <Globe className={`h-4 w-4 mr-2 ${color}`} />;
  }

  // Handle a specific case for Instagram's unique styling
  if (platform.toLowerCase() === 'instagram') {
    return (
      <div className={`h-4 w-4 mr-2 rounded-md ${color} flex items-center justify-center`}>
        <NormalizedIcon className="h-3 w-3" />
      </div>
    );
  }

  return <NormalizedIcon className={`h-4 w-4 mr-2 ${color}`} />;
};

export default PlatformIcon;