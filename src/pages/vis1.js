
import '../App.css';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useState, useEffect } from 'react';


function VIS1() {
  const [toggleImage, setToggleImage] = useState(false)
  const [visualize, setVisualize] = useState(false)
  const [count, setCount] = useState(0)
  const [timer, setTimer] = useState(null)
  const [mockData, setMockdata] = useState([0])

  const matrixData = [
    [0, 0, 0, 4, 4],
    [0, 0, 3, 3, 0],
    [0, 2, 2, 0, 0],
    [1, 1, 0, 0, 0]
  ]




  useEffect(() => {

    if (visualize && count === 0) {
      const timer = setInterval(() => {


        let data = mockData
        data.push(0)
        setCount(count => count + 1)
        setMockdata(data)
      }, 1000);

      setTimer(timer)

    }


  }, [count, mockData, visualize])

  useEffect(() => {
    if (count === 4)
      clearInterval(timer)
  }, [count, timer])



  const getValue = (value, colIndex, rowIndex) => {
    if (value == 0) {
      return <span className="  d-flex justify-content-center align-items-center" style={{ height: "40px", width: "40px" }} ></span>
    }
    if (colIndex === rowIndex) {
      return <span className="border bg-warning d-flex justify-content-center align-items-center" style={{ height: "40px", width: "40px" }} ></span>
    } else {

      return <span className="border bg-primary d-flex justify-content-center align-items-center" style={{ height: "40px", width: "40px" }} ></span>

    }



  }



  return (
    <div className="App">

      <h1>Demo Pipeline</h1>

      <div class="container">

        <div class="row">
          <div class="col-sm">
            <button type="button" class="btn btn-primary mb-4" onClick={() => setToggleImage(!toggleImage)}>No Dependency</button>
            {toggleImage && <img src="/vis1.jpg" alt="..." class="img-thumbnail" />}
          </div>
          <div className="col-sm pl-8">
            <button type="button" class="btn btn-primary mb-4" onClick={() => setVisualize(!visualize)}>Visualize</button>


            {visualize && <table class="table  d-flex flex-column" >



              <div style={{ display: "flex", alignItems: 'center' }} >
                {
                  <tbody style={{ borderStyle: "none" }} >

                    {
                      matrixData.map((ele, rowIndex) =>
                        <tr className='d-flex' style={{ borderStyle: "none" }}>
                          <th scope="row"><span className="  d-flex justify-content-center align-items-center" style={{ height: "40px", width: "40px" }} >{`S${rowIndex}`}</span></th>

                        </tr>
                      )

                    }

                  </tbody>

                }

                {
                  visualize && mockData.map((row, colIndex) =>
                    <>
                      <tbody  style={{ borderStyle: "none" }}>

                        {
                          matrixData.map((ele, rowIndex) =>
                            <tr className='d-flex' style={{ borderStyle: "none" }}>
                              <th scope="row">{getValue(matrixData[rowIndex][colIndex], colIndex, 3 - rowIndex)}</th>

                            </tr>
                          )

                        }

                      </tbody>

                    </>
                  )
                }


              </div>

              <div style={{ display: "flex", alignItems: 'center' }}>

                <tbody className=' border-0 justify-content-center' style={{ width: "306px", marginLeft: "50px" }}>
                  <tr className='d-flex justify-content-around border-0'>
                    {
                      matrixData[0].map((ele, colIndex) =>

                        <th scope="col"><span className="  d-flex justify-content-center align-items-center" style={{ height: "40px", width: "40px" }} >{`${colIndex + 1}`}</span></th>


                      )

                    }
                  </tr>
                </tbody>

              </div>



            </table>}

          </div>

        </div>
      </div>
    </div>
  );
}

export default VIS1;
