// Import the 'snakes' array from './snakes' file
import snakes from './snakes'

// Declare a default function component named 'SnakeRows'
export default function SnakeRows() {
    // Log the 'snakes' array to the console for debugging
    console.log(snakes)
  
  // Return JSX elements to be rendered
  return (
    <div>
      <div className="container">
      
        {
          // Use the map function to loop through each 'snake' object in the 'snakes' array
          snakes.map((snake, index) => {
            // For each 'snake' object, return JSX elements wrapped in a 'div'
            return (
              <div className='row snake-data-background' key={index}>
                <div className='col-4'>
                  {/* Display the image of the snake using its 'imgURL' property */}
                  <img className='snake-imgs' src={snake.imgURL} alt={snake.Name} />
                
                  {/* Check if the snake is venomous and display 'Venomous' if it is */}
                  {snake.Venomous === 'Yes' ? <h5 className='venomous'>Venomous</h5> : null}
                </div>
                
                <div className='col-8'>
                  {/* Display the name of the snake */}
                  <h2>{snake.Name}</h2>
                  
                  {/* Display the scientific name of the snake */}
                  <h3>{snake.SciName}</h3>
                  
                  {/* Display the description of the snake */}
                  <p>{snake.Description}</p>
                </div>
              </div>
            );
          }
          )
        }
      </div>
    </div>
    )
}


