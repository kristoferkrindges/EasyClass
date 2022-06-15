import React from "react";
import AvatarImage from "../../../../imagens/logo.jpeg";
import { useUserContext } from "../../../../context/userContext";
import {
    Container,
    Card,
    Image,
    NameProfession,
    Name,
    Old,

} from "./style"


function Profile(props) {
  const { user } = useUserContext();
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