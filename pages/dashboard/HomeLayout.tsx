import Image from "next/image"
const HomeLayout = () => {
  return (
    <div>
      <div>
        <Image src={''} width={500} height={300} alt={'Image Not Available'} />

        <div>Orgonized by: Mubben Yasin</div>
        <div>Held on: 22-12-2023</div>
        <div>
          <button>Join Event</button>
        </div>
      </div>

    </div>
  )
}

export default HomeLayout