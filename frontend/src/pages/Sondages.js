import React, { useState, useEffect } from "react";
import Scroll from '../components/Scroll';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import "../style/pages/_sondages.scss";
import 'chart.js/auto';
import {Pie} from 'react-chartjs-2';

const Sondages = () => {

    const [voteData, setVoteData] = useState();
    const [totalVotes, setTotalVotes] = useState(0);
    const [voted, setVoted] = useState(false);
    const[resultat1,setResultat1]=useState();
    const[resultat2,setResultat2]=useState();
    const[resultat3,setResultat3]=useState();
    const[resultat4,setResultat4]=useState();

  const url = "http://localhost:3000/poll";
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setVoteData(data);
        setResultat1(data[0].votes);
        setResultat2(data[1].votes);
        setResultat3(data[2].votes);
        setResultat4(data[3].votes);
        let sum = 0;
        data.forEach(function (obj) {
          sum += obj.votes;
        });
        setTotalVotes(sum);
      });
  }, []);

  const submitVote = (e) => {
    if(voted === false) {
      const voteSelected = e.target.dataset.id;
      const voteCurrent = voteData[voteSelected].votes;
      voteData[voteSelected].votes = voteCurrent + 1;
      setTotalVotes(totalVotes + 1);
      setVoted(!voted);
      const options = {
        method: "POST",
        body: JSON.stringify(voteData),
        headers: { "Content-Type": "application/json" },
      };
      fetch(url, options)
        .then((res) => res.json())
        .then((res) => console.log(res));
    }
  };  
  let pollOptions;
  if (voteData) {
    pollOptions = voteData.map((item) => {
      return (
        <div>
        <li key={item.id}>
          <button onClick={submitVote} data-id={item.id}>
            {item.option}
            <span>- {item.votes} Votes</span>
          </button>          
        </li>
        </div>
      );
    });
  }

  return (
    
    <div className="widget">
          <Logo />
          <Navigation />
          <Scroll left={'/structure'} right={'/contact'} />
        <div className="poll">
      <h1>Parmi ces Events, lesquels as-tu préféré ?</h1>
      <ul className={voted ? "results" : "options"}>
          {pollOptions}
          </ul>
      <p>Total Votes: {totalVotes}</p>
       </div>
       <div className="pie">
            <Pie
            data={{
                labels: ['Les Grands Tournois !', 'Les Inter-membres !', 'Les Afterworks !', 'Les Tournois Online !'],
                datasets: [
                  {
                      labels: '# of votes',
                      data: [resultat1, resultat2, resultat3,resultat4],
                      backgroundColor: ['#FF6384','#36A2EB','#FFCE56','#8bc34a',],
                      borderWidth: 1,
                  },
              ],
          }}
          options={{
            responsive: true,
            maintainAspectRatio: false,
                scales: {
                  yAxes: [
                      {
                        ticks: {
                            beginAtZero: true,
                        },
                    },
                    ],
              },
          }}
        />
        </div>
    </div>
  );
  
}

export default Sondages;