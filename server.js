const express = require('express');
const app = express();

app.use(express.static('public'));

const pastWork = [
    { id: 1, title: "E-commerce Platform", description: "Developed a full-stack e-commerce platform for a retail client." },
    { id: 2, title: "Mobile App", description: "Built a cross-platform mobile application for a health startup." },
    { id: 3, title: "Inventory System", description: "Designed an inventory tracking system for a logistics company." }
];
const staffMembers = [
    { id: 1, name: "Alice Johnson", position: "CEO", email: "alice@example.com", phone: "123-456-7890" },
    { id: 2, name: "Bob Smith", position: "CTO", email: "bob@example.com", phone: "987-654-3210" },
    { id: 3, name: "Charlie Brown", position: "Lead Engineer", email: "charlie@example.com", phone: "555-666-7777" }
];
const externalLinks = [
    { name: "TechCrunch", url: "https://techcrunch.com" },
    { name: "MDN Web Docs", url: "https://developer.mozilla.org" },
    { name: "Stack Overflow", url: "https://stackoverflow.com" }
];

app.get('/', (req, res) => {
    res.render('index.ejs')
});

app.get('/contact', (req, res) => {
    res.render('contact.ejs')
});

app.get('/history', (req, res) => {
    res.render('history.ejs')
});

app.get('/pastwork', (req, res) => {
    res.render('pastwork.ejs',{
        work: pastWork,
    })
});

app.get('/pastwork/:id', (req, res) => {
    const workID = parseInt(req.params.id);
    console.log(workID)
    const job = pastWork.find(j => j.id === workID);
    console.log(job);
    if(job){
        res.render('workUnique.ejs' ,{
            job: job
        });
    }else{
        res.status(404);
    }
});

app.get('/externalsites', (req, res) => {
    res.render('externalsites.ejs', {
        externals: externalLinks
    })
});

app.get('/staff', (req, res) => {
    res.render('staff.ejs', {
        employees: staffMembers
    })
});

app.get('/staff/:id', (req, res) => {
    const staffID = parseInt(req.params.id);
    const member = staffMembers.find(m => m.id === staffID);

    if(member){
        res.render('staffUnique.ejs' ,{
            member: member
        });
    }else{
        res.status(404);
    }

});


app.listen(3000);