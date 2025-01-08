const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-orange-700">
      <div className="container mx-auto px-4">
        <div className="py-10">
          <h2 className="text-4xl font-bold text-center mb-8">Experience</h2>
        </div>
        
        <div className="flex justify-center">
          <div className="grid gap-6 max-w-3xl w-full">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-white">Defensity College, Ministry of Defense</h3>
              <p className="text-orange-300 mb-2">2023 – Present</p>
              <ul className="list-disc list-inside text-gray-200">
                <li>Worked on Automatic Target Recognition in drones</li>
                <li>Analyzed data from 2000 annual sign-ups, enhancing recruitment strategies for the Dienjaar program</li>
                <li>Led data migration to optimize CRM tools for operational efficiency</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience; 