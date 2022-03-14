const express = require ('express');
const fs = require('fs');
const { validadeTeamsInfo } = require('../middlewaresValidator')

const router = express.Router();

router.get('/', (_req, res) => {
  const teamsJson = fs.readFileSync('teams.json', 'utf8');

  const teamsInfo = JSON.parse(teamsJson);

  if(teamsInfo.length === 0) {
    return res.status(200).json({teams: teamsInfo});
  };

  res.status(200).json(teamsInfo);
});

router.post('/', validadeTeamsInfo ,(req, res) => {
  const { name, initials, country, league } = req.body;

  const teamInfo = {
    name,
    initials,
    country,
    league
  };
  
  fs.readFile('teams.json', 'utf8', (_err, data) => {
    const teamsInfo = JSON.parse(data);

    teamsInfo.push(teamInfo);

    fs.writeFileSync('teams.json', JSON.stringify(teamsInfo, null, 2) );
  })

  res.status(201).json(teamInfo);

})


module.exports = router;