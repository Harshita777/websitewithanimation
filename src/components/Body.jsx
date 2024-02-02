import "../body.css"

const Body = () => {
  return (
    <div className=" parent-container mt-64  flex justify-between container mx-auto max-w-5xl ">
      <div className="heading-one p-9">
        <h1 className="text-5xl">35,000</h1>
        <p className=" mt-5 paragraph">Websites Already<br/>Thriving with Us!</p>
      </div>
      <div className="heading-two text-end  p-12 ">
        <h1 className=" text-4xl ">
          Experience <br/> <span>the power of <br/>speed</span> with our <br/> cutting-edge<br/>  hosting,<br/>
          infrastructure <br/>
          
        </h1>
        <button className="mt-8 p-2 border button ">Read our story</button> 
      </div>
    </div>
  );
};

export default Body;
