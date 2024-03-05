import { skills } from "../constants"

const Skills = () => {
  return (
    <div className="font-montserrat px-16 leading-8 py-10">
      <h2 className="font-bold text-slate-gray text-lg leading-8">Technology I Use</h2>
      <h3 className="leading-10 pt-6 pb-4 font-semibold text-lg text-slate-gray font-mobtserrat">Skills</h3>
      {
        skills.map((item) => (
          <div key={item.skill}>
            <p className="leading-8 ">  <span className="font-semibold  text-slate-gray px-4 ">{item.skill}</span> - <span className="text-slate-gray">{item.stack}</span></p>
          </div>
        ))
      }
    </div>
  )
}

export default Skills