import RegularImage from '../../assets/regular vehicles.jpg';
import ImportImage from '../../assets/imported vehicles.jpeg';
import TurbochargedImage from '../../assets/Turbo charged vehicles.jpg';
import SportsImage from '../../assets/Sports car.jpg';
export const Home = () => {
  return (
    <main className={'container-fluid p-0'}>
      <div className={'container mt-4'}>
        <h2 className={'text-center text-info fw-bold'}>The Service We provide</h2>
        <h5 className={'text-center text-secondary'}>
          Oil-Change for all car types
        </h5>
        <h6 className={'fw-bold'}>
          What we recommended for your car :
        </h6>
        <table className="table">
          <thead>
            <tr>
              <th scope="col" >
                <img src={RegularImage} alt='xx' width={200}/>
                <p>
                  Regular vehicles
                </p>
              </th>
              <th scope="col" >
                <img src={ImportImage} alt='xx' width={200}/>
                <p>
                  Import Vehicles
                </p>
              </th>
              <th scope="col">
                <img src={TurbochargedImage} alt='xx' width={200}/>
                <p>
                  Turbocharged Vehicles
                </p>
              </th>
              <th scope="col"  >
                <img width={200} alt='xx' src={SportsImage}/>
                <p>
                  Sports Car
                </p>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className={'fw-normal'}>0W-30</th>
              <td>5w-30</td>
              <td>5w-40</td>
              <td>10w-60</td>
            </tr>
            <tr>
              <th className={'fw-normal'}>Every 3 months</th>
              <td>Every 3 months</td>
              <td>Every 3 months</td>
              <td>Every 2 months</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  )
}
