const errorPage = (req,res) => res.status(404).send('Ur on a wrong page check the url');

module.exports = errorPage;