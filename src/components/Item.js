
const Item = ({item}) => {
  return (
   
     <div className='absolute p-10 w-3/4 text-center text-white flex flex-col items-center'>
        <div className='p-5'>
            <img className='rounded-full' src={item.src} alt={item.alt}/>
        </div>
        <div className='w-full p-5'>
            <p className='my-5 text-2xl'>{item.quote}</p>
            <h1>~by {item.author}</h1>
        </div>
    </div>
  )
}

export default Item