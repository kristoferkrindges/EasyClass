import React, {useState} from "react";
import {
    Container,
    SubContainer,
    SectionOne,
    SectionTwo,
    ColumnOne1,
    ColumnOne2,
    ColumnTwo1,
    ColumnTwo2,
    TitleText,
    InvoiceContainer,
    SectionThree,
} from "./style"
import Navbar from "../Navbar"
import Tags from "../Tags";
import Info from "../Info";
import Earnings from "../Earnings";
import Invoices from "../Invoices";
import Profile from "../Profile";
import {IoBookmarks, IoAccessibility, IoCalendarClear, IoFileTrayFull} from "react-icons/io5"
function Dashboard(props) {
    const doc = [
        {
            card:"Aulas",
            icon: <IoBookmarks/>
        },
        {
            card: props.type,
            icon: <IoAccessibility/>
        },
        {
            card:"Calendário",
            icon: <IoCalendarClear/>
        },
        {
            card:"Mensagens",
            icon: <IoFileTrayFull/>
        },    
    ]
    if(props.type == "Aluno"){
        return(
            <Container>
            <Navbar
                name={props.name}
            />
            <SubContainer>
                <SectionOne>
                    <ColumnOne1>
                        {doc.map((value, key) => (
                            <Tags
                                key={key}
                                value={value.card}
                                icon={value.icon}
                            />
                            
                        ))}
                    </ColumnOne1>
                </SectionOne>
                <SectionTwo>
                    <ColumnOne2>
                        <InvoiceContainer>
                        <TitleText>Aulas recentes</TitleText>
                            <Invoices/>
                            <Invoices/>
                        </InvoiceContainer>
                    </ColumnOne2>
                    <ColumnTwo2>
                        <TitleText>Seus dados</TitleText>
                        <Profile
                            logo={props.logo}
                            name={props.name}
                            year={props.year}
                            email={props.email}
                        />
                    </ColumnTwo2>
                
                    <ColumnTwo2>
                        <TitleText>Aulas</TitleText>
                        <Info
                            digit1={4}
                            digit2={6}  
                            info1="Total"
                            info2="Projetos"
                        />
                    </ColumnTwo2>
                    <ColumnTwo2>
                        <TitleText>Professores</TitleText>
                        <Info
                            digit1={4}
                            digit2={2} 
                            info1="Aceito"
                            info2="Recusado"
                        /> 
                    </ColumnTwo2>
                </SectionTwo>
            </SubContainer>
		</Container>
        )
    }
    else{
        return(
            <Container>
            <Navbar
                name={props.name}
            />
            <SubContainer>
                <SectionOne>
                    <ColumnOne1>
                        {doc.map((value, key) => (
                            <Tags
                                key={key}
                                value={value.card}
                                icon={value.icon}
                            />
                            
                        ))}
                    </ColumnOne1>
                </SectionOne>
                <SectionTwo>
                    <ColumnOne2>
                        <InvoiceContainer>
                        <TitleText>Aulas recentes</TitleText>
                            <Invoices/>
                            <Invoices/>
                        </InvoiceContainer>
                    </ColumnOne2>
                    <ColumnTwo2>
                        <TitleText>Seus dados</TitleText>
                        <Profile
                            logo={props.logo}
                            name={props.name}
                            year={props.year}
                            email={props.email}
                        />
                    </ColumnTwo2>
                    <ColumnTwo2>
                        <TitleText>Aulas</TitleText>
                        <Info
                            digit1={4}
                            digit2={6}  
                            info1="Feitas"
                            info2="A fazer"
                        />
                    </ColumnTwo2>
                    <ColumnTwo2>
                        <TitleText>Sua avaliação</TitleText>
                        <Earnings/>  
                    </ColumnTwo2>
                </SectionTwo>
            </SubContainer>
		</Container>
        )  
    }
}

export default Dashboard;
