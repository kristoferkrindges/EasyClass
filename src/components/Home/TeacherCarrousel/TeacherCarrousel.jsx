import React, {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {
    Container,
    ListCards,
    ContentCarrousel,
    SelectMenu,
    SelectBtn,
    BtnText,
    IoArrowDown,
    IoBook,
    Option,
    Options,
    OptionText,
} from "./styles";
import Cards from "../../Shared/Cards";
import NewCards from "../../Shared/NewCards";
import Loading from "../../Shared/Loader";
import logo from "../../../assets/logo.jpeg";
import api from "../../../services/api";
import Carrousel from "react-elastic-carousel";

export default function TeachersCarrousel() {

    const [removeLoading, setRemoveLoading] = useState(false);

    const [click, setClick] = useState(false);

    const [market, setMarket] = useState("Escolha");

    const [teachers, setTeachers] = useState([]);
    useEffect(() => getTeachers(), []);

    let navigate = useNavigate();

    const routeChange = (id) => {
        let path = `/request?teacherId=${id}`;
        navigate(path);
    };

    const getTeachers = () => {
        api
            .get("/user?role=TEACHER")
            .then(({data}) => {
                setTeachers(data);
                setRemoveLoading(true);
            })
            .catch((error) => {
                console.error("error", error);
            });
    };

    const getTeachersSubjectId = (id) => {
        if (id)
            api
                .get("/user?subject=" + id.toUpperCase())
                .then(({data}) => {
                    setTeachers(data);
                    setRemoveLoading(true);
                })
                .catch((error) => {
                    console.error("error", error);
                });
    };
    // Carrousel
    const breakPoints = [
        {width: 800, itemsToShow: 1},
        {width: 1250, itemsToShow: 2},
        {width: 1300, itemsToShow: 3},
        {width: 1500, itemsToShow: 4},
    ];
    return (
        <Container>
            <div className="seletor">
                <h3>O QUE VOCÊ PROCURA?</h3>

                <select
                    onChange={(e) => getTeachersSubjectId(e.target.value)}
                    className="selt">
                    <option value="">Escolha</option>
                    <option value="English">Inglês</option>
                    <option value="History">Historia</option>
                    <option value="Guitar">Guitarra</option>
                    <option value="Biology">Biologia</option>
                    <option value="Programming">Programação</option>
                    <option value="Zumba">Zumba</option>
                    <option value="Drums">Bateria</option>
                </select>
            </div>
            <ContentCarrousel>
                <Carrousel breakPoints={breakPoints}>
                    {teachers.length > 0 &&
                        teachers.map((value, key) => (
                            <NewCards
                                img={value.photoUrl}
                                stars={value.rating}
                                name={value.firstName}
                                lastName={value.lastName[0]}
                                subject={value.subject}
                                price={`R$${value.hourlyPrice} Hr/Aula`}
                                id={value.userId}
                                onClick={routeChange}
                                key={key}
                            />
                        ))}
                    {!removeLoading && <Loading/>}
                </Carrousel>
            </ContentCarrousel>
            <p>Melhores profissionais do mercado!</p>
        </Container>
    );
}
