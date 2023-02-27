import { auth } from '../../config/firebase'

const HomeLayout = () => {
  return (
    <div>

        Home Layout Dashboard
        <hr />
        <div> {auth.currentUser?.email}</div>
        Sign Up Successfully


    </div>
  )
}

export default HomeLayout