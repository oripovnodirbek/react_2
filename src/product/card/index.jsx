import "./index.css"

export default function Card(props) {
    const {data} = props;
    return (
        // <div className="bloc_card">
            <div className="card">
              <img src={data.image} alt="" />
              <h2>{data.firstName}{data.lastName}</h2>
              <p>{data.phone}</p>
              <p>{data.email}</p>
              <p>{data.cars}</p>
            </div>
        // </div>
    )
}