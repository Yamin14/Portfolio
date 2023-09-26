
const Quote = () => {
    return (
      <div className="border-b-2 border-black text-white bg-black">
          <blockquote className="p-2 text-xl italic font-semibold md:text-2xl lg:text-3xl">
              <q>Work hard to acquire noble traits and bear the burden of [others] liabilities, [as a result] you will achieve the greatest gains.</q>
          </blockquote>
          <cite className="block text-right p-2 pt-0 font-serif md:text-xl lg:text-2xl">- Imam Ali (a.s), Ghurar al-Hakam</cite>
          
          {/* line */}
          <div className="border-b-2 border-white"></div>
      </div>
    );
  }
  
  export default Quote;