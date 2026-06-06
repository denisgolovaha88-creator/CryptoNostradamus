export default async function handler(req, res) {

const events = [];

try {

const now = new Date();

events.push({
date: now.toISOString().split('T')[0],
icon:'🟣',
title:'ПРОВЕРКА 123',
coins:'BTC ETH',
impact:10,
move:'0%',
text:'Тест ответа сервера'
});

res.status(200).json(events);

}
catch(e){

res.status(500).json({
error:e.message
});

}

}
