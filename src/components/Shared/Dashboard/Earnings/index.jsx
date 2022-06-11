import React from "react";
import { IoStatsChart } from "react-icons/io5";
import {
  Container,
  CardContent,
  Chart,
  EarningsText,
  Earning,
  Rating,
  StarIcon1,
  StarIcon2,
  

} from "./style"

function Earnings() {
  const number = (5 - 4)
  const star = Array.from({length: 4}, (v,k) => k+1)
  const star2 = Array.from({length: number}, (v,k) => k+1)
  return (
    <Container>
      <CardContent>
        <Chart>
          <IoStatsChart />
        </Chart>
        {/* <Rating>
          {star.map((id,index)=>
                  <StarIcon1 key={index}></StarIcon1>
          )}
          {star2.map((id,index)=>
                  <StarIcon2 key={index}></StarIcon2>
          )}
        </Rating> */}
        <EarningsText>Média de 3,8</EarningsText>
        <Earning>Nota final 4,0</Earning>
      </CardContent>
    </Container>
  );
}

export default Earnings;