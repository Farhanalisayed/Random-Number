import './index.css'

const RandomNumberGenerator = () => {
  let randomNumber;
  const generateIt = () => {
    randomNumber = Math.ceil(Math.random() * 100) 
    return randomNumber
  }

  return (
    <div className="the-container">
      <div className="card">
        <h1 className="head">Randon Number</h1>
        <p className="description">
          Generate a random number in the range of 0 to 100
        </p>
        <button className="button" onClick={generateIt}>
          Generate
        </button>
        <p className="number">{randomNumber}</p>
      </div>
    </div>
  )
}
export default RandomNumberGenerator
