import "../section.css"
import image from "../../public/body.png"
const Section = () => {
  return (

    <div className="section container mx-auto max-w-5xl mt-48">
        <div>
        <img src={image} alt="image" />
        </div>
        <div className="first-heading mt-48">
            <h1>Let's unite for <br/> innovation</h1>
        </div>
        <div className="text-end pt-9 " >
            <h1 className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent text-8xl">Join 400+</h1>
            <p className="text-4xl">companies already growing</p>
        </div>
    </div>
  )
}

export default Section