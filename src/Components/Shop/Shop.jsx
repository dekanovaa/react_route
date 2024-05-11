import './Shop.css'

function Shop() {
    const [count,setCount] = useState(0)
    function Countup() {
        setCount(count+1)
        
    }

  return (
    <div className="shop">
        <div className="container shop__container">
            <p className="shop__text">{count}</p>
            <button Onclick={Countup}>+</button>
        </div>
    </div>
  )
}

export default Shop