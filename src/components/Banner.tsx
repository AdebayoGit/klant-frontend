import { AlertCircle, CheckCircle, Info, XCircle, X } from 'lucide-react';

type BannerType = 'error' | 'warning' | 'success' | 'info';

interface BannerProps {
  type: BannerType;
  message: string;
  onClose: () => void;
}

const bannerStyles: Record<BannerType, { bg: string; icon: JSX.Element }> = {
  error: {
    bg: 'bg-red-500',
    icon: <AlertCircle className="text-red-500 h-5 w-5 sm:h-6 sm:w-6" />,
  },
  warning: {
    bg: 'bg-yellow-500',
    icon: <AlertCircle className="text-yellow-500 h-5 w-5 sm:h-6 sm:w-6" />,
  },
  success: {
    bg: 'bg-green-500',
    icon: <CheckCircle className="text-green-500 h-5 w-5 sm:h-6 sm:w-6" />,
  },
  info: {
    bg: 'bg-blue-500',
    icon: <Info className="text-blue-500 h-5 w-5 sm:h-6 sm:w-6" />,
  },
};

export const Banner = ({ type, message, onClose }: BannerProps) => {
  const { bg, icon } = bannerStyles[type];

  return (
    <div
      className={`fixed top-4 right-4 bg-white text-gray-800 rounded-md shadow-lg z-50 flex items-stretch w-[calc(100%-2rem)] sm:w-80 transform transition-all duration-300 ease-in-out overflow-hidden`}
    >
      <div className={`${bg} w-1.5 flex-shrink-0`} />
      <div className="flex-grow flex items-center justify-between p-3 sm:p-4">
        <div className="flex items-center">
          {icon}
          <span className="text-xs sm:text-sm ml-2">{message}</span>
        </div>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700 transition-colors ml-2"
          aria-label="Close banner"
        >
          <X className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>
      </div>
    </div>
  );
};
