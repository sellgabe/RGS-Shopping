import { useEffect } from 'react';

const Notify = ({ setShowNotify, showNotify }) => {
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('overlay')) {
      setShowNotify((prev) => !prev);
    }
  };

  useEffect(() => {
    const notifyTimeout = setTimeout(() => {
      setShowNotify(false);
    }, 1500);

    return () => clearTimeout(notifyTimeout);
  }, [setShowNotify]);

  return (
    <>
      <div
        onClick={handleOverlayClick}
        className={`overlay fixed top-0 left-0 h-full w-full z-40 flex justify-center items-center ${
          showNotify ? '' : 'hidden'
        }`}
      >
        <div className="font-blinker bg-black/70  z-50 flex flex-col w-[25rem] h-[4rem] text-white justify-center items-center rounded-lg">
          Item has been added to your shopping cart. ✅
        </div>
      </div>
    </>
  );
};

export default Notify;
