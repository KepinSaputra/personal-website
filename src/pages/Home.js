import Image from "./Assets/Kepin.png"

export default function Home() {
  return (
    <>
      <div className="homeContainer">
        <img className="kevinImg" src={Image} alt="image kepin" />
        <div className="text-desc">
          <h1>Kevin Saputra</h1>
          <h1>Front-End Internship</h1>
        </div>
      </div>
    </>
  )
}
