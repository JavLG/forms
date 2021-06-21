


const Terminal = ({state}) => {
  return (
    <>
      <div className="border border-yellow-100 h-64 rounded-xl bg-gray-900 text-green-300 text-sm md:text-md px-5 py-3 m-4">
            <div className="w-full flex justify-start mb-2">
              <img className="w-10 h-3" src="./assets/buttons.png" alt="img" />
            </div>
            {JSON.stringify(state, null, 4)}
            
          </div>


    </>
  );
}

export default Terminal;