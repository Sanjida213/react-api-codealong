import { useState } from "react"
import { User, UserResult } from "../../types/User"
import ProfileCard from "../ProfileCard/ProfileCard"
import Button from "../Button/Button"
import "./ProfileContainer.scss";


const ProfileContainer = () => {
  const [users, setUsers] = useState<User[]>()
  const getUser = async () => {
    const url = "https://randomuser.me/api/?results=20";
    const res = await fetch(url);
    const data: UserResult = await res.json()
    setUsers(data.results)
  }
  return (
    
    <div className="profile-container">
      <Button onClick={getUser} label="Get Random User"/>
      {users&& users.map(user => (
      <ProfileCard 
          name={`${user.name.first} ${user.name.last}`}
          image={user.picture.large}
          email={user.email}
          phoneNumber={user.phone}
        />
      )
      )}
    </div>
  )
}    


export default ProfileContainer;