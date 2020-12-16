// Global constants
const DEBUG = true;
const Knife_PRICE = 14.25;
const Fork_PRICE = 9.99;

var splash = document.getElementById('splash');

var everyChild = document.querySelectorAll("#splash");


document.getElementById('div5').style.display = 'none';
document.getElementById('onefour').style.display = 'none';
document.getElementById('er').style.display = 'none';
document.getElementById('san').style.display = 'none';
document.getElementById('wu').style.display = 'none';
document.getElementById('conclusion').style.display = 'none';

function fall(inputteam) {
    
    salary_input_name = '';
    other_input_name = '';
    document.getElementById('div5').style.display = 'block';
    if (inputteam == 'spurs') {salary_input_name = 'San Antonio Spurs';other_input_name = 'SAS'}
    if (inputteam == 'blazers') {salary_input_name = 'Portland Trail Blazers';other_input_name = 'POR'}
    if (inputteam == 'hawks') {salary_input_name = 'Atlanta Hawks';other_input_name = 'ATL'}
    if (inputteam == 'grizzlies') {salary_input_name = 'Memphis Grizzlies';other_input_name = 'MEM'}
    if (inputteam == 'celtics') {salary_input_name = 'Boston Celtics';other_input_name = 'BOS'}

    if (inputteam == 'lakers') {salary_input_name = 'Los Angeles Lakers';other_input_name = 'LAL'}
    if (inputteam == 'hornets') {salary_input_name = 'Charlotte Hornets';other_input_name = 'CHA'}
    if (inputteam == 'nets') {salary_input_name = 'Brooklyn Nets';other_input_name = 'BKN'}
    if (inputteam == 'clippers') {salary_input_name = 'LA Clippers';other_input_name = 'LAC'}
    if (inputteam == 'nuggets') {salary_input_name = 'Denver Nuggets';other_input_name = 'DEN'}

    if (inputteam == 'timberwolves') {salary_input_name = 'Minnesota Timberwolves';other_input_name = 'MIN'}
    if (inputteam == 'suns') {salary_input_name = 'Phoenix Suns';other_input_name = 'PHX'}
    if (inputteam == 'mavs') {salary_input_name = 'Dallas Mavericks';other_input_name = 'DAL'}
    if (inputteam == 'cavs') {salary_input_name = 'Cleveland Cavaliers';other_input_name = 'CLE'}
    if (inputteam == 'rockets') {salary_input_name = 'Houston Rockets';other_input_name = 'HOU'}

    if (inputteam == 'thunder') {salary_input_name = 'Oklahoma City Thunder';other_input_name = 'OKC'}
    if (inputteam == 'knicks') {salary_input_name = 'New York Knicks';other_input_name = 'NYK'}
    if (inputteam == 'raptors') {salary_input_name = 'Toronto Raptors';other_input_name = 'TOR'}
    if (inputteam == 'kings') {salary_input_name = 'Sacramento Kings';other_input_name = 'SAC'}
    if (inputteam == 'pacers') {salary_input_name = 'Indiana Pacers';other_input_name = 'IND'}

    if (inputteam == 'bucks') {salary_input_name = 'Milwaukee Bucks';other_input_name = 'MIL'}
    if (inputteam == 'jazz') {salary_input_name = 'Utah Jazz';other_input_name = 'UTA'}
    if (inputteam == 'warriors') {salary_input_name = 'Golden State Warriors';other_input_name = 'GSW'}
    if (inputteam == 'pelicans') {salary_input_name = 'New Orleans Pelicans';other_input_name = 'NOP'}
    if (inputteam == '76ers') {salary_input_name = 'Philadelphia 76ers';other_input_name = 'PHI'}

    if (inputteam == 'heat') {salary_input_name = 'Miami Heat';other_input_name = 'MIA'}
    if (inputteam == 'bulls') {salary_input_name = 'Chicago Bulls';other_input_name = 'CHI'}
    if (inputteam == 'magic') {salary_input_name = 'Orlando Magic';other_input_name = 'ORL'}
    if (inputteam == 'wizards') {salary_input_name = 'Washington Wizards';other_input_name = 'WAS'}
    if (inputteam == 'pistons') {salary_input_name = 'Detroit Pistons';other_input_name = 'DET'}
    
    document.getElementById('pagetitle').innerHTML = 'Team Statistics of the ' + salary_input_name + ' 2019-2020'
    document.getElementById('pagetitle2').innerHTML = 'Team Statistics of the ' + salary_input_name + ' 2019-2020'
    document.getElementById('pagetitle3').innerHTML = 'Team Statistics of the ' + salary_input_name + ' 2019-2020'
    document.getElementById('pagetitle5').innerHTML = 'Team Statistics of the ' + salary_input_name + ' 2019-2020'

    box_scores = [];
    player_salaries = [];
    salary_input_name1=salary_input_name
    Highcharts.getJSON(
        './data/box_scores.json', function (salee) {box_scores.push(salee);


        Highcharts.getJSON(
            './data/salary1.json', function (salee) {player_salaries.push(salee);

            


        function getboxscore(bs, teamname) {
            arr = bs[0]
            difference = []
            for (i in arr) {
                if (arr[i]['TEAM'] == teamname) {
                    difference.push(arr[i]['+/-'])
                }
                
            }
            return difference.reverse()
        }

        wingames = 0;
        losegames = 0;

        function getpie(bs, teamname) {
            frombox = getboxscore(bs, teamname)
            for (var i=0; i<= frombox.length-1; i++) {
                if (frombox[i] > 0) {wingames += 1}
                else losegames += 1
            }
            return [wingames, losegames]
        }


        function getbubble(ps, teamname) {
            arr = ps[0];
            final = []
            for (i in arr) {
                if (arr[i]['team'] == teamname) {
                    before_final = {y:arr[i]['salary'], z:arr[i]['salary'], name: arr[i]['player'], country: arr[i]['team']}
                    final.push(before_final)
                } 
            }
            return final
        }



        //PIE CHART!!
            yi = Highcharts.chart('div1', {
            chart: {
                type: 'pie',
                backgroundColor: 'lightcyan' 
            },
            title: {
                text: 'Total Wins and Losses'
            },
            
            

            plotOptions: {


                pie: {
                    
                    showInLegend: true,

                    cursor: 'pointer',
                    dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                    }
                }
            },

            legend: {
                align: 'left-bottom',
                squareSymbol: false,
                symbolHeight: 20,
                symbolRadius: 0,
                symbolWidth: 50,
            },
            series: [{name: 'Count',
                data: [{name: 'Win',color: 'indigo',y: 44,sliced: false,selected: false}, 
                {name: 'Loss',color: 'gold',y: 55
                }]
            }]
            
        });


            er = Highcharts.chart('div2', {

            chart: {
                type: 'column',
                plotBorderWidth: 1,
                zoomType: 'xy',
                backgroundColor: 'lightcyan' 
            },

            legend: {
                enabled: false
            },

            title: {
                text: 'Player Salaries Distribution'
            },

            subtitle: {
                text: 'Source: <a href="https://www.kaggle.com/junfenglim/nba-player-salaries-201920" target="_blank">Kaggle</a>'
            },



            xAxis: {
                gridLineWidth: 2,
                title: {
                    text: 'Player ID'
                },
                labels: {
                    format: '{value}'
                },
                
                
            },

            yAxis: {
                startOnTick: false,
                endOnTick: false,
                title: {
                    text: 'Player Salary'
                },
                labels: {
                    format: '{value}'
                },
                maxPadding: 0.2,
                
                
            },

            tooltip: {
                useHTML: true,
                headerFormat: '<table>',
                pointFormat: '<tr><th colspan="2"><h3>{point.country}</h3></th></tr>' +
                    '<tr><th>Player:</th><td>{point.name}</td></tr>' +
                    '<tr><th>Salary:</th><td>${point.y}</td></tr>',
                footerFormat: '</table>',
                followPointer: true,
                backgroundColor: 'blue'
            },

            plotOptions: {
                series: {
                    dataLabels: {
                        enabled: true,
                        format: '{point.name}'
                    }
                }
            },

            series: [{
                data: [
                ],
                color: 'gold'
            }]

        });


            san = Highcharts.chart('div3', {

            chart: {
                type: 'area',
                backgroundColor: 'lightcyan' 
            },

            title: {
                text: 'Game +/- Throughout the Season'
            },

            subtitle: {
                text: 'Source: <a href="https://www.kaggle.com/mur418/nba-box-scores-19902020-regular-and-playoffs" target="_blank">Kaggle</a>'
            },

            xAxis: {
                title: {
                    text: 'Games'
                }
            },


            yAxis: {
                title: {
                    text: 'Score Differences'
                }
            },


            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle'
            },

            plotOptions: {
                series: {
                    label: {
                        connectorAllowed: false
                    },
                    pointStart: 1
                }
            },

            series: [{
                name: 'Team',
                data: [113, 86, 103, 113, 97, 119, 102, 122],
                zones: [{
                    color: 'gold',
                value: 0
                },{
                    color: 'indigo'
                }]
            }],

            responsive: {
                rules: [{
                    condition: {
                        maxWidth: 500
                    },
                    chartOptions: {
                        legend: {
                            layout: 'horizontal',
                            align: 'center',
                            verticalAlign: 'bottom'
                        }
                    }
                }]
            }

        });


        yi.series[0].setData(getpie(box_scores, other_input_name));
        er.series[0].setData([{y: 40231758, z: 40231758, name: 'Stephen Curry', country: 'Golden States Warriors', color: 'purple'}].concat(getbubble(player_salaries, salary_input_name1)));
        san.series[0].setData(getboxscore(box_scores, other_input_name));

        var d1 = document.getElementById('onefour');
        d1.style.display = 'block';
        d1.scrollIntoView();
        document.getElementById('d1caption').innerHTML = 
        'From 2019 to 2020 regular season, the ' + (salary_input_name).toString() + ' won ' 
        + (getpie(player_salaries, salary_input_name1)[0]).toString() +' games, lost '
        + (getpie(player_salaries, salary_input_name1)[1]).toString() +' games.'
        
        var d2 = document.getElementById('er');
        d2.style.display = 'block';
        document.getElementById('d2caption').innerHTML = 
        'This is the salary distribution of the ' + (salary_input_name).toString() + '.'
        document.getElementById('maxsalary').innerHTML = 'The player with the maximum salary in the team is ' + (String(getbubble(player_salaries, salary_input_name1)[0]['name']))
        + ' with ' + (String((getbubble(player_salaries, salary_input_name1)[0]['y'] / 1000000).toFixed(2))) + ' million dollars, which is $' 
        + String((40231758-getbubble(player_salaries, salary_input_name1)[0]['y']) / 1000000) + ' million dollars away from ' + ('Stephen Curry').italics() + ' from ' +  ('Golden State Warriors').italics() + ' , who has the maximum salary in the league.'
        document.getElementById('minsalary').innerHTML = 'The player with the minimum salary in the team is ' + (String(getbubble(player_salaries, salary_input_name1).slice(-1)[0]['name']))
        + ' with ' + (String((getbubble(player_salaries, salary_input_name1).slice(-1)[0]['y'] / 1000000).toFixed(2))) + ' million dollars.'

        var d3 = document.getElementById('san');
        d3.style.display = 'block';

        var d5 = document.getElementById('wu');
        d5.style.display = 'block';

        getwu(salary_input_name);

        var con = document.getElementById('conclusion');
        con.style.display = 'block';

})})}





function getwu(aaa) {
    box_scores = []
    player_salaries = [] 
    Highcharts.getJSON(
        './data/box_scores.json', function (salee) {box_scores.push(salee);
    Highcharts.getJSON(
        './data/salary1.json', function (salee) {player_salaries.push(salee);


        // BUBBLE CHART   
    wu = Highcharts.chart('div5', {

        chart: {
            type: 'bubble',
            plotBorderWidth: 1,
            zoomType: 'xy',
            backgroundColor: 'lightcyan' 
        },

        legend: {
            enabled: false
        },

        title: {
            text: 'NBA Team Winning Percentage vs Team Total Salaries'
        },

        subtitle: {
            text: 'Source: <a href="https://www.kaggle.com/junfenglim/nba-player-salaries-201920">Kaggle</a>'
        },

        accessibility: {
            point: {
                valueDescriptionFormat: '{index}. {point.name}, fat: ${point.x}, sugar: ${point.y}, obesity: {point.z}.'
            }
        },

        xAxis: {
            gridLineWidth: 1,
            title: {
                text: 'Million Dollars'
            },
            labels: {
                formatter : function() {
                    return (this.value / 1000000).toString()
                }
            },
            min: 90000000,
        },

        yAxis: {
            startOnTick: false,
            endOnTick: false,
            title: {
                text: 'Winning Percentage %'
            },
            labels: {
                format: '{value}'
            },
            maxPadding: 0.2,
            accessibility: {
                rangeDescription: 'Range: 0 to 160 grams.'
            }
        },

        tooltip: {
            useHTML: true,
            headerFormat: '<table>',
            pointFormat: '<tr><th colspan="2"><h3>{point.team}</h3></th></tr>' +
                '<tr><th>Total Salary:</th><td>${point.x}</td></tr>' +
                '<tr><th>Winning Percentage:</th><td>{point.y}%</td></tr>' +
                '<tr><th>Mean Salaries:</th><td>${point.z}</td></tr>',
            footerFormat: '</table>',
            followPointer: true,
            backgroundColor: 'blue'
        },

        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    format: '{point.name}',
                style: {
                    fontSize: '8px',
                }
                }
            }
        },

        series: [{
            data: [
                { x: 19500000, y: 95, z: 13.8, name: 'BE', team: 'Belgium' },
                { x: 60000004, y: 82.9, z: 31.3, name: 'NZ', team: 'New Zealand' }
            ],
            color: 'darkorange'
        }]

    })

    allteams = []
    // Find unique teams
    for (i in player_salaries[0]) {
        allteams.push(player_salaries[0][i]['team'])
    }
    // Found unique teams
    let unique_team = [... new Set(allteams)]

    // Find total salaries for each team. x,z,team
    finalo = []
    team_salaries = []
    for (teamm in unique_team) {
        team_salaries = []
        for (item in player_salaries[0]) {
            if (player_salaries[0][item]['team'] == unique_team[teamm]) {
                team_salaries.push(player_salaries[0][item]['salary'])
            }
        }
        var sum = team_salaries.reduce(function(a,b) {return a + b},0)
        var avg = Math.round(sum / team_salaries.length)
        pre_enter = {x: sum, z: avg, team: unique_team[teamm]}
        finalo.push(pre_enter)
    }
    
    // Find win percentage. y, name
    box_allteams = []
    for (bb in box_scores[0]) {box_allteams.push(box_scores[0][bb]['TEAM'])}

    let box_unique_team = [... new Set(box_allteams)]

    team_box = []
    for (inputteam1 in box_unique_team) {
        team_box = []
        for (item in box_scores[0]) {
            if (box_scores[0][item]['TEAM'] == box_unique_team[inputteam1]) {
                if (box_scores[0][item]['+/-'] > 0 ){
                    team_box.push(1)
                }
                else (team_box.push(0))
            }
        }
        var dub_prop = 0
        for (result in team_box) {
            if (team_box[result] == 1) {
                dub_prop += 1
            }
        }
        proportion = Math.round(dub_prop / team_box.length *100)
        if (box_unique_team[inputteam1] == 'SAS') {salary_input_name = 'San Antonio Spurs'}
        if (box_unique_team[inputteam1] == 'POR') {salary_input_name = 'Portland Trail Blazers'}
        if (box_unique_team[inputteam1] == 'ATL') {salary_input_name = 'Atlanta Hawks'}
        if (box_unique_team[inputteam1] == 'MEM') {salary_input_name = 'Memphis Grizzlies'}
        if (box_unique_team[inputteam1] == 'BOS') {salary_input_name = 'Boston Celtics'}
 
        if (box_unique_team[inputteam1] == 'LAL') {salary_input_name = 'Los Angeles Lakers'}
        if (box_unique_team[inputteam1] == 'CHA') {salary_input_name = 'Charlotte Hornets'}
        if (box_unique_team[inputteam1] == 'BKN') {salary_input_name = 'Brooklyn Nets'}
        if (box_unique_team[inputteam1] == 'LAC') {salary_input_name = 'LA Clippers'}
        if (box_unique_team[inputteam1] == 'DEN') {salary_input_name = 'Denver Nuggets'}
    
        if (box_unique_team[inputteam1] == 'MIN') {salary_input_name = 'Minnesota Timberwolves'}
        if (box_unique_team[inputteam1] == 'PHX') {salary_input_name = 'Phoenix Suns'}
        if (box_unique_team[inputteam1] == 'DAL') {salary_input_name = 'Dallas Mavericks'}
        if (box_unique_team[inputteam1] == 'CLE') {salary_input_name = 'Cleveland Cavaliers'}
        if (box_unique_team[inputteam1] == 'HOU') {salary_input_name = 'Houston Rockets'}
    
        if (box_unique_team[inputteam1] == 'OKC') {salary_input_name = 'Oklahoma City Thunder'}
        if (box_unique_team[inputteam1] == 'NYK') {salary_input_name = 'New York Knicks'}
        if (box_unique_team[inputteam1] == 'TOR') {salary_input_name = 'Toronto Raptors'}
        if (box_unique_team[inputteam1] == 'SAC') {salary_input_name = 'Sacramento Kings'}
        if (box_unique_team[inputteam1] == 'IND') {salary_input_name = 'Indiana Pacers'}
    
        if (box_unique_team[inputteam1] == 'MIL') {salary_input_name = 'Milwaukee Bucks'}
        if (box_unique_team[inputteam1] == 'UTA') {salary_input_name = 'Utah Jazz'}
        if (box_unique_team[inputteam1] == 'GSW') {salary_input_name = 'Golden State Warriors'}
        if (box_unique_team[inputteam1] == 'NOP') {salary_input_name = 'New Orleans Pelicans'}
        if (box_unique_team[inputteam1] == 'PHI') {salary_input_name = 'Philadelphia 76ers'}
    
        if (box_unique_team[inputteam1] == 'MIA') {salary_input_name = 'Miami Heat'}
        if (box_unique_team[inputteam1] == 'CHI') {salary_input_name = 'Chicago Bulls'}
        if (box_unique_team[inputteam1] == 'ORL') {salary_input_name = 'Orlando Magic'}
        if (box_unique_team[inputteam1] == 'WAS') {salary_input_name = 'Washington Wizards'}
        if (box_unique_team[inputteam1] == 'DET') {salary_input_name = 'Detroit Pistons'}
        
        for (i in finalo) {
            if (finalo[i]['team'] == salary_input_name) {
                combine = Object.assign({}, finalo[i], {y: proportion, name: box_unique_team[inputteam1]})
                finalo[i] = combine
            }
        }
        
        
    
    }
    for (i in finalo) {
        if (finalo[i]['team'] == aaa) {
            com = Object.assign({}, finalo[i], {color:'indigo'})
            finalo[i] = com
        }
    }
    wu.series[0].setData(finalo);

})})
        
}

getwu('a')


mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}