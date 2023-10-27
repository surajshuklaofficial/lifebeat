const Metrics = () => {
  return (
    <section className=" bg-white rounded-lg py-8 m-4 text-green-500 shadow-md">
        <ul className="grid grid-cols-4 gap-8">
            <li className="text-center">Calories Burn</li>
            <li className="text-center">Steps</li>
            <li className="text-center">Sleep</li>
            <li className="text-center">Heart Rate</li>
            <li className="text-center">SPO2</li>
            <li className="text-center">Stress</li>
            <li className="text-center">Cycling</li>
            <li className="text-center">Workout Duration</li>
        </ul>
    </section>
  )
}

export default Metrics;