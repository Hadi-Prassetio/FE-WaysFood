export default function DropDown({ isVisible, onClose, children }) {
  if (!isVisible) return null;

  const handleClose = (e) => {
    if (e.target.id === "outSide") onClose();
  };
  return (
    <>
      {/* <button id="dropdownDefault" data-dropdown-toggle="dropdown" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Dropdown button</button> */}
      <div
        className='fixed inset-0 flex justify-end'
        onClick={handleClose}
        id='outSide'>
        <div className='mt-[75px] mr-12 h-10'>
          <div className='relative bg-white rounded-lg shadow px-5 py-5'>
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
