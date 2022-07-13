import React from "react";
import AvatarImage from "../../../../assets/logo.jpeg";
import { useSessionContext } from "../../../../context/SessionContextProvider";
import {
    Container,
    Card,
    Image,
    NameProfession,
    Name,
    Old,

} from "./style"


function Profile(props) {
  const { user } = useSessionContext();
    return(
      <Container>
        <Card>
          <Image>
            <img className="logo" src={user.photoURL? user.photoURL : props.logo}></img>
          </Image>
          <NameProfession>
            <Name>
              {user.displayName? user.displayName :props.name}
            </Name>
            <Old>
              Idade: {props.year}
            </Old>
            <Old>
              Email: {user.email? user.email :props.email}
            </Old>
          </NameProfession>
        </Card>
      </Container>
    )
}

export default Profile;