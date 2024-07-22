function  Body ({titele,price,mon,src}){
  return  <div className="flex gap-3 mt-5">
        <img className="w-[200px] h-[150px]" src={src}>
        </img>
        <div>
          <h1 className="text-2xl font-semibold">{titele}</h1>
          <p>{mon}</p>
          <p>{price}</p>
          <button className="w-[100px] h-[40px] bg-yellow-500 rounded-xl p-2">order now</button>
        </div>
      </div>

}
export default Body 
