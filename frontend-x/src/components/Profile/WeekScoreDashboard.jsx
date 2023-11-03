const WeekScoreDashboard = () => {
  const contestents = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  return (
    <section className="mt-16 bg-white rounded-lg m-2 text-green-600 shadow-md">
        <h2>Weekly Score Board</h2>
        <hr className="border-1 border-green-500 cursor-pointer hover:border-red-500 duration-500"/>
        <ol className="mt-8 overflow-auto h-80">
          {contestents.map((position, id) => 
            <li key={id} className="border p-2 border-green-500 rounded-lg my-1">{position}. Suraj Shukla</li>
          )}
        </ol>
    </section>
  )
}

export default WeekScoreDashboard;