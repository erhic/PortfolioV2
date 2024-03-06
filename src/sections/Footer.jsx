
const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (

    <div className="flex justify-center p-16 bg-blue-950">
      <p className="font-pallidium leading-8  text-lg text-white">Copyright {currentYear} |  Eric Ngugi | All rights reserved . </p>
    </div>
  )
}

export default Footer